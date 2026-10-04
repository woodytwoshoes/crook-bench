import type { Catalogue } from "./catalogue.ts";
import type { Case } from "./schema.ts";

// An exam a case doesn't author shows the catalogue's normal finding, which
// can flatly contradict what the case authored for another exam of the same
// region: abdominal palpation "Soft, non-tender" beside Chloe's suprapubic
// tenderness (playtest
// round 3). These finding concepts let the validator catch that (developer's
// decision, 2026-10-01). Only an unqualified denial counts: "No renal angle
// tenderness" says nothing about the suprapubic area.
const CONCEPTS: { name: string; present: RegExp; denied: RegExp }[] = [
  {
    name: "tenderness",
    present: /\btender(ness)?\b/i,
    denied: /\bnon-tender\b|^\s*(?:no|without) tenderness\b|\bnot tender\b/i,
  },
  {
    name: "a skin break or bruise",
    present: /\b(?:graze[ds]?|abrasions?|wounds?|lacerations?|cuts?|bruis(?:e|es|ed|ing)|haematoma|scratch(?:es)?)\b/i,
    denied: /\bskin (?:normal|intact)\b|^\s*no (?:wounds?|bruising|grazes?|abrasions?)\b|^\s*no (?:[a-z]+ (?:or|and) )?skin changes\b/i,
  },
  {
    name: "swelling",
    present: /\b(?:swelling|swollen|oedema|effusion)\b/i,
    denied: /^\s*(?:no|without) (?:swelling|oedema)\b|\bnot swollen\b/i,
  },
  {
    name: "a rash or redness",
    present: /\b(?:rash|erythema|erythematous|redness|inflamed)\b/i,
    denied: /^\s*no (?:rash|erythema|redness)\b|\bwhite and quiet\b/i,
  },
  {
    name: "a mass",
    present: /\b(?:mass|masses|lump|lumps)\b/i,
    denied: /^\s*no (?:masses|mass|lumps?)\b/i,
  },
];

const NEGATION = /\b(?:no|non|not|without|nil|absent|negative)\b/i;

/**
 * The concepts a finding asserts: named with no negation before it in its
 * sentence, so "No scalp swelling, tenderness or wounds" asserts nothing
 * and "Mildly tender, no swelling" asserts tenderness.
 */
function asserted(text: string): Set<string> {
  const found = new Set<string>();
  for (const part of text.split(/[.;]|\bbut\b/i)) {
    for (const c of CONCEPTS) {
      const m = part.match(c.present);
      if (m && !NEGATION.test(part.slice(0, m.index))) found.add(c.name);
    }
  }
  return found;
}

// The back of the trunk is examined apart from the front: a tender lumbar
// spine says nothing about abdominal palpation.
const BACK = new Set(["lumbar_spine", "sacroiliac", "loins", "thoracic_spine", "lungs_back"]);
const area = (exam: { region: string; subregions: readonly string[] }) =>
  `${exam.region}${exam.subregions.length && exam.subregions.every((s) => BACK.has(s)) ? ":back" : ""}`;

/** The concepts a normal finding flatly denies. */
function denied(text: string): Set<string> {
  const found = new Set<string>();
  for (const clause of text.split(/[.;]/)) for (const c of CONCEPTS) if (c.denied.test(clause)) found.add(c.name);
  return found;
}

/**
 * Exams the case doesn't author whose catalogue normal denies what the case
 * found elsewhere in the same region. Each is one problem to fix, usually
 * by authoring that exam's finding.
 */
export function normalConflicts(c: Case, cat: Pick<Catalogue, "examinations">): string[] {
  const problems: string[] = [];
  const authored = Object.entries(c.examination);
  for (const exam of cat.examinations) {
    if (exam.region === "vitals" || c.examination[exam.id]) continue;
    const denies = denied(exam.normal);
    if (denies.size === 0) continue;
    for (const [id, e] of authored) {
      const other = cat.examinations.find((x) => x.id === id);
      if (!other || area(other) !== area(exam)) continue;
      const texts = [e.finding, e.left, e.right, ...Object.values(e.at ?? {})].filter((t): t is string => !!t);
      for (const concept of new Set(texts.flatMap((t) => [...asserted(t)]))) {
        if (denies.has(concept)) {
          problems.push(`${exam.id} shows "${exam.normal}" (no ${concept}), but ${id} found ${concept}`);
        }
      }
    }
  }
  return problems;
}
