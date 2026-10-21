# anthropic/claude-fable-5.1: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I can see you're uncomfortable — tell me about this tummy pain. Where did it start, where is it now, and what's it been like since last night?
PT: It started last night around ten o'clock, on the right side down low, and it's been there all the time now, though it sort of came and went at first. It's a seven out of ten, and walking and coughing make it worse — every bump in the car was awful.
DR: Thanks. A few more things: did the pain start around your belly button or in the middle before moving to the right? Have you had any nausea or vomiting, and when did you last eat? Any fever, chills or sweats?
PT: It started around my belly button, then moved down to the right. I've felt sick since the early hours and threw up once this morning. I felt hot and a bit shivery last night.
DR: Any change in your bowels — diarrhoea, constipation, blood in the stool? Any burning when you pass urine, going more often, or blood in the urine? Any pain or swelling in your testicles?
PT: No diarrhoea, I went normally yesterday morning and nothing since. No blood in the stools. Weeing is normal, no burning or blood in the urine. Nothing down there.
DR: Have you ever had surgery on your tummy before, or any similar pain in the past? Any other medical problems, regular medicines, or allergies? And have you taken any painkillers for this today? Also — anyone around you with a stomach bug, or any recent travel or unusual food?
PT: No, never had an operation, still got my appendix as far as I know. Never had anything like this before. Took a couple of paracetamol this morning, didn't do much. Everyone at home and work is fine, no one else has been sick or had diarrhoea. Haven't been anywhere, just the usual — Mum's cooking on Sunday.
DR: Do you smoke, drink alcohol or use any recreational drugs? And when did you last have anything to eat or drink?
PT: No, I don't smoke. A few beers on the weekend, nothing this week. Last ate and drank about six this morning, had some paracetamol.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: Samuel, I'm fairly sure this isn't a stomach bug. The way the pain started around your belly button and moved to the lower right, together with the fever, feeling sick, and how tender that spot is when I press and when you cough, all point very strongly to appendicitis — your appendix is inflamed. This needs to be seen in hospital today, because it usually needs an operation to remove the appendix, and if it's left it can burst and cause a serious infection. I'm going to ring the emergency department now so they expect you, and I'll write a letter for you to take. Please don't eat or drink anything from now on — including painkillers by mouth — in case they need to operate this afternoon. Is there someone who can drive you there right now? You shouldn't drive yourself.
PT: That's a lot at once. What's the first thing I need to do?
DR: Fair enough — one step at a time. First thing: ring someone who can drive you to the hospital emergency department now — a family member, mate, or your boss. If no one can come in the next half hour, tell me and we'll arrange an ambulance. Everything else — I'll handle the phone call to the hospital and the letter. Who can you call?
PT: My brother's coming. He's on his way.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
DR: Good. I've phoned the emergency department and they're expecting you, and here's a letter with my findings for you to hand in at the desk when you arrive. While you wait for your brother, rest here on the couch. Key points: nothing to eat or drink from now, including water and tablets, until the hospital says it's okay — they'll give you pain relief and fluids through a drip. Go straight to emergency, don't go home first. If on the way the pain suddenly gets much worse, spreads across your whole belly, you feel faint, or you start vomiting repeatedly, call 000 for an ambulance rather than continuing in the car. Does that make sense, and do you have any questions?
PT: Yeah, that makes sense. No questions.
  Diagnosis saved: most likely Appendicitis; differential Mesenteric adenitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 350/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Previous operations
- +10 Whether he has had this pain before
- +5 Pain relief taken so far
- +5 Anyone around him with vomiting or diarrhoea
- +5 Recent overseas travel
- +5 Unusual food or takeaway recently
- +10 Heart rate
- +5 Blood pressure
- +10 Temperature
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +5 Hernial orifices
- +10 Testes
- +5 Renal angle tenderness
- +10 Urine dipstick
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Mesenteric adenitis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "The way the pain started around your belly button and moved to the lower right, together with the fever, feeling sick, and how tender that spot is when I press and when you cough, all point very strongly to appendicitis — your appendix is inflamed.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Please don't eat or drink anything from now on — including painkillers by mouth — in case they need to operate this afternoon.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
