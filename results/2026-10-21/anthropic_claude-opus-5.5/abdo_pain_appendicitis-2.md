# anthropic/claude-opus-5.5: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the GP. Sorry you're feeling rough. Can you tell me where the pain started, where it is now, and how it's changed since last night?
PT: It started around my belly button last night about ten o'clock, and then it moved down to the right sometime overnight.
DR: Have you had any vomiting, nausea, loss of appetite, diarrhoea or constipation? And have you had a fever or chills?
PT: I have felt sick since the early hours and threw up once this morning, and I couldn't face breakfast because I am not hungry at all. I haven't had diarrhoea, just went normally yesterday morning and nothing since. I also felt hot and a bit shivery last night.
DR: Does it hurt more when you move, cough, or go over bumps in the car? Any burning or blood when passing urine, pain in your testicles, or blood in your poo? Any similar episodes before, recent illness, or medications you've taken for it?
PT: Yeah, walking hurts, every bump in the car on the way here was awful, and coughing is the worst. Weeing is normal, and nothing down there either. No blood. Never had anything like this before. I took a couple of paracetamol at six this morning, but it didn't do much.
  (list_exams abdomen)
  (list_exams vitals)
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  Bowel sounds: Present, slightly reduced. [abnormal]
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  (search tests "urinalysis": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search referrals "emergency": 5 found)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforated": 1 found)
DR: Did you drive here yourself, and is there someone who could take you to the hospital right now? Also, when did you last eat or drink?
PT: No, I didn't drive, and Mum brought me, but she can take me. I haven't eaten since yesterday, just had some water.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
DR: Samuel, from your story and examination I'm quite worried this is appendicitis — inflammation of the appendix, a small tube off the bowel in the lower right of your tummy. The pain moving from your belly button to the right, feeling sick, the fever, fast heart rate and the tenderness when I pressed all fit. It isn't a stomach bug, and it usually needs an operation, so you need to go to the emergency department now. I've phoned the hospital and I'm sending a letter with you. Please have your Mum drive you straight there — don't stop at home. Don't eat or drink anything from now on, not even water, in case you need surgery. Don't take any more pain tablets on the way; the hospital will give you strong pain relief and fluids through a drip, do blood tests and possibly a scan. If on the way the pain suddenly becomes much worse or spreads across your whole tummy, you feel faint, very cold and clammy, or keep vomiting, pull over and call 000 for an ambulance.
PT: An operation? Right now? I was hoping I could just get something for it and go back to work.
DR: I understand — it's a shock. But if appendicitis isn't treated, the appendix can burst and cause a serious infection through the whole tummy, which is much more dangerous and needs a bigger operation and longer recovery. Treated early, it's usually keyhole surgery, a couple of days in hospital, and most people are back to light duties in a week or two, with heavier work a few weeks later. I'll give you a medical certificate for work. Going today is really the safest thing.
PT: Okay, if you reckon I really need to go, I will go with Mum now.
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 315/420 (Consultant), ideal
- +10 When the pain started
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Appetite
- +10 Diarrhoea
- +20 Red flag: Fever, sweats or chills
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +5 Blood in the stools
- +10 Whether he has had this pain before
- +5 Pain relief taken so far
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +5 Hernial orifices
- +5 Renal angle tenderness
- +10 Heart rate
- +5 Blood pressure
- +10 Temperature
- +5 Respiratory rate
- +10 Urine dipstick
- +5 Unusual food or takeaway recently
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "I'm quite worried this is appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat or drink anything from now on, not even water, in case you need surgery.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
