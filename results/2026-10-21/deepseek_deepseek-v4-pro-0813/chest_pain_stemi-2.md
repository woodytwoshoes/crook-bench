# deepseek/deepseek-v4-pro-0813: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. I understand you've had some indigestion since this morning. Can you tell me more about what you're feeling?
PT: It started about seven this morning, came on over a few minutes. It's like a heaviness. Like indigestion but... heavier. Sort of a weight sitting on my chest. Right in the middle, behind the breastbone. Bit up into the throat. It's been going the whole time, near enough an hour and a half, and it's still there now. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
DR: That sounds concerning, Graham. Have you had any sweating, feeling sick to your stomach, or shortness of breath with this?
PT: Yeah, I've been sweating like anything, thought it was just hot. Feel a bit sick, haven't vomited. A bit short of breath, yeah, hard to get a proper breath in.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I need to be straight with you. Your heart tracing shows you're having a heart attack — the blood supply to part of your heart muscle is blocked. This is why you feel the heaviness, the sweating and the arm and jaw discomfort. I've already given you aspirin to thin the blood, and I've called an ambulance to take you straight to hospital, where they can open the blocked artery quickly. Please stay sitting and try to stay calm. The ambulance is on its way.
PT: A heart attack? Look, I've got a job to finish off down the road, can't I just drive myself after a bit?
DR: No, Graham, I really need you not to drive. This is an emergency — your heart muscle is being starved of blood right now, and every minute counts. Driving yourself would be dangerous, both for you and for others on the road, because your heart rhythm could change suddenly. The ambulance crew can monitor you and start treatment on the way. Please stay here with me until they arrive. The job can wait — your life is more important.
PT: Alright then, if you reckon. My wife's going to kill me.
  (search drugs "glyceryl trinitrate": 3 found)
  Given in clinic: Glyceryl trinitrate 400 microgram/dose sublingual spray, 400 micrograms Stat dose
  (search diagnoses "myocardial infarction": 3 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: You've done the right thing coming in, Graham. The spray under your tongue should help ease the heaviness. While we wait, if the pain gets worse, you feel faint, or you feel your heart racing or fluttering, tell me straight away. The ambulance crew will take over and get you to the hospital where they can unblock the artery. Try to stay calm and take slow breaths.
PT: I don't know, maybe a six, it's more heavy than sore. I was a bit light-headed getting out of the car, didn't pass out though.
END CONSULT

## Bill: 215/480 (Registrar), harmful
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
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
- +20 Red flag: Dizziness, light-headedness or fainting
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Please stay here with me until they arrive.")

Within minutes of the GTN, Graham's blood pressure collapses — the sildenafil and nitrate together. He loses consciousness in the consult room and the ambulance crew arrive to a resuscitation. Graham reaches the cath lab and has a stent to his right coronary artery.
