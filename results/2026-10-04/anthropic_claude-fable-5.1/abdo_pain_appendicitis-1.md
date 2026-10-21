# anthropic/claude-fable-5.1: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I can see you're uncomfortable. Tell me about this tummy pain – where did it start, where is it now, and how has it changed since last night?
PT: It started around my belly button last night, about ten o'clock, and it's moved down to the right side now. It was coming and going at first, but it's been constant since. It's a seven out of ten, and walking or coughing makes it worse.
DR: Thanks. A few quick ones: have you had any fever or chills, nausea or vomiting, and how's your appetite been? Any diarrhoea or constipation, blood in your poo, or pain or burning when you pass urine?
PT: I felt hot and a bit shivery last night, and I've felt sick since the early hours, threw up once this morning. Not hungry at all, which isn't like me. No diarrhoea, went normally yesterday morning, nothing since. No blood. Weeing is normal.
DR: Any pain in your testicles or groin, or any swelling there? Have you had any injury to your belly recently, any previous operations on your tummy, or any other health problems? Any medications, and have you taken anything for the pain? Have you eaten anything unusual or been around anyone with a stomach bug?
PT: No, nothing down there. Never had an operation. I've still got my appendix, as far as I know. A couple of paracetamol at six this morning, didn't do much. Just the usual, mum's cooking on Sunday. Everyone at home and work is fine.
DR: When did you last eat or drink anything? And do you smoke, drink alcohol or use any recreational drugs? Any family history of bowel problems like Crohn's disease?
PT: I had breakfast this morning, but didn't eat much. I don't smoke, had a few beers on the weekend but nothing this week. No family history of bowel problems.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: Samuel, I'm fairly confident this isn't a stomach bug. The pattern – pain starting around your belly button, moving to the right lower side, with fever, feeling sick and losing your appetite, plus how tender you are when I press there – points strongly to appendicitis, an inflamed appendix. This needs to be sorted out at hospital today, most likely with surgery to remove it, and the sooner the better so it doesn't burst. Is there someone who can drive you to the emergency department right now, and have you got a stable blood pressure-wise feeling – any dizziness or faintness? Also, has anyone in your family had problems with anaesthetics?
PT: No, I haven't fainted or felt faint. Someone can drive me. No, no family history of anaesthetic problems.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
DR: Here's the plan. I'm phoning the emergency department now to let them know you're coming and to hand over what I've found, and I'll give you a letter to take with you. Please go straight there now with your lift – don't go home first. Important: don't eat or drink anything from now on, including water, in case you need an operation today – the hospital will give you fluids through a drip and pain relief there, which is why I'm not giving you more tablets now. Let them know you had paracetamol at 6 this morning. If on the way the pain suddenly becomes much worse or spreads across your whole belly, you become very sweaty, faint, or start vomiting repeatedly, call 000 for an ambulance rather than continuing in the car. Do you have any questions, and does that plan make sense?
PT: No questions. Yeah, that makes sense.
  Diagnosis saved: most likely Appendicitis; differential Mesenteric adenitis; can't miss Perforated viscus with peritonitis.
DR: Good luck Samuel – head straight to the emergency department now, nothing to eat or drink, and call 000 if things get suddenly worse on the way. I'll follow up with you after you're discharged.
PT: Thanks. I'll head straight there.
END CONSULT

## Bill: 360/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +20 Red flag: Fever, sweats or chills
- +10 Nausea or vomiting
- +10 Appetite
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Previous operations
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
- +5 Hernial orifices
- +10 Testes
- +5 Renal angle tenderness
- +10 Urine dipstick
- +10 Red flag excluded: Fainting or light-headedness
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Mesenteric adenitis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I'm fairly confident this isn't a stomach bug. The pattern – pain starting around your belly button, moving to the right lower side, with fever, feeling sick and losing your appetite, plus how tender you are when I press there – points strongly to appendicitis, an inflamed appendix. This needs to be sorted out at hospital today, most likely with surgery to remove it, and the sooner the better so it doesn't burst.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Important: don't eat or drink anything from now on, including water, in case you need an operation today – the hospital will give you fluids through a drip and pain relief there, which is why I'm not giving you more tablets now.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
