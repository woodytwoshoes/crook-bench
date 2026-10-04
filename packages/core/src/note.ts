import type { Catalogue } from "./catalogue.ts";
import { arrivalResults, describePrescription, givenFindings, type ConsultState } from "./consult.ts";
import type { Case } from "./schema.ts";

export type NoteSection = { heading: string; lines: string[] };

/**
 * The consult note, shown only at the end (CLAUDE.md §6). In the fiction an
 * AI scribe wrote it; in fact it is assembled from what was elicited,
 * examined, resulted and done, so it can never contain anything the player
 * didn't find, or reasoning they didn't do. The assessment is the player's
 * own words.
 */
export function buildConsultNote(c: Case, cat: Catalogue, state: ConsultState, plan: string): NoteSection[] {
  const history = new Map(c.history.map((h) => [h.id, h]));
  const exam = new Map(cat.examinations.map((e) => [e.id, e]));
  const tests = new Map(cat.investigations.map((t) => [t.id, t]));

  const sections: NoteSection[] = [
    { heading: "Reason for visit", lines: [c.condition_description ?? c.presenting_complaint] },
    {
      heading: "History",
      lines: state.revealed.map((id) => history.get(id)).filter((h) => h !== undefined).map((h) => `${h.topic}: "${h.answer}"`),
    },
    {
      heading: "Examination",
      lines: [
        ...givenFindings(c, cat).map((f) => `${f.name}: ${f.finding}`),
        ...state.examined.flatMap(({ findings }) => findings.map((f) => `${f.name}: ${f.finding}`)),
      ],
    },
    {
      heading: "Investigations",
      lines: [
        ...arrivalResults(c, cat).map((r) => `${r.name} (before this visit): ${r.result}`),
        ...state.ordered.map(({ id }) => {
          const item = tests.get(id);
          const days = c.investigations[id]?.turnaround_days ?? item?.turnaround_days ?? 0;
          const result = days === 0 ? (c.investigations[id]?.result ?? item?.normal ?? "") : `pending (${days} day${days === 1 ? "" : "s"})`;
          return `${item?.name ?? id}: ${result}`;
        }),
      ],
    },
    { heading: "Assessment and plan (as explained to the patient)", lines: plan.trim() ? [plan.trim()] : [] },
    {
      heading: "Medications",
      lines: state.prescriptions.map((p) => `${p.givenNow ? "Given" : "Prescribed"}: ${describePrescription(p)}`),
    },
    { heading: "Referrals", lines: state.referrals.map((r) => r.name) },
  ];
  return sections.filter((s) => s.lines.length > 0);
}
