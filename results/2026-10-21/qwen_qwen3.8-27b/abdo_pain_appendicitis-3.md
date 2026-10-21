# qwen/qwen3.8-27b: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm Dr. Anand. Thanks for coming in — I can see you're not feeling well. Can you walk me through what's been going on with your tummy, starting from when you first noticed something was wrong?
PT: Started last night, about ten o'clock. So maybe fourteen hours. It's down here on the right side, low down. At first it sort of came and went, but it's there all the time now. Maybe a seven out of ten. I'm not one to complain.
DR: Thank you, that helps. The pain is low on the right side — can you describe exactly where it is, and was it anywhere else first, like around your belly button, before it settled there? And has it moved or changed since it started?
PT: It actually started around my belly button. It moved down to the right sometime overnight.
DR: Okay. And what else have you noticed since it started — any loss of appetite, nausea or vomiting, fever, chills, wind or bloating? Have you opened your bowels or passed wind recently? Any burning or frequency with urination?
PT: I couldn't face breakfast and am not hungry at all. I've felt sick since the early hours and threw up once this morning. I felt hot and a bit shivery last night. No diarrhoea, I went normally yesterday morning and nothing since. Weeing is normal.
DR: Does coughing, walking, or little jolts make the pain worse? Do you have any pain or swelling down into your right groin or testicles? And have you ever had anything like this before, or had any abdominal operations?
PT: Yeah, walking hurts, every bump in the car on the way here was awful, and coughing is the worst. No lumps or anything down there. I've never had anything like this before, and I've never had an operation, so I've still got my appendix as far as I know.
  (list_exams vitals)
  (list_exams abdomen)
  Temperature: 37.9 °C.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation (Right lower quadrant): Marked tenderness, maximal at McBurney's point, with voluntary guarding. [abnormal]
  Rebound tenderness (Right lower quadrant): Rebound tenderness present; he winces sharply. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness (Loins): No renal angle tenderness.
  Hernial orifices (Groin): No hernias.
  (search tests "full blood count": 1 found)
  (search tests "urinalysis": 1 found)
  (search tests "C reactive protein": 1 found)
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search referrals "emergency department": 3 found)
  (search referrals "surgeon": 6 found)
  (search diagnoses "appendicitis": 1 found)
  (search drugs "paracetamol": 5 found)
  Referred: Emergency department (patient to self-present)
  Prescribed: Paracetamol 500 mg tablets, 1000 mg (2 tablets) Every 6 hours, 3 days
  Diagnosis saved: most likely Appendicitis; can't miss Appendicitis.
END CONSULT

## Bill: 290/420 (Fellow), acceptable
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Appetite
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 A lump or bulge in the groin
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Whether he has had this pain before
- +10 Previous operations
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +10 Testes
- +5 Renal angle tenderness
- +5 Hernial orifices
- +5 Full blood examination (FBE)
- +5 C-reactive protein (CRP)
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- -10 Can't-miss slot repeats the most likely diagnosis: Appendicitis. Can't miss here: Testicular torsion, Perforated viscus with peritonitis, Strangulated or incarcerated hernia

Samuel gets to hospital and has his appendix out. Missing from the plan: explain that appendicitis is likely; pain relief before transfer; advise nothing to eat or drink until the surgical team has seen him.
