import type { ConsultState } from "./consult.ts";
import { LEVELS } from "./points.ts";
import type { FinalScore } from "./scoring.ts";
import type { Case } from "./schema.ts";

// Achievements (prototype): named after clinical virtues, earned by what the
// player did in one consult. Checked by code at the end of the consult; they
// never change the score or give any in-game advantage (CLAUDE.md §2).

export type Achievement = { id: string; name: string; description: string };

export const ACHIEVEMENTS: readonly Achievement[] = [
  { id: "red_flag_sweep", name: "Red flag sweep", description: "Asked about every red flag in a consult." },
  {
    id: "pertinent_negatives",
    name: "Pertinent-negative hunter",
    description: "Excluded every absent red flag: the no's that make a diagnosis safe.",
  },
  { id: "no_wasted_tests", name: "No wasted tests", description: "Every essential exam and test done, nothing unnecessary or harmful." },
  { id: "allergy_detective", name: "Allergy detective", description: "Uncovered an allergy that wasn't on the record." },
  { id: "first_do_no_harm", name: "First, do no harm", description: "Prescribed, and nothing harmful, unsafe or not indicated." },
  { id: "consultant", name: "Consultant", description: "Reached Consultant level or above in a consult." },
];

const CONSULTANT = LEVELS.findIndex((l) => l.name === "Consultant");

/** Achievement ids earned in this consult. */
export function earnedAchievements(c: Case, state: ConsultState, score: FinalScore): string[] {
  const earned: string[] = [];
  const flags = score.redFlags;
  if (flags.length > 0 && flags.every((f) => f.elicited)) earned.push("red_flag_sweep");
  const negatives = flags.filter((f) => f.absent);
  if (negatives.length > 0 && negatives.every((f) => f.elicited)) earned.push("pertinent_negatives");
  const workupDone = state.examined.length + state.ordered.length > 0;
  if (workupDone && score.missedEssentialItems.length === 0 && score.unnecessaryItems.length === 0 && score.harmfulItems.length === 0) {
    earned.push("no_wasted_tests");
  }
  const revealed = new Set(state.revealed);
  const allergyAsked = c.history.some((h) => revealed.has(h.id) && /allerg/i.test(h.topic));
  if (c.ground_truth.allergies.length > 0 && allergyAsked) earned.push("allergy_detective");
  const badMedicine = score.awards.some((a) => a.points < 0 && /^(Harmful|Unsafe|Not indicated):/.test(a.label));
  if (state.prescriptions.length > 0 && !badMedicine && score.harmfulItems.length === 0) earned.push("first_do_no_harm");
  if (LEVELS.findIndex((l) => l.name === score.level.name) >= CONSULTANT) earned.push("consultant");
  return earned;
}
