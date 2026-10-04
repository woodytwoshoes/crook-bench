import { parse } from "yaml";
import { z } from "zod";
import { BODY } from "./body.ts";
import { DECOY_IDS } from "./decoys.ts";
import { CaseValidationError } from "./loadCase.ts";
import { normalConflicts } from "./normals.ts";
import { parseSafety, type SafetyRule } from "./safety.ts";
import type { Case } from "./schema.ts";

// The standard catalogue of examinations and investigations, shared by every
// case. The menu is identical in every consult so it cannot hint at the
// diagnosis; the player has to search for what they want. A case supplies
// findings only for items that matter to it — everything else returns the
// catalogue's normal result and counts as unnecessary.

const Id = z.string().regex(/^[a-z0-9_]+$/, "use lower_snake_case");

const ExamItem = z.strictObject({
  id: Id,
  name: z.string(),
  // Where the player finds it: region -> sub-region(s) -> modality (body.ts).
  region: z.enum(["vitals", "head", "thorax", "abdomen", "upper_limb", "lower_limb"]),
  subregions: z.array(Id).default([]),
  modality: z.enum(["look", "feel", "percuss", "listen", "move", "test", "measure"]),
  // Other names the player might search for.
  aliases: z.array(z.string()).default([]),
  // Consult time the examination takes.
  minutes: z.number().positive(),
  normal: z.string(),
  // An exam of one sex's anatomy. The wheel is the same for everyone, so it
  // never hints; on the other sex the finding says it doesn't apply (a
  // speculum examination on a 60-year-old man found "normal vagina and
  // cervix", playtest 2026-10-01).
  sex: z.enum(["F", "M"]).optional(),
  // Exams this one also does: performing it earns theirs, once, whichever
  // route the player took (developer's decision, 2026-10-01: pupil
  // reactions found Grace's pupils for 0 while "Eyes" held the credit).
  counts_as: z.array(Id).default([]),
});

const InvestigationItem = z.strictObject({
  id: Id,
  name: z.string(),
  category: z.enum(["bedside", "pathology", "imaging", "cardiac"]),
  aliases: z.array(z.string()).default([]),
  // Consult time to perform (bedside) or to order.
  minutes: z.number().positive(),
  // Default turnaround in in-world days; 0 = during the consult.
  turnaround_days: z.number().int().nonnegative(),
  normal: z.string(),
  // The result shows its collection time (the consult start), e.g. troponin,
  // where timing since symptom onset changes what a result means.
  timed: z.boolean().default(false),
});

// A prescribable product. Generic names only: no brand names.
const FormularyItem = z.strictObject({
  id: Id,
  // e.g. "Nitrofurantoin 100 mg capsules"
  name: z.string(),
  ingredient: z.string(),
  form: z.string(),
  // Default dose unit, e.g. "capsule" -> "1 capsule".
  unit: z.string(),
  pack: z.number().int().positive(),
  // Abbreviations and alternative generic names ("GTN", "paracetamol/codeine").
  aliases: z.array(z.string()).default([]),
});
export type FormularyItem = z.infer<typeof FormularyItem>;

const FormularyList = z.array(FormularyItem).superRefine((items, ctx) => uniqueIds(items, ctx, "formulary"));

export function parseFormulary(yamlText: string): FormularyItem[] {
  return parseList(FormularyList, yamlText, "formulary.yaml");
}

const DiagnosisItem = z.strictObject({
  id: Id,
  name: z.string(),
  aliases: z.array(z.string()).default([]),
});
export type DiagnosisItem = z.infer<typeof DiagnosisItem>;

const DiagnosisList = z.array(DiagnosisItem).superRefine((items, ctx) => uniqueIds(items, ctx, "diagnoses"));

export function parseDiagnoses(yamlText: string): DiagnosisItem[] {
  return parseList(DiagnosisList, yamlText, "diagnoses.yaml");
}

const ReferralItem = z.strictObject({
  id: Id,
  name: z.string(),
  kind: z.enum(["emergency", "specialist", "allied_health"]),
  aliases: z.array(z.string()).default([]),
  minutes: z.number().positive(),
});
export type ReferralItem = z.infer<typeof ReferralItem>;

const ReferralList = z.array(ReferralItem).superRefine((items, ctx) => uniqueIds(items, ctx, "referrals"));

export function parseReferrals(yamlText: string): ReferralItem[] {
  return parseList(ReferralList, yamlText, "referrals.yaml");
}

export type ExamItem = z.infer<typeof ExamItem>;
export type InvestigationItem = z.infer<typeof InvestigationItem>;
export type CatalogueItem = ExamItem | InvestigationItem;

function uniqueIds(items: { id: string }[], ctx: z.RefinementCtx, path: string) {
  const seen = new Set<string>();
  items.forEach((item, i) => {
    if (seen.has(item.id)) {
      ctx.addIssue({ code: "custom", path: [path, i, "id"], message: `duplicate id "${item.id}"` });
    }
    seen.add(item.id);
  });
}

