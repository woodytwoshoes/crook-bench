# google/gemini-4-argon: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the GP today. I can see you're quite uncomfortable. Could you tell me all about this tummy pain that started last night?
PT: Started last night about ten o'clock, so maybe fourteen hours. It is down here on the right side, low down. At first it sort of came and went, but it is there all the time now. Maybe a seven out of ten. I am not one to complain.
DR: Did the pain start down on that lower right side, or did it start somewhere else like around your belly button and move down there? Also, what does the pain feel like, and does anything make it worse or better, like moving around or coughing?
PT: It actually started around my belly button and moved down to the right sometime overnight. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst.
DR: That sounds really sore. Does the pain spread anywhere else, like into your back or down into your groin or testicles? Have you had any nausea, vomiting, or loss of appetite?
PT: No, nothing down there. I have felt sick since the early hours, and I threw up once this morning. I couldn't face breakfast, and I am not hungry at all, which isn't like me.
DR: Have you had any changes in your bowel habits, like diarrhoea, constipation, or blood in your poo? And have you felt feverish, shivery, or noticed any stinging or blood when you pass urine?
PT: No diarrhoea, I went normally yesterday morning and nothing since, and no blood. I felt hot and a bit shivery last night, but weeing is normal.
DR: Have you ever had pain like this before, or had any previous tummy surgeries? Do you have any medical conditions, take any regular medications or painkillers today, or have any allergies?
PT: No, I have never had anything like this, and I have never had an operation. I've still got my appendix as far as I know. I took a couple of paracetamol at six this morning, but it didn't do much.
DR: And just a couple of quick background questions: do you have any family history of bowel conditions, do you smoke or drink alcohol, and how did you get into the clinic today—is someone here with you?
PT: I don't smoke, and I had a few beers on the weekend with nothing this week.
DR: Do you have any allergies to medications, and did someone drive you here today?
PT: No allergies, and I drove myself.
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
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  (search tests "urine": 8 found)
  (search referrals "emergency": 5 found)
  (search referrals "surgical": no matches)
  (search diagnoses "appendicitis": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search diagnoses "peritonitis": 1 found)
  (search diagnoses "torsion": 2 found)
  (search diagnoses "perforated": 1 found)
  (search diagnoses "renal": 5 found)
  (search diagnoses "bowel": 5 found)
  (search diagnoses "diverticulitis": 1 found)
  (search diagnoses "adenitis": 1 found)
  (search diagnoses "sepsis": 1 found)
DR: Samuel, thank you for letting me examine you. Based on your symptoms—the pain starting around your belly button and moving to your lower right side, the loss of appetite, feeling sick—and the tenderness and slight fever I found today, the most likely cause is acute appendicitis, which is an inflammation of your appendix. Is there anyone we can call to drive you straight to the hospital emergency department, or would you prefer we arrange an ambulance?
PT: Right to hospital? I can just drive myself back, can't I?
DR: I strongly advise against driving yourself because you are in significant pain, every bump hurts, and if the pain suddenly worsens on the road it wouldn't be safe for you or others. Do you have a partner, family member, or mate nearby who could pick you up right now, or shall we get an ambulance or taxi?
PT: Alright, call an ambulance if you reckon it's that bad.
  Referred: Emergency department by ambulance (call 000)
  Referred: Phone the emergency department (clinical handover)
DR: I've organized the ambulance for you and called the emergency department to hand over your details so they are expecting you. Importantly, please do not eat or drink anything at all from now on—stay completely nil by mouth—in case the surgical team needs to do an operation to remove your appendix today. At the hospital, they will give you strong pain relief, put a drip in for fluids, do some blood tests and possibly an ultrasound or CT scan, and have the surgeons assess you. While we wait for the paramedics, please let me or the clinic nurse know immediately if your pain suddenly becomes much worse or spreads all over your tummy, if you feel dizzy or faint, or start vomiting again.
PT: Right, okay. Thanks for sorting that out.
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 345/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Nausea or vomiting
- +10 Appetite
- +10 Diarrhoea
- +5 Blood in the stools
- +20 Red flag: Fever, sweats or chills
- +10 Pain or frequency passing urine
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Pain relief taken so far
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +5 Hernial orifices
- +10 Testes
- +5 Renal angle tenderness
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "the most likely cause is acute appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "please do not eat or drink anything at all from now on—stay completely nil by mouth")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
