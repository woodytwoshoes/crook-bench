# anthropic/claude-opus-5.5: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the GP. Sorry you're feeling crook. Can you tell me where the pain started, where it is now, and how it's changed since last night?
PT: It started down here on the right side, low down. Last night, about ten o'clock. It's there all the time now. At first it sort of came and went.
DR: Has it moved at all, for example did it start around your belly button? Does moving, coughing or bumps in the car make it worse? And how bad is it out of 10?
PT: It started around my belly button, then moved down to the right. Walking, coughing and bumps in the car make it worse. It's a seven out of ten.
DR: Have you had any vomiting, nausea, loss of appetite, fevers or chills? Any diarrhoea or constipation, and any burning or blood when you pass urine?
PT: Yes, I felt sick since the early hours and threw up once this morning. I couldn't face breakfast, not hungry at all, which isn't like me. I felt hot and a bit shivery last night. No diarrhoea, went normally yesterday morning, nothing since. Weeing is normal, no burning or blood.
DR: Any pain or swelling in your testicles, or any lumps in the groin? Any past medical problems, operations, or medicines you've taken for this, including painkillers? And have you had anything to eat or drink since this morning?
PT: No, nothing down there. No lumps down there. Never had an operation. I've still got my appendix, as far as I know. A couple of paracetamol at six this morning, didn't do much. Just the usual, mum's cooking on Sunday.
DR: When did you last eat or drink anything, even water? And any allergies to medicines?
PT: Last ate or drank at breakfast, couldn't face it. No allergies to medicines.
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
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: How did you get here today — did you drive yourself, and is there someone who could drive you to the hospital right now?
PT: Drove myself. No one to drive me to hospital.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department by ambulance (call 000)
DR: Samuel, I don't think this is a stomach bug. The pain starting at your belly button and moving to the lower right, the fever, feeling sick, going off your food, and how sore you are when I press and let go all point strongly to appendicitis. That's when the appendix, a small tube off the bowel, gets inflamed. It usually needs an operation to remove it, and it can burst if you leave it, so you need to go to hospital today. Please don't drive yourself, because you're in a lot of pain and that's not safe. I've called an ambulance to take you to the emergency department, and I've rung the doctors there so they know you're coming. Until the surgeons have seen you, don't eat or drink anything, not even water, because you may need an anaesthetic. The hospital will give you pain relief and fluids through a drip. They'll probably also do blood tests and maybe a scan. Your urine test showed only small changes, which can happen with appendicitis, and it doesn't look like a urine infection. While you wait, tell the staff straight away if the pain suddenly gets much worse or spreads across your whole tummy, or if you feel faint, get the shakes, or keep vomiting. Do you want me to call anyone for you, like family, or your boss?
PT: I don't want to call anyone. I'll be fine.
  Diagnosis saved: most likely Appendicitis; differential Mesenteric adenitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 345/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 How bad the pain is
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Previous operations
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +10 Testes
- +5 Hernial orifices
- +5 Renal angle tenderness
- +10 Urine dipstick
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Mesenteric adenitis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "The pain starting at your belly button and moving to the lower right, the fever, feeling sick, going off your food, and how sore you are when I press and let go all point strongly to appendicitis.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Until the surgeons have seen you, don't eat or drink anything, not even water, because you may need an anaesthetic.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
