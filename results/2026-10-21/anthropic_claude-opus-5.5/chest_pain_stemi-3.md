# anthropic/claude-opus-5.5: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hi Graham, I'm the doctor. Tell me about this indigestion — where exactly do you feel it, when did it start, and does it spread anywhere like your arm, jaw or back?
PT: Right in the middle, behind the breastbone, and a bit up into my throat. Started about seven this morning, and it came on over a few minutes. It's like a heaviness, sort of a weight sitting on my chest. It has been going the whole time, so an hour and a half near enough, and it's still there now. Now you mention it, my jaw is a bit achy and my left arm feels heavy, but not my back.
DR: Are you sweaty, short of breath or feeling sick? And have you ever had chest pain like this before, or any heart problems?
PT: Yeah, I've been sweating like anything, thought it was just hot, and a bit short of breath, hard to get a proper breath in, plus I feel a bit sick, though I haven't vomited. This past week I've had a bit of a tightness going up ladders, goes away if I stop, and I put it down to being unfit, but it's been happening more. I've never had anything wrong with my heart.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (search tests "ECG": 4 found)
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I'm worried this is your heart, possibly a heart attack, so I'm calling an ambulance now and doing a heart tracing. Quick questions: any allergy to aspirin, any stomach ulcers or bleeding problems, and have you taken any Viagra-type tablets in the last couple of days?
PT: No allergies that I know of, I've had Disprin before with no problems, and no bleeding or stomach trouble. And yeah, I took one of those Viagra tablets last night, but don't tell the missus I told you. An ambulance? Look, doc, I really just need some quick antacids so I can get back to this job.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search diagnoses "inferior STEMI": 1 found)
DR: Graham, I know the job matters, but this isn't indigestion. Your heart tracing shows you're having a heart attack right now. A blood vessel to the bottom part of your heart is blocked. Every minute counts. The hospital can open it up, usually with a small tube through the wrist, and that saves heart muscle and could save your life. Antacids won't help, and driving or going back to work could kill you. I've given you an aspirin to chew now. The ambulance is on its way and I'll stay with you until it arrives. I'm NOT giving you the under-the-tongue spray we often use for chest pain, because with the Viagra from last night and your low blood pressure it could make your blood pressure drop dangerously. I'll tell the paramedics and hospital about the Viagra. It's important medical information, and we only share it with your treating team. Please don't eat or drink anything. Sit still and tell me straight away if the pain gets worse or you feel faint or more breathless. Can I call your wife to let her know?
PT: If you have to, I suppose. Just make sure you don't scare her too much.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss ST-elevation myocardial infarction (STEMI).
DR: I'll call her calmly and just say you're being taken to hospital for your heart and you're in good hands. The paramedics will put you on a monitor and take you straight to the heart team. You're doing the right thing, Graham.
PT: Alright. Just let's get it over with, then.
END CONSULT

## Bill: 245/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Previous heart problems, angina, stents or heart operations
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +5 Any recent bleeding
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Can't-miss slot repeats the most likely diagnosis: ST-elevation myocardial infarction (STEMI). Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "The ambulance is on its way and I'll stay with you until it arrives.")

Graham reaches the cath lab and has a stent to his right coronary artery.
