import { z } from "zod";
import { hiddenItems, type ConsultState } from "./consult.ts";
import { DECOYS } from "./decoys.ts";
import { jargonIn, withoutJargon } from "./jargon.ts";
import { historyAward, type Award } from "./points.ts";
import type { Case } from "./schema.ts";

// Provider-agnostic prompt construction. The web layer sends these to an
// OpenAI-compatible server; nothing here does I/O.

export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

// How many recent turns give the classifier enough context for follow-ups
// such as "and does it go anywhere?".
const CLASSIFIER_CONTEXT_TURNS = 2;

// ---------------------------------------------------------------------------
// Elicitation classifier

export type ClassifierRequest = {
  messages: ChatMessage[];
  // JSON schema for structured output; ids constrained to the case's topics
  // and the decoys.
  schema: object;
  maxTokens: number;
  // The utterance as its separate parts (utteranceParts), one answer each.
  parts: string[];
  // The utterance as classified: without the items it asked in jargon.
  utterance: string;
  // Hidden and discussed topics: the ids a part may name.
  allowedIds: string[];
  // What an open question releases: every open-question item still hidden.
  openIds: string[];
  // Red flags, which only a direct question may release (never an open part).
  redFlagIds: string[];
};

// One call that answers for each part of the utterance, so the second half
// of "when did it start, and has it moved?" isn't dropped. Whether a part is
// an open question is decided by its words (OPEN_QUESTION), not by the
// model, which called direct questions open ("is it blurry?") and openers
// direct ("what brings you in?"). Playtest corpus, 2026-10-01 (745
// exchanges labelled by 24 playtesters): recall 79% -> 89% at the same
// precision (97%); see docs/playtest/2026-10-01-multi-agent.md.
const CLASSIFIER_SYSTEM = `You classify what a doctor asks a patient, in a GP consultation.

The doctor's latest words are split into numbered parts. For each part, return the ids of the topics that part asks the patient about, and whether that part is an open question.

- A part asks about a topic if it asks about that subject in any words, including in a list ("any fever, cough or sweats?") or as a follow-up ("and does it go anywhere?"). Use the whole utterance and the recent conversation to understand what a part refers to.
- Match the subject of the question, not shared words.
- A greeting, comment, statement, explanation, plan or piece of advice asks nothing: return no ids for it.
- An open question ("tell me more", "what's been happening?", "anything else?") is open, and covers only topics marked (open). A question that names its subject ("how's your sleep?", "any chest pain?") is not open.
- A topic marked (discussed) was covered before: return it if a part asks about it again.
- A topic marked (other) is not part of this case: return it if that is what the part asks about, rather than a case topic that merely sounds related. If a case topic is about the same subject, return the case topic.
- When unsure, leave the topic out.

Respond with JSON only: {"parts": [{"open": true|false, "ids": [...]}, ...]} with one entry per part, in order.`;

// A part that invites the patient to talk, whatever else it says. It releases
// every open-question item still hidden ("things about the complaint itself
// that a patient offers"), and never a red flag. "Do you take anything
// else?" asks about medicines, not for the story (playtest round 3).
const OPEN_QUESTION =
  /\b(?:what(?:'s| has| have|s)?\s+(?:been\s+)?(?:going on|happening|happened|up)|what(?:'s| has)?\s+(?:brings?|brought) you|what can i do for you|how can i help|tell me\b(?:\s+(?:a bit|a little|all|absolutely|again|exactly|just))?\s+(?:more|everything|about (?:it|this|that|the|your)|what|how it|the (?:full|whole) story)|(?:give me|walk me through)\s+(?:the|your)?\s*(?:full|whole)?\s*(?:story|history)|how are you (?:feeling|going|doing)|what seems to be|go on|(?<!\b(?:take|taking|taken|took|use|using|used|on|tried|trying)\s+)(?:anything else|something else|anything at all)|any other (?:symptoms?|problems?|issues?|worries|concerns?)|(?:full|whole) (?:rundown|story|history)|leave nothing out|every (?:symptom|detail)|everything (?:relevant|you|that)|all of it)\b/i;

