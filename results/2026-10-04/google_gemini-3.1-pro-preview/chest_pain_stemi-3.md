# google/gemini-3.1-pro-preview: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hi Graham. You look really uncomfortable, pale, and sweaty. Tell me exactly what this 'indigestion' feels like, where it is, and when it started this morning.
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. It's been going the whole time, about an hour and a half. Still there now. Right in the middle, behind the breastbone, bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Started about seven this morning. Came on over a few minutes.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I've just done your ECG and you are having a heart attack. It's an emergency, so I am calling an ambulance right now to take you to the hospital. I'm going to give you an aspirin to chew on immediately. Do you have any allergies to aspirin?
PT: No allergies that I know of. I've had Disprin before, no problems.
DR: Have you taken any medications like Viagra, Cialis or Levitra in the past 48 hours? And have you had any recent major bleeding, surgery, or a history of a stroke?
PT: Yeah. Took one of those Viagra tablets last night. Don't tell the missus I told you. No recent bleeding. Never had a stroke or mini-stroke. No operations.
DR: Thank you for letting me know about the Viagra - that is very important because if I gave you the usual heart attack spray (GTN), it could cause a dangerous drop in your blood pressure. So I will hold off on that. The ambulance is on its way. Are you feeling short of breath, sick or nauseous?
PT: A bit short of breath, yeah. Hard to get a proper breath in. Feel a bit sick. Haven't vomited.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Jugular venous pressure: JVP not raised.
DR: Does the pain radiate to your back, and would you describe it as a sharp, tearing or ripping sensation?
PT: No. Not my back.
DR: Apart from the blood pressure and cholesterol issues, do you have any other conditions like diabetes? And any other medications apart from Perindopril and Atorvastatin?
PT: Not that I know of. Perindopril 5 mg daily. Atorvastatin 40 mg daily.
  Blood pressure in both arms: Right 104/68, left 102/66. Radial pulses equal.
DR: Graham, the ECG confirms you are having a heart attack. I have given you an Aspirin to help thin your blood, and I have called the ambulance which is on its way. Because you took Viagra last night, I cannot give you the usual angina spray (GTN), as it would cause your blood pressure to drop dangerously low. I've checked your blood pressure and heart, and you are stable right now. The paramedics will give you strong pain relief when they arrive and will take you to the hospital for further treatment, likely a procedure to unblock the artery. Try to relax and keep calm, I will stay with you until they get here.
PT: Yeah. I didn't think it was nothing. Just indigestion.
DR: When you recover from this, we will need to have a serious chat about your smoking, as it is a major risk factor for heart attacks. For now, the most important thing is getting you to the hospital safely. Do you have any questions for me while we wait?
PT: No. Been meaning to quit. About twenty a day since I was a teenager.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Gastro-oesophageal reflux disease; can't miss Aortic dissection.
END CONSULT

## Bill: 280/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately for STEMI transfer
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Any recent bleeding
- +5 Ever had a stroke or mini-stroke
- +5 Any recent surgery
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +5 Heart sounds
- +5 Breath sounds
- +5 Jugular venous pressure
- +10 Diabetes
- +10 Blood pressure in both arms
- +10 Smoking history
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Gastro-oesophageal reflux disease
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I have given you an Aspirin to help thin your blood, and I have called the ambulance which is on its way.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
