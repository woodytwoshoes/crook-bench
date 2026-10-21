# deepseek/deepseek-v4-pro-0813: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. I understand you've had some indigestion since this morning. Can you tell me more about what you're feeling?
PT: It's like a heaviness. Like indigestion but... heavier. Sort of a weight sitting on my chest. Started about seven this morning, came on over a few minutes. It's been going the whole time, near enough an hour and a half, and it's still there now. Right in the middle, behind the breastbone. Bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
DR: That sounds concerning, Graham. Have you had any sweating, nausea, or feeling short of breath with this? And have you ever had anything like this before?
PT: Yeah, I've been sweating like anything, thought it was just hot, and I feel a bit sick though I haven't vomited, plus I'm a bit short of breath and it's hard to get a proper breath in. And this past week I've had a bit of a tightness going up ladders that goes away if I stop, which I put down to being unfit, but it's been happening more.
  (list_exams vitals)
  (search exams "ECG": no matches)
  (search exams "electrocardiogram": no matches)
  (search tests "ECG": 4 found)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  (search referrals "ambulance": 1 found)
  (search referrals "emergency": 5 found)
  (search drugs "aspirin": 2 found)
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search drugs "glyceryl trinitrate": 3 found)
  Referred: Emergency department by ambulance (call 000)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Given in clinic: Glyceryl trinitrate 400 microgram/dose sublingual spray, 400 microgram Stat dose
DR: Graham, I need to be straight with you. The tracing of your heart shows you're having a heart attack — a blockage in one of the arteries supplying the heart muscle. This is why you feel the heaviness, the sweating and the arm and jaw discomfort.

I've already called an ambulance, and I've given you aspirin to thin the blood and a spray under your tongue to help the pain. The ambulance crew will take you straight to hospital where they can open the blocked artery quickly. Please stay sitting and try to stay calm — I'll stay with you until they arrive.
PT: A heart attack? Look, I've got a job booked in for this morning, can't the missus just drive me later?
DR: I understand this is a shock, Graham, but this can't wait. Every minute the artery stays blocked, more heart muscle is being damaged, and that damage can be permanent or even life-threatening. You need to go by ambulance now — the crew can monitor your heart and start treatment on the way, and the hospital team will be ready for you. Please don't drive yourself or wait. The job can be rearranged; your heart can't.
PT: Right. Okay then, if you reckon it's that serious.
  (search diagnoses "myocardial infarction": 3 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 215/480 (Registrar), harmful
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +15 Call an ambulance (000) immediately
- +15 Aspirin 300 mg chewed
- -30 Harmful: GTN (recent sildenafil)
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you until they arrive.")

Within minutes of the GTN, Graham's blood pressure collapses — the sildenafil and nitrate together. He loses consciousness in the consult room and the ambulance crew arrive to a resuscitation. Graham reaches the cath lab and has a stent to his right coronary artery.
