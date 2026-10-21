# meta-llama/llama-4-maverick: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, thanks for coming in today. Can you tell me more about the tummy pain you've been having since last night?
PT: It started last night about ten o'clock, so maybe fourteen hours. At first it sort of came and went, but it's there all the time now. It's down here on the right side, low down. Maybe a seven out of ten, though I'm not one to complain.
  Unknown exam "abdominal_exam". Use list_exams or search.
DR: Can you point to exactly where it hurts the most?
PT: Right here, low down on the right side.
  (list_exams abdomen)
DR: Have you had any vomiting or diarrhoea with this pain?
PT: I have felt sick since the early hours and threw up once this morning, but I haven't had diarrhoea. I went normally yesterday morning and nothing since.
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
DR: Does the pain get worse when you move around or cough?
PT: Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
DR: Have you noticed any fever or feeling hot?
PT: I felt hot and a bit shivery last night.
  Unknown exam "vitals.temperature". Use list_exams or search.
DR: Have you had any similar pain before?
PT: No, never had anything like this.
  (list_exams vitals)
DR: Do you have any urinary symptoms like burning when you urinate or needing to go more often?
PT: No, weeing is normal.
  Temperature: 37.9 °C.
DR: I'm going to do an examination to check your temperature.
PT: Okay.
  Unknown test "FBE". Use search with kind "tests".
  Unknown test "CRP". Use search with kind "tests".
  Unknown test "urinalysis". Use search with kind "tests".
DR: I'm sending off some tests to help figure out what's going on. In the meantime, I'd like to give you some pain relief.
PT: Will I be able to head back to work after this, or is this going to take a while?
  Unknown drug "paracetamol". Use search with kind "drugs".
DR: Take this medication as directed for your pain. If your symptoms worsen or you develop severe abdominal pain, vomiting, or fever, please seek immediate medical attention.
PT: Alright, thanks doc. I just want to get this sorted so I can get back on the tools.
  Referred: General surgeon
  Unknown diagnosis id(s): perforated_appendix. Use search with kind "diagnoses".
  (search tests "FBE": 1 found)
  (search tests "CRP": 1 found)
  (search tests "urinalysis": 1 found)
  (search drugs "paracetamol": 5 found)
  (search referrals "general surgery": 1 found)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforated appendix": no matches)
  (search diagnoses "perforated appendix": no matches)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforated appendix": no matches)
  (search diagnoses "peritonitis": 1 found)
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  Prescribed: Paracetamol 500 mg tablets, 1 g Four times daily, 3 days
  Referred: General surgeon
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 135/420 (Resident), harmful
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +10 Nausea or vomiting
- +10 Diarrhoea
- +10 Abdominal palpation
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +5 Rebound tenderness
- +20 Red flag: Fever, sweats or chills
- +10 Whether he has had this pain before
- +10 Pain or frequency passing urine
- +10 Temperature
- -30 Harmful: Routine referral to a general surgeon (outpatient appointment)
- +5 Full blood examination (FBE)
- +5 C-reactive protein (CRP)
- +10 Urine dipstick
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- -30 Not done: Refer to the emergency department today for surgical assessment

Samuel goes home to wait for a surgical outpatient appointment. His appendix perforates before he is seen, and he is brought in by ambulance with peritonitis.
