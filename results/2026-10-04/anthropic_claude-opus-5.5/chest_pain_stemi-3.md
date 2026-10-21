# anthropic/claude-opus-5.5: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hi Graham, I'm the doctor. You look quite unwell, so I'm going to move quickly. Can you tell me exactly where the discomfort is, what it feels like, and does it spread anywhere like your arm, neck or jaw? What time did it start and has it been constant?
PT: Right in the middle, behind the breastbone. Bit up into the throat. Feels like a heaviness, like indigestion but heavier. Sort of a weight sitting on my chest. It's been going the whole time — about an hour and a half. Still there now. Jaw's a bit achy, left arm feels heavy. Not my back. Started about seven this morning. Came on over a few minutes.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  Referred: Emergency department by ambulance (call 000)
DR: Graham, your heart tracing shows you're having a heart attack right now. I've called an ambulance to take you straight to hospital so they can open the blocked artery. Before I give you aspirin: have you ever had a reaction to aspirin, any stomach ulcer or bleeding problems, or are you on any blood thinners? And have you taken anything like Viagra in the last couple of days?
PT: No allergies that I know of. I've had Disprin before, no problems. No bleeding issues. Nothing like blood thinners. Took one of those Viagra tablets last night.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
DR: Please chew this aspirin now. Because you took Viagra last night, I will NOT give you the under-the-tongue spray for the chest pain — together they can drop your blood pressure dangerously. I'll tell the paramedics too. A few quick questions while we wait: any shortness of breath, fainting or feeling light-headed? Any chest pain like this before? How much do you smoke, and has anyone in your family had heart problems young?
PT: Bit short of breath, yeah. Hard to get a proper breath in. Bit light-headed getting out of the car. Didn't pass out. Had a bit of tightness going up ladders — goes away if I stop. It's been happening more. About twenty a day since I was a teenager. Dad had a heart attack at fifty-five. He died from it.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Aortic dissection; can't miss Aortic dissection.
DR: Graham, here's what's happening. One of the arteries feeding the bottom of your heart is blocked. The ambulance is on its way and the hospital will most likely take you straight to the heart unit to open the artery with a small balloon and stent. Time matters, so we act fast. Until they get here: stay sitting, don't get up or walk around, and I'm staying with you and watching your heart, blood pressure and oxygen. Your oxygen level is fine, so you don't need oxygen at the moment. I'll give the paramedics your heart tracing and tell them you've had aspirin 300 mg and took Viagra last night, so no nitrate spray. If the pain gets much worse, you feel faint, or your breathing gets worse, tell me straight away. Please don't eat or drink anything. Your wife can follow the ambulance, but she shouldn't drive you. Later on we'll talk about stopping smoking, which is the most important thing for your heart, and you'll go to cardiac rehab after you leave hospital.
PT: Yeah. I don't know. Maybe a six? It's more heavy than sore.
END CONSULT

## Bill: 255/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 ECG (12-lead)
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +15 Call an ambulance (000) immediately for STEMI transfer
- +5 Any recent bleeding
- +10 Blood thinners (anticoagulants)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Smoking history
- +5 Family history of heart disease at a young age
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Aortic dissection
- -20 Can't-miss slot repeats another choice: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Until they get here: stay sitting, don't get up or walk around, and I'm staying with you and watching your heart, blood pressure and oxygen.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
