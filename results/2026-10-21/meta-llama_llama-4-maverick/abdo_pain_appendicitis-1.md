# meta-llama/llama-4-maverick: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, can you tell me more about the tummy pain you've been having since last night?
PT: Started last night, about ten o'clock. So maybe fourteen hours. It's down here on the right side, low down. At first it sort of came and went, but it's there all the time now. Maybe a seven out of ten. I'm not one to complain.
DR: Can you describe the pain in more detail? Is it sharp, dull, crampy, or something else?
PT: I am not sure.
  (list_exams abdomen)
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
DR: The pain seems to be mainly in your right lower abdomen. Have you noticed any other symptoms like nausea, vomiting, fever, or changes in bowel movements or urination?
PT: Felt sick since the early hours, and I threw up once this morning. I felt hot and a bit shivery last night. No diarrhoea, I went normally yesterday morning, nothing since. No, weeing is normal.
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Unknown test "FBE". Use search with kind "tests".
  Unknown test "UEC". Use search with kind "tests".
  Unknown test "CRP". Use search with kind "tests".
  (search tests "FBE": 1 found)
  (search tests "UEC": 1 found)
  (search tests "CRP": 1 found)
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  Urea, electrolytes and creatinine (UEC): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  Unknown referral "surgical_referral". Use search with kind "referrals".
  (search referrals "surgical referral": no matches)
  (search referrals "surgeon": 6 found)
  Referred: General surgeon
DR: Samuel, based on your symptoms and the examination, I am concerned that you might have appendicitis. I have referred you to see a general surgeon as soon as possible for further evaluation and management. In the meantime, it's essential to avoid eating or drinking until you've been seen by the surgeon, as you may need surgery. Please go directly to the emergency department if you experience severe pain, vomiting, or feel unwell.
PT: Surgery? I was just hoping to get some tablets and head back to the site.
  Unknown diagnosis id(s): perforated_appendix. Use search with kind "diagnoses".
  (search diagnoses "perforated appendix": no matches)
  Unknown diagnosis id(s): perforated appendix. Use search with kind "diagnoses".
  (search diagnoses "appendicitis": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Nothing to exclude.
END CONSULT

## Bill: 95/420 (Resident), harmful
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +10 Abdominal palpation
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Full blood examination (FBE)
- +5 Urea, electrolytes and creatinine (UEC)
- +5 C-reactive protein (CRP)
- -30 Harmful: Routine referral to a general surgeon (outpatient appointment)
- +20 Correct diagnosis: Appendicitis
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Testicular torsion, Perforated viscus with peritonitis, Strangulated or incarcerated hernia
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "I am concerned that you might have appendicitis.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "it's essential to avoid eating or drinking until you've been seen by the surgeon")
- -30 Not done: Refer to the emergency department today for surgical assessment

Samuel goes home to wait for a surgical outpatient appointment. His appendix perforates before he is seen, and he is brought in by ambulance with peritonitis.
