// Everyday GP topics that aren't part of this case. Without them, the 8B
// model forces an off-case question onto the nearest case topic ("been in
// hospital recently?" -> injecting drug use), and the actor then has to say
// that fact: a non-sequitur. With them, the question lands somewhere true
// and releases nothing. Filtering out those that sound like a case item
// automatically removed exactly the ones needed ("night sweats" -> "pain at
// night"), so the prompt says a case topic on the same subject wins, and a
// case drops a decoy only where one of its history items `covers` it.
// Check with `npm run eval:sweep`.
export const DECOYS: readonly { id: string; topic: string }[] = [
  // Without it, "Do you take any medications?" lands on a case's only
  // medicine topic (Graham's occasional Viagra); the patient names the
  // regular ones from the record anyway. First in the list: in the middle
  // it didn't win (eval:classifier).
  { id: "other_regular_medicines", topic: "Regular medicines" },
  // Conditions usually on the record rather than in the history: without
  // these, "Do you have high blood pressure?" released Graham's blood
  // thinners ("No, nothing like that"), a denial of his hypertension.
  { id: "other_blood_pressure", topic: "High blood pressure" },
  { id: "other_cholesterol", topic: "High cholesterol" },
  { id: "other_catheter", topic: "Urinary catheter" },
  { id: "other_hospital", topic: "Recent hospital stays" },
  { id: "other_operations", topic: "Past operations" },
  { id: "other_travel", topic: "Recent travel" },
  { id: "other_alcohol", topic: "Alcohol" },
  { id: "other_smoking", topic: "Smoking" },
  { id: "other_drugs", topic: "Recreational drugs" },
  { id: "other_weight", topic: "Weight change" },
  { id: "other_appetite", topic: "Appetite" },
  { id: "other_sleep", topic: "Sleep" },
  { id: "other_mood", topic: "Mood or stress" },
  { id: "other_concerns", topic: "What they fear it might be" },
  { id: "other_headache", topic: "Headache" },
  { id: "other_cough", topic: "Cough or cold" },
  { id: "other_chest_pain", topic: "Chest pain" },
  { id: "other_breathing", topic: "Shortness of breath" },
  { id: "other_bowels", topic: "Diarrhoea, constipation or blood in stools" },
  { id: "other_urine", topic: "Passing urine" },
  { id: "other_rash", topic: "Rashes or itch" },
  { id: "other_joints", topic: "Joint pains" },
  { id: "other_numbness", topic: "Numbness or tingling" },
  { id: "other_vision", topic: "Vision" },
  { id: "other_contacts", topic: "Unwell people around them" },
  { id: "other_work", topic: "Work" },
  { id: "other_home", topic: "Who they live with" },
  { id: "other_exercise", topic: "Exercise" },
  { id: "other_diet", topic: "Diet and food" },
  { id: "other_family", topic: "Family history" },
  { id: "other_vaccines", topic: "Vaccinations" },
  { id: "other_allergies", topic: "Allergies" },
  { id: "other_injury", topic: "Injuries, falls or lifting" },
  { id: "other_previous", topic: "Whether this has happened before" },
  { id: "other_relief", topic: "What makes it better or worse" },
  { id: "other_treatment_tried", topic: "Treatment already tried" },
  { id: "other_seen_elsewhere", topic: "Seen anyone else about it" },
  { id: "other_swelling", topic: "Swelling or lumps" },
  { id: "other_thirst", topic: "Thirst" },
  { id: "other_sweats", topic: "Sweats or fever" },
  { id: "other_bites", topic: "Bites or pets" },
  { id: "other_dental", topic: "Dental work" },
];

export const DECOY_IDS: ReadonlySet<string> = new Set(DECOYS.map((d) => d.id));
