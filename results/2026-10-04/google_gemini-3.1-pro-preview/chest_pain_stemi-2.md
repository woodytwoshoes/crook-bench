# google/gemini-3.1-pro-preview: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hi Graham, I can see you're looking quite unwell and uncomfortable. Can you tell me exactly what you're feeling in your chest or stomach, when it started, and if the pain is moving anywhere else?
PT: Feeling like a weight on my chest. Heavier than indigestion. It's been there an hour and a half. Right behind the breastbone, up into the throat. My jaw's a bit achy and left arm feels heavy. Started about seven this morning.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: Graham, based on your symptoms and how you look, I am very concerned that you are having a heart attack. I am going to do an ECG right now to check your heart tracing, and I need to check your vital signs. Do you have any allergies to Aspirin? Have you had any bleeding problems or a recent stomach ulcer?
PT: No allergies that I know of. I've had Disprin before, no problems. No recent bleeding.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: Graham, the ECG confirms you are having a heart attack. I am calling an ambulance right away to take you to the emergency department. I am also going to give you some Aspirin to chew. Have you ever used a Viagra-like medication recently?
PT: Yeah. Took one of those Viagra tablets last night. Don't tell the missus I told you.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, it's very important that you mentioned the Viagra, because it means we absolutely cannot give you a medication called GTN (a nitrate spray) that we normally use for chest pain, as it could dangerously drop your blood pressure. I am giving you 300mg of Aspirin to chew now. The ambulance is on its way. Have you noticed any shortness of breath or dizziness?
PT: A bit short of breath, and bit light-headed getting out of the car, but didn't pass out.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
DR: Graham, the ambulance is on its way. You are doing the right thing by sitting still and staying calm. Your lungs are clear and the heart sounds are steady, though the trace shows a heart attack in the lower part of your heart. When the paramedics arrive, they will likely give you some strong pain relief and take you straight to the hospital, where they will probably perform a procedure to open up the blocked artery in your heart. Do you have any questions?
PT: No. Just… hope it's not too bad.
DR: Have you noticed any tearing or ripping pain in your back, or does the pain radiate to your back at all?
PT: No, nothing like that. It crept up on me.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Gastro-oesophageal reflux disease; can't miss Aortic dissection.
DR: The ambulance is pulling up now, Graham. You're in good hands. Try to relax, they will take over from here and get you sorted out at the hospital.
PT: Right. Just hope it's not too bad.
END CONSULT

## Bill: 240/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +5 Any recent bleeding
- +10 Right-sided ECG (V4R)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately for STEMI transfer
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +5 Heart sounds
- +5 Breath sounds
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Gastro-oesophageal reflux disease
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG; stay with the patient with a defibrillator available until the ambulance arrives.
