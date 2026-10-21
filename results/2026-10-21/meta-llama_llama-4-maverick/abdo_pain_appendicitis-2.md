# meta-llama/llama-4-maverick: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, thanks for coming in today. Can you tell me more about the tummy pain you've been having since last night?
PT: Down here on the right side, low down. Started last night, about ten o'clock, so maybe fourteen hours. It is there all the time now, but at first it sort of came and went. Maybe a seven out of ten, though I am not one to complain.
  Unknown exam "abdomen_exam_look". Use list_exams or search.
  (list_exams abdomen)
  Abdominal palpation (Right lower quadrant): Marked tenderness, maximal at McBurney's point, with voluntary guarding. [abnormal]
DR: I'm going to check for some other signs that might be related to your pain. Can you tell me if you've had any nausea or vomiting?
PT: Felt sick since the early hours, and I threw up once this morning.
  Rebound tenderness (Right lower quadrant): Rebound tenderness present; he winces sharply. [abnormal]
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  Urea, electrolytes and creatinine (UEC): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  (search referrals "surgeon": 6 found)
  Referred: General surgeon
DR: Samuel, based on your symptoms and the examination, I'm concerned that you might have appendicitis. I'm going to refer you to a general surgeon for further evaluation and possible surgery. You should go to the hospital as soon as possible for further assessment.
PT: Surgery? I just thought it was a bad stomach bug. Can I at least go home and grab my phone charger first?
  Unknown diagnosis id(s): peritonitis. Use search with kind "diagnoses".
  (search diagnoses "peritonitis": 1 found)
  Unknown diagnosis id(s): peritonitis. Use search with kind "diagnoses".
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 65/420 (Intern), harmful
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +10 Abdominal palpation
- +10 Nausea or vomiting
- +5 Rebound tenderness
- +5 Full blood examination (FBE)
- +5 Urea, electrolytes and creatinine (UEC)
- +5 C-reactive protein (CRP)
- -30 Harmful: Routine referral to a general surgeon (outpatient appointment)
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "I'm concerned that you might have appendicitis.")
- -30 Not done: Refer to the emergency department today for surgical assessment

Samuel goes home to wait for a surgical outpatient appointment. His appendix perforates before he is seen, and he is brought in by ambulance with peritonitis.
