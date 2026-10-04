import { BODY, GIVEN_EXAMS } from "./body.ts";
import { STAT_DOSE, type Catalogue, type FormularyItem, type ReferralItem } from "./catalogue.ts";
import { diagnosisAwards, type PlayerDiagnoses } from "./diagnosis.ts";
import { ruleConsequence, unsafeFor, type SafetyRule } from "./safety.ts";
import {
  POINTS,
  historyAward,
  managementAward,
  managementItems,
  workupAward,
  type Award,
} from "./points.ts";
import type { Case, Necessity, Trigger } from "./schema.ts";

// Time costs in consult minutes. Placeholder values — tune in playtesting.
export const MINUTES_PER_EXCHANGE = 0.5;
export const MINUTES_PER_PRESCRIPTION = 1;

export type Turn = { speaker: "doctor" | "patient"; text: string };

export type Order = { id: string; atMinute: number };

export type Prescription = {
  productId: string;
  name: string;
  // Formulary ingredient, for matching management triggers.
  ingredient: string;
  dose: string;
  quantity: number;
  frequency: string;
  duration: string;
  instructions: string;
  // A stat dose given in the clinic now, rather than a script.
  givenNow: boolean;
};

export type Referral = { id: string; name: string };

// An exam done at one or more sites (a quadrant, a side), each with its finding.
// `covers`: the exams this one counted as (catalogue counts_as), credited with it.
export type Exam = Order & { findings: { name: string; finding: string }[]; covers?: string[] };

/** Exams done, directly or counted as done by another. */
export const examsDone = (state: ConsultState) => new Set(state.examined.flatMap((e) => [e.id, ...(e.covers ?? [])]));

export type ConsultState = {
  // History item ids the patient may now talk about, in order revealed.
  // Volunteered items start revealed; the rest are released by elicitation.
  revealed: string[];
  turns: Turn[];
  minutesUsed: number;
  examined: Exam[];
  ordered: Order[];
  prescriptions: Prescription[];
  referrals: Referral[];
  // Management item ids the doctor has carried out (any tier), each counted once.
  managementMatched: string[];
  // Global safety rules broken (catalogue/safety.yaml), each counted once.
  unsafe: { id: string; label: string; consequence: string }[];
  // Every point awarded so far, in order: the live score.
  awards: Award[];
  // The latest diagnosis the player saved, if any.
  diagnoses: PlayerDiagnoses | null;
};

export function startConsult(c: Case): ConsultState {
  return {
    revealed: c.history.filter((h) => h.volunteered).map((h) => h.id),
    turns: [],
    minutesUsed: 0,
    examined: [],
    ordered: [],
    prescriptions: [],
    referrals: [],
    managementMatched: [],
    unsafe: [],
    awards: [],
    diagnoses: null,
  };
}

/** History items not yet revealed — the only topics the classifier sees. */
export function hiddenItems(c: Case, state: ConsultState) {
  const revealed = new Set(state.revealed);
  return c.history.filter((h) => !revealed.has(h.id));
}

/**
 * Record one doctor/patient exchange. `elicitedIds` comes from the
 * classifier and is untrusted: unknown or already-revealed ids are dropped,
 * so a misbehaving model can never release anything the case doesn't hold.
 */
export function recordExchange(
  c: Case,
  state: ConsultState,
  doctorText: string,
  elicitedIds: readonly string[],
): { state: ConsultState; newlyRevealed: string[]; awards: Award[] } {
  const hidden = new Set(hiddenItems(c, state).map((h) => h.id));
  const newlyRevealed = [...new Set(elicitedIds)].filter((id) => hidden.has(id));
  const byId = new Map(c.history.map((h) => [h.id, h]));
  const awards = newlyRevealed.map((id) => historyAward(byId.get(id)!)).filter((a) => a !== null);
  return {
    newlyRevealed,
    awards,
    state: {
      ...state,
      revealed: [...state.revealed, ...newlyRevealed],
      turns: [...state.turns, { speaker: "doctor", text: doctorText }],
      minutesUsed: state.minutesUsed + MINUTES_PER_EXCHANGE,
      awards: [...state.awards, ...awards],
    },
  };
}

/**
 * Record management items the doctor carried out (ids from the judge,
 * untrusted: unknown or already-matched ids are dropped). Each scores once:
 * ideal and acceptable items earn points, harmful ones are penalised.
 */
