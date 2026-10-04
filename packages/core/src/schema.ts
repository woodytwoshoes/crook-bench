import { z } from "zod";

// Case file schema — mirrors CLAUDE.md §7. Expect to revise.
// Everything here is hand-authored ground truth. The language model never
// sees `ground_truth` and never decides what is medically true.

const Id = z.string().regex(/^[a-z0-9_]+$/, "use lower_snake_case");

// How much a history item matters. Red flags are weighted far above the rest.
const Importance = z.enum(["red_flag", "essential", "supporting", "incidental"]);

// Whether performing an exam or ordering a test is warranted in this case.
// "acceptable" is neutral: reasonable to do, earns and costs nothing.
const Necessity = z.enum(["essential", "useful", "acceptable", "unnecessary", "harmful"]);

const Persona = z.strictObject({
  personality: z.string(),
  health_literacy: z.enum(["low", "medium", "high"]),
  emotional_state: z.string(),
  verbosity: z.enum(["terse", "normal", "rambling"]),
  // Topics the patient avoids unless asked directly.
  conceals: z.array(z.string()),
});

// How the patient is drawn. Cosmetic only: never a clinical finding (pallor,
// jaundice and the like are found through Look on the examination wheel), and
// never shown to the language model.
const Appearance = z.strictObject({
  build: z.enum(["slim", "average", "heavy"]),
  skin: z.enum(["fair", "light", "medium", "tan", "brown", "dark"]),
  hair: z.enum(["black", "dark_brown", "brown", "auburn", "blonde", "grey", "white"]),
  hair_length: z.enum(["short", "shoulder", "long", "balding"]),
  eyes: z.enum(["brown", "hazel", "green", "blue", "grey"]),
  facial_hair: z.enum(["none", "stubble", "moustache", "beard"]).default("none"),
});

const Patient = z.strictObject({
  name: z.string(),
  age: z.number().int().nonnegative(),
  sex: z.string(),
  occupation: z.string(),
  persona: Persona,
  appearance: Appearance.optional(),
});

// What the clinic's records already show before the patient speaks.
const Record = z.strictObject({
  allergies: z.array(z.string()),
  conditions: z.array(z.string()),
  medications: z.array(z.string()),
});

// Something the player must elicit. Scoring asks "was this elicited?",
// never "was a particular question asked?".
const HistoryItem = z.strictObject({
  id: Id,
  // What the item is about, phrased neutrally. The classifier sees this,
  // never the answer.
  topic: z.string(),
  // The truth, in the patient's own terms. Released to the actor only once
  // elicited (or immediately if volunteered).
  answer: z.string(),
  volunteered: z.boolean(),
  // True if the patient would bring this up in answer to a broad open
  // question about the complaint ("tell me more"). Everything else needs a
  // specific question. Ignored for red flags, which always need a direct
  // question unless volunteered.
  open_question: z.boolean().default(false),
  importance: Importance,
  // A pertinent negative: the feature is absent ("no, nothing in my back").
  // Eliciting an absent red flag scores half a present one.
  absent: z.boolean().default(false),
  // Generic decoy topics (decoys.ts) this item is the case's own version of.
  // The classifier doesn't see them in this case, so a question on this
  // subject can't land on the decoy, release nothing, and leave the patient
  // denying what this item holds.
  covers: z.array(z.string()).default([]),
});

const Examination = z.strictObject({
  finding: z.string(),
  // Limb exams: a different finding on one side (otherwise both sides match).
  left: z.string().optional(),
  right: z.string().optional(),
  // A different finding at a particular sub-region, e.g. { rlq: "Tender." }
  // for abdominal palpation. `finding` covers the region as a whole.
  at: z.record(z.string(), z.string()).optional(),
  // What is abnormal, shown in red as abnormal results are: true for all
  // of it, or the parts that are (`finding`, `left`, `right`, or
  // sub-regions of `at`), so palpating Samuel's left upper quadrant isn't
  // red though his right lower quadrant is. Authored, never inferred from
  // the text (CLAUDE.md §4). An exam a case doesn't list is normal.
  abnormal: z.union([z.boolean(), z.array(z.string())]).default(false),
  necessity: Necessity,
  // What happens to the patient if this (harmful) examination is done.
  consequence: z.string().optional(),
  // For a harm that would have kept the patient from the care they need
  // (home, waiting, driving): one sentence for the outcome when they got
  // that care anyway, in place of `consequence` (scoring.ts composeOutcome).
  aside: z.string().optional(),
});

