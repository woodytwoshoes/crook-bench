import { GIVEN_EXAMS } from "./body.ts";
import type { Case, Necessity, Trigger } from "./schema.ts";

// Live scoring (CLAUDE.md §6). Points are awarded as the consult happens —
// for each key fact elicited and each action — and shown to the player
// immediately, including penalties for wrong examinations, tests and harmful
// management (e.g. GTN after sildenafil). Only overtime and the diagnosis are
// settled at the end. Placeholder values; tune in playtesting.
export const POINTS = {
  redFlagPresent: 20,
  redFlagAbsent: 10,
  essential: 10,
  supporting: 5,
  workupEssential: 10,
  workupUseful: 5,
  managementIdeal: 15,
  managementAcceptable: 5,
  diagnosisCorrect: 20,
  diagnosisAcceptable: 10,
  // Each differential that is on the key's list of reasonable diagnoses.
  differential: 5,
  // A can't-miss (red-flag) diagnosis named anywhere in the three.
  sinisterConsidered: 10,
  sinisterMissing: -20,
  // Each time a saved diagnosis is changed: live chips let players find the
  // key by re-picking (developer's decision, 2026-10-01).
  diagnosisRevision: -5,
  perHarmful: -30,
  // A required item (e.g. sending a STEMI by ambulance) not done by the end.
  missedRequired: -30,
  workupHarmful: -15,
  perUnnecessary: -2,
} as const;

export type AwardKind =
  | "red_flag"
  | "history"
  | "examination"
  | "investigation"
  | "management"
  | "diagnosis"
  | "penalty"
  // A volunteered fact the patient told: shown, worth nothing (prompts.ts givenAwards).
  | "given";

// The bill splits the score four ways (developer's decision, 2026-10-01),
// shown at End consult and averaged over the day, never live: asking and
// examining cost nothing, so a live history or exam bar would only say
// "keep asking" or "keep examining". Where no test is needed (back pain,
// for one) Investigations has nothing to earn, only to lose.
export type Domain = "history" | "examination" | "investigations" | "management";
export const DOMAINS: readonly { id: Domain; name: string }[] = [
  { id: "history", name: "History" },
  { id: "examination", name: "Examination" },
  { id: "investigations", name: "Investigations" },
  { id: "management", name: "Management and diagnosis" },
];

export type Award = {
  points: number;
  kind: AwardKind;
  label: string;
  // Diagnosis awards are replaced whenever the diagnosis is revised.
  fromDiagnosis?: boolean;
  // Where a penalty counts; other awards take it from their kind (domainOf).
  domain?: Domain;
};

/** The part of the consult an award counts towards; null for a volunteered fact's +0 chip. */
export function domainOf(a: Award): Domain | null {
  if (a.domain) return a.domain;
  switch (a.kind) {
    case "red_flag":
    case "history":
      return "history";
    case "examination":
      return "examination";
    case "investigation":
      return "investigations";
    case "given":
      return null;
    default:
      return "management";
  }
}

type HistoryItem = Case["history"][number];

export function historyAward(item: HistoryItem): Award | null {
  if (item.importance === "red_flag") {
    return item.absent
      ? { points: POINTS.redFlagAbsent, kind: "red_flag", label: `Red flag excluded: ${item.topic}` }
      : { points: POINTS.redFlagPresent, kind: "red_flag", label: `Red flag: ${item.topic}` };
  }
  if (item.importance === "essential") return { points: POINTS.essential, kind: "history", label: item.topic };
  if (item.importance === "supporting") return { points: POINTS.supporting, kind: "history", label: item.topic };
  return null;
}

const workupDomain = (kind: "examination" | "investigation"): Domain => (kind === "examination" ? "examination" : "investigations");

export function workupAward(kind: "examination" | "investigation", name: string, necessity: Necessity): Award | null {
  switch (necessity) {
    case "acceptable":
      return null;
    case "essential":
      return { points: POINTS.workupEssential, kind, label: name };
    case "useful":
      return { points: POINTS.workupUseful, kind, label: name };
    case "unnecessary":
      return { points: POINTS.perUnnecessary, kind: "penalty", label: `Unnecessary: ${name}`, domain: workupDomain(kind) };
    case "harmful":
      return { points: POINTS.workupHarmful, kind: "penalty", label: `Harmful: ${name}`, domain: workupDomain(kind) };
  }
}

