import { z } from "zod";
import { parseList } from "./catalogue.ts";
import type { Case } from "./schema.ts";

// Global medication safety rules (catalogue/safety.yaml): harmful prescribing
// penalised in every case, checked by code — an allergy on the record, a
// dangerous interaction with something the patient takes, or a condition that
// contraindicates the drug. Case-specific harms stay in each case's
// management.harmful; a rule never fires for a medicine the case already
// penalises (see prescribe in consult.ts).

const Words = z.array(z.string().min(1)).min(1);

const SafetyRule = z.strictObject({
  id: z.string().regex(/^[a-z0-9_]+$/, "use lower_snake_case"),
  // Shown to the player as "Unsafe: <label>".
  label: z.string(),
  // Exactly one condition. `taking`: formulary ingredients the patient takes
  // (record medications, or ground_truth.taking for ones not on the record).
  // `allergy` / `condition`: lowercase words matched in the record's text.
  // `age_under`: the patient is younger than this many years.
  if: z.union([
    z.strictObject({ taking: Words }),
    z.strictObject({ allergy: Words }),
    z.strictObject({ condition: Words }),
    z.strictObject({ age_under: z.number().int().positive() }),
  ]),
  // Formulary ingredients that trigger the rule, given or prescribed.
  drugs: Words,
  // What happens to the patient; {name} is their first name.
  consequence: z.string(),
  source: z.string(),
});
export type SafetyRule = z.infer<typeof SafetyRule>;

const SafetyFile = z.strictObject({
  rules: z.array(SafetyRule).superRefine((rules, ctx) => {
    const seen = new Set<string>();
    rules.forEach((r, i) => {
      if (seen.has(r.id)) ctx.addIssue({ code: "custom", path: [i, "id"], message: `duplicate id "${r.id}"` });
      seen.add(r.id);
    });
  }),
});

export function parseSafety(yamlText: string): SafetyRule[] {
  return parseList(SafetyFile, yamlText, "safety.yaml").rules;
}

const lower = (s: string) => s.trim().toLowerCase();

/** Does the rule's condition hold for this patient? */
export function ruleApplies(c: Case, rule: SafetyRule): boolean {
  const has = (texts: readonly string[], words: readonly string[]) => {
    const text = texts.map(lower).join(" | ");
    return words.some((w) => text.includes(lower(w)));
  };
  if ("taking" in rule.if) {
    const hidden = new Set(c.ground_truth.taking.map(lower));
    return rule.if.taking.some((t) => hidden.has(lower(t))) || has(c.record.medications, rule.if.taking);
  }
  if ("allergy" in rule.if) return has(allergies(c), rule.if.allergy);
  if ("age_under" in rule.if) return c.patient.age < rule.if.age_under;
  return has(c.record.conditions, rule.if.condition);
}

/** Every allergy the patient has: on the record, and hidden (never recorded). */
const allergies = (c: Case) => [...c.record.allergies, ...c.ground_truth.allergies];

/**
 * Rules this medicine breaks for this patient: the catalogue's rules, and,
 * when no allergy rule covers it, an allergy entry that names the medicine
 * (or one of its components) outright.
 */
export function unsafeFor(c: Case, rules: readonly SafetyRule[], ingredient: string): SafetyRule[] {
  const broken = rules.filter((r) => r.drugs.some((d) => lower(d) === lower(ingredient)) && ruleApplies(c, r));
  if (broken.some((r) => "allergy" in r.if)) return broken;
  for (const part of ingredient.split(" + ").map(lower)) {
    // Whole words only: "penicillin" must not match "phenoxymethylpenicillin".
    const words = (s: string) => ` ${lower(s).replace(/[^a-z0-9]+/g, " ").trim()} `;
    const entry = allergies(c).find((a) => words(a).includes(words(part)));
    if (entry) {
      broken.push({
        id: `allergy_${part.replace(/[^a-z0-9]+/g, "_")}`,
        label: `Allergy to ${part}`,
        if: { allergy: [part] },
        drugs: [ingredient],
        consequence: `{name} is allergic to ${part} (${entry}) and reacts to the dose. The reaction has to be treated before anything else can happen.`,
        source: "patient's allergy",
      });
      break;
    }
  }
  return broken;
}

/** The rule's consequence, told about this patient. */
export function ruleConsequence(c: Case, rule: SafetyRule): string {
  return rule.consequence.replaceAll("{name}", c.patient.name.split(" ")[0]!);
}