export function matchManagement(
  c: Case,
  state: ConsultState,
  ids: readonly string[],
  // What the doctor said that earned each item, shown with the award.
  evidence: Readonly<Record<string, string>> = {},
): { state: ConsultState; awards: Award[] } {
  const items = new Map(managementItems(c).map((m) => [m.id, m]));
  const already = new Set(state.managementMatched);
  const fresh = [...new Set(ids)].filter((id) => items.has(id) && !already.has(id));
  const awards = fresh.map((id) => {
    const award = managementAward(items.get(id)!);
    return evidence[id] ? { ...award, label: `${award.label} (you said: "${evidence[id]}")` } : award;
  });
  return {
    awards,
    state: {
      ...state,
      managementMatched: [...state.managementMatched, ...fresh],
      awards: [...state.awards, ...awards],
    },
  };
}

export function recordPatientReply(state: ConsultState, text: string): ConsultState {
  return { ...state, turns: [...state.turns, { speaker: "patient", text }] };
}

/**
 * Save (or revise) the diagnosis. Its points replace any earlier
 * diagnosis's, so revising can't double-score.
 */
export function diagnose(
  c: Case,
  state: ConsultState,
  dx: PlayerDiagnoses,
  name: (id: string) => string,
): { state: ConsultState; awards: Award[] } {
  const awards = diagnosisAwards(c, dx, name);
  // The diagnosis stays live, but changing a saved one costs: players found
  // the key by re-picking until the chip changed (multi-agent playtest;
  // developer's decision, 2026-10-01). The charge stays when it's revised again.
  const before = state.diagnoses;
  const changed = before !== null && [before.primary, ...before.differentials].join() !== [dx.primary, ...dx.differentials].join();
  const charge: Award[] = changed ? [{ points: POINTS.diagnosisRevision, kind: "penalty", label: "Diagnosis revised", domain: "management" }] : [];
  return {
    awards: [...charge, ...awards],
    state: { ...state, diagnoses: dx, awards: [...state.awards.filter((a) => !a.fromDiagnosis), ...charge, ...awards] },
  };
}

export type ExamOutcome = {
  state: ConsultState;
  name: string;
  finding: string;
  necessity: Necessity;
  // False if this examination had already been done: no time is charged.
  isNew: boolean;
  award: Award | null;
  // The exams it counts as, credited with it (catalogue counts_as).
  awards: Award[];
  // The case flags what this finding shows as abnormal: shown in red.
  abnormal: boolean;
};

/**
 * Perform an examination. Deterministic: the finding is authored. Limb exams
 * take a side, and exams spanning several sub-regions (abdominal palpation)
 * are done at one; a case may author a different finding for a side or a
 * sub-region. An exam scores once, wherever it is done first; each new site
 * adds its finding.
 */
/** The given exams' findings (the case's, else the catalogue normal), shown from the start. */
export function givenFindings(c: Case, cat: Catalogue): { id: string; name: string; finding: string }[] {
  return cat.examinations
    .filter((e) => GIVEN_EXAMS.has(e.id))
    .map((e) => ({ id: e.id, name: e.name, finding: c.examination[e.id]?.finding ?? e.normal }));
}

/**
 * Results the patient arrives with (`on_arrival`: ordered at an earlier
 * visit), in the clinic record from the start. A blood count is
 * never instant, and with no return visits it must be there when the
 * patient walks in (developer's decision, 2026-10-01).
 */
export function arrivalResults(c: Case, cat: Catalogue): { id: string; name: string; result: string; abnormal: boolean }[] {
  return Object.entries(c.investigations)
    .filter(([, t]) => t.on_arrival)
    .map(([id, t]) => ({
      id,
      name: cat.investigations.find((i) => i.id === id)?.name ?? id,
      result: t.result.trim(),
      abnormal: t.abnormal,
    }));
}

/**
 * An exam done across a whole region (pressed without zooming in) finds
 * every site the case authors, then reports the rest. Playtest: palpating
 * Samuel's abdomen without choosing a quadrant said "Soft and non-tender in
 * this area" over a guarding right iliac fossa.
 */