export type Tier = "ideal" | "acceptable" | "harmful";
export type ManagementItem = {
  id: string;
  tier: Tier;
  text: string;
  // Present if a game action carries it out (any one of these); absent if it
  // can only be said.
  when?: Trigger[];
  consequence?: string;
  // A harm's one-sentence outcome when the patient got the right care anyway.
  aside?: string;
  required?: boolean;
  alsoSaid?: boolean;
};

export function managementItems(c: Case): ManagementItem[] {
  return (["ideal", "acceptable", "harmful"] as const).flatMap((tier) =>
    c.management[tier].map((entry, i) => {
      const item: ManagementItem = { id: `${tier}_${i}`, tier, text: typeof entry === "string" ? entry : entry.text };
      if (typeof entry !== "string" && entry.when) item.when = [entry.when].flat();
      if (typeof entry !== "string" && entry.consequence) item.consequence = entry.consequence;
      if (typeof entry !== "string" && entry.aside) item.aside = entry.aside;
      if (typeof entry !== "string" && entry.required) item.required = true;
      if (typeof entry !== "string" && entry.also_said) item.alsoSaid = true;
      return item;
    }),
  );
}

export function managementAward(item: ManagementItem): Award {
  if (item.tier === "ideal") return { points: POINTS.managementIdeal, kind: "management", label: item.text };
  if (item.tier === "acceptable") return { points: POINTS.managementAcceptable, kind: "management", label: item.text };
  return { points: POINTS.perHarmful, kind: "penalty", label: `Harmful: ${item.text}`, domain: "management" };
}

/** The most a flawless consult can score in each part. */
export function domainMaxima(c: Case): Record<Domain, number> {
  const history = c.history
    .filter((h) => !h.volunteered)
    .reduce((sum, h) => sum + (historyAward(h)?.points ?? 0), 0);
  const best = (list: { necessity: Necessity }[]) =>
    list.reduce((sum, w) => sum + Math.max(0, workupAward("examination", "", w.necessity)?.points ?? 0), 0);
  const exams = best(Object.entries(c.examination).filter(([id]) => !GIVEN_EXAMS.has(id)).map(([, e]) => e));
  const tests = best(Object.values(c.investigations));
  const management = c.management.ideal.length * POINTS.managementIdeal;
  const diagnosis = POINTS.diagnosisCorrect + 2 * POINTS.differential + POINTS.sinisterConsidered;
  return { history, examination: exams, investigations: tests, management: management + diagnosis };
}

/** The most a flawless consult can score: the top of the level bar. */
export function maxPoints(c: Case): number {
  const m = domainMaxima(c);
  return m.history + m.examination + m.investigations + m.management;
}

export type DomainScore = { id: Domain; name: string; earned: number; max: number };

/** Points earned in each part of the consult, against its maximum. */
export function domainScores(c: Case, awards: readonly Award[]): DomainScore[] {
  const max = domainMaxima(c);
  return DOMAINS.map((d) => ({
    ...d,
    earned: awards.filter((a) => domainOf(a) === d.id).reduce((sum, a) => sum + a.points, 0),
    max: max[d.id],
  }));
}

// Colours warm as the player climbs: cool grey to blue, teal, green, amber, orange.
export const LEVELS = [
  { name: "Intern", from: 0, colour: "#8f9fae" },
  { name: "Resident", from: 0.2, colour: "#3b8fe0" },
  { name: "Registrar", from: 0.4, colour: "#14a6a0" },
  { name: "Fellow", from: 0.6, colour: "#1f9d57" },
  { name: "Consultant", from: 0.75, colour: "#e8930c" },
  { name: "Director", from: 0.9, colour: "#e8590c" },
] as const;

export type Level = (typeof LEVELS)[number];

export function levelFor(points: number, max: number): Level {
  const share = max > 0 ? points / max : 0;
  return [...LEVELS].reverse().find((l) => share >= l.from) ?? LEVELS[0];
}

export const totalPoints = (awards: readonly Award[]) => awards.reduce((sum, a) => sum + a.points, 0);
