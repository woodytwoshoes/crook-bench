# moonshotai/kimi-k3: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Graham, I’m worried this may be coming from your heart rather than simple indigestion, so I want to move quickly. Where exactly is the discomfort, and what does it feel like — pressure, burning or pain? Does it spread to your arm, neck, jaw or back? Are you short of breath, sweaty, sick in the stomach or light‑headed? Did it start at rest or with activity, and has it been there constantly since this morning? Have you ever had anything like this before?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
  (list_exams vitals)
DR: Can you point with one finger to where the discomfort is worst?
PT: Right in the middle, behind the breastbone. Bit up into the throat.
  Blood pressure: 104/68.
  Heart rate: 54, regular.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
DR: Did it start while you were resting, or while you were doing something?
PT: I was just sitting having a cuppa, reading the paper.
  (search tests "ECG": 4 found)
  (search drugs "aspirin": 2 found)
  (search drugs "glyceryl trinitrate": 3 found)
  (search referrals "ambulance": 1 found)
DR: I’m treating this as a possible heart attack. I’m calling an ambulance now, I want you to chew one aspirin tablet, and we’re doing a heart tracing right now. Please stay seated and don’t drive yourself anywhere.
PT: Hang on, an ambulance? It's just a bit of indigestion, Doc. Can't I just take some Mylanta and get to this job?
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, the heart tracing shows you are having a heart attack right now — a blocked artery on the underside of the heart. This is not indigestion and Mylanta will not fix it. The ambulance is the fastest safe way to the treatment that reopens the artery, and every minute of delay costs heart muscle. Please do not drive or leave.
PT: Right. Well, if you reckon it's that serious, I suppose I better stay put.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Blood pressure: 104/68. (repeated: no change since the last check)
DR: Have you taken any tablets for erection problems, such as Viagra or Cialis, in the last couple of days?
PT: …Yeah. Took one of those Viagra tablets last night. Don't tell the missus I told you.
DR: Thank you for telling me — that stays confidential, and it’s important. Because you took Viagra last night, I must not give you the usual chest‑pain spray; the two together can drop your blood pressure dangerously. I’ll use something else for the pain.
PT: Right, understood.
  (search drugs "morphine": 2 found)
  (list_exams thorax / listen)
DR: I’m giving a small dose of morphine now for the pain while we wait for the ambulance.
PT: Thanks, Doc. My chest feels pretty heavy.
  Given in clinic: Morphine sulfate 10 mg/1 mL injection, 2.5 mg Stat dose
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Blood pressure: 104/68. (repeated: no change since the last check)
  Heart rate: 54, regular. (repeated: no change since the last check)
  Oxygen saturation: 96% on room air. (repeated: no change since the last check)
  (search diagnoses "myocardial infarction": 3 found)
  (search diagnoses "aortic dissection": 1 found)
  (search diagnoses "pulmonary embolism": 1 found)
DR: Here’s the plan, Graham. You’re having a heart attack from a blocked artery on the underside of your heart. The ambulance is coming and will take you straight to the hospital heart team for an urgent procedure to open that artery, usually with a small metal tube called a stent. You’ve had aspirin to chew and a small dose of morphine. I deliberately did not use the chest‑pain spray because of the Viagra last night — together they can crash your blood pressure. I won’t discuss that tablet with your wife, but I must tell the ambulance and hospital team because it changes which medicines are safe for you. Stay seated and as still as you can; don’t walk, drive, eat or drink anything in case you need an anaesthetic. If you suddenly feel worse, more sweaty, faint, or notice your heart racing or slowing, call out to me straight away.
PT: A heart attack? Crikey. I just came in for some antacids.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 180/480 (Resident), acceptable
- +10 Where exactly the discomfort is
- +10 Blood pressure
- +10 Heart rate
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 Activity at the moment today's pain began
- +10 ECG (12-lead)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- +10 Right-sided ECG (V4R)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Titrated IV morphine or fentanyl for pain (not if systolic BP is below 100)
- +5 Heart sounds
- +5 Breath sounds
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
