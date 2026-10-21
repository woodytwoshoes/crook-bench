# anthropic/claude-opus-5.5: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the GP. Sorry you're feeling crook. Can you tell me where the pain started, where it is now, and how it's changed since last night?
PT: It started down here on the right side, low down. Last night, about ten o'clock. So maybe fourteen hours. It's there all the time now. At first it sort of came and went.
DR: Have you had any vomiting, feeling sick, loss of appetite, fever or chills, diarrhoea or constipation? And does it hurt more when you move, cough or go over bumps?
PT: Yes, felt sick since the early hours and threw up once this morning. Not hungry at all, which isn't like me. Felt hot and a bit shivery last night. No diarrhoea, went normally yesterday morning, nothing since. Walking hurts, every bump in the car was awful, and coughing is the worst.
DR: Any burning or pain passing urine, blood in the urine, or pain going to your back or groin? Any pain or swelling in your testicles? Have you had your appendix out or any operations before, or any medical problems? Have you taken any painkillers today, and when did you last eat or drink?
PT: No, weeing is normal. Nothing down there. Never had an operation. I've still got my appendix, as far as I know. A couple of paracetamol at six this morning. Didn't do much. Just the usual. Mum's cooking on Sunday.
DR: When did you last eat or drink anything today? And did the pain start around your belly button first, or right where it is now?
PT: I had some tea at seven this morning. It started down here on the right side, low down.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  Bowel sounds: Present, slightly reduced. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: Is there someone who can drive you to the hospital emergency department straight from here? You shouldn't drive yourself.
PT: No, I can't drive myself. My brother's coming to pick me up.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
  Diagnosis saved: most likely Appendicitis; differential Mesenteric adenitis; can't miss Perforated viscus with peritonitis.
DR: Samuel, I don't think this is a stomach bug. The pain starting low on the right, getting constant, feeling sick, the vomiting, the fever, and the way it hurts when you cough or when I press and let go all point strongly to appendicitis. That's when the appendix, a small tube off the bowel, gets inflamed. It usually needs an operation to take it out, and it needs sorting out today, because if it isn't treated it can burst and cause a serious infection inside the belly. Your urine test doesn't suggest a kidney or bladder problem.

My plan: I'm phoning the emergency department now to tell them about you, and your brother should take you straight there. Please don't eat or drink anything from now, not even water, in case you need surgery. They'll do blood tests, probably a scan, give you pain relief through a drip, and the surgeons will see you. Don't take any more tablets on the way. If the pain suddenly gets much worse or spreads across your whole belly, you feel faint, very cold and clammy or confused, or you can't wait for your brother, call 000 for an ambulance straight away. Any questions?
PT: I don't want to have an operation. I've never had one. What's it like?
DR: That's a really normal worry. It's one of the most common operations there is, especially in young people. Usually it's done through keyhole surgery: you're fully asleep under a general anaesthetic, they make two or three small cuts, and it takes about an hour. Most people go home within a day or two and are back to light duties in a couple of weeks. Since you do physical work, you'd avoid heavy lifting for a few weeks. Sometimes, in early or mild cases, the hospital team might try antibiotics first, but that's their decision once they've checked you over. The risks of leaving it are much bigger than the risks of the operation. The surgeons will explain everything and answer your questions before anything happens. Can I go ahead and call the hospital now?
PT: Yeah, go ahead. I'll be okay.
END CONSULT

## Bill: 305/420 (Fellow), acceptable
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Previous operations
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
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
- +5 Cough test
- +10 Urine dipstick
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Mesenteric adenitis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I don't think this is a stomach bug. The pain starting low on the right, getting constant, feeling sick, the vomiting, the fever, and the way it hurts when you cough or when I press and let go all point strongly to appendicitis.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Please don't eat or drink anything from now, not even water, in case you need surgery.")

Samuel gets to hospital and has his appendix out. Missing from the plan: pain relief before transfer.
