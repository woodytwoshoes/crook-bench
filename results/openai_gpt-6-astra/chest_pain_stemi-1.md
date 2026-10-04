# openai/gpt-6-astra: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Graham, you look quite unwell, and indigestion can sometimes be a sign of a heart problem. We'll assess you immediately. Where do you feel the discomfort, when did it start, and is it still there now?
PT: Right in the middle, behind the breastbone. Bit up into the throat. Started about seven this morning. Came on over a few minutes. Still there now. Like a heaviness, sort of a weight sitting on my chest.
DR: Please rest here and don't walk around. I am arranging an emergency ambulance because this could be a heart attack. How severe is the heaviness out of ten? Does it spread into your arms, jaw or back? Are you short of breath, feeling sick, or faint?
PT: Maybe a six, more heavy than sore. It's in my jaw and left arm, not my back. A bit short of breath, feel a bit sick, bit light-headed getting out of the car.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Heart rate (left) (left): 54, regular.
  Blood pressure (left) (left): 104/68.
  Respiratory rate (left) (left): 20.
  Oxygen saturation (left) (left): 96% on room air.
DR: Have you ever had a reaction to aspirin, any recent bleeding or black stools, or been told you must not take aspirin? What medicines have you taken today, including any blood thinners or medicines for erections such as Viagra or Cialis in the last few days?
PT: No allergies that I know of, I've had Disprin before, no problems. No recent bleeding, no black stools. Took one of those Viagra tablets last night. No blood thinners.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: The heart tracing shows a heart attack. The ambulance is being arranged urgently to take you to a hospital that can open the blocked heart artery. Please chew this aspirin now. We must avoid angina spray because you took Viagra and the combination could dangerously lower your blood pressure. I will stay with you and have the team keep monitoring you, with the resuscitation equipment ready. Did the pain start suddenly at its worst, or feel like tearing? Have you passed out, or had any new weakness or trouble speaking?
PT: No, it crept up on me. No, arm's heavy but I can use it fine. No, no weakness, no trouble speaking.
  Heart sounds (left) (left): Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (left) (left): Chest clear. No crackles.
  Blood pressure (right) (right): 104/68.
DR: Have you had similar pain before, a heart attack, a heart stent, or a stroke? What time and dose of Viagra did you take? Have you taken your usual blood pressure and cholesterol tablets today, or anything for this pain?
PT: No, never had a heart attack or stroke. Had a bit of tightness going up ladders, goes away if I stop, but never had proper chest pain like this. Never had a heart stent or operation. Took my usual tablets this morning, perindopril and atorvastatin, but didn't take aspirin or anything for the pain. Took Viagra last night, about an hour before bed, one tablet.
DR: The ambulance team needs to know this is an urgent heart attack affecting the lower part of the heart, with a slow pulse. I'll send the tracings and ask them to alert the hospital's heart artery treatment team immediately. You have received 300 mg of aspirin; I'll also tell them about the Viagra so no nitrate medicines are given. Your oxygen level is normal, so extra oxygen isn't needed now. We'll monitor your heart rhythm, blood pressure and oxygen continuously, arrange a vein line if available without delaying transfer, and have the defibrillator ready. The ambulance team can give carefully monitored pain relief. Is the discomfort getting worse or are you feeling more faint now? Would you like us to contact your wife?
PT: No, not worse. No, don’t need to contact the missus.
  Blood pressure (left) (left): 104/68. (already done)
  Heart rate (left) (left): 54, regular. (already done)
  Oxygen saturation (left) (left): 96% on room air. (already done)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Gastro-oesophageal reflux disease; can't miss Aortic dissection.
DR: Graham, this is serious, but getting the artery opened quickly gives you the best chance of limiting heart damage. Please stay resting here with us until the ambulance takes over—don't drive or walk out. Tell me immediately if the heaviness increases, breathing becomes difficult, or you feel faint. We won't delay the ambulance for blood tests or try treating this as ordinary indigestion. The hospital will do further tests and give the additional treatment needed.
PT: No, I don't take aspirin or anything like that.
END CONSULT

## Bill: 330/505 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 When the discomfort started
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 ECG (12-lead)
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Any recent bleeding
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +10 Blood thinners (anticoagulants)
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +10 Red flag excluded: Weakness, numbness or other neurological symptoms, or limb pain
- +5 Heart sounds
- +5 Breath sounds
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Previous heart problems, angina, stents or heart operations
- +5 Ever had a stroke or mini-stroke
- +10 Already taking aspirin or clopidogrel
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Gastro-oesophageal reflux disease
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Please stay resting here with us until the ambulance takes over—don't drive or walk out.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
