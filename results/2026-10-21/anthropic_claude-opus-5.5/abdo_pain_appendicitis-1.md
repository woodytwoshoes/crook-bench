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
PT: It started around my belly button last night about ten o'clock, and then it moved down to the right sometime overnight.
DR: How bad is it out of 10, and does moving, coughing or bumps in the car make it worse? Have you had any vomiting, diarrhoea, fever, or loss of appetite?
PT: Maybe a seven out of ten. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst. I have felt sick since the early hours and threw up once this morning, but no diarrhoea. I felt hot and a bit shivery last night, and I couldn't face breakfast because I am not hungry at all.
DR: Any pain or burning passing urine, blood in urine, or pain in your testicles or groin? Any recent similar episodes, medical problems, operations, medicines or allergies? When did you last eat or drink?
PT: Weeing is normal, and there is nothing wrong down there or any lumps. I have never had anything like this before and never had an operation, I've still got my appendix as far as I know. I just had the usual food, Mum's cooking on Sunday.
DR: Have you eaten or drunk anything since last night, and have you taken any painkillers today?
PT: I took a couple of paracetamol at six this morning, but it didn't do much.
  (list_exams vitals)
  (list_exams abdomen)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  Bowel sounds: Present, slightly reduced. [abnormal]
  (search tests "urine dipstick": 1 found)
  (search referrals "emergency": 5 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: Is there someone who can drive you straight to the hospital now? You shouldn't drive yourself.
PT: Can't I just go back to work? My mate brought me here, so I suppose he can drive me.
  Unknown diagnosis id(s): perforated appendix. Use search with kind "diagnoses".
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforat": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
DR: Samuel, I'm sorry but you can't go back to work today. Your story and my examination strongly suggest appendicitis: an inflamed appendix. The pain moving from your belly button to the lower right, the pain with coughing and bumps, the fever, fast heart rate and the tenderness when I let go of your tummy all point that way. The urine test doesn't suggest a kidney or bladder infection. Appendicitis usually needs surgery and antibiotics, and if it's left it can burst and cause a serious infection through the belly. So I've phoned the emergency department and I'm writing a letter. Please have your mate drive you straight there now, no stops. Don't eat or drink anything from now on, in case you need an operation, and don't take more painkillers by mouth; the hospital will give you pain relief through a drip. If on the way the pain suddenly gets much worse or spreads across your whole tummy, you feel faint, very shivery or confused, or you keep vomiting, have your mate call 000 for an ambulance. I'll give you a medical certificate for work. Any questions?
PT: Surgery? Are you serious? I just wanted to get this sorted so I could get back on the tools.
DR: I understand it's a shock. Most people have a keyhole operation, stay a day or two, and are back at light duties within a couple of weeks; heavy lifting usually a few weeks after that. The hospital team will confirm the diagnosis with blood tests and possibly a scan before deciding. Getting it treated today is the quickest way back on the tools; waiting risks it bursting, which means a much longer recovery. Please head straight there now.
PT: Alright. My mate is outside, so I will go now.
END CONSULT

## Bill: 340/420 (Consultant), ideal
- +10 When the pain started
- +20 Red flag: Where the pain started and whether it has moved
- +10 How bad the pain is
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Nausea or vomiting
- +10 Diarrhoea
- +20 Red flag: Fever, sweats or chills
- +10 Appetite
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Unusual food or takeaway recently
- +5 Pain relief taken so far
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
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "Your story and my examination strongly suggest appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat or drink anything from now on")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
