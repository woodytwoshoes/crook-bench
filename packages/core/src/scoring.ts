import { z } from "zod";
import { GIVEN_EXAMS } from "./body.ts";
import type { Catalogue } from "./catalogue.ts";
import { examsDone, matchManagement, type ConsultState } from "./consult.ts";
import {
  POINTS,
  domainScores,
  levelFor,
  managementItems,
  maxPoints,
  totalPoints,
  type Award,
  type DomainScore,
  type Level,
  type ManagementItem,
} from "./points.ts";
import { diagnosisRole, primaryRole, type DiagnosisRole } from "./diagnosis.ts";
import type { ChatMessage } from "./prompts.ts";
import type { Case } from "./schema.ts";

// End-of-consult judging and tally. Management items tied to game actions
// (`when:` in the case) are matched by code as the actions happen, and the
// diagnosis is picked from a list and scored the moment it's saved. The
// model judges only items that can only be *said*, from what the doctor said
// — never from the action list, so it can't infer steps the doctor didn't
// take — and every credit must be quote-grounded. The key decides what is
// right; everything else is deterministic.

// Spoken management items the doctor said, each with the words that say it.
// `pending`: credits awaiting a second look (buildVerifyRequests).
export type Judgement = { managementIds: string[]; quotes?: Record<string, string>; pending?: { id: string; quote: string }[] };

export type JudgeRequest = { messages: ChatMessage[]; schema: object; itemIds: string[] };

const MATCH_RULES = `For each item the doctor actually said, return its id and the exact words from the doctor's statement that say it, copied verbatim.
- The quote must itself say the thing: "an ambulance is on its way" does not say "phoned the hospital".
- A harmful item counts if the doctor said they would do it or told the patient to do it.
- If nothing the doctor said states an item, leave it out. Most statements match only a few items, or none.`;

const itemList = (items: ManagementItem[]) => items.map((m) => `- ${m.id}: ${m.text}`).join("\n");

export type EndJudgeRequest = JudgeRequest & { items: ManagementItem[] };

/**
 * The plan is in what the doctor tells the patient, not in the history
 * questions: given every question too, the 8B judge missed an explanation
 * that carried the plan (playtest, 2026-10-01). Question sentences are dropped; the statements
 * around them stay.
 */
export function statementsOnly(said: string): string {
  return said
    .split("\n")
    .map((line) =>
      line
        .split(/(?<=[.!?])\s+/)
        .filter((s) => s.trim() && !s.trim().endsWith("?"))
        .join(" "),
    )
    .filter(Boolean)
    .join("\n");
}

/** End of consult: which spoken items the doctor said. Null if there are none. */
export function buildJudgeRequest(c: Case, said: string): EndJudgeRequest | null {
  // Items that can only be said are judged here, plus action items marked
  // `also_said` ("drive yourself to hospital" is the same harm as referring
  // him to self-present). Other action items never are, so the judge can't
  // credit or penalise steps the doctor didn't take.
  const items = managementItems(c).filter((m) => !m.when || m.alsoSaid);
  if (items.length === 0) return null;
  const itemIds = items.map((m) => m.id);
  return {
    itemIds,
    items,
    messages: [
      {
        role: "system",
        content: `You check which of these things a doctor said to their patient. You do not decide what is medically right.

${MATCH_RULES}

Respond with JSON only: {"said": [{"id": "...", "quote": "..."}]}`,
      },
      {
        role: "user",
        content: `Things the doctor might say:\n${itemList(items)}\n\nWhat the doctor said:\n${statementsOnly(said).trim() || "(nothing)"}`,
      },
    ],
    schema: {
      type: "object",
      properties: {
        said: {
          type: "array",
          items: {
            type: "object",
            properties: { id: { type: "string", enum: itemIds }, quote: { type: "string" } },
            required: ["id", "quote"],
            additionalProperties: false,
          },
        },
      },
      required: ["said"],
      additionalProperties: false,
    },
  };
}

