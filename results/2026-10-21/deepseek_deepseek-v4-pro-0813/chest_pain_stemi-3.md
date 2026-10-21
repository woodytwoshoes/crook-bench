# deepseek/deepseek-v4-pro-0813: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: G'day Graham, I'm the doctor. I understand you've got some indigestion since this morning. Tell me what it feels like.
PT: It is like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest right in the middle, behind the breastbone, and a bit up into my throat. Started about seven this morning, came on over a few minutes, and it has been going the whole time — so an hour and a half, near enough. Still there now. Now you mention it, my jaw is a bit achy, and my left arm feels heavy. Not my back.
DR: That sounds like it could be coming from your heart, Graham, so I want to check a few things quickly. Have you had any sweating, feeling sick, or shortness of breath with it?
PT: Yeah, I have been sweating like anything, thought it was just hot, and I feel a bit sick, though I haven't vomited. And a bit short of breath, yeah, it is hard to get a proper breath in.
DR: Have you ever had anything like this before? And have you taken anything for it, like antacids, and did it help?
PT: This past week I have had a bit of a tightness going up ladders that goes away if I stop, and I put it down to being unfit, though it has been happening more. I had a couple of Quick-Eze and it did not touch it.
  (list_exams vitals)
  (search tests "ECG": 4 found)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search drugs "aspirin": 2 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  (search referrals "ambulance": 1 found)
  (search referrals "emergency": 5 found)
  Referred: Emergency department by ambulance (call 000)
  (search drugs "glyceryl trinitrate": 3 found)
  Given in clinic: Glyceryl trinitrate 400 microgram/dose sublingual spray, 400 micrograms Stat dose
DR: Graham, I need to be straight with you. Your heart tracing shows you're having a heart attack — a blockage in one of the arteries supplying your heart. This is why you feel the heaviness, the sweating and the arm and jaw ache.

I've already called an ambulance, and I've given you aspirin to thin the blood and a spray under your tongue to help the pain. The ambulance will take you straight to hospital, where they can open the blocked artery quickly. The sooner that's done, the better your heart will recover.

Please stay sitting and try to stay calm. Don't get up or walk around. The ambulance is on its way.
PT: An ambulance? Bloody hell, doc. I've got a job I need to finish today.
DR: I understand, Graham, and I know this is a shock. But the job can wait — right now your heart muscle is being starved of blood, and every minute counts. Going to hospital now is what will save your heart and quite possibly your life. I need you to stay here with me until the ambulance arrives. Is there anyone I can call for you — your wife, or someone to let work know?
PT: You had better call the missus.
  (search diagnoses "myocardial infarction": 3 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 220/480 (Registrar), harmful
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +5 Whether antacids or anything else relieved it
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- -30 Harmful: GTN (recent sildenafil)
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I need you to stay here with me until the ambulance arrives.")

Within minutes of the GTN, Graham's blood pressure collapses — the sildenafil and nitrate together. He loses consciousness in the consult room and the ambulance crew arrive to a resuscitation. Graham reaches the cath lab and has a stent to his right coronary artery.
