import type { ExamItem } from "./catalogue.ts";

// The body as the player examines it (CLAUDE.md §6): five regions, each with
// sub-regions reached by zooming in, and six modalities on the radial wheel.
// Vitals aren't a body part; they're buttons above the patient.

export const MODALITIES = ["look", "feel", "percuss", "listen", "move", "test"] as const;
export type Modality = (typeof MODALITIES)[number];

export const MODALITY_LABEL: Record<Modality, string> = {
  look: "Look",
  feel: "Feel",
  percuss: "Percuss",
  listen: "Listen",
  move: "Move",
  test: "Test",
};

export const BODY = {
  head: {
    label: "Head and neck",
    subregions: { eyes: "Eyes", ears: "Ears", mouth_throat: "Mouth and throat", face: "Face", neck: "Neck" },
  },
  thorax: {
    label: "Thorax",
    subregions: {
      heart: "Heart",
      lungs_front: "Lungs (front)",
      lungs_back: "Lungs (back)",
      chest_wall: "Chest wall",
      breasts: "Breasts and axillae",
      thoracic_spine: "Thoracic spine",
    },
  },
  abdomen: {
    label: "Abdomen and back",
    subregions: {
      ruq: "Right upper quadrant",
      luq: "Left upper quadrant",
      rlq: "Right lower quadrant",
      llq: "Left lower quadrant",
      epigastrium: "Epigastrium",
      umbilical: "Central (periumbilical)",
      suprapubic: "Suprapubic",
      loins: "Loins",
      groin: "Groin",
      genitalia: "Genitalia",
      rectum: "Rectum",
      lumbar_spine: "Lumbar spine",
      sacroiliac: "Sacroiliac joints",
    },
  },
  upper_limb: {
    label: "Arm",
    subregions: { shoulder: "Shoulder", elbow: "Elbow", wrist_hand: "Wrist and hand", arm: "Whole arm" },
  },
  lower_limb: {
    label: "Leg",
    subregions: { hip: "Hip", knee: "Knee", calf: "Calf", ankle_foot: "Ankle and foot", leg: "Whole leg" },
  },
} as const;

export type Region = keyof typeof BODY;
export type Side = "left" | "right";

/**
 * Exams given at the start of every consult, free: general appearance is what
 * the doctor sees as the patient walks in. They are never performed, scored,
 * counted in the case maximum, or missed.
 */
export const GIVEN_EXAMS: ReadonlySet<string> = new Set(["general_inspection"]);

/** Limbs are examined left and right. */
export const isSided = (region: string) => region === "upper_limb" || region === "lower_limb";

/**
 * Exams reachable by pressing on a region (or a sub-region, once zoomed in)
 * and choosing a modality. The primary level offers everything in the region.
 */
export function examsAt(
  exams: readonly ExamItem[],
  region: Region,
  subregion: string | null,
  modality: Modality,
): ExamItem[] {
  return exams.filter(
    (e) =>
      e.region === region && e.modality === modality && (subregion === null || e.subregions.includes(subregion)),
  );
}

/**
 * A vital sign's reading as the bar shows it: just the number, with the
 * rhythm for heart rate ("About 120, irregularly irregular" → "120
 * irregular"; "96% on room air" → "96%RA"). The full finding stays in the
 * consult log. Falls back to the finding as written.
 */
export function vitalShort(id: string, finding: string): string {
  const first = (re: RegExp) => finding.match(re)?.[0];
  if (id === "blood_pressure") return first(/\d{2,3}\/\d{2,3}/) ?? finding;
  if (id === "temperature") return first(/\d{2}(?:\.\d)?/) ?? finding;
  if (id === "spo2") {
    const sat = finding.match(/(\d{2,3})\s*%/)?.[1];
    if (!sat) return finding;
    if (/room air/i.test(finding)) return `${sat}%RA`;
    const flow = finding.match(/(\d+(?:\.\d+)?)\s*L\b/)?.[1];
    return flow ? `${sat}% ${flow}L` : `${sat}%`;
  }
  if (id === "heart_rate") {
    const rate = first(/\d{1,3}/);
    if (!rate) return finding;
    const rhythm = /irregular/i.test(finding) ? " irregular" : /regular/i.test(finding) ? " regular" : "";
    return rate + rhythm;
  }
  if (id === "resp_rate") return first(/\d{1,3}/) ?? finding;
  return finding;
}