function wholeRegionFinding(
  region: string,
  at: Record<string, string> | undefined,
  elsewhere: string | undefined,
): string | undefined {
  if (!at || Object.keys(at).length === 0 || region === "vitals") return undefined;
  const names = (BODY as Record<string, { subregions: Record<string, string> }>)[region]?.subregions ?? {};
  const sites = Object.entries(at).map(([sr, f]) => `${names[sr] ?? sr}: ${f.trim()}`);
  const rest = elsewhere?.replace(/\s*in this area/i, "").trim();
  return [...sites, rest ? `Elsewhere: ${rest[0]!.toLowerCase()}${rest.slice(1)}` : ""].filter(Boolean).join(" ");
}

/**
 * The finding an exam shows, by where it was done: the authored site, then
 * side, then (pressed on the whole region) every site the case authors,
 * then the authored finding, else the catalogue normal. Abnormal as the
 * case flags the part shown (`abnormal` in the schema); a whole-region
 * finding is abnormal if any site in it is.
 */
function shownFinding(
  authored: Case["examination"][string] | undefined,
  item: Catalogue["examinations"][number],
  side?: "left" | "right",
  subregion?: string,
): { finding: string; abnormal: boolean } {
  if (!authored) return { finding: item.normal, abnormal: false };
  const flagged = (part: string) => authored.abnormal === true || (Array.isArray(authored.abnormal) && authored.abnormal.includes(part));
  const atSite = subregion ? authored.at?.[subregion] : undefined;
  if (atSite !== undefined) return { finding: atSite, abnormal: flagged(subregion!) };
  const onSide = side ? authored[side] : undefined;
  if (onSide !== undefined) return { finding: onSide, abnormal: flagged(side!) };
  const whole = !subregion ? wholeRegionFinding(item.region, authored.at, authored.finding) : undefined;
  if (whole !== undefined) return { finding: whole, abnormal: flagged("finding") || Object.keys(authored.at ?? {}).some(flagged) };
  return { finding: authored.finding, abnormal: flagged("finding") };
}

export function examine(
  c: Case,
  cat: Catalogue,
  state: ConsultState,
  id: string,
  side?: "left" | "right",
  subregion?: string,
): ExamOutcome {
  const item = cat.examinations.find((e) => e.id === id);
  if (!item) throw new Error(`Unknown examination "${id}"`);
  const authored = c.examination[id];
  // Already in front of the player: nothing to perform or score.
  if (GIVEN_EXAMS.has(id)) {
    return { state, name: item.name, finding: authored?.finding ?? item.normal, necessity: "acceptable", isNew: false, award: null, awards: [], abnormal: false };
  }
  const otherSex = item.sex !== undefined && (c.patient.sex === "F" || c.patient.sex === "M") && c.patient.sex !== item.sex;
  const { finding, abnormal } = otherSex
    ? { finding: "Not applicable for this patient.", abnormal: false }
    : shownFinding(authored, item, side, subregion);
  const where = [
    subregion && item.region !== "vitals" ? (BODY[item.region].subregions as Record<string, string>)[subregion] : null,
    side,
  ].filter(Boolean);
  const name = where.length ? `${item.name} (${where.join(", ")})` : item.name;
  // An exam the case doesn't list is neutral: examining isn't penalised
  // unless the case says it's unnecessary or harmful.
  const necessity = authored?.necessity ?? "acceptable";
  const site = { name, finding };
  const before = state.examined.find((e) => e.id === id);
  if (before) {
    if (before.findings.some((f) => f.name === name)) return { state, name, finding, necessity, isNew: false, award: null, awards: [], abnormal };
    const examined = state.examined.map((e) => (e === before ? { ...e, findings: [...e.findings, site] } : e));
    return { state: { ...state, examined }, name, finding, necessity, isNew: true, award: null, awards: [], abnormal };
  }
  // No exam pays twice, by any route: one counted as done by another earns
  // nothing more when it's done itself.
  const done = examsDone(state);
  const award = done.has(id) ? null : workupAward("examination", item.name, necessity);
  // The exams this one counts as earn their credit now (never a penalty).
  const covers = item.counts_as.filter((other) => !done.has(other));
  const awards = covers.flatMap((other) => {
    const n = c.examination[other]?.necessity;
    if (n !== "essential" && n !== "useful") return [];
    return [workupAward("examination", cat.examinations.find((e) => e.id === other)?.name ?? other, n)!];
  });
  const gained = [...(award ? [award] : []), ...awards];
  return {
    name,
    finding,
    necessity,
    isNew: true,
    award,
    awards,
    abnormal,
    state: {
      ...state,
      examined: [...state.examined, { id, atMinute: state.minutesUsed, findings: [site], ...(covers.length ? { covers } : {}) }],
      minutesUsed: state.minutesUsed + item.minutes,
      awards: [...state.awards, ...gained],
    },
  };
}

