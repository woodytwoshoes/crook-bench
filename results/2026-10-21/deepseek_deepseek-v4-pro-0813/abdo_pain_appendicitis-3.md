# deepseek/deepseek-v4-pro-0813: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I understand you've had tummy pain since last night. Can you tell me more about it — where exactly is the pain?
PT: Down here on the right side, low down. Started last night, about ten o'clock, so maybe fourteen hours. It's there all the time now. At first it sort of came and went. Maybe a seven out of ten.
DR: I see. Did the pain start somewhere else first — like around your belly button — before moving down to the right side?
PT: Yeah, it actually started around my belly button. It moved down to the right sometime overnight.
DR: Have you felt sick or actually vomited? And have you had any fever, chills or sweats?
PT: Felt sick since the early hours, and I threw up once this morning. I felt hot and a bit shivery last night.
DR: How's your appetite been, and have your bowels been normal — any diarrhoea or constipation?
PT: I couldn't face breakfast, not hungry at all, which isn't like me. I didn't have diarrhoea, I went normally yesterday morning, nothing since.
DR: Does it hurt more when you move, cough, or when the car went over a bump on the way here?
PT: Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
DR: Any burning or pain when you pass urine, or needing to go more often?
PT: No, weeing is normal.
DR: Any pain in your chest, trouble breathing, or a cough?
PT: No, nothing like that.
  (list_exams vitals)
  (list_exams abdomen)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Temperature: 37.9 °C.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  (search tests "FBE": 1 found)
  (search tests "CRP": 1 found)
  (search referrals "emergency": 5 found)
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  Referred: Emergency department (patient to self-present)
DR: Samuel, I've examined you and I'm concerned this is more than a stomach bug. The story — pain starting around your belly button and moving to the lower right side, with fever, feeling sick and being off your food — together with the tenderness I found in your lower right tummy, points strongly to appendicitis, which is inflammation of the appendix. This needs to be assessed in hospital today, because if it's left it can burst and cause a serious infection.
PT: Oh right. Do I really have to go straight there? I've got work tomorrow.
DR: Yes, I'm afraid you do need to go now, today. This won't settle on its own and delaying could make things much worse. Please go straight to the emergency department — don't wait. It's important you don't eat or drink anything from now on, in case you need an operation. If the pain suddenly gets much worse, or you feel faint, dizzy or very unwell on the way, call 000 for an ambulance.
PT: Okay, I'll go right now.
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "nothing": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Nothing to exclude.
END CONSULT

## Bill: 260/420 (Fellow), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +10 Appetite
- +10 Diarrhoea
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Pain or frequency passing urine
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +5 Cough test
- +5 Full blood examination (FBE)
- +5 C-reactive protein (CRP)
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Testicular torsion, Perforated viscus with peritonitis, Strangulated or incarcerated hernia
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "points strongly to appendicitis, which is inflammation of the appendix.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "It's important you don't eat or drink anything from now on, in case you need an operation.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