// A plan, a safety net or advice ("if you get a fever, come back", "I've
// given you an aspirin", "drink plenty of water"). Such a part asks nothing,
// whatever the model names for it, unless it reads as a question: with the
// "is it a question?" gate gone, a safety net released the red flags it
// listed, and "if you get fevers, back pain or vomiting, let me know" four of
// them at once (confirmation playtest, 2026-10-01). Precision 93% -> 96% on
// that play, recall unchanged.
const INSTRUCTION =
  /\b(?:if you|in case|i'll|i've|i'm going to|i am going to|i'd like|i want you|i want to|we'll|we will|we need|you need to|you should|you'll need|you'll have|go straight|go to|call|ring|take|drink|come back|let me know|make sure|keep|stay|don't|do not|avoid|stop)\b/i;
// An explanation of what's going on ("I'm worried you have a clot in your
// lung", "I think this is your appendix", "it sounds like a migraine") asks
// nothing either: the closing explanation released history it mentioned, so
// the patient answered "not that I know of" to "...probably from a clot" (3 of 3;
// overnight crowd and corpus, 2026-10-03).
const EXPLANATION =
  /\b(?:i'm worried|i am worried|i'm concerned|i am concerned|i think (?:you|this|it|that|your)|i suspect|it (?:sounds|looks|seems) like|this (?:sounds|looks|seems) like|(?:probably|most likely|likely) (?:from|due to|caused by|because of)|which means|that means|the good news|the bad news)\b/i;
// Only a part that opens like a question can ask: "I think this is your
// appendix" says something; "do you think it's your usual migraine" asks.
// (looksLikeQuestion is too broad here: "this is your" reads as a question.)
const OPENS_AS_QUESTION =
  /^(?:(?:and|or|but|so|okay|ok|um+|uh+|right|well|now|also|alright|oh)\b[\s,]*)*(?:how|what|when|where|which|who|why|have|has|had|do|does|did|are|is|was|were|can|could|would|will|any|tell me)\b/i;
const asksNothing = (part: string) =>
  !part.includes("?") &&
  ((INSTRUCTION.test(part) && !looksLikeQuestion(part)) || (EXPLANATION.test(part) && !OPENS_AS_QUESTION.test(part.trim())));

