# openai/gpt-6-astra: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor today. You look uncomfortable. Can you show me where the pain is now, and tell me how it started and whether it has moved?
PT: It is down here on the right side, low down. It started around ten o'clock last night, and at first it sort of came and went, but now it is there all the time. It actually started around my belly button and moved down to the right sometime overnight.
DR: How bad is it out of ten? Does walking, coughing or moving make it worse? Have you felt feverish, nauseated or vomited?
PT: Maybe a seven out of ten. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst. I felt hot and a bit shivery last night, and I have felt sick since the early hours and threw up once this morning.
  (list_exams vitals)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Temperature: 37.9 °C.
  (list_exams abdomen)
DR: Have you lost your appetite, and when did you last eat or drink? Have you had diarrhoea, constipation, blood in your stool, or trouble passing wind? Any burning or blood when you pass urine, or pain in your back?
PT: I couldn't face breakfast and am not hungry at all, which isn't like me, though I just had the usual Mum's cooking on Sunday. I did not have diarrhoea, I went normally yesterday morning and nothing since, and there is no blood. Weeing is normal, and I haven't noticed anything like back pain.
DR: Any pain or swelling in your testicles or groin? Have you ever had pain like this before, any operations, or other medical problems? Have you taken any medicines for this, and do you have any allergies?
PT: Nothing down there, and no lumps either. I've never had anything like this before, and I've never had an operation, I've still got my appendix as far as I know. I just took a couple of paracetamol at six this morning, but it didn't do much, and I don't have any allergies.
DR: I'm concerned this could be an inflamed appendix rather than a stomach bug. I'll gently examine your tummy now; let me know if it's too sore.
PT: Alright, go ahead.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Renal angle tenderness: No renal angle tenderness.
  Abdominal percussion: Right lower quadrant: Tender to light percussion. Elsewhere: resonant and non-tender. [abnormal]
DR: The tenderness suggests inflammation around your appendix. You need an urgent hospital assessment by the surgical team today, because an inflamed appendix can burst. Occasionally a groin hernia or a twisted testicle can cause lower tummy pain, so I'd also like to briefly check those areas, with a chaperone present. Is that okay? Also, exactly when did you last eat or drink anything?
PT: Hang on, do I really need to go to hospital? I was hoping to just get some medicine and go back to work. I had a sip of water around six this morning, but nothing since.
DR: Yes, I strongly recommend going now, not back to work. Pain moving from the belly button to the lower right side, fever, vomiting and pain with movement are very suggestive of appendicitis. Tablets alone here aren't safe: delaying treatment risks a burst appendix and a serious infection. The hospital can give pain relief, fluids and arrange a scan or an operation if needed. Are you happy for me to arrange that, and to do the brief groin and testicle examination?
PT: Okay, if it's that serious, go ahead.
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Testes: Both testes normal lie, non-tender, no swelling. (repeated: no change since the last check)
  (search referrals "emergency": 5 found)
  (search drugs "paracetamol": 5 found)
  (search tests "urinalysis": 1 found)
  (search diagnoses "appendicitis": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search diagnoses "perforation": 1 found)
  (search drugs "morphine": 2 found)
  (search referrals "surgical": no matches)
DR: I'll arrange an ambulance so you can travel safely and receive stronger pain relief if needed. I'll also call the emergency team directly. Please don't eat or drink while we arrange assessment, apart from a small sip for pain medicine, because you may need an anaesthetic. Were the tablets you took at six ordinary 500 milligram paracetamol, and have you taken any other pain or cold-and-flu medicines today?
PT: Yes, just the ordinary paracetamol, and I haven't taken anything else.
  Given in clinic: Paracetamol 500 mg tablets, 1 g (2 tablets) orally with a small sip of water Stat dose
  Referred: Emergency department by ambulance (call 000)
  Referred: Phone the emergency department (clinical handover)
DR: I've arranged the ambulance and emergency handover for suspected appendicitis, including your examination findings, temperature and pulse, and the paracetamol you've had. The soreness with even gentle tapping means we also need to check for a leak or burst appendix, although that is not confirmed. We'll keep you here and monitor you until the ambulance arrives. Tell us straight away if the pain spreads or suddenly worsens, you feel faint, become very shivery, or vomit again. Please don't drive or return to work. Hospital blood tests and any necessary imaging should be done there without delaying your transfer. Is there someone you would like us to contact for you?
PT: Can you just call my mum? She can meet me there.
DR: Of course—we'll help you contact your mum so she can meet you at hospital. We'll also ask the ambulance team to treat any ongoing pain or nausea and give fluids if needed.
PT: Thanks, doc. I will just wait here for them then.
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 365/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +20 Red flag: Fever, sweats or chills
- +10 Nausea or vomiting
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Appetite
- +5 Unusual food or takeaway recently
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Pain relief taken so far
- +10 Abdominal palpation
- +5 Renal angle tenderness
- +5 Abdominal percussion
- +5 Hernial orifices
- +10 Testes
- +10 Urine dipstick
- +15 Pain relief before transfer
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "I'm concerned this could be an inflamed appendix")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Please don't eat or drink while we arrange assessment")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
