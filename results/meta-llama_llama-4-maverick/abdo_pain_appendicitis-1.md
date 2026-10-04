# meta-llama/llama-4-maverick: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, thanks for coming in today. Can you tell me more about the tummy pain you've been having since last night?
PT: It's down here on the right side, low down. Started last night, about ten o'clock. It's there all the time now. It's a seven out of ten.
DR: Can you describe the pain? Is it sharp, dull, crampy, or something else?
PT: Dull. Not sharp. Not crampy. Just there.
  Unknown exam "abdomen_exam". Use list_exams or search.
  Unknown exam "vitals_exam". Use list_exams or search.
  Abdominal palpation (Right lower quadrant) at rlq: Marked tenderness, maximal at McBurney's point, with voluntary guarding. [abnormal]
  Unknown exam "vitals_temp". Use list_exams or search.
  Abdominal palpation at other: Soft and non-tender in this area.
  Abdominal percussion (Right lower quadrant) at rlq: Tender to light percussion. [abnormal]
  Rebound tenderness (Right lower quadrant) at rlq: Rebound tenderness present; he winces sharply. [abnormal]
  Temperature: 37.9 °C.
DR: Have you had any other symptoms like nausea, vomiting, fever, or changes in bowel movements?
PT: Nope. Just the pain.
  Unknown test "urine_hcg". Use search with kind "tests".
  Unknown test "fbc". Use search with kind "tests".
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
DR: I'm going to order some tests to help figure out what's going on. In the meantime, I want to advise you to avoid eating or drinking until we've got a clearer picture, and to come back or go to the emergency department if your symptoms worsen.
PT: I don't want to eat or drink. Alright.
  Unknown referral "surgical_referral". Use search with kind "referrals".
  Unknown diagnosis id(s): ectopic pregnancy. Use search with kind "diagnoses".
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  Urine pregnancy test: Negative.
  Referred: General surgeon
  Unknown diagnosis id(s): ectopic pregnancy. Use search with kind "diagnoses".
  Diagnosis saved: most likely Appendicitis; differential Appendicitis; can't miss Ectopic pregnancy.
END CONSULT

## Bill: 13/420 (Intern), harmful
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +10 Abdominal palpation
- +5 Abdominal percussion
- +5 Rebound tenderness
- +10 Temperature
- -2 Unnecessary: Urine pregnancy test
- -30 Harmful: Routine referral to a general surgeon (outpatient appointment)
- +20 Correct diagnosis: Appendicitis
- -20 Not a can't-miss diagnosis here: Ectopic pregnancy
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "I want to advise you to avoid eating or drinking until we've got a clearer picture")
- -30 Not done: Refer to the emergency department today for surgical assessment

Samuel goes home to wait for a surgical outpatient appointment. His appendix perforates before he is seen, and he is brought in by ambulance with peritonitis.