const ExamList = z.array(ExamItem).superRefine((items, ctx) => {
  uniqueIds(items, ctx, "examinations");
  const ids = new Set(items.map((e) => e.id));
  items.forEach((item, i) => {
    for (const other of item.counts_as) {
      if (!ids.has(other) || other === item.id) {
        ctx.addIssue({ code: "custom", path: ["examinations", i, "counts_as"], message: `"${item.id}" can't count as "${other}"` });
      }
    }
    if (item.region === "vitals") return;
    const valid: Record<string, string> = BODY[item.region].subregions;
    if (item.subregions.length === 0) {
      ctx.addIssue({ code: "custom", path: ["examinations", i, "subregions"], message: `"${item.id}" needs at least one sub-region` });
    }
    for (const sr of item.subregions) {
      if (!(sr in valid)) {
        ctx.addIssue({ code: "custom", path: ["examinations", i, "subregions"], message: `"${sr}" isn't a sub-region of ${item.region}` });
      }
    }
  });
});
const InvestigationList = z
  .array(InvestigationItem)
  .superRefine((items, ctx) => uniqueIds(items, ctx, "investigations"));

export type Catalogue = {
  examinations: ExamItem[];
  investigations: InvestigationItem[];
  // Global medication safety rules (safety.ts); none if not loaded.
  safety: SafetyRule[];
};