const Investigation = z.strictObject({
  result: z.string(),
  // The result is outside its reference range or reports a finding, so it is
  // shown in red, as clinical software flags it. Authored, never inferred
  // from the text (CLAUDE.md §4). A test a case doesn't list is normal.
  abnormal: z.boolean().default(false),
  // In-world days. 0 = result available during the consult. Otherwise the
  // result arrives when the patient returns later in the run. Defaults to the
  // catalogue's turnaround.
  turnaround_days: z.number().int().nonnegative().optional(),
  // Resulted before this consult (ordered at an earlier visit): the result
  // is in the clinic record from the start. Ordering it again is a repeat,
  // so its necessity is never essential or useful.
  on_arrival: z.boolean().default(false),
  necessity: Necessity,
  // What happens to the patient if this (harmful) test is ordered.
  consequence: z.string().optional(),
  // For a harm that would have kept the patient from the care they need
  // (home, waiting, driving): one sentence for the outcome when they got
  // that care anyway, in place of `consequence` (scoring.ts composeOutcome).
  aside: z.string().optional(),
});

// Which game action carries out a management item. Matched by code, never
// by the model. Medicines are named by formulary ingredient, exactly
// ("amoxicillin" does not match "amoxicillin + clavulanic acid").
const Trigger = z.strictObject({
  refer: z.array(Id).optional(),
  order: z.array(Id).optional(),
  // A stat dose given in clinic / a script / either.
  give: z.array(z.string()).optional(),
  prescribe: z.array(z.string()).optional(),
  medicate: z.array(z.string()).optional(),
  // Constraints on the medicine: any of these (as chosen in the dialog).
  frequency: z.array(z.string()).optional(),
  duration: z.array(z.string()).optional(),
  // A combination: also needs one of these given or prescribed, in any order.
  with: z.array(z.string()).optional(),
});

// A management item. A plain string is judged from what the doctor *says*
// in the closing explanation; an item with `when` is matched to an action.
// `when` may list alternatives, any one of which carries the item out: one
// first-line antibiotic of three, each with its own dose and duration.
const ManagementEntry = z.union([
  z.string(),
  z.strictObject({
    text: z.string(),
    when: z.union([Trigger, z.array(Trigger).min(1)]).optional(),
    // For harmful items: what happens to the patient.
    consequence: z.string().optional(),
    // For a harm that would have kept the patient from the care they need
    // (home, waiting, driving): one sentence for the outcome when they got
    // that care anyway, in place of `consequence` (scoring.ts composeOutcome).
    aside: z.string().optional(),
    // Must be done before the consult ends; if not, the patient leaves with
    // `leaving_line` and the player loses points.
    required: z.boolean().default(false),
    // An action item that the doctor can also carry out just by saying it
    // (so the judge may credit it from speech too).
    also_said: z.boolean().default(false),
  }),
]);

