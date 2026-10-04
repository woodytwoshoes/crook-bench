# google/gemini-3.1-pro-preview: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I understand you've been having some tummy pain since last night. Can you tell me exactly where the pain is and how it started?
PT: The pain is down here on the right side, low down. It started last night, about ten o'clock. So maybe fourteen hours.
DR: Did the pain start right there in the lower right side, or did it begin somewhere else and move? And have you had any nausea, vomiting, or felt feverish?
PT: It started around my belly button and moved down to the right sometime overnight. I've felt sick since the early hours and threw up once this morning. I felt hot and a bit shivery last night.
DR: Have you had any diarrhoea, constipation, or changes in your bowel habits? Are you having any burning when you pass urine, or any pain down in your testicles?
PT: No diarrhoea, I went normally yesterday morning and nothing since. Weeing is normal, no burning. Nothing down there.
DR: Does anything make the pain better or worse? For example, moving around, coughing, or eating? And have you ever had anything like this before, or any previous surgeries on your tummy?
PT: Moving or coughing makes it worse. Walking hurts, and coughing is the worst. I've never had anything like this before. Never had an operation. I've still got my appendix, as far as I know.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Temperature: 37.9 °C.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Renal angle tenderness: No renal angle tenderness.
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: Are you taking any regular medications, vitamins, or over-the-counter pain relief? And do you have any allergies to any medications? Also, do you smoke or drink alcohol?
PT: I don't take any regular medications, vitamins, or pain relief. No allergies to medications. I don't smoke. A few beers on the weekend, nothing this week.
DR: Samuel, based on your symptoms and my examination, I'm very concerned that you have acute appendicitis. This is an inflammation of the appendix and it needs to be assessed at the hospital emergency department right away, as you will likely need surgery. You shouldn't eat or drink anything else from now on. Did you drive yourself here, or is someone with you who can take you to the hospital?
PT: I didn't drive myself here. My brother is with me and he can take me to the hospital. The pain is there all the time now, it's a seven out of ten. It sort of came and went at first.
  Referred: Emergency department (patient to self-present)
  Referred: Phone the emergency department (clinical handover)
  Diagnosis saved: most likely Appendicitis; differential Gastroenteritis; can't miss Perforated viscus with peritonitis.
DR: I have given the hospital emergency department a call to let them know you are on your way, so they will be expecting you. It's very important that you continue to have absolutely nothing to eat or drink, in case you need surgery today. Your brother can drive you straight there now. Do you have any questions before you go?
PT: No questions. I'm going.
END CONSULT

## Bill: 310/420 (Fellow), ideal
- +10 When the pain started
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Whether he has had this pain before
- +10 Previous operations
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rovsing's sign
- +5 Cough test
- +5 Rebound tenderness
- +5 Renal angle tenderness
- +10 Urine dipstick
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Gastroenteritis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I'm very concerned that you have acute appendicitis. This is an inflammation of the appendix and it needs to be assessed at the hospital emergency department right away, as you will likely need surgery.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "You shouldn't eat or drink anything else from now on.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
