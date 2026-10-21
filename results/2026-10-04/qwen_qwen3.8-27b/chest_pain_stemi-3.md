# qwen/qwen3.8-27b: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Graham, I'm Dr. Patel. Your wife mentioned you've been feeling poorly with some indigestion since this morning. Can you tell me exactly what's been bothering you — where the discomfort is, what it feels like, and when it started?
PT: It's a heaviness, like indigestion but heavier. Sort of a weight on my chest. Right behind the breastbone, a bit up into the throat. Started about seven this morning, came on over a few minutes. Been there ever since.
DR: Thank you, that's helpful. I want to check a few things. Is the heaviness spreading anywhere — to your arm, shoulder, jaw, or back? Do you feel nauseated, lightheaded, or short of breath? Has it come and gone in waves, or is it constant? And have you had anything like this before?
PT: No, it's not spreading to my back. My jaw's a bit achy and my left arm feels heavy. Feel a bit sick but haven't vomited. Bit light-headed getting out of the car, didn't pass out. A bit short of breath, yeah. It's been constant since this morning, but I've had a tightness going up ladders in the past week — goes away if I stop.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Troponin (point-of-care): Collected 08:30 (consult start). Negative.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I need to be straight with you: your ECG shows that you're having a heart attack — specifically in the lower part of the heart. I've given you 300 mg of aspirin, and I've called an ambulance to bring you to the emergency department of a hospital that can open up the blocked artery, ideally within the hour. Your breathing and oxygen level are okay, so you don't need oxygen.

A few important things right now:
- Sit still and rest — don't walk around, don't eat or drink anything, and don't drive.
- If the pain gets worse or you feel faint before the ambulance arrives, we'll be right here.
- When you get to hospital, take your medication list — the perindopril and statin you take at home — and let the team know if you have any allergies.

Your wife was right to insist you come in. Would you like me to ring her now so she can meet the ambulance?
PT: No, I don't take aspirin or anything like that. I've had Disprin before, no problems. Never had anything wrong with my heart, never had a stroke or mini-stroke, never had a clot.
  Heart sounds (Heart) at heart: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Pericarditis; can't miss Aortic dissection.
DR: Graham, your heart sounds and lungs are as expected, and there's nothing to change what we've set in motion. To summarise: you're having a heart attack in the lower part of the heart, and the ambulance is on its way to take you to the emergency department for the clot-busting treatment or catheter lab that can reopen the artery.

Please remember: don't eat or drink, don't take any other medicines on the way unless the paramedics tell you to, keep your medication bottle list with you, and if the pain changes or you feel faint before you're loaded in, tell us immediately.

You did the right thing coming in today — I hope to see you through to recovery.
PT: I don't take aspirin or anything like that. I've had Disprin before, no problems. Never had anything wrong with my heart, never had a stroke or mini-stroke, never had a clot.
END CONSULT

## Bill: 270/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 When the discomfort started
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Shortness of breath
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +5 Troponin (point-of-care)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 Blood thinners (anticoagulants)
- +10 Already taking aspirin or clopidogrel
- +10 Previous heart problems, angina, stents or heart operations
- +5 Ever had a stroke or mini-stroke
- +5 Blood clots in the legs or lungs, ever
- +5 Heart sounds
- +5 Breath sounds
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Pericarditis
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG; stay with the patient with a defibrillator available until the ambulance arrives.
