// Medical words patients don't use. A question containing one releases
// nothing, and the patient asks what it means: only plain language scores
// (developer's decision, 2026-10-01, after "Any dyspnoea or diaphoresis?"
// earned two red flags from a plumber who answered as if he understood).
// Words most patients know (angina, palpitations, vertigo, nausea, UTI) are
// left out. Edit freely; check with the unit tests.

// Matched whole-word, any case; spelling variants included.
const TERMS = [
  "dyspnoea", "dyspnea", "orthopnoea", "orthopnea", "paroxysmal nocturnal dyspnoea", "paroxysmal nocturnal dyspnea",
  "diaphoresis", "diaphoretic", "syncope", "syncopal", "presyncope", "presyncopal",
  "haemoptysis", "hemoptysis", "haematemesis", "hematemesis", "haematuria", "hematuria",
  "haematochezia", "hematochezia", "melaena", "melena", "dysuria", "rigors",
  "pleuritic", "photophobia", "phonophobia", "paraesthesia", "paraesthesiae", "paresthesia", "paresthesias",
  "claudication", "epistaxis", "pruritus", "dysphagia", "odynophagia", "polyuria", "polydipsia",
  "nocturia", "tenesmus", "dyspareunia", "menorrhagia", "amenorrhoea", "amenorrhea",
  "diplopia", "dysarthria", "dysphasia", "aphasia", "ataxia", "emesis", "pyrexia", "febrile",
  "tachycardia", "bradycardia", "lymphadenopathy", "arthralgia", "arthralgias", "myalgia", "myalgias",
  "malaise", "coryza", "rhinorrhoea", "rhinorrhea", "otalgia", "oedema", "edema", "anorexia",
  "pack years", "pack-years",
  // Added 2026-10-04 from the overnight crowd's jargon player, where each earned points.
  "dysphonia", "photopsia", "photopsias", "amaurosis fugax", "unilateral", "bilateral",
];

// Student shorthand, matched only in capitals ("sob" is a word).
const ABBREVIATIONS = ["SOB", "SOBOE", "LOC", "PND", "IHD", "MI", "PMHx", "PMH", "Hx", "ROS", "LMP", "CVA", "HTN", "DM", "PR", "PV",
  // Added 2026-10-04 (overnight crowd): "Any FHx of lung cancer?" earned the family history.
  "FHx", "SHx", "DHx", "LUTS", "VTE", "SAH", "N&V"];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[- ]/g, "[- ]");
const TERM_RE = new RegExp(`\\b(${[...TERMS].sort((a, b) => b.length - a.length).map(escape).join("|")})\\b`, "i");
const ABBREV_RE = new RegExp(`\\b(${ABBREVIATIONS.join("|")})\\b`);

/** The first medical word a patient wouldn't know in this utterance, as written; null if none. */
export function jargonIn(utterance: string): string | null {
  return utterance.match(TERM_RE)?.[1] ?? utterance.match(ABBREV_RE)?.[1] ?? null;
}

// Where a question's list splits into its items.
const CLAUSE = /(,|;|\s+(?:and|or)\s+)/i;

/**
 * A question without the items of its list that are in jargon: "Have you
 * coughed up any blood, and any rigors?" -> "Have you coughed up any
 * blood?". The plain items are still classified and scored, the jargon ones
 * never (developer's decision, 2026-10-01: all or nothing per utterance
 * scored the blood question as nothing). Empty if every item is jargon.
 */
export function withoutJargon(question: string): string {
  if (!jargonIn(question)) return question;
  const pieces = question.split(CLAUSE);
  let kept = "";
  for (let i = 0; i < pieces.length; i += 2) {
    const item = pieces[i]!;
    if (!item.trim() || jargonIn(item)) continue;
    kept += kept ? `${pieces[i - 1]}${item}` : item;
  }
  kept = kept.trim().replace(/[,;]$/, "");
  return kept && question.trim().endsWith("?") && !kept.endsWith("?") ? `${kept}?` : kept;
}
