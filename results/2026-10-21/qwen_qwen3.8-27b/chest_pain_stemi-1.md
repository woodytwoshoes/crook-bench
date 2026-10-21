# qwen/qwen3.8-27b: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Graham, thanks for coming in. So you've been feeling indigestion since this morning — can you take me through what's been going on, starting from when it began?
PT: About seven this morning, came on over a few minutes. It's like a heaviness. Like indigestion but... heavier. Sort of a weight sitting on my chest. Right in the middle, behind the breastbone. Bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. It's been going the whole time — so an hour and a half, near enough. Still there now.
DR: Graham, I need to ask a few more quick questions because that pattern — a heaviness behind the breastbone with jaw and left arm symptoms — can be your heart as well as your stomach. Are you short of breath at all? Have you been sweating or feeling cold and clammy? Any nausea or vomiting? Any dizziness or near-fainting? And have you ever had anything like this before?
PT: A bit short of breath, yeah, hard to get a proper breath in, and I've been sweating like anything, thought it was just hot. Feel a bit sick, haven't vomited. Bit light-headed getting out of the car, didn't pass out. This past week I've had a bit of a tightness going up ladders, goes away if I stop, put it down to being unfit, it's been happening more.
  (list_exams vitals)
  (search exams "ECG": no matches)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
  (list_exams thorax / listen)
  (search diagnoses "STEMI": 1 found)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (Lungs (front)): Chest clear. No crackles.
DR: Graham, I have to be straight with you. This isn't indigestion — the tracing of your heart shows you're having a heart attack. An artery in the bottom part of your heart has blocked up, and that explains the heaviness, the jaw and arm ache, the sweating, the sick feeling and the light-headedness. It's a medical emergency, and the good news is we've caught it and you're getting the fastest treatment possible.

Here's the plan:
- You've just had a chewable aspirin tablet — chew it well, it stops the clot getting bigger.
- I've called an ambulance. Please don't drive, and don't let anyone else drive you — the paramedics will monitor your heart the whole way and can treat you on the journey.
- I've pre-alerted the hospital so the heart team with the catheter lab is ready for you. There you'll have a procedure where they thread a tiny tube up to the blocked artery and open it — that's the treatment that saves heart muscle.
- Your blood pressure is running a bit low, so I've deliberately held back the heart spray; the hospital team will look after your pain and the rest of your medicines — your blood pressure and cholesterol tablets will be reviewed there, so don't take any more of them today.
- Until the team at the hospital clears you, it's best not to eat or drink, in case of the procedure.

Try to sit still and relaxed in your chair — any movement makes the heart work harder. If the pain gets worse, or you feel faint before the ambulance arrives, press the call button or call 000 straight away and tell me. Your wife can follow in the car if she likes. We're doing this right, and time is on your side now — let's get you to the cath lab quickly.
PT: Bloody hell. Are you sure? I've got a job I need to finish today.
DR: Graham, I'm sure — the heart tracing shows a blocked artery with an acute injury pattern, and your symptoms and risk factors all fit. I know a job site can wait, but a blocked heart artery can't — the next hour or two is exactly when the team can open it and save your heart muscle. If this were just indigestion, none of this would be happening.

Call your boss or whoever's expecting you — say you're being taken to hospital as a medical emergency, and that's all they need to know. I can put a note in for you confirming that, so you don't have to explain anything more. Your only job today is to sit still and let the ambulance and the heart team do theirs.
PT: Alright. I'll call him.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Nothing to exclude.
END CONSULT

## Bill: 225/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Shortness of breath
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- +5 Heart sounds
- +5 Breath sounds
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
