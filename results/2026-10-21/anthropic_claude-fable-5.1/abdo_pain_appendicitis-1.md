# anthropic/claude-fable-5.1: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I can see you're not comfortable. Tell me about this tummy pain – where did it start, where is it now, and how has it changed since last night?
PT: It started around my belly button about ten o'clock last night, so maybe fourteen hours ago. It moved down to the right sometime overnight, and now it is there all the time, though at first it sort of came and went. It's maybe a seven out of ten, but I'm not one to complain.
DR: Thanks. A few quick ones: have you had any vomiting or feeling sick, and when did you last feel like eating? Any fever or chills? Does the pain get worse when you move, cough, or when you went over bumps in the car on the way here?
PT: I have felt sick since the early hours and threw up once this morning, and I couldn't face breakfast because I'm not hungry at all, which isn't like me. I felt hot and a bit shivery last night. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst.
DR: Any change in your bowels – diarrhoea or constipation – or blood in the stool? Any burning when you pass urine, going more often, or blood in the urine? Any pain, swelling or problems with your testicles?
PT: I went normally yesterday morning and nothing since, with no blood. Weeing is normal, and nothing down there.
DR: Have you ever had anything like this before, or any operations on your tummy? Any ongoing health conditions, regular medicines, or have you taken anything for the pain today? Any allergies to medicines? And do you smoke, drink alcohol, or use any other drugs? Anyone around you unwell with a stomach bug, or any recent travel or dodgy food?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Fair enough. Have you ever had a pain like this before, or any operations on your tummy?
PT: No, I've never had anything like this, and I've never had an operation either. I've still got my appendix, as far as I know.
DR: Any ongoing health problems, regular medicines, or have you taken any painkillers today?
PT: I don't have any ongoing health problems or regular medicines. I took a couple of paracetamol at six this morning, but it didn't do much.
DR: Any allergies to medicines? And do you smoke, drink alcohol, or use any recreational drugs?
PT: I don't have any allergies to medicines, I don't smoke, and I had a few beers on the weekend with nothing this week.
DR: Anyone around you unwell with a stomach bug, or any recent travel or food you think might have been off? And when did you last eat or drink anything?
PT: Everyone at home and work is fine, I haven't been anywhere, and I just had the usual, with Mum's cooking on Sunday.
DR: When did you last have anything to eat or drink?
PT: I had some water earlier, but not much.
  "vitals" is a region, not an exam: list_exams with region "vitals" lists the vital signs by id.
  (list_exams vitals)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  (list_exams abdomen)
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Abdominal percussion: Right lower quadrant: Tender to light percussion. Elsewhere: resonant and non-tender. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  (search tests "urine dipstick": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search referrals "emergency": 5 found)
  (search referrals "surgical": no matches)
  (search referrals "surgeon": 6 found)
DR: Samuel, everything you've told me and what I've found when examining you points strongly to appendicitis – an inflamed appendix. The pain starting around your belly button and moving to the lower right, the loss of appetite, feeling sick, the mild fever, and the way it hurts with every bump and cough are all classic for it. This isn't a stomach bug, and it won't settle on its own; it needs to be assessed by the surgeons at the hospital today, and it's most likely you'll need an operation to remove the appendix. That's a very common and safe procedure, and the sooner it's done the lower the risk of the appendix bursting. From now on please don't eat or drink anything, in case you need an anaesthetic. Do you have someone who can drive you to the emergency department right now? You shouldn't drive yourself.
PT: Can't I just go home and wait for it to pass?
DR: I understand that's tempting, but no – this is one you really can't wait out. An inflamed appendix doesn't settle by itself; if it's left it can burst, usually within a day or two, and that spills infection into the belly and turns a straightforward operation into a serious, life-threatening illness with a much longer hospital stay. You've already had it for fourteen hours. You're young and otherwise well, so if we get you seen today you'll most likely have a quick keyhole operation and be home in a day or two. I'm going to phone the emergency department now so they're expecting you. Is there someone who can drive you there straight away?
PT: Yeah, my mate is outside in the truck, I can call him.
  Referred: Emergency department (patient to self-present)
  Referred: Phone the emergency department (clinical handover)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforated": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
DR: Good – call your mate now and go straight to the emergency department; I've phoned ahead so they know you're coming and I'll give you a letter with my findings. A few important things: nothing to eat or drink from now, and don't take any more painkillers before you get there – the hospital will give you proper pain relief and run blood tests, and possibly a scan, before the surgeons see you. If on the way the pain suddenly becomes much worse or spreads across the whole belly, you become very sweaty, faint, or vomit repeatedly, call 000 for an ambulance rather than continuing in the truck. Please don't go home first and don't put this off until tonight. Once you're out of hospital, come back and see me for a check-up about a week later, or sooner if you have any worries. Any questions before you go?
PT: Alright, I'll go straight there now.
END CONSULT

## Bill: 360/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Whether he has had this pain before
- +10 Previous operations
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
- +5 Abdominal percussion
- +5 Hernial orifices
- +10 Testes
- +5 Renal angle tenderness
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "points strongly to appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "please don't eat or drink anything")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