export type OrderOutcome = {
  state: ConsultState;
  name: string;
  // The result if it is available during the consult (turnaround 0), else null.
  result: string | null;
  // The case flags this result as abnormal (always false while it is pending).
  abnormal: boolean;
  turnaroundDays: number;
  necessity: Necessity;
  isNew: boolean;
  award: Award | null;
  // Management items this order carried out (rare: most tests score via necessity).
  awards: Award[];
};

/**
 * Order (or perform, if bedside) an investigation. Deterministic. Results
 * with a turnaround of days are withheld until the patient returns.
 */
export function orderInvestigation(c: Case, cat: Catalogue, state: ConsultState, id: string): OrderOutcome {
  const item = cat.investigations.find((t) => t.id === id);
  if (!item) throw new Error(`Unknown investigation "${id}"`);
  const authored = c.investigations[id];
  const turnaroundDays = authored?.turnaround_days ?? item.turnaround_days;
  const text = authored?.result ?? item.normal;
  const outcome = {
    name: item.name,
    result: turnaroundDays === 0 ? (item.timed ? `Collected ${c.consult_start} (consult start). ${text}` : text) : null,
    abnormal: turnaroundDays === 0 && authored?.abnormal === true,
    turnaroundDays,
    necessity: authored?.necessity ?? "unnecessary",
  };
  if (state.ordered.some((o) => o.id === id)) return { ...outcome, state, isNew: false, award: null, awards: [] };
  // Each unnecessary test costs more than the last (-2, -4, -6...): at a flat
  // -2, ordering everything paid, and shortcut seekers scored as well as GPs
  // (multi-agent playtest; developer's decision, 2026-10-01).
  const earlier = state.ordered.filter((o) => (c.investigations[o.id]?.necessity ?? "unnecessary") === "unnecessary").length;
  const base = workupAward("investigation", item.name, outcome.necessity);
  const award =
    base && outcome.necessity === "unnecessary" && earlier > 0
      ? { ...base, points: base.points * (earlier + 1), label: `${base.label} (unnecessary test ${earlier + 1})` }
      : base;
  const next: ConsultState = {
    ...state,
    ordered: [...state.ordered, { id, atMinute: state.minutesUsed }],
    minutesUsed: state.minutesUsed + item.minutes,
    awards: award ? [...state.awards, award] : state.awards,
  };
  const triggered = matchTriggers(c, next, { kind: "order", id });
  return { ...outcome, isNew: true, award, awards: triggered.awards, state: triggered.state };
}

export type PrescriptionDetails = Omit<Prescription, "productId" | "name" | "ingredient">;

type ActionOutcome = { state: ConsultState; awards: Award[] };

/**
 * Prescribe or give a medicine. Any management items it carries out score
 * now. Beyond the case's own items: a medicine that breaks a global safety
 * rule is penalised as harmful (unless the case already penalises it), and
 * one the case doesn't mention at all costs a little, like an unnecessary test.
 */
