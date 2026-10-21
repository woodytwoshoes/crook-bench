# moonshotai/kimi-k3: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: G'day Samuel, come in and have a seat — or lie down if that's more comfortable. I can see you're in a bit of discomfort. Tell me about this tummy pain: where exactly is it, and when did it start?
PT: Down here on the right side, low down. It started last night, about ten o'clock. So maybe fourteen hours.
DR: Right, fourteen hours of pain low on the right side. A couple more questions: when it first started last night, was the pain in the same spot, or did it start somewhere else and move? And how would you describe it — a dull ache, a cramping pain, or sharp?
PT: It actually started around my belly button. It moved down to the right sometime overnight.
DR: That's a really important detail. Now, how would you describe the pain itself — is it a dull ache or a sharp, stabbing pain? And on a scale of zero to ten, how bad is it right now? Does anything make it worse — like moving around, coughing, or the bumps in the car on the way here?
PT: It's there all the time now. At first it sort of came and went. Maybe a seven out of ten. I'm not one to complain. Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
DR: Okay, that's helpful. Now some questions about other symptoms: have you felt sick in the stomach or vomited? How's your appetite been — have you eaten today? And any fever, chills or sweats that you've noticed?
PT: Felt sick since the early hours, and I threw up once this morning. I couldn't face breakfast, not hungry at all, which isn't like me. I felt hot and a bit shivery last night.
DR: Got it. Now a few more, and some of these are a bit personal but important: have your bowels been normal — any diarrhoea or constipation? Any pain or burning when you pass urine, or blood in it? And any pain or aching in your testicles?
PT: No diarrhoea, I went normally yesterday morning, nothing since. Weeing is normal, and nothing down there.
DR: Good. Have you ever had a pain like this before, even a milder one that went away? Any past medical problems, operations, or regular medicines? And has anyone around you — at work or at home — had a stomach bug recently?
PT: No, never had anything like this or had an operation, and I've still got my appendix as far as I know. Everyone at home and work is fine.
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
  Bowel sounds: Present, slightly reduced. [abnormal]
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  (search referrals "emergency department": 3 found)
  (search referrals "ambulance": 1 found)
DR: Samuel, I want to be straight with you: everything points to appendicitis — that's an inflamed appendix. The way your pain started around your belly button and moved to the right lower side, the fever, feeling sick and going off your food, and what I found when I pressed on your tummy all fit that picture. This isn't something that will settle at home — it needs to be dealt with in hospital today, most likely with an operation to remove the appendix. I'm going to arrange an ambulance to take you to the emergency department now, and I'll phone ahead so they're expecting you.
PT: An ambulance? Can't I just drive there myself?
  Referred: Emergency department by ambulance (call 000)
DR: I hear you, but I'd really advise against driving. Your tummy showed signs of irritation of the abdominal lining — that means things could worsen quickly, and being in severe pain behind the wheel isn't safe for you or anyone else. The ambulance crew can look after you on the way and get you straight in. A couple of important things while we wait: don't eat or drink anything from now on, because if you need an operation your stomach needs to be empty — small sips of water to swallow a tablet are okay. Let me give you some paracetamol now for the pain, and I'll call the hospital to hand over your details.
PT: Alright, if you reckon.
  (search drugs "paracetamol": 5 found)
  Referred: Phone the emergency department (clinical handover)
  Given in clinic: Paracetamol 500 mg tablets, 1 g (2 tablets) Stat dose
DR: At the hospital they'll take some blood tests, may do a scan of your tummy, and the surgeons will assess you — most likely they'll recommend an operation today to remove the appendix, usually with keyhole surgery. It's a very common operation and people your age generally recover quickly. The reason we're not mucking around is that an inflamed appendix can burst, and that turns a straightforward problem into a much more serious one — so please don't delay or try to tough it out. Do you have any questions for me? Is there someone — family or a mate — you'd like me to help you call to meet you at the hospital?
PT: Nah, I'll just ring my old man.
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "peritonitis": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 340/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Anyone around him with vomiting or diarrhoea
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Hernial orifices
- +10 Testes
- +5 Renal angle tenderness
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +15 Pain relief before transfer
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "everything points to appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "don't eat or drink anything from now on")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