export function parseList<T>(schema: z.ZodType<T>, yamlText: string, source: string): T {
  const result = schema.safeParse(parse(yamlText));
  if (!result.success) {
    throw new CaseValidationError(
      source,
      result.error.issues.map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`),
    );
  }
  return result.data;
}

export function parseCatalogue(examinationsYaml: string, investigationsYaml: string, safetyYaml?: string): Catalogue {
  return {
    examinations: parseList(ExamList, examinationsYaml, "examinations.yaml"),
    investigations: parseList(InvestigationList, investigationsYaml, "investigations.yaml"),
    safety: safetyYaml === undefined ? [] : parseSafety(safetyYaml),
  };
}

// The Prescribe dialog's options; management triggers may constrain on them.
/** A stat dose is given now, in the clinic, rather than written as a script. */
export const STAT_DOSE = "Stat dose";

// A harm's story in which the patient goes home or waits instead of getting care.
const AWAY =
  /\b(?:goes|went|go|stays|heads) (?:home|back to work)\b|\bat home\b|\bhome to\b|\bnext week\b|\btomorrow\b|\bre-presents\b|\bcomes back\b|\breturns the next\b|\bdelays going\b/i;

export const FREQUENCIES = [
  STAT_DOSE,
  "Once only",
  "Once daily",
  "Twice daily",
  "Three times daily",
  "Four times daily",
  "Every 4 hours",
  "Every 6 hours",
  "Every 8 hours",
  "Every 12 hours",
  "In the morning",
  "At night",
  "Every 5 minutes if needed",
  "When required",
];

export const DURATIONS = [
  "As directed",
  "Single dose",
  "3 days",
  "5 days",
  "7 days",
  "10 days",
  "14 days",
  "1 month",
  "3 months",
  "Ongoing",
];

/**
 * Case entries must refer to catalogue items, and management triggers to
 * real referrals, tests, formulary ingredients and dialog options — a typo
 * would otherwise make an item silently unscoreable. Returns problems.
 */
export function checkCaseAgainstCatalogue(
  c: Case,
  cat: Catalogue,
  extra?: { formulary: FormularyItem[]; referrals: ReferralItem[]; diagnoses: DiagnosisItem[] },
): string[] {
  const exams = new Set(cat.examinations.map((e) => e.id));
  const tests = new Set(cat.investigations.map((t) => t.id));
  const problems = [
    ...Object.keys(c.examination)
      .filter((id) => !exams.has(id))
      .map((id) => `examination.${id}: not in the examination catalogue`),
    ...Object.keys(c.investigations)
      .filter((id) => !tests.has(id))
      .map((id) => `investigations.${id}: not in the investigation catalogue`),
  ];
  for (const h of c.history) {
    for (const id of h.covers) if (!DECOY_IDS.has(id)) problems.push(`history.${h.id}.covers: unknown decoy "${id}"`);
  }
  // An unlisted exam's catalogue normal mustn't deny what another exam of
  // the region found (normals.ts).
  problems.push(...normalConflicts(c, cat).map((p) => `examination: ${p}`));
  // Where the case requires a disposition, a harm whose story sends the
  // patient away needs an aside for when they went where they should
  // (scoring.ts composeOutcome), or the outcome contradicts the player.
  if (c.management.ideal.some((e) => typeof e !== "string" && e.required)) {
    const away = (story?: string) => !!story && AWAY.test(story);
    c.management.harmful.forEach((e, i) => {
      if (typeof e !== "string" && away(e.consequence) && !e.aside) problems.push(`management.harmful.${i}: its story sends the patient away; add an aside`);
    });
    for (const [kind, list] of [["examination", c.examination], ["investigations", c.investigations]] as const) {
      for (const [id, w] of Object.entries(list)) {
        if (w.necessity === "harmful" && away(w.consequence) && !w.aside) problems.push(`${kind}.${id}: its story sends the patient away; add an aside`);
      }
    }
  }
  // An unlisted test returns the catalogue normal, so an ECG ordered in a case
  // with an authored pulse said "Sinus rhythm 72/min" beside a pulse of 102
  // (playtest).
  const rateIn = (s?: string) => s?.match(/\d+/)?.[0];
  const pulse = rateIn(c.examination["heart_rate"]?.finding);
  const ecgNormal = rateIn(cat.investigations.find((t) => t.id === "ecg_12_lead")?.normal);
  if (pulse && ecgNormal && pulse !== ecgNormal && !c.investigations["ecg_12_lead"]) {
    problems.push(`investigations.ecg_12_lead: the catalogue normal (${ecgNormal}/min) contradicts the heart rate (${pulse}); author the ECG`);
  }
  // The actor sees persona text from the first turn, so a hidden medicine
  // named there is said before it is elicited (Graham's sildenafil).
  const { persona } = c.patient;
  const personaText = [c.patient.occupation, persona.personality, persona.emotional_state, ...persona.conceals]
    .join(" ")
    .toLowerCase();
  for (const drug of c.ground_truth.taking) {
    if (personaText.includes(drug.toLowerCase())) {
      problems.push(`patient.persona: names "${drug}" from ground_truth.taking, which leaks it before it is elicited`);
    }
  }
  if (!extra) return problems;

  const dx = new Set(extra.diagnoses.map((d) => d.id));
  const g = c.ground_truth;
  for (const id of [g.diagnosis, ...g.acceptable_diagnoses, ...g.working_diagnoses, ...g.differentials, ...g.sinister_diagnoses]) {
    if (!dx.has(id)) problems.push(`ground_truth: unknown diagnosis "${id}"`);
  }
  const ingredients = new Set(extra.formulary.map((f) => f.ingredient.toLowerCase()));
  const referrals = new Set(extra.referrals.map((r) => r.id));
  for (const name of c.management.not_indicated) {
    if (!ingredients.has(name.toLowerCase())) problems.push(`management.not_indicated: no formulary ingredient "${name}"`);
  }
  for (const tier of ["ideal", "acceptable", "harmful"] as const) {
    c.management[tier].forEach((entry, i) => {
      if (typeof entry === "string" || !entry.when) return;
      const at = `management.${tier}.${i}`;
      for (const w of [entry.when].flat()) {
        for (const id of w.refer ?? []) if (!referrals.has(id)) problems.push(`${at}: unknown referral "${id}"`);
        for (const id of w.order ?? []) if (!tests.has(id)) problems.push(`${at}: unknown investigation "${id}"`);
        for (const name of [...(w.give ?? []), ...(w.prescribe ?? []), ...(w.medicate ?? []), ...(w.with ?? [])]) {
          if (!ingredients.has(name.toLowerCase())) problems.push(`${at}: no formulary ingredient "${name}"`);
        }
        for (const f of w.frequency ?? []) if (!FREQUENCIES.includes(f)) problems.push(`${at}: unknown frequency "${f}"`);
        for (const d of w.duration ?? []) if (!DURATIONS.includes(d)) problems.push(`${at}: unknown duration "${d}"`);
      }
    });
  }
  return problems;
}

/**
 * Search by name or alias. Every word of the query must start a word of the
 * item's name or one of its aliases ("tro" finds troponin; "us abdo" finds
 * abdominal ultrasound). Queries under two characters return nothing, so the
 * list is never browsable in full.
 */
export function searchCatalogue<T extends { name: string; aliases: string[] }>(
  items: readonly T[],
  query: string,
  limit = 12,
): T[] {
  // The query splits like the names, so "d-dimer" finds "D-dimer" (playtest).
  const tokens = (s: string) => s.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const words = tokens(query);
  if (words.join("").length < 2) return [];

  const scored: { item: T; score: number }[] = [];
  for (const item of items) {
    const names = [item.name, ...item.aliases];
    const best = Math.min(
      ...names.map((name) => {
        const nameTokens = tokens(name);
        if (!words.every((w) => nameTokens.some((t) => t.startsWith(w)))) return Infinity;
        // Rank matches at the start of the name, and the canonical name, first.
        return (name.toLowerCase().startsWith(words[0]!) ? 0 : 1) + (name === item.name ? 0 : 0.5);
      }),
    );
    if (best < Infinity) scored.push({ item, score: best });
  }
  return scored
    .sort((a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name))
    .slice(0, limit)
    .map((s) => s.item);
}