export function prescribe(
  c: Case,
  state: ConsultState,
  item: FormularyItem,
  details: PrescriptionDetails,
  safety: readonly SafetyRule[] = [],
): ActionOutcome {
  const rx: Prescription = { productId: item.id, name: item.name, ingredient: item.ingredient, ...details };
  const next = {
    ...state,
    prescriptions: [...state.prescriptions, rx],
    minutesUsed: state.minutesUsed + MINUTES_PER_PRESCRIPTION,
  };
  const action: GameAction = { kind: "medicine", rx };
  const triggered = managementItems(c).filter((m) => m.when?.some((w) => triggers(w, action, next)));
  // The case's own harm for this medicine wins; no safety rule on top.
  if (triggered.some((m) => m.tier === "harmful")) return matchManagement(c, next, triggered.map((m) => m.id));

  const unsafe = unsafeFor(c, safety, rx.ingredient);
  // A medicine the patient mustn't have earns nothing, even if it's the usual choice.
  const hit = unsafe.length ? [] : triggered;
  const outcome = matchManagement(c, next, hit.map((m) => m.id));
  const already = new Set(state.unsafe.map((u) => u.id));
  const broken = unsafe.filter((r) => !already.has(r.id));
  const extra: Award[] = broken.map((r) => ({ points: POINTS.perHarmful, kind: "penalty", label: `Unsafe: ${r.label}`, domain: "management" }));
  const firstTime = !state.prescriptions.some((p) => same(p.ingredient, rx.ingredient));
  const notIndicated = !mentioned(c, rx.ingredient) || inList(c.management.not_indicated, rx.ingredient);
  if (unsafe.length === 0 && hit.length === 0 && firstTime && notIndicated) {
    extra.push({ points: POINTS.perUnnecessary, kind: "penalty", label: `Not indicated: ${rx.ingredient}`, domain: "management" });
  }
  return {
    awards: [...outcome.awards, ...extra],
    state: {
      ...outcome.state,
      unsafe: [...outcome.state.unsafe, ...broken.map((r) => ({ id: r.id, label: r.label, consequence: ruleConsequence(c, r) }))],
      awards: [...outcome.state.awards, ...extra],
    },
  };
}

/** Is this ingredient named by any of the case's management items, whatever the dose or timing? */
function mentioned(c: Case, ingredient: string): boolean {
  return managementItems(c).some((m) =>
    m.when?.some((w) => [w.give, w.prescribe, w.medicate, w.with].some((list) => inList(list, ingredient))),
  );
}

/** Refer; any management items it carries out score now. */
export function refer(c: Case, state: ConsultState, item: ReferralItem): ActionOutcome {
  const next = {
    ...state,
    referrals: [...state.referrals, { id: item.id, name: item.name }],
    minutesUsed: state.minutesUsed + item.minutes,
  };
  return matchTriggers(c, next, { kind: "refer", id: item.id });
}

type GameAction = { kind: "medicine"; rx: Prescription } | { kind: "refer"; id: string } | { kind: "order"; id: string };

const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();
const inList = (list: string[] | undefined, value: string) => (list ?? []).some((x) => same(x, value));

function medicineMatches(when: Trigger, rx: Prescription): boolean {
  const named =
    inList(when.medicate, rx.ingredient) ||
    (rx.givenNow ? inList(when.give, rx.ingredient) : inList(when.prescribe, rx.ingredient));
  return (
    named &&
    (!when.frequency || inList(when.frequency, rx.frequency)) &&
    (!when.duration || inList(when.duration, rx.duration))
  );
}

/** Did this action carry out the item? `state` is after the action. */
export function triggers(when: Trigger, action: GameAction, state: ConsultState): boolean {
  if (action.kind === "refer") return inList(when.refer, action.id);
  if (action.kind === "order") return inList(when.order, action.id);
  if (!when.with) return medicineMatches(when, action.rx);
  // A combination fires once both parts are present, in either order.
  const involved = medicineMatches(when, action.rx) || inList(when.with, action.rx.ingredient);
  return (
    involved &&
    state.prescriptions.some((p) => medicineMatches({ ...when, with: undefined }, p)) &&
    state.prescriptions.some((p) => inList(when.with, p.ingredient))
  );
}

/** Deterministic management matching: no model involved. */
function matchTriggers(c: Case, state: ConsultState, action: GameAction): ActionOutcome {
  const ids = managementItems(c)
    .filter((m) => m.when?.some((w) => triggers(w, action, state)))
    .map((m) => m.id);
  return matchManagement(c, state, ids);
}

/** One line per prescription, as it would read on a script. */
export function describePrescription(p: Prescription): string {
  const frequency = p.frequency === "Once only" ? "once" : p.frequency === STAT_DOSE ? "stat" : p.frequency.toLowerCase();
  const duration = ["As directed", "Single dose"].includes(p.duration) ? "" : `for ${p.duration.toLowerCase()}`;
  const parts = [p.dose, frequency, duration].filter(Boolean).join(" ");
  const how = p.givenNow ? "given now in clinic" : `Qty ${p.quantity}`;
  return `${p.name}: ${parts} (${how})${p.instructions ? `. ${p.instructions}` : ""}`;
}
