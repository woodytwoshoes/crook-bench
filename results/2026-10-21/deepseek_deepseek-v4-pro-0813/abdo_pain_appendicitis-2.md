# deepseek/deepseek-v4-pro-0813: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I understand you've had tummy pain since last night. Can you tell me more about it — where exactly is the pain, and what does it feel like?
PT: Down here on the right side, low down. It started last night, about ten o'clock. So maybe fourteen hours. It is there all the time now. At first it sort of came and went. Maybe a seven out of ten.
DR: I see. Did the pain start somewhere else before settling on the right side — for example around your belly button?
PT: It actually started around my belly button. It moved down to the right sometime overnight.
DR: Have you had any nausea or vomiting, and have you been able to eat or drink anything since it started?
PT: Felt sick since the early hours, and I threw up once this morning. I couldn't face breakfast. Not hungry at all, which isn't like me.
DR: Have you had any fever, chills, or sweats?
PT: I felt hot and a bit shivery last night.
DR: Have your bowels been normal? Any diarrhoea or constipation since this started?
PT: No diarrhoea. I went normally yesterday morning, nothing since.
DR: Any pain or burning when you pass urine, or needing to go more often?
PT: No, weeing is normal.
DR: Any pain in your testicles or groin, or any swelling there?
PT: No, nothing down there, and no lumps down there.
DR: Does anything make the pain worse — like moving, coughing, or going over bumps in the car on the way here?
PT: Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
DR: Have you ever had anything like this before, and have you had your appendix removed?
PT: Never had anything like this. Never had an operation, and I have still got my appendix as far as I know.
DR: When did you last eat or drink anything, and what was it?
PT: No, just the usual. Mum's cooking on Sunday.
DR: Do you have any other medical conditions, or take any regular medicines, including anything over the counter?
PT: No, I don't take any medicines.
  (list_exams vitals)
  (list_exams abdomen)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Temperature: 37.9 °C.
  Oxygen saturation: 98% on room air.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Testes: Both testes normal lie, non-tender, no swelling. (repeated: no change since the last check)
  (search referrals "emergency": 5 found)
  (search diagnoses "appendicitis": 1 found)
  Referred: Emergency department (patient to self-present)
DR: Samuel, I'm concerned this is appendicitis — inflammation of your appendix, the small pouch attached to your bowel. Your story and my examination fit this very well: the pain that started around your belly button and moved to the lower right, the fever, feeling sick, and the tenderness when I pressed there.

This needs to be assessed in hospital today, because an inflamed appendix can burst and cause a serious infection. I'm sending you to the emergency department now. Please go straight there — don't wait at home, and don't eat or drink anything in case you need an operation or an anaesthetic.

If the pain suddenly gets much worse, or you feel faint, dizzy, or very unwell on the way, call 000 for an ambulance. Otherwise, have someone drive you, or go by ambulance if you're in too much pain to travel comfortably.
PT: Can I just go home and sleep it off instead?
DR: I understand you'd rather go home, but I really don't recommend it. The signs point to appendicitis, and if it's left untreated the appendix can burst, which can make you very seriously unwell and need a bigger operation and a longer recovery. Going to hospital now, while it's still early, is the safest thing. It's important you go today, not wait.
PT: Right. I suppose I better go then.
  Diagnosis saved: most likely Appendicitis; can't miss Nothing to exclude.
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
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Unusual food or takeaway recently
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Testicular torsion, Perforated viscus with peritonitis, Strangulated or incarcerated hernia
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "I'm concerned this is appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "don't eat or drink anything")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
