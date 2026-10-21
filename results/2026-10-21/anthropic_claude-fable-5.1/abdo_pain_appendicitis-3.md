# anthropic/claude-fable-5.1: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I can see you're uncomfortable. Tell me about this tummy pain - where did it start, where is it now, and how did it come on?
PT: It started around my belly button last night at about ten o'clock, so maybe fourteen hours ago. It moved down to the right sometime overnight, and now it is there all the time instead of coming and going. It's maybe a seven out of ten, but I'm not one to complain.
DR: Thanks. A few quick questions: Have you felt sick or vomited? Have you had any appetite today? Any fever or chills? Does the pain get worse when you cough, move, or went over bumps in the car on the way here?
PT: I have felt sick since the early hours and threw up once this morning. I couldn't face breakfast and am not hungry at all, which isn't like me. I felt hot and a bit shivery last night. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst.
DR: Any diarrhoea or constipation? Any burning when you pass urine, going more often, or blood in the urine? Any pain or swelling in your testicles? Have you had any previous operations on your tummy, or anything like this before?
PT: No diarrhoea, just went normally yesterday morning and nothing since. Weeing is normal, and nothing down there. I've never had an operation, I've still got my appendix as far as I know, and I've never had anything like this before.
DR: Any other medical problems, regular medicines, or allergies? Have you taken anything for the pain today? When did you last eat or drink anything? Anyone at home or work with a similar illness recently?
PT: No, just the usual. I took a couple of paracetamol at six this morning and it didn't do much. Everyone at home and work is fine.
DR: When did you last eat or drink anything? And just to confirm - no medical conditions, regular medicines or allergies at all?
PT: I had a sip of water a while ago. No medical conditions or regular medicines, and no allergies.
  "vitals" is a region, not an exam: list_exams with region "vitals" lists the vital signs by id.
  (list_exams vitals)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  (list_exams abdomen)
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  (search tests "urine dipstick": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search referrals "emergency": 5 found)
DR: Samuel, putting it all together - the pain starting around the belly button and moving to the lower right, the sickness, loss of appetite, the fever, and what I found when I examined you - this looks very much like appendicitis, an inflamed appendix. It is not a stomach bug. This needs to be assessed by the surgeons at the hospital today, and most likely treated with an operation to remove the appendix. It's a common operation and people your age do very well, but it's important not to delay, because an inflamed appendix can burst if left. 

Here's the plan: I'm sending you straight to the emergency department now, and I'll phone ahead so they're expecting you. Please don't eat or drink anything from now on, in case you need an operation today. Is there someone who can drive you to the hospital right now? You shouldn't drive yourself with this pain.
PT: Can't I just go home and wait for it to pass?
DR: I understand it's not what you were hoping to hear, but no - this is not safe to wait out at home. An inflamed appendix does not settle on its own; it gets worse, and if it bursts you can become very sick with infection throughout the belly, which means a bigger operation and a longer time in hospital. Caught early, like now, it's usually a short keyhole operation and you're home within a day or two. You've already got all the classic signs, so the hospital is the right place. Who can take you there now - a family member, housemate or your boss? If no one is available I'll arrange an ambulance.
PT: Okay, my mum can drive me.
  Referred: Emergency department (patient to self-present)
  Referred: Phone the emergency department (clinical handover)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforat": 1 found)
DR: Good. Call your mum now and go straight to the emergency department - don't go home first. I've sent a letter with them and I'm phoning the hospital so they know you're coming with suspected appendicitis. Please remember: nothing to eat or drink, not even water, until the hospital team says it's okay. If while you're on the way the pain suddenly becomes much worse or spreads across your whole belly, you feel faint, or you can't stop vomiting, tell the hospital staff immediately as soon as you arrive, or call 000 if you're held up. Take any pain relief they offer there rather than more paracetamol now. Do you have any questions before you go?
PT: Nah, I just want to get it over with.
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 345/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Previous operations
- +10 Whether he has had this pain before
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
- +5 Anyone around him with vomiting or diarrhoea
- +10 Heart rate
- +5 Blood pressure
- +10 Temperature
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +5 Hernial orifices
- +5 Renal angle tenderness
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "this looks very much like appendicitis, an inflamed appendix.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Please don't eat or drink anything from now on")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
