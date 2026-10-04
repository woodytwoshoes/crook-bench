# anthropic/claude-opus-5.5: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hi Graham, I'm the doctor. Can you tell me what the discomfort feels like, exactly where it is, when it started, and whether it spreads anywhere like your arm, jaw or back?
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. Right in the middle, behind the breastbone, bit up into the throat. Started about seven this morning. Been there the whole time, near enough an hour and a half. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Referred: Emergency department by ambulance (call 000)
DR: Graham, your heart tracing shows you're having a heart attack right now. I'm calling an ambulance to take you straight to hospital so they can open the blocked artery. Before I give you aspirin, a few quick questions: are you allergic to aspirin, or have you had any stomach ulcers or bleeding, recent surgery, or a stroke? And have you taken any Viagra-type medicine in the last two days?
PT: No allergies, no stomach ulcers or bleeding, no recent surgery, never had a stroke. Took one of those Viagra tablets last night.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair. (already done)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
DR: Has the pain been tearing or ripping, going through to your back? Do you feel short of breath, faint or sick in the stomach? And do you have equal strength in both arms?
PT: No, nothing like that. A bit short of breath, bit light-headed getting out of the car, feel a bit sick but haven't vomited. Arm's heavy but I can use it fine.
DR: Thanks Graham. Here's what's happening. Your heart tracing shows a heart attack affecting the bottom part of the heart, from a blocked artery. Chew the aspirin I gave you; it helps thin the blood. The ambulance is on its way and the hospital will most likely put a small tube into the artery to open it up, and the sooner they do it, the better for your heart. Because you took a Viagra tablet last night and your blood pressure is on the low side, I won't give you the spray under the tongue that's normally used for chest pain. That combination can make your blood pressure drop dangerously low. Please tell the paramedics and hospital staff about the Viagra too. Stay sitting or lying still, don't walk around, and don't eat or drink anything. I'll stay with you until the ambulance arrives. If you feel faint, the pain gets worse or you feel very short of breath, tell me straight away. Your wife can come with you, but she shouldn't drive behind the ambulance in a rush. Quitting smoking will be really important afterwards, and we'll go through it when you're out of hospital.
PT: No, nothing like that. About twenty a day since I was a teenager, been meaning to quit. I've had Disprin before, no problems.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Non-ST-elevation myocardial infarction (NSTEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 295/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately for STEMI transfer
- +5 Any recent bleeding
- +5 Any recent surgery
- +5 Ever had a stroke or mini-stroke
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Nausea or vomiting
- +10 Red flag excluded: Weakness, numbness or other neurological symptoms, or limb pain
- +10 Blood thinners (anticoagulants)
- +10 Smoking history
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you until the ambulance arrives.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
