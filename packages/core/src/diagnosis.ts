import { POINTS, type Award } from "./points.ts";
import type { Case } from "./schema.ts";

// The player's diagnosis: a most likely diagnosis and two differentials, the
// second of which is the can't-miss slot (a high-morbidity diagnosis that
// hasn't been excluded),
// each picked from the shared list (catalogue/diagnoses.yaml), so scoring is
// deterministic — no model interprets it (CLAUDE.md §6).
export type PlayerDiagnoses = { primary: string; differentials: [string, string] };

export type DiagnosisRole = "key" | "working" | "acceptable" | "differential" | "sinister";

/** What a listed diagnosis is, for this case; null if it isn't on the key. */
export function diagnosisRole(c: Case, id: string): DiagnosisRole | null {
  const g = c.ground_truth;
  if (id === g.diagnosis) return "key";
  if (g.acceptable_diagnoses.includes(id)) return "acceptable";
  if (g.sinister_diagnoses.includes(id)) return "sinister";
  if (g.differentials.includes(id)) return "differential";
  return null;
}

/**
 * The most likely diagnosis's role, which can depend on the others: a
 * working diagnosis with the key in the can't-miss slot is as good as the
 * key (developer's decision, 2026-10-01).
 */
export function primaryRole(c: Case, dx: PlayerDiagnoses): DiagnosisRole | null {
  const working = c.ground_truth.working_diagnoses.includes(dx.primary) && dx.differentials[1] === c.ground_truth.diagnosis;
  return working ? "working" : diagnosisRole(c, dx.primary);
}

const isSinister = (c: Case, id: string) => {
  const role = diagnosisRole(c, id);
  return role === "sinister" || (c.ground_truth.sinister && (role === "key" || role === "acceptable"));
};

/**
 * Points for a diagnosis: the most likely diagnosis, each reasonable
 * differential, and a can't-miss diagnosis in the third slot (Differential 2),
 * or a penalty if that slot holds something else. `name` turns list ids into
 * display names.
 */
export function diagnosisAwards(c: Case, dx: PlayerDiagnoses, name: (id: string) => string): Award[] {
  const awards: Award[] = [];
  const add = (points: number, kind: Award["kind"], label: string) =>
    awards.push({ points, kind, label, fromDiagnosis: true, domain: "management" });

  const role = primaryRole(c, dx);
  if (role === "key") add(POINTS.diagnosisCorrect, "diagnosis", `Correct diagnosis: ${name(dx.primary)}`);
  else if (role === "working") add(POINTS.diagnosisCorrect, "diagnosis", `Correct working diagnosis: ${name(dx.primary)}, ${name(c.ground_truth.diagnosis)} not yet excluded`);
  else if (role === "acceptable") add(POINTS.diagnosisAcceptable, "diagnosis", `Defensible diagnosis: ${name(dx.primary)}`);

  const seen = new Set([dx.primary]);
  for (const id of dx.differentials) {
    if (!seen.has(id) && diagnosisRole(c, id)) add(POINTS.differential, "diagnosis", `Reasonable differential: ${name(id)}`);
    seen.add(id);
  }

  const canMiss = dx.differentials[1];
  // The same diagnosis in every slot earned the can't-miss credit too
  // (playtest, 2026-10-01): repeated, the slot holds no can't-miss diagnosis.
  if (canMiss === dx.primary || canMiss === dx.differentials[0]) {
    add(POINTS.sinisterMissing, "penalty", `Can't-miss slot repeats another choice: ${name(canMiss)}`);
  } else if (isSinister(c, canMiss)) add(POINTS.sinisterConsidered, "diagnosis", `Can't-miss diagnosis considered: ${name(canMiss)}`);
  else add(POINTS.sinisterMissing, "penalty", `Not a can't-miss diagnosis here: ${name(canMiss)}`);
  return awards;
}