// Lead-in words a part doesn't need ("And", "So um", "Okay").
const FILLER = /^(?:and|or|but|so|okay|ok|um+|uh+|right|well|now|also|alright|oh|ah|yeah|look|sorry)\b[\s,]*/i;
// Where a new question starts mid-sentence: a question word that opens a
// question ("when did", "how long", "what's"), or an auxiliary with its
// subject ("do you", "is it"). Not "any" or a bare "when": "have you taken
// anything", "burning when you wee".
const PART_START =
  /\b(?:(?:how|what|when|where|which|who|why)(?:'s|\s+(?:is|are|was|were|do|does|did|have|has|had|can|could|would|will|long|much|many|often|far|bad|about|made|happened|brings|brought))|(?:have|has|had|do|does|did|are|is|was|were|can|could|would|will)\s+(?:you|it|the|there|your|anyone|anything)|tell me)\b/gi;

/**
 * The utterance as its separate parts: sentences, and spoken run-ons split
 * where a new question starts. Speech-to-text often has no punctuation:
 * "oh you poor thing when did it start and did it come on suddenly" is three
 * parts, a comment and two questions.
 */
export function utteranceParts(utterance: string): string[] {
  const out: string[] = [];
  for (const sentence of utterance.split(/(?<=[.?!;])\s+/)) {
    const starts = [...sentence.matchAll(PART_START)].map((m) => m.index!).filter((i) => i > 0);
    let prev = 0;
    const pieces: string[] = [];
    for (const i of starts) {
      // A part needs three words or more, so "have you taken" stays whole.
      if (sentence.slice(prev, i).trim().split(/\s+/).length >= 3) {
        pieces.push(sentence.slice(prev, i));
        prev = i;
      }
    }
    pieces.push(sentence.slice(prev));
    for (let p of pieces) {
      p = p.trim();
      while (FILLER.test(p)) p = p.replace(FILLER, "").trim();
      p = p
        .replace(/^[,;:\-–—]+\s*/, "")
        .replace(/[,;:\-–—]+$/, "")
        .replace(/[,\s]+(?:and|or|but|so|um+|uh+)$/i, "")
        .trim();
      if (p) out.push(p);
    }
  }
  return out.length ? out : [utterance.trim()];
}

/** Returns null when there is nothing left to elicit — skip the model call. */
export function buildClassifierRequest(
  c: Case,
  state: ConsultState,
  utterance: string,
): ClassifierRequest | null {
  const hidden = hiddenItems(c, state);
  // Only plain language scores: the items of a question in jargon are left
  // out, and the patient asks what the word means (buildActorMessages). What
  // is left is classified, statements too: a gate for "is this a question?"
  // missed spoken questions with no question mark or with a remark in front
  // ("oh you poor thing when did it start"), a third of all misses.
  const parts = utteranceParts(utterance).map(withoutJargon).filter(Boolean);
  if (hidden.length === 0 || parts.length === 0) return null;
  // The model never sees the jargon, so it can't credit it to a plain part.
  const said = jargonIn(utterance) ? parts.join(" ") : utterance;

  const open = hidden.filter((h) => h.open_question && h.importance !== "red_flag");
  // Already-discussed topics are listed too, so a repeated question has
  // somewhere true to land instead of being forced onto the nearest hidden
  // topic. recordExchange drops them: nothing is released or scored twice.
  const revealed = new Set(state.revealed);
  const discussed = c.history.filter((h) => revealed.has(h.id));
  // A decoy the case covers with its own item is left out: in context it
  // could win the question, and the patient then denied what the item
  // holds ("had this before?" -> "never had chest pain before").
  const covered = new Set(c.history.flatMap((h) => h.covers));
  const decoys = DECOYS.filter((d) => !covered.has(d.id));
  const line = (id: string, topic: string, tag: string) => `- ${id}: ${topic}${tag ? ` (${tag})` : ""}`;
  const topics = [
    ...hidden.map((h) => line(h.id, h.topic, open.includes(h) ? "open" : "")),
    ...discussed.map((h) => line(h.id, h.topic, "discussed")),
    ...decoys.map((d) => line(d.id, d.topic, "other")),
  ].join("\n");
  const recent = state.turns
    .slice(-CLASSIFIER_CONTEXT_TURNS)
    .map((t) => `${t.speaker === "doctor" ? "Doctor" : "Patient"}: ${t.text}`)
    .join("\n");
  const user = [
    `Topics:\n${topics}`,
    recent ? `Recent conversation:\n${recent}` : "",
    `Doctor's latest words:\n${said}`,
    `Parts:\n${parts.map((p, i) => `${i + 1}. ${p}`).join("\n")}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  const allowedIds = [...hidden, ...discussed].map((h) => h.id);
  return {
    messages: [
      { role: "system", content: CLASSIFIER_SYSTEM },
      { role: "user", content: user },
    ],
    maxTokens: 400,
    parts,
    utterance: said,
    allowedIds,
    openIds: open.map((h) => h.id),
    redFlagIds: [...hidden, ...discussed].filter((h) => h.importance === "red_flag").map((h) => h.id),
    schema: {
      type: "object",
      properties: {
        parts: {
          type: "array",
          minItems: parts.length,
          maxItems: parts.length,
          items: {
            type: "object",
            properties: {
              open: { type: "boolean" },
              // A part that asks about more than this is a list; a cap keeps
              // "tell me everything" from naming every topic in the case.
              ids: { type: "array", maxItems: 8, items: { type: "string", enum: [...allowedIds, ...decoys.map((d) => d.id)] } },
            },
            required: ["open", "ids"],
            additionalProperties: false,
          },
        },
      },
      required: ["parts"],
      additionalProperties: false,
    },
  };
}

const ClassifierOutput = z.union([
  z.object({ parts: z.array(z.object({ open: z.boolean().default(false), ids: z.array(z.string()).default([]) })) }),
  // The single-answer shape, read as one part for the whole utterance.
  z.object({ ids: z.array(z.string()), open_question: z.boolean().default(false) }),
]);

type ReleaseRequest = Pick<ClassifierRequest, "parts" | "allowedIds" | "openIds" | "utterance">;

// Each part's named ids (hidden or discussed), or null where the output
// couldn't be read (an open part still releases by its words).
function namedByPart(raw: string, req: Pick<ClassifierRequest, "parts" | "allowedIds">): (string[] | null)[] {
  const unread = req.parts.map(() => null);
  const match = raw.replace(/<think>[\s\S]*?<\/think>/g, "").match(/\{[\s\S]*\}/);
  if (!match) return unread;
  let parsed: unknown;
  try {
    parsed = JSON.parse(match[0]);
  } catch {
    return unread;
  }
  const result = ClassifierOutput.safeParse(parsed);
  if (!result.success) return unread;
  const allowed = new Set(req.allowedIds);
  const parts = "parts" in result.data ? result.data.parts : [{ ids: result.data.ids }];
  return req.parts.map((_, i) => (parts[i] ? parts[i]!.ids.filter((id) => allowed.has(id)) : null));
}

/**
 * Parse classifier output defensively: tolerate reasoning tags and prose
 * around the JSON, and drop any id outside the allowed set. A part whose
 * words make it an open question releases the open-question items still
 * hidden, never a red flag, whatever the model listed; any other part
 * releases the topics the model named for it, red flags included. A
 * list-shaped question that names too many topics releases nothing
 * (classifierFlood). Malformed output yields no ids beyond an open part's.
 */
export function parseClassifierOutput(raw: string, req: ReleaseRequest): string[] {
  if (classifierFlood(raw, req, req.utterance)) return [];
  const named = namedByPart(raw, req);
  const ids = new Set<string>();
  req.parts.forEach((part, i) => {
    if (OPEN_QUESTION.test(part)) for (const id of req.openIds) ids.add(id);
    else if (!asksNothing(part)) for (const id of named[i] ?? []) ids.add(id);
  });
  return [...ids];
}

const MAX_RELEASE_PER_TURN = 6;

/**
 * True if the question is itself a list that named more topics than one
 * question can ask about, so parseClassifierOutput released nothing and the
 * patient asks to slow down. SOCRATES ("site, onset, character...") or a
 * ten-symptom review made the 8B list nearly every topic (playtest, medical
 * student round). Counts the case's topics named outside open parts; if the
 * output can't be read (cut off mid-list), every id in the raw text counts.
 */
export function classifierFlood(raw: string, req: Pick<ClassifierRequest, "parts" | "allowedIds">, utterance: string): boolean {
  // Only a question that is itself a list: "Any past medical history?" also
  // made the 8B name many topics, and the patient should just answer it.
  const listed = (utterance.match(/,|\bor\b|\band\b/gi) ?? []).length >= 4;
  if (!listed) return false;
  const byPart = namedByPart(raw, req);
  // A long plan with a safety net in it is no list of questions.
  const counts = (part: string) => !OPEN_QUESTION.test(part) && !asksNothing(part);
  const named = byPart.some((ids) => ids === null)
    ? new Set([...raw.matchAll(/"([a-z0-9_]+)"/g)].map((m) => m[1]!).filter((id) => req.allowedIds.includes(id)))
    : new Set(byPart.flatMap((ids, i) => (counts(req.parts[i]!) ? ids! : [])));
  return named.size > MAX_RELEASE_PER_TURN;
}

// Words that start a question, allowing for a name or filler in front
// ("Graham, how are you feeling?", "So any fevers").
const QUESTION_WORDS = new Set(
  "any anything anyone are is was were do does did have has had can could would will how what when where which who whose why tell describe explain show ever".split(
    " ",
  ),
);
// After a subject these make a statement, not a question: "This is a
// strained back", "You have to", "I can see".
const AUXILIARIES = new Set("are is was were do does did have has had can could would will".split(" "));
const SUBJECTS = new Set("i you we he she it they this that there these those someone everyone my your the a an".split(" "));
// Or after a noun they introduce: "Your ECG was normal", "The pain is…".
const DETERMINERS = new Set("my your the a an this that his her our their".split(" "));

/**
 * Whether the doctor asked something, for the jargon rule: a question in
 * jargon gets "what does that mean?", an explanation in jargon doesn't.
 * (Classification no longer depends on it.)
 */
export function looksLikeQuestion(utterance: string): boolean {
  const text = utterance.trim().toLowerCase();
  if (text.includes("?")) return true;
  // Any sentence may be the question: "Hi Graham, I'm Dr Chen. Tell me what's
  // been happening." was skipped when only the first words counted. Later
  // sentences must open with it ("Now tell me"), or "Someone else will need
  // to drive you" counts. Spoken questions run on without punctuation ("oh
  // that sounds sore um any dyspnoea"), so each part counts as a sentence.
  const sentences = [...text.split(/[.!;]+/), ...utteranceParts(text)];
  return sentences.some((sentence, i) => {
    const words = sentence.split(/[^a-z']+/).filter(Boolean);
    return words.slice(0, i === 0 ? 3 : 2).some((w, j) => {
      if (!QUESTION_WORDS.has(w)) return false;
      // An auxiliary after a subject is a statement: a closing explanation
      // ("This is a strained back") was classified and released his concerns.
      if (!AUXILIARIES.has(w) || j === 0) return true;
      return !SUBJECTS.has(words[j - 1]!) && !(j >= 2 && DETERMINERS.has(words[j - 2]!));
    });
  });
}

/** True if the patient already said exactly this (normalised). */
export function isRepeat(reply: string, state: ConsultState): boolean {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const r = norm(reply);
  return r.length > 0 && state.turns.some((t) => t.speaker === "patient" && norm(t.text) === r);
}

// ---------------------------------------------------------------------------
// Patient actor

// Brevity is per thing asked: "one short sentence" made a terse patient drop
// all but the first of several facts the doctor had asked for, and been
// credited for (playtest, 2026-10-01).
const VERBOSITY: Record<Case["patient"]["persona"]["verbosity"], string> = {
  terse: "Keep it short: a few words for each thing the doctor asks about.",
  normal: "Answer in one to three sentences, a little more if the doctor asked about several things.",
  rambling: "Answer in three to five sentences, drifting into side details about your life.",
};

const LITERACY: Record<Case["patient"]["persona"]["health_literacy"], string> = {
  low: "You use plain everyday words and don't know medical terms.",
  medium: "You know common medical words but not technical ones.",
  high: "You are comfortable with medical terms and may use some.",
};

// The record is in medical words a patient wouldn't use. Asked "do you have
// high cholesterol?", Graham (low health literacy) answered "No, I don't. I
// take Atorvastatin for that" beside "Hypercholesterolaemia" (playtest).
const LAY_TERMS: [RegExp, string][] = [
  [/hypertension/i, "high blood pressure"],
  [/hypercholesterol/i, "high cholesterol"],
  [/osteoarthritis/i, "arthritis"],
  [/insomnia/i, "trouble sleeping"],
  [/atrial fibrillation/i, "an irregular heartbeat"],
];
const layTerm = (condition: string) => {
  const lay = LAY_TERMS.find(([re]) => re.test(condition))?.[1];
  return lay ? ` (${lay})` : "";
};
// Ingredients in brackets are for the doctor: a patient read out the
// ingredient names in brackets (playtest, 2026-10-01).
const layMedication = (medication: string) => medication.replace(/\s*\([^)]*\)/g, "");

// What a fact is about, as the patient hears it: the topic without the
// classifier's "Whether ..." framing or its bracketed examples.
const aboutOf = (topic: string) => topic.trim().replace(/^whether\s+/i, "").replace(/\s*\([^)]*\)\s*$/, "");

// An authored answer without its leading yes or no ("No, I've never had
// asthma." -> "I've never had asthma."), so several can be told as one reply.
function bareAnswer(answer: string): string {
  const a = answer.trim().replace(/\s+/g, " ");
  const m = a.match(/^(yes|no|yeah|nope|nah)\b[,.!]?\s*(.*)$/i);
  if (!m) return a;
  const rest = m[2] ?? "";
  if (!rest) return m[1]!.toLowerCase().startsWith("y") ? "yes" : "no";
  return rest.charAt(0).toUpperCase() + rest.slice(1);
}

/**
 * Whether this reply opens the consult: the patient's first, to a greeting
 * or an open question. The volunteered facts are offered then: asked "what
 * brings you in?", the patient describes the complaint, not just whatever
 * the question released. An opening specific question ("ever injected
 * drugs?") just gets its answer.
 */
export function isOpening(c: Case, state: ConsultState, newlyRevealed: readonly string[]): boolean {
  const byId = new Map(c.history.map((h) => [h.id, h]));
  return !state.turns.some((t) => t.speaker === "patient") && newlyRevealed.every((id) => byId.get(id)?.open_question);
}

/**
 * Chips for the volunteered facts the opening reply tells, worth no points:
 * they count but sit outside the case maximum, and unchipped, players
 * couldn't tell they had (developer's decision, 2026-10-01). Only facts
 * that would have scored if asked.
 */
export function givenAwards(c: Case, state: ConsultState, newlyRevealed: readonly string[]): Award[] {
  if (!isOpening(c, state, newlyRevealed)) return [];
  return c.history
    .filter((h) => h.volunteered && historyAward(h))
    .map((h) => ({ points: 0, kind: "given", label: h.topic }));
}

export function buildActorMessages(
  c: Case,
  state: ConsultState,
  utterance: string,
  newlyRevealed: readonly string[],
  // The classifier named too many topics at once (classifierFlood).
  flooded = false,
): ChatMessage[] {
  const { patient } = c;
  const { persona } = patient;
  const byId = new Map(c.history.map((h) => [h.id, h]));
  const revealed = [...state.revealed].map((id) => byId.get(id)).filter((h) => h !== undefined);

  const facts = revealed.map((h) => `- ${h.answer}`).join("\n");
  const conceals = persona.conceals.length
    ? `Topics you avoid unless asked directly:\n${persona.conceals.map((t) => `- ${t}`).join("\n")}`
    : "";
  const record = [
    ...c.record.conditions.map((x) => `- Condition: ${x}${layTerm(x)}`),
    ...c.record.medications.map((x) => `- Regular medication: ${layMedication(x)}`),
    ...c.record.allergies.map((x) => `- Allergy: ${x}`),
  ].join("\n");

  // Facts live in the system prompt. Moving them onto the doctor's message
  // was cache-friendlier, but the 8B model then read them out loud.
  const system = `You are role-playing a patient seeing a GP in Australia. Stay in character at all times.

You are ${patient.name}, ${patient.age}, ${patient.sex === "F" ? "female" : patient.sex === "M" ? "male" : patient.sex}, ${patient.occupation}.
Personality: ${persona.personality}
Right now you feel: ${persona.emotional_state}
${LITERACY[persona.health_literacy]}
${VERBOSITY[persona.verbosity]}
You came in because: ${c.presenting_complaint}.${c.condition_description ? `\nWhen booking online you wrote: "${c.condition_description}"` : ""}

You do not know what is wrong with you. Never name a diagnosis or suggest one.

What you can tell the doctor:
${facts || "- (nothing yet beyond why you came in)"}
${record ? `\nFrom your records, which you know about:\n${record}\n` : ""}${conceals ? `\n${conceals}\n` : ""}
Rules:
- Only state facts from the lists above, in your own words. Never invent symptoms, history, medicines, test results or numbers.
- Never mention a symptom that isn't in the lists above (breathing, sweating, dizziness, anything), even to describe how you feel.
- When the doctor tells you what they think is wrong or what happens next, react to the most important part as this person really would (worry, fear, relief or a question), in a sentence or two. Don't repeat the plan back or list your symptoms.
- If the doctor insists on something for your safety, you may push back once, then go along with it.
- Never repeat something you have already said.
- Your records are true. If the doctor asks about your conditions or medicines, confirm what your records say.
- If the doctor asks what medicines you take, name your regular medications from your records.
- Never deny or contradict anything in the lists above, even something you are embarrassed about.
- If the doctor asks about something not in any list above, say briefly that you haven't noticed anything like that, or that it's normal for you.
- Reply with spoken words only. No stage directions, no asterisks, no narration.
- Use standard spelling. Never write an accent or dropped letters: "sitting", not "sittin'"; "going to", not "gonna".`;

  const history: ChatMessage[] = state.turns.map((t) => ({
    role: t.speaker === "doctor" ? "user" : "assistant",
    content: t.text,
  }));

  const opening = isOpening(c, state, newlyRevealed);
  const volunteered = opening ? c.history.filter((h) => h.volunteered).map((h) => h.id) : [];
  const convey = [...new Set([...volunteered, ...newlyRevealed])]
    .map((id) => byId.get(id))
    .filter((h) => h !== undefined);

  // The latest doctor turn is already in state.turns (recordExchange adds it),
  // so attach the reminder to it rather than duplicating the utterance.
  // Every fact released has been scored, so the patient must say each one the
  // doctor asked about: a hedged "use it only if it answers" let the model
  // drop facts the player had been credited for. Keeping out facts the
  // doctor didn't ask about is the classifier's job (decoys, eval:sweep):
  // told to skip one, the 8B model said it anyway. How each kind of turn is
  // worded was chosen by blind rating against the case key (playtest,
  // 2026-10-01); check changes with eval:actor.
  const last = history.at(-1);
  const unknownWord = looksLikeQuestion(utterance) ? jargonIn(utterance) : null;
  // The plain questions around the word were classified (withoutJargon), so
  // the patient answers those first.
  const askWord = unknownWord
    ? `\n[You don't know the word "${unknownWord}". Don't guess what it means or answer that part: after the rest, say you don't know that word and ask what they mean.]`
    : "";
  if (last?.role === "user" && last.content === utterance) {
    if (unknownWord && convey.length === 0) {
      // Nothing was released, and a real patient wouldn't know the word either.
      last.content = `${utterance}\n\n[You don't know the word "${unknownWord}". Don't guess what it means or answer the question: say you don't know that word and ask what they mean.]`;
    } else if (convey.length === 1 || (opening && convey.length > 1)) {
      // One fact: the authored line reads best as it is (rated 4.7 of 5). The
      // opening story too: as notes it came out as one breathless sentence.
      last.content = `${utterance}\n\n[What you know that answers this. If the doctor asked about several things, answer every one of them, in the order asked, in your own words. Skip a point only if it has nothing to do with what the doctor asked: never add an unrelated fact.\n${convey.map((h) => `- ${h.answer}`).join("\n")}]${askWord}`;
    } else if (convey.length > 1) {
      // Several answers to the doctor's questions: as authored lines the model
      // read them out one after another ("No, I've never had asthma. No,
      // nothing. No, no wheezing."). As notes saying what each is about,
      // without their own yes or no, they come out as one reply (blind
      // rating on held-out turns: 3.0 -> 3.9 of 5). No example phrase: the 8B
      // copies it, "No, none of that" even before a yes.
      const notes = convey.map((h) => `- ${aboutOf(h.topic)}: ${bareAnswer(h.answer)}`).join("\n");
      last.content = `${utterance}\n\n[What you know that answers this (what it's about: what you know):\n${notes}\nTell the doctor all of this in one natural reply, in your own words and in the order they asked, the way you'd say it out loud: join related points into one sentence, and don't give each point its own "yes" or "no". Add nothing else.]${askWord}`;
    } else if (flooded) {
      // Nothing was released because the question named too many topics (see
      // classifierFlood): answering anyway, the patient denied facts he holds
      // ("No, doesn't go anywhere" to SOCRATES). A real patient asks to slow down.
      last.content = `${utterance}\n\n[The doctor asked about a lot of things at once. Don't go through the list or answer any of it: say, in your own words, that it's a lot at once, and ask what they want to know first.]`;
    } else {
      // Nothing released: left to itself the model filled the gap with
      // plausible details ("I was in a dimly lit room", "a cup of tea and a
      // sandwich") that the key later contradicted. Told there's nothing new,
      // its replies were rated faithful every time.
      last.content = `${utterance}\n\n[Nothing new to tell here beyond your records and what you've already said. If the doctor asked you something, answer in a few words from those and add nothing new: if they ask whether you have some other symptom or problem, you don't; if they ask for a detail you weren't given, say you're not sure. If they told you something, react as this person would.]`;
    }
  }

  return [{ role: "system", content: system }, ...history];
}

// Crude stems (first five letters of words of four or more), so "Radiates"
// meets "radiation".
const headingStems = (s: string) =>
  (s.toLowerCase().match(/[a-z]+/g) ?? []).filter((w) => w.length >= 4).map((w) => w.slice(0, 5));

/**
 * Drop list headings the patient echoed from the doctor: asked for "site,
 * onset, character..." (SOCRATES), the 8B answered "Site — ... Onset —
 * ...", which no patient says, kept the format for the next question, and a
 * prompt rule didn't stop it (playtest, medical student round). `asked` is
 * what the doctor has said so far; every word of a heading must come from
 * it, and a heading needs a word of four letters or more, so "No — not my
 * back" survives.
 */
export function stripEchoedHeadings(reply: string, asked: string): string {
  const said = new Set(headingStems(asked));
  return reply.replace(/(^|[.!?…]\s+)([A-Z][A-Za-z ]{1,40}?)\s*(?::|—|–)\s*(\S)/g, (whole, lead: string, heading: string, next: string) => {
    const words = headingStems(heading);
    return words.length > 0 && words.every((w) => said.has(w)) ? `${lead}${next.toUpperCase()}` : whole;
  });
}

/** Strip reasoning tags and stray stage directions from actor output, and restore dropped g's. */
export function cleanActorOutput(raw: string): string {
  return raw
    .replace(/<think>[\s\S]*?<\/think>/g, "")
    // A lone tag also leaked into speech, mid-sentence (playtest, 2026-10-01).
    .replace(/<\/?think>/g, "")
    .replace(/\*[^*]+\*/g, "")
    // The prompt forbids written accents, but "sittin'" and "wanna" still
    // slip through.
    .replace(/\b([A-Za-z]+in)['’](?=[^\w'’]|$)/g, "$1g")
    .replace(/\b([Gg])onna\b/g, "$1oing to")
    .replace(/\b([Ww])anna\b/g, "$1ant to")
    .replace(/\b([Dd])unno\b/g, "$1on't know")
    .replace(/\s{2,}/g, " ")
    .trim();
}
