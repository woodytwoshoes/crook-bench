# moonshotai/kimi-k3: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: G'day Samuel, I'm the doctor. I can see you're not comfortable. Tell me about this tummy pain — when exactly did it start, and where in the belly did it start?
PT: Started last night around ten, sort of near my belly button, but it moved down to the right during the night and is there all the time now.
DR: How bad is the pain now out of ten, and is it sharp, crampy or dull? Does anything make it worse — like moving, coughing, or pressing on it?
PT: Maybe a seven out of ten. Yeah, walking hurts, every bump in the car on the way here was awful, and coughing is the worst.
DR: Have you felt sick in the stomach or vomited? And have you lost your appetite?
PT: Felt sick since the early hours and threw up once this morning, and I couldn't face breakfast, not hungry at all which isn't like me.
DR: Have you had a fever or felt hot and cold, or shivery? And how are your bowels — have you opened them today, any diarrhoea or constipation, any blood or mucus?
PT: I felt hot and a bit shivery last night. I went normally yesterday morning and nothing since, and no blood.
DR: Any pain when you pass urine, going more often, or any blood in the urine? And any pain or swelling in your testicles or groin?
PT: Weeing is normal, and there's nothing down there or any lumps.
DR: Have you ever had anything like this before? Any past operations or medical problems? And have you eaten anything dodgy or has anyone around you been sick?
PT: Never had anything like this, and I've never had an operation, I've still got my appendix as far as I know. I just had the usual, Mum's cooking on Sunday, and everyone at home and work is fine.
  (list_exams vitals)
  (list_exams abdomen)
  Temperature: 37.9 °C.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Renal angle tenderness: No renal angle tenderness.
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  (search referrals "emergency department": 3 found)
  Referred: Emergency department by ambulance (call 000)
  (search drugs "paracetamol": 5 found)
  Given in clinic: Paracetamol 500 mg tablets, 1 g (2 tablets) Stat dose
DR: Samuel, I think you have appendicitis — that's inflammation of the appendix, a small pouch off the bowel in the right lower part of your belly. Your story is classic: pain starting near the belly button, moving to the lower right, with fever, loss of appetite, vomiting, and a very tender spot when I press there. This isn't something that will settle at home, and it's not safe to wait — I've called an ambulance to take you to the emergency department now.
PT: An ambulance? Are you serious? I just need to get back to the job site.
DR: I am serious, and here's why: an inflamed appendix can burst, and if that happens the infection spreads inside your belly, which can make you very sick and the operation and recovery much bigger. Going in now means it can be dealt with early, often with keyhole surgery. Work will understand — this is a genuine emergency, and I can give you a certificate for your employer. At hospital they'll do blood tests, probably a scan, and the surgeons will decide on removing it.
PT: Alright, if it's that serious I suppose I better go.
DR: Good call. A few important things: from now on, nothing to eat or drink — that includes water — because you may need an anaesthetic soon. I've given you two paracetamol tablets for the pain, which you can have with a tiny sip just to swallow. The ambulance will take you in safely; don't try to drive yourself or catch a lift. While you wait, lie still in whatever position is comfortable, and if the pain suddenly gets much worse, you feel faint, or you vomit again, tell me straight away. Do you have someone you'd like to call — your mum or your boss — while we wait?
PT: No, I haven't fainted or felt faint, and I'll call my boss now.
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "bowel obstruction": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Bowel obstruction.
END CONSULT

## Bill: 355/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Unusual food or takeaway recently
- +5 Anyone around him with vomiting or diarrhoea
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +5 Renal angle tenderness
- +10 Testes
- +5 Hernial orifices
- +15 Refer to the emergency department today for surgical assessment
- +15 Pain relief before transfer
- +10 Red flag excluded: Fainting or light-headedness
- +20 Correct diagnosis: Appendicitis
- +5 Acceptable, not ideal: Bowel obstruction in the can't-miss slot
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "Samuel, I think you have appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "from now on, nothing to eat or drink — that includes water")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
