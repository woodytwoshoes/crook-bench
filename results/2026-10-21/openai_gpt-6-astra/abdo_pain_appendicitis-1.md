# openai/gpt-6-astra: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the GP seeing you today. You look quite uncomfortable. Can you tell me where the pain is, how it started, and whether it has moved since last night?
PT: It's down here on the right side, low down. It started around ten o'clock last night, and it began near my belly button before moving down to the right sometime overnight.
  (list_exams vitals)
DR: How bad is the pain out of ten, and is it getting worse? Is it constant or coming in waves? Does walking, coughing or moving make it worse?
PT: Maybe a seven out of ten, because I'm not one to complain. It's there all the time now, though at first it sort of came and went. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Temperature: 37.9 °C.
  (list_exams abdomen)
DR: Have you felt feverish or had shaking chills? Have you felt sick or vomited, and did that start before or after the pain? Have you been able to eat or drink?
PT: I felt hot and a bit shivery last night. I have felt sick since the early hours and threw up once this morning, but the pain came first and the sickness came a few hours later. I couldn't face breakfast and am not hungry at all, which isn't like me.
DR: Have you had diarrhoea, constipation, blood in your poo, or trouble passing wind? Any burning when you pee, blood in your urine, or pain in your back or groin? Any pain or swelling in either testicle?
PT: No diarrhoea, I went normally yesterday morning, and nothing since. No blood. Weeing is normal. No lumps down there, and nothing down there either.
DR: Have you ever had this pain before, any bowel problems, or any operations? Do you take any medicines or supplements, including anything you've taken for this pain, and do you have any allergies? When did you last eat and drink?
PT: I have never had anything like this before, and I've never had an operation, so I've still got my appendix as far as I know. I took a couple of paracetamol at six this morning, but it didn't do much. I haven't had anything unusual to eat, just the usual mum's cooking on Sunday.
DR: This pattern of pain is concerning for an inflamed appendix rather than a stomach bug. I'd like to gently examine your tummy, including checking your groins and testicles if needed to rule out other urgent causes. Is that okay? We can have a chaperone present. Also, to confirm before giving any treatment: do you have any allergies or other medicines, and what time did you last have food or fluids?
PT: I just want to get this over with so I can get back to work.
DR: I understand work matters, but this may need urgent hospital treatment today. Is it okay for me to examine your tummy now?
PT: Alright, go ahead.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Renal angle tenderness: No renal angle tenderness.
  Renal angle tenderness: No renal angle tenderness. (repeated: no change since the last check)
  Hernial orifices: No hernias.
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  (search tests "urinalysis": 1 found)
  (search referrals "emergency": 5 found)
  (search diagnoses "appendicitis": 1 found)
DR: Your tummy is very tender over the appendix. I recommend going straight to the emergency department for a surgeon to assess you; they can arrange blood tests and a scan if needed. An inflamed appendix can burst if untreated. We shouldn't delay that assessment with tests here. Do you have any medicine allergies?
PT: No, no allergies. Can I just go straight to work after, or will I miss the whole day?
DR: You will need to miss work today, and you may need an operation and time off afterwards. I'll provide a medical certificate. Please don't eat or drink for now because you may need an anaesthetic. When did you last eat or drink, and were the paracetamol tablets you took at six the usual 500 milligram tablets?
PT: I had a bit of toast last night before bed. And yeah, just the standard paracetamol tablets. I really can't afford to be off work for long, though.
  (search drugs "paracetamol": 5 found)
  (search diagnoses "perforation": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: I understand the money worries. Prompt treatment gives you the best chance of getting back safely; putting it off could mean a much longer illness. Because of the severe pain and signs of irritation inside your tummy, I'll arrange an ambulance transfer and speak to the emergency team. Don't drive yourself. While we're waiting I can give you another dose of paracetamol with a small sip of water, and the ambulance team can give stronger pain relief. Are you taking any other medicines, and have you had any more paracetamol since six?
PT: No other medicines, and I haven't had any more paracetamol since six. An ambulance seems a bit much, can't I just drive myself?
  Given in clinic: Paracetamol 500 mg tablets, 1 g (2 tablets) orally with a small sip of water Stat dose
  Referred: Emergency department by ambulance (call 000)
  Referred: Phone the emergency department (clinical handover)
DR: With pain this strong, driving isn't safe—you may not be able to brake or concentrate properly, and you could become more unwell on the way. The ambulance crew can monitor you and treat your pain. I'll hand over that your pain moved from around your belly button to the lower right, you have vomiting, a mild fever, a fast pulse and marked tenderness. Your urine test doesn't clearly suggest a urine infection and doesn't rule out appendicitis. Please stay here resting while we organise transfer. Tell us immediately if the pain spreads or suddenly worsens, you feel faint, become short of breath, or keep vomiting. Is there someone you'd like us to contact for you?
PT: No, I'm right, I can call them myself later.
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 365/420 (Consultant), ideal
- +10 When the pain started
- +20 Red flag: Where the pain started and whether it has moved
- +10 How bad the pain is
- +10 Whether the pain is constant or comes and goes
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +20 Red flag: Fever, sweats or chills
- +10 Nausea or vomiting
- +10 Whether the pain or the vomiting came first
- +10 Appetite
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 A lump or bulge in the groin
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
- +10 Abdominal palpation
- +5 Renal angle tenderness
- +5 Hernial orifices
- +5 Rovsing's sign
- +10 Urine dipstick
- +15 Pain relief before transfer
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "This pattern of pain is concerning for an inflamed appendix rather than a stomach bug.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Please don't eat or drink for now because you may need an anaesthetic.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
