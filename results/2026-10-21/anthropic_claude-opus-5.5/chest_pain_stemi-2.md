# anthropic/claude-opus-5.5: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hi Graham, I'm the GP. Tell me about this indigestion — where exactly is the discomfort, what does it feel like, when did it start, and does it spread anywhere like your arm, jaw, neck or back?
PT: Right in the middle, behind the breastbone. Bit up into the throat. It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. About seven this morning. Came on over a few minutes. It's been going the whole time — so an hour and a half, near enough. Still there now. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
  (search tests "ECG": 4 found)
  (list_exams vitals)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (search referrals "ambulance": 1 found)
  (search drugs "aspirin": 2 found)
  Referred: Emergency department by ambulance (call 000)
DR: Graham, your heart tracing shows you are having a heart attack right now. I've called an ambulance to take you straight to hospital so they can open the blocked artery. Quick questions before I give you aspirin: have you ever reacted badly to aspirin, or had any stomach ulcers, vomiting blood, or recent bleeding or surgery? Have you used Viagra or similar in the last couple of days?
PT: No allergies that I know of, I've had Disprin before, no problems. No bleeding or operations. And yeah, took one of those Viagra tablets last night, don't tell the missus I told you. Hang on, an ambulance? Can't I just drive home, I've got a job to finish.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "aortic dissection": 1 found)
DR: Graham, I understand about the job, but please don't drive — this is a heart attack happening now, and every minute matters. The hospital can unblock the artery and save heart muscle; without that it could be life-threatening, including dangerous heart rhythms. I've given you an aspirin to chew now. Because you took Viagra last night and your blood pressure is on the low side, I'm deliberately NOT giving you the under-the-tongue spray for chest pain — that combination can drop your blood pressure dangerously; I'll make sure the paramedics and hospital know about the Viagra too. Your oxygen level is fine so you don't need oxygen. Stay sitting, don't get up or walk around; I'll stay with you and we have the defibrillator ready until the ambulance arrives. Shall we call your wife? Has the pain got any worse, and do you feel faint, breathless or sick right now?
PT: Maybe a six out of ten, it's more heavy than sore. I felt a bit light-headed getting out of the car, but didn't pass out. I am a bit short of breath, it's hard to get a proper breath in. I feel a bit sick, but haven't vomited. Better call the missus, I suppose.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: Thanks Graham. We'll ring your wife now and tell her to meet you at the hospital — she shouldn't drive you. The paramedics will be here shortly; they'll give you pain relief and anti-sickness medicine and take you to a hospital that can do the procedure to open the artery. If you feel faint, more breathless, or the pain gets worse before they arrive, tell me straight away — I'm right here. I'll send a letter with your ECG, the aspirin I've given, your medicines and the Viagra.
PT: Alright. Just get this over with then.
END CONSULT

## Bill: 250/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 ECG (12-lead)
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +15 Call an ambulance (000) immediately
- +5 Any recent bleeding
- +5 Any recent surgery
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Stay sitting, don't get up or walk around; I'll stay with you and we have the defibrillator ready until the ambulance arrives.")

Graham reaches the cath lab and has a stent to his right coronary artery.