function extractJson(raw: string): unknown {
  const match = raw.replace(/<think>[\s\S]*?<\/think>/g, "").match(/\{[\s\S]*\}/);
  try {
    return match ? JSON.parse(match[0]) : null;
  } catch {
    return null;
  }
}

const EndOutput = z.object({
  said: z.array(z.object({ id: z.string(), quote: z.string() })).default([]),
});

const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();

// Content words, crudely stemmed to their first four letters, so "drive" and
// "drives", "phone" and "phoned" meet.
const STOP = new Set(["that", "this", "with", "your", "have", "will", "been", "from", "they", "them", "there", "what", "when", "about", "into", "just", "some", "then", "than", "very", "well", "were", "would", "could", "should"]);
const stems = (s: string) =>
  new Set(normalise(s).replace(/'/g, "").split(" ").filter((w) => w.length >= 4 && !STOP.has(w)).map((w) => w.slice(0, 4)));

const NEGATION = /\b(not|no|never|don't|dont|do not|mustn't|mustnt|shouldn't|shouldnt|can't|cant|cannot|won't|wont|avoid|stop)\b/;

/**
 * Parse the judge defensively: a spoken item counts only if its quote really
 * appears in what the doctor said (at least two words) and — for harmful
 * items — isn't a negation. An ideal item must also share a content word
 * with the item and is credited now; an acceptable or harmful one is
 * `pending` until a second look (buildVerifyRequests, applyVerdicts).
 */
export function parseJudgement(raw: string, req: Pick<EndJudgeRequest, "items">, said: string): Judgement {
  const result = EndOutput.safeParse(extractJson(raw));
  if (!result.success) return { managementIds: [] };
  const byId = new Map(req.items.map((m) => [m.id, m]));
  const spoken = normalise(said);
  const quotes: Record<string, string> = {};
  const pending: { id: string; quote: string }[] = [];
  for (const { id, quote } of result.data.said) {
    const item = byId.get(id);
    const q = normalise(quote);
    if (!item || id in quotes || pending.some((p) => p.id === id) || q.split(" ").length < 2) continue;
    // The words must really have been said,
    if (!spoken.includes(q)) continue;
    // and a harmful item can't be earned by saying not to do it.
    if (item.tier === "harmful" && NEGATION.test(q)) continue;
    if (item.tier !== "ideal") {
      pending.push({ id, quote: quote.trim() });
      continue;
    }
    // An ideal item must share a content word with the item.
    const itemStems = stems(item.text);
    if (![...stems(quote)].some((w) => itemStems.has(w))) continue;
    quotes[id] = quote.trim();
  }
  return { managementIds: Object.keys(quotes), quotes, ...(pending.length && { pending }) };
}

// The second look. Playtest corpus (2026-10-01, 44 consults labelled by
// hand): every harmful credit the judge gave was wrong — four −30s, each
// with its "went home" story, for doctors who had sent the patient to
// hospital and mentioned a scan, a safety net or a screening kit — and three
// in ten acceptable ones ("your oxygen is a bit low" as giving oxygen). Asked
// about one quote at a time, with what the doctor did for a harmful item
// (actions only ever veto, never credit), the 8B got none of the harms and
// two acceptable credits wrong. Ideal items skip it: it also turned down
// good paraphrases ("it can damage your sight if it's not treated quickly").
// One wording per tier. Strict for acceptable credits (precision 70% -> 90%,
// recall unchanged). For harms, strict wording also excused real ones ("it's
// probably anxiety ... come back if it's no better"; "drive yourself in if it
// gets worse"); what vetoed every false harm was what the doctor had done.
const VERIFY_SAYS = `You check one claim about what a doctor told their patient in a GP consultation. You are given the doctor's words said to support it and the turn they come from.

Answer true only if those words really say the claim, in meaning; any wording counts. A shared word is not enough: "your oxygen is a bit low" does not say "give oxygen", and "come back for the results" does not say "recheck the blood count". A question to the patient doesn't say a plan. Something left to someone else to decide ("the hospital will talk to you about it") is not advice.

Respond with JSON only: {"says": true|false}`;

const VERIFY_HARM = `You check whether a doctor gave their patient one piece of harmful advice in a GP consultation. You are given the doctor's words said to show it, the turn they come from, and what the doctor did.

Answer true if the doctor gives it as their diagnosis, advice or plan, in any words, even hedged ("probably") or conditional ("drive yourself in if it gets worse"). A shared word is not enough.
Answer false if the words say not to do it ("don't drive"), or if what the doctor did shows they chose otherwise: sending the patient to hospital is not sending them home, and referring for a colonoscopy is not relying on a screening kit instead.

Respond with JSON only: {"says": true|false}`;

export type VerifyRequest = { id: string; messages: ChatMessage[]; schema: object; maxTokens: number };

/** One request per pending credit: does the doctor's turn really say it? */
export function buildVerifyRequests(
  c: Case,
  judgement: Judgement,
  said: string,
  state: Pick<ConsultState, "prescriptions" | "referrals" | "ordered">,
): VerifyRequest[] {
  const items = new Map(managementItems(c).map((m) => [m.id, m]));
  const actions = [
    ...state.referrals.map((r) => `- Referred: ${r.name}`),
    ...state.prescriptions.map((p) => `- ${p.givenNow ? "Gave in the clinic" : "Prescribed"}: ${p.name}`),
    ...state.ordered.map((o) => `- Ordered: ${o.id}`),
  ];
  return (judgement.pending ?? []).flatMap(({ id, quote }) => {
    const item = items.get(id);
    if (!item) return [];
    // The whole turn the quote came from, for context.
    const q = normalise(quote);
    const turn = said.split("\n").find((t) => normalise(t).includes(q)) ?? quote;
    const user = [
      `The doctor's words: "${quote}"`,
      `The turn they come from:\n${turn}`,
      item.tier === "harmful" && actions.length ? `What the doctor did:\n${actions.join("\n")}` : "",
      `Claim (${item.tier}): the doctor told the patient: ${item.text}`,
    ]
      .filter(Boolean)
      .join("\n\n");
    return [
      {
        id,
        messages: [
          { role: "system", content: item.tier === "harmful" ? VERIFY_HARM : VERIFY_SAYS },
          { role: "user", content: user },
        ],
        schema: { type: "object", properties: { says: { type: "boolean" } }, required: ["says"], additionalProperties: false },
        maxTokens: 20,
      },
    ];
  });
}

const VerifyOutput = z.object({ says: z.boolean() });

/** Credit the pending items the second look confirmed (raw replies by id); anything unreadable doesn't count. */
export function applyVerdicts(judgement: Judgement, verdicts: Record<string, string>): Judgement {
  const quotes = { ...(judgement.quotes ?? {}) };
  for (const { id, quote } of judgement.pending ?? []) {
    const v = VerifyOutput.safeParse(extractJson(verdicts[id] ?? ""));
    if (v.success && v.data.says) quotes[id] = quote;
  }
  return { managementIds: Object.keys(quotes), quotes };
}

export type Consequence = "ideal" | "acceptable" | "harmful" | "missed_red_flag";

export type FinalScore = {
  total: number;
  max: number;
  level: Level;
  consequence: Consequence;
  // The story shown: harm-specific if authored, else the case's text.
  consequenceText: string;
  // Every award and penalty, live and end-of-consult, in order.
  awards: Award[];
  // Awards added at the end: spoken items.
  endAwards: Award[];
  // The player's three diagnoses (list ids) and what each is on the key.
  diagnoses: { label: string; id: string; role: DiagnosisRole | null }[];
  sinisterConsidered: boolean;
  redFlags: { topic: string; absent: boolean; elicited: boolean }[];
  missedIdeal: string[];
  harmfulItems: string[];
  unnecessaryItems: string[];
  missedEssentialItems: string[];
  // Required items not done; if any, the patient leaves with `leaving_line`.
  missedRequired: string[];
  // The score split four ways: history, examination, investigations, and management and diagnosis.
  domains: DomainScore[];
};

const round1 = (n: number) => Math.round(n * 10) / 10;

type Harm = { story?: string | undefined; aside?: string | undefined };

// A management item as a phrase in a sentence: no example phrasings, and
// lower case unless it starts with an abbreviation ("ED", "GTN").
const asPhrase = (text: string) => {
  const t = text.replace(/\s*\(e\.g\.[^)]*\)/g, "").trim();
  return /^[A-Z][a-z]/.test(t) ? t[0]!.toLowerCase() + t.slice(1) : t;
};

/**
 * The outcome story, composed (developer's decision, 2026-10-01): a harm's
 * own story replaced the outcome even when the patient had been sent to the
 * right place, and Samuel "went home to wait for his ultrasound" after a
 * phoned ED referral (nine bills in playtest round 3).
 * - The patient got the care the case requires (its required disposition):
 *   that decides the story. Harms that happened on the way come first, then
 *   the outcome, then an aside for each harm that would have kept them from
 *   that care (sent home, made to wait).
 * - They didn't, or the case has no required disposition (home is the plan):
 *   each harm's own story is what happened.
 * - An acceptable outcome names what was missing from the plan, not a
 *   generic "delays".
 */
function composeOutcome(c: Case, o: { tier: Consequence; harms: Harm[]; gotCare: boolean; missing: string[] }): string {
  const join = (parts: (string | undefined)[]) =>
    parts
      .filter((p): p is string => !!p?.trim())
      .map((p) => p.trim().replace(/\s+/g, " "))
      .join(" ");
  const missing = (tier: Consequence) =>
    tier === "acceptable" && o.missing.length ? `Missing from the plan: ${o.missing.map(asPhrase).join("; ")}.` : "";
  if (o.harms.length === 0) return join([c.consequences[o.tier], missing(o.tier)]);
  if (!o.gotCare) {
    const stories = o.harms.map((h) => h.story);
    return stories.some(Boolean) ? join(stories) : c.consequences.harmful;
  }
  // A harm takes the shine off the best outcome.
  const tier = o.tier === "ideal" ? "acceptable" : o.tier;
  return join([
    ...o.harms.filter((h) => !h.aside).map((h) => h.story),
    c.consequences[tier],
    ...o.harms.map((h) => h.aside),
    missing(tier),
  ]);
}

/** Apply the end-of-consult judgement to the live ledger and tally. */
export function finalizeConsult(c: Case, cat: Catalogue, state: ConsultState, judgement: Judgement): FinalScore {
  const fromPlan = matchManagement(c, state, judgement.managementIds, judgement.quotes);
  const s = fromPlan.state;
  const endAwards: Award[] = [...fromPlan.awards];

  const items = managementItems(c);
  const matched = new Set(s.managementMatched);
  const nameOf = (list: { id: string; name: string }[], id: string) => list.find((x) => x.id === id)?.name ?? id;
  const workup = [
    ...s.examined.map((e) => ({ name: nameOf(cat.examinations, e.id), necessity: c.examination[e.id]?.necessity ?? "acceptable" })),
    ...s.ordered.map((o) => ({ name: nameOf(cat.investigations, o.id), necessity: c.investigations[o.id]?.necessity ?? "unnecessary" })),
  ];

  // Required items not done: the patient leaves without them.
  const missedRequired = items.filter((m) => m.required && !matched.has(m.id));
  for (const m of missedRequired) {
    endAwards.push({ points: POINTS.missedRequired, kind: "penalty", label: `Not done: ${m.text}`, domain: "management" });
  }

  // Workup and management penalties are already in the ledger (live, or via
  // the plan match above); these lists are for the results screen.
  const harmfulManagement = items.filter((m) => m.tier === "harmful" && matched.has(m.id)).map((m) => m.text);
  const harmfulItems = [
    ...harmfulManagement,
    ...s.unsafe.map((u) => `Unsafe: ${u.label}`),
    ...workup.filter((w) => w.necessity === "harmful").map((w) => w.name),
  ];
  const unnecessaryItems = workup.filter((w) => w.necessity === "unnecessary").map((w) => w.name);

  const revealed = new Set(s.revealed);
  const redFlags = c.history
    .filter((h) => h.importance === "red_flag" && !h.volunteered)
    .map((h) => ({ topic: h.topic, absent: h.absent, elicited: revealed.has(h.id) }));
  // The story is what happened to this patient, and not asking about a
  // feature they don't have can't change their course: the missed points
  // already mark that gap. Playtest: skipping "any weakness or numbness?"
  // turned an immediate ambulance into "the delays cost heart muscle".
  const missedRedFlags = redFlags.filter((r) => !r.elicited && !r.absent).length;

  const doneIds = new Set([...examsDone(s), ...s.ordered.map((o) => o.id)]);
  const missedEssentialItems = [
    ...Object.entries(c.examination)
      .filter(([id, e]) => e.necessity === "essential" && !doneIds.has(id) && !GIVEN_EXAMS.has(id))
      .map(([id]) => nameOf(cat.examinations, id)),
    ...Object.entries(c.investigations).filter(([id, t]) => t.necessity === "essential" && !doneIds.has(id)).map(([id]) => nameOf(cat.investigations, id)),
  ];

  const ideal = items.filter((m) => m.tier === "ideal");
  const idealShare = ideal.length ? ideal.filter((m) => matched.has(m.id)).length / ideal.length : 1;
  // How well the plan went, harms aside.
  const planTier: Consequence =
    missedRedFlags > 0 && idealShare < 0.5
      ? "missed_red_flag"
      : missedRedFlags === 0 && idealShare >= 0.75
        ? "ideal"
        : "acceptable";
  // A patient who left without the care they needed didn't have the plan's
  // outcome: they walked out. One who got it can't have gone home
  // undiagnosed, whatever was missed on the way.
  const gotCare = items.some((m) => m.required) && missedRequired.length === 0;
  const storyTier: Consequence =
    missedRequired.length > 0 ? "missed_red_flag" : gotCare && planTier === "missed_red_flag" ? "acceptable" : planTier;
  const consequence: Consequence = harmfulItems.length > 0 ? "harmful" : storyTier;

  const byId = new Map(items.map((m) => [m.id, m]));
  const harms: Harm[] = [
    ...s.managementMatched.map((id) => byId.get(id)).filter((m) => m?.tier === "harmful").map((m) => ({ story: m!.consequence, aside: m!.aside })),
    ...s.unsafe.map((u) => ({ story: u.consequence })),
    ...[...s.examined.map((e) => c.examination[e.id]), ...s.ordered.map((o) => c.investigations[o.id])]
      .filter((w) => w?.necessity === "harmful")
      .map((w) => ({ story: w!.consequence, aside: w!.aside })),
  ];
  const consequenceText = composeOutcome(c, {
    tier: storyTier,
    harms,
    gotCare,
    missing: ideal.filter((m) => !matched.has(m.id)).map((m) => m.text),
  });

  const awards = [...s.awards, ...endAwards.filter((a) => !fromPlan.awards.includes(a))];
  const total = round1(Math.max(0, totalPoints(awards)));
  const max = maxPoints(c);
  return {
    total,
    max,
    level: levelFor(total, max),
    consequence,
    consequenceText,
    awards,
    endAwards,
    diagnoses: s.diagnoses
      ? [
          { label: "Most likely", id: s.diagnoses.primary, role: primaryRole(c, s.diagnoses) },
          { label: "Differential 1", id: s.diagnoses.differentials[0], role: diagnosisRole(c, s.diagnoses.differentials[0]) },
          { label: "Differential 2 (can't miss)", id: s.diagnoses.differentials[1], role: diagnosisRole(c, s.diagnoses.differentials[1]) },
        ]
      : [],
    sinisterConsidered: s.awards.some((a) => a.fromDiagnosis && a.label.startsWith("Can't-miss")),
    redFlags,
    missedIdeal: ideal.filter((m) => !matched.has(m.id)).map((m) => m.text),
    harmfulItems,
    unnecessaryItems,
    missedEssentialItems,
    missedRequired: missedRequired.map((m) => m.text),
    domains: domainScores(c, awards),
  };
}