export const CaseSchema = z
  .strictObject({
    id: Id,
    // "draft" until the developer has clinically reviewed the case.
    status: z.enum(["draft", "reviewed"]),
    title: z.string(),
    difficulty: z.number().int().min(1).max(5),
    // As booked; may be misleading. Short label for the top bar.
    presenting_complaint: z.string(),
    // The patient's own words when booking, shown at the top of the consult
    // log. Visible to the player and the actor, so it must hold no fact the
    // player should have to elicit.
    condition_description: z.string().optional(),
    // Whether the patient booked an urgent appointment. Booking triage is the
    // patient's own judgement and may be wrong in either direction.
    booked_urgent: z.boolean().default(false),
    // What the patient says as they leave if a required item wasn't done.
    leaving_line: z.string().default("Okay... I'll see myself out."),
    patient: Patient,
    record: Record,
    // Clock time the consult starts ("08:30"); timed results (troponin)
    // show it as their collection time.
    consult_start: z.string().regex(/^\d{2}:\d{2}$/, "use HH:MM").default("09:00"),
    ground_truth: z.strictObject({
      // Ids from catalogue/diagnoses.yaml.
      diagnosis: Id,
      // Diagnoses that are defensible given the presentation, scored as
      // "acceptable" rather than correct.
      acceptable_diagnoses: z.array(Id).default([]),
      // Acceptable diagnoses that score as correct when the key diagnosis is
      // in the can't-miss slot: the working diagnosis while the key can't
      // yet be confirmed.
      working_diagnoses: z.array(Id).default([]),
      // True if the key diagnosis is itself a can't-miss (red-flag)
      // diagnosis, so naming it satisfies the red-flag differential rule.
      sinister: z.boolean().default(false),
      // Reasonable benign alternatives for the differential.
      differentials: z.array(Id).default([]),
      // Can't-miss diagnoses that cannot be excluded at this presentation.
      // The player must name at least one (or a sinister key diagnosis).
      sinister_diagnoses: z.array(Id).default([]),
      // Formulary ingredients the patient actually takes but that aren't on
      // the record (e.g. sildenafil they didn't mention). Safety rules check
      // these whether or not the player asked.
      taking: z.array(z.string()).default([]),
      // Allergies the patient has but that aren't on the record (never
      // recorded). Found only by asking; enforced whether or not asked.
      allergies: z.array(z.string()).default([]),
      // Authoring reference only; never shown to the model.
      notes: z.string(),
    }),
    history: z.array(HistoryItem).min(1),
    // Keys are catalogue ids (catalogue/*.yaml). Only items that matter to
    // this case need listing; the rest return the catalogue's normal result.
    examination: z.record(Id, Examination),
    investigations: z.record(Id, Investigation),
    management: z.strictObject({
      ideal: z.array(ManagementEntry),
      acceptable: z.array(ManagementEntry),
      harmful: z.array(ManagementEntry),
      // Medicines (formulary ingredients) not indicated however they're
      // given: any use costs as an unlisted drug does, unless it is one of
      // the case's harms. Naming a drug in a harm (a long course) otherwise
      // leaves its other uses unscored.
      not_indicated: z.array(z.string()).default([]),
    }),
    consequences: z.strictObject({
      ideal: z.string(),
      acceptable: z.string(),
      harmful: z.string(),
      missed_red_flag: z.string(),
    }),
  })
  .superRefine((c, ctx) => {
    const seen = new Set<string>();
    c.history.forEach((item, i) => {
      if (seen.has(item.id)) {
        ctx.addIssue({
          code: "custom",
          path: ["history", i, "id"],
          message: `duplicate history id "${item.id}"`,
        });
      }
      seen.add(item.id);
    });
    for (const [id, t] of Object.entries(c.investigations)) {
      if (t.on_arrival && (t.necessity === "essential" || t.necessity === "useful")) {
        ctx.addIssue({
          code: "custom",
          path: ["investigations", id, "necessity"],
          message: `"${id}" is resulted on arrival, so ordering it again can't be ${t.necessity}`,
        });
      }
    }
    for (const [id, e] of Object.entries(c.examination)) {
      if (!Array.isArray(e.abnormal)) continue;
      const parts = new Set(["finding", ...(e.left ? ["left"] : []), ...(e.right ? ["right"] : []), ...Object.keys(e.at ?? {})]);
      for (const part of e.abnormal) {
        if (!parts.has(part)) {
          ctx.addIssue({
            code: "custom",
            path: ["examination", id, "abnormal"],
            message: `"${part}" isn't a part of ${id}: use finding, left, right or a sub-region it authors`,
          });
        }
      }
    }
    c.ground_truth.working_diagnoses.forEach((id, i) => {
      if (!c.ground_truth.acceptable_diagnoses.includes(id)) {
        ctx.addIssue({
          code: "custom",
          path: ["ground_truth", "working_diagnoses", i],
          message: `working diagnosis "${id}" must also be in acceptable_diagnoses`,
        });
      }
    });
  });

export type Case = z.infer<typeof CaseSchema>;
export type Trigger = z.infer<typeof Trigger>;
export type Necessity = z.infer<typeof Necessity>;
export type Appearance = z.infer<typeof Appearance>;