// Adult ranges outside which a reading shows red. Sources: heart rate
// [talley L5662: 60-100]; blood pressure [murtagh L1197: hypertension from
// 140/90; murtagh L15714: <90/60 a severity marker]; saturation [em L1100:
// target 94-98%]; temperature [murtagh L20179: normal 36-37.2 oral, fever
// >37.8 later in the day]. Respiratory rate >20 or <12 is the common
// early-warning cut-off (developer's call, 2026-09-30), stricter than
// Talley L9133, which allows up to 25.
const LIMITS = {
  heart_rate: { low: 60, high: 100 },
  resp_rate: { low: 12, high: 20 },
  spo2: { low: 94, high: Infinity },
  temperature: { low: 36, high: 37.8 },
} as const;

const BP_LIMITS = { high: { systolic: 140, diastolic: 90 }, low: { systolic: 90, diastolic: 60 } } as const;

// The unit, and the name of a reading above or below the range where there
// is one. Blood pressure's only name, hypotension, is decided in bandName.
const BAND_WORDS: Record<string, { unit: string; low?: string; high?: string }> = {
  heart_rate: { unit: " beats a minute", low: "bradycardia", high: "tachycardia" },
  resp_rate: { unit: " breaths a minute", high: "tachypnoea" },
  spo2: { unit: "%" },
  temperature: { unit: " °C", high: "fever" },
};

export type VitalBand = "low" | "normal" | "high";

const bloodPressure = (finding: string) => {
  const m = finding.match(/(\d{2,3})\/(\d{2,3})/);
  return m ? { systolic: Number(m[1]), diastolic: Number(m[2]) } : null;
};

/** Where a reading sits against the adult range; null with no range or no number. */
export function vitalBand(id: string, finding: string): VitalBand | null {
  if (id === "blood_pressure") {
    const bp = bloodPressure(finding);
    if (!bp) return null;
    if (bp.systolic >= BP_LIMITS.high.systolic || bp.diastolic >= BP_LIMITS.high.diastolic) return "high";
    if (bp.systolic < BP_LIMITS.low.systolic || bp.diastolic < BP_LIMITS.low.diastolic) return "low";
    return "normal";
  }
  const limits = LIMITS[id as keyof typeof LIMITS];
  if (!limits) return null;
  const n = Number.parseFloat(vitalShort(id, finding));
  if (!Number.isFinite(n)) return null;
  return n < limits.low ? "low" : n > limits.high ? "high" : "normal";
}

/** Is this vital sign reading outside the normal adult range? */
export function vitalAbnormal(id: string, finding: string): boolean {
  const band = vitalBand(id, finding);
  return band === "low" || band === "high";
}

function vitalRange(id: string): string {
  if (id === "blood_pressure") {
    const { low, high } = BP_LIMITS;
    // No unit: the reading on screen has none.
    return `at least ${low.systolic}/${low.diastolic} and below ${high.systolic}/${high.diastolic}`;
  }
  const { low, high } = LIMITS[id as keyof typeof LIMITS];
  const unit = BAND_WORDS[id]?.unit ?? "";
  return high === Infinity ? `${low}${unit} or higher` : `${low} to ${high}${unit}`;
}

function bandName(id: string, finding: string, band: "low" | "high"): string | undefined {
  // "Hypotension" only when the top number is low; a low bottom number alone has no name.
  if (id === "blood_pressure") {
    return band === "low" && bloodPressure(finding)!.systolic < BP_LIMITS.low.systolic ? "hypotension" : undefined;
  }
  return BAND_WORDS[id]?.[band];
}

/** One plain sentence for the vital's card ("Below the normal adult range (…): bradycardia."), or null. */
export function vitalSentence(id: string, finding: string): string | null {
  // A saturation on oxygen can't be judged against the room-air range.
  if (id === "spo2" && !/room air/i.test(finding)) return null;
  const band = vitalBand(id, finding);
  if (!band) return null;
  if (band === "normal") return `Within the normal adult range (${vitalRange(id)}).`;
  const name = bandName(id, finding, band);
  return `${band === "low" ? "Below" : "Above"} the normal adult range (${vitalRange(id)})${name ? `: ${name}` : ""}.`;
}
