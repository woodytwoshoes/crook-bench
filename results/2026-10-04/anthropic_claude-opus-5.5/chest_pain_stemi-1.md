# anthropic/claude-opus-5.5: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hi Graham, I'm the doctor. You look quite unwell, so I'll be quick. Can you tell me where the discomfort is, what it feels like, and whether it spreads to your arm, jaw, neck or back? When exactly did it start, and has it been constant?
PT: It's like a heaviness, sort of a weight on my chest. Right behind the breastbone, a bit up into the throat. Been there about an hour and a half, still there. Jaw's a bit achy, left arm feels heavy. Started about seven this morning, came on over a few minutes. Not my back.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: Graham, your heart tracing shows you're having a heart attack right now. I've called an ambulance to take you straight to hospital, where they can unblock the artery. I want to give you an aspirin to chew. Quickly: are you allergic to aspirin, have you had any recent bleeding such as from your stomach or in your bowel motions, or are you on any blood thinners? Have you taken any erection tablets like Viagra in the last two days?
PT: No allergies, no recent bleeding, no blood thinners. Took one Viagra tablet last night.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Temperature: 36.6 °C.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
DR: Have you ever had chest pain like this before, or any heart problems, stroke, or surgery recently? Any shortness of breath, nausea, or feeling faint right now? And is the pain tearing or ripping through to your back at all?
PT: Too much all at once. What's the first thing you want to know?
DR: Sorry. Have you had a stroke, bleeding in the brain, or any operation in the last few months?
PT: No, never had a stroke or mini-stroke. No operations.
DR: Are you feeling short of breath, sick in the stomach, or faint right now?
PT: A bit short of breath, feel a bit sick but haven't vomited, and got a bit light-headed getting out of the car but didn't pass out.
DR: Thanks Graham. Here's what's happening: one of the arteries supplying your heart is blocked. The ambulance is on its way and the hospital will likely do a procedure to open the artery with a small balloon and stent — the sooner, the better for your heart. You've chewed an aspirin, which helps thin the blood. Because you took Viagra last night, we must NOT give you the usual under-the-tongue spray for chest pain (nitroglycerin) — the combination can drop your blood pressure dangerously, and I'll tell the paramedics and hospital this. Please stay sitting or lying still, don't walk around, and don't eat or drink. I'll stay with you, keep you on the monitor and check your blood pressure. If you feel more faint, your breathing gets worse, or the pain gets much stronger, tell me straight away — I have the defibrillator ready. I'll give the paramedics a copy of your heart tracing and a letter with your medicines. Can someone call your wife to meet you at the hospital?
PT: Wife's name's Julie. She's at home. I'll call her.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Acute myocardial infarction; can't miss Aortic dissection.
END CONSULT

## Bill: 280/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 ECG (12-lead)
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 Right-sided ECG (V4R)
- +5 Any recent bleeding
- +10 Blood thinners (anticoagulants)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +5 Temperature
- +5 Heart sounds
- +5 Breath sounds
- +5 Ever had a stroke or mini-stroke
- +5 Any recent surgery
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Acute myocardial infarction
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you, keep you on the monitor and check your blood pressure.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
