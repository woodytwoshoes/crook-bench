# deepseek/deepseek-v4-pro-0813: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I can see you're looking uncomfortable. Tell me about this tummy pain — when did it start and what does it feel like?
PT: It started last night about ten o'clock, so maybe fourteen hours ago. At first it sort of came and went, but it is there all the time now. It is down here on the right side, low down. Probably a seven out of ten, I am not one to complain.
DR: I'm sorry you're in so much pain. A few more questions. Did the pain start somewhere else first — like around your belly button — before moving down to the right side?
PT: Yeah, it actually started around my belly button. It moved down to the right sometime overnight.
DR: Have you felt sick or actually vomited? And have you had any appetite?
PT: I have felt sick since the early hours, and I threw up once this morning. I could not face breakfast either, I am not hungry at all, which is not like me.
DR: Have you had a fever, chills, or sweats?
PT: I felt hot and a bit shivery last night.
DR: Have your bowels been normal — any diarrhoea or constipation? And when you pass urine, is it painful or different at all?
PT: No diarrhoea, I went normally yesterday morning and nothing since. Weeing is normal.
DR: Does the pain get worse when you move, cough, or when the car went over a bump on the way here?
PT: Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
DR: Any pain in your back, or in the testicles? And have you had any problems with your waterworks or discharge?
PT: No, nothing down there.
  (list_exams vitals)
  (list_exams abdomen)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Temperature: 37.9 °C.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  (search referrals "emergency department": 3 found)
  (search referrals "surgery": 2 found)
  Referred: Emergency department (patient to self-present)
DR: Samuel, I'm concerned this is appendicitis — inflammation of the appendix, the little pouch attached to your bowel. The story fits very well: pain that started around your belly button and moved to the lower right, feeling sick, going off your food, a temperature, and the tenderness I can feel in exactly the right spot, with signs that the lining of your tummy is irritated.

This needs to be assessed in hospital today, because if it is appendicitis it usually needs an operation to remove it before it bursts. I'm sending you to the emergency department now. Please go straight there — don't stop for anything.

A few important things:
- Don't eat or drink anything from now on, in case you need an operation.
- If the pain suddenly gets much worse, or you feel faint, dizzy, or start vomiting repeatedly, call 000 for an ambulance.
- Take someone with you if you can, or go by taxi rather than driving yourself.

Do you have any questions?
PT: An operation? Can I just get some antibiotics and go back to work?
DR: I understand that's a shock, and I'm sorry. Antibiotics alone aren't the safe option here. The signs I'm seeing — the fever, the fast heart rate, and the tenderness with rebound — suggest the appendix is already quite inflamed and could burst. If it bursts, the infection can spread through your whole tummy and make you very unwell, which is far more serious than the operation itself.

The operation to remove the appendix is very common and safe, and most people recover quickly. But it does need to happen soon, and that's why I want you in hospital today. Please don't go back to work — this can't wait. Will you go straight to the emergency department now?
PT: Alright, I will head straight there now.
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforated": 1 found)
  (search diagnoses "torsion": 2 found)
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 290/420 (Fellow), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +5 Renal angle tenderness
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "Samuel, I'm concerned this is appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat or drink anything from now on, in case you need an operation.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
