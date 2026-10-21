# anthropic/claude-opus-5.5: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hi Graham, I'm the doctor. Tell me about this indigestion — when did it start, where exactly do you feel it, and does it spread anywhere like your arm, jaw or back?
PT: Started about seven this morning, came on over a few minutes, and it has been going the whole time. It is right in the middle, behind the breastbone, and a bit up into the throat. It is like a heaviness, like indigestion but heavier, sort of a weight sitting on my chest. Now you mention it, my jaw is a bit achy, and my left arm feels heavy. Not my back.
  (search tests "ECG": 4 found)
  (list_exams vitals)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (search referrals "ambulance": 1 found)
  (search drugs "aspirin": 2 found)
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Referred: Emergency department by ambulance (call 000)
DR: Graham, your heart tracing shows you are having a heart attack right now. I've called an ambulance to take you straight to hospital so they can open the blocked artery. Quick questions before I give you aspirin: are you allergic to aspirin, have you had any stomach ulcers or bleeding, recent surgery or stroke, or do you take any blood thinners? And are you short of breath, sweaty or feeling faint?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Sure. Have you ever had a reaction to aspirin, or any bleeding from your stomach?
PT: No allergies that I know of, I've had Disprin before with no problems, and no bleeding.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
DR: Have you had recent surgery, a stroke, or do you take any blood thinners or erectile dysfunction tablets like Viagra?
PT: No operations, never had a stroke, no blood thinners, and yeah, took one of those Viagra tablets last night. Don't tell the missus I told you.
DR: Thanks for telling me — that's really important, it means I must NOT give you the under-the-tongue spray for chest pain, and the ambulance and hospital need to know. Are you feeling short of breath, sweaty, sick or light-headed?
PT: A bit short of breath, yeah, hard to get a proper breath in, and I have been sweating like anything, thought it was just hot. I feel a bit sick, though I haven't vomited, and I was a bit light-headed getting out of the car, but didn't pass out.
  (list_exams thorax)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: Graham, here's what's happening. Your heart tracing shows a heart attack affecting the bottom part of your heart — one of the heart arteries is blocked. This is an emergency, but it's very treatable if we move fast. The ambulance is on its way and will take you straight to a hospital that can open the artery, usually with a small tube through the wrist (a stent). I've given you an aspirin to chew, which helps thin the blood. Because you took Viagra last night, nobody should give you the nitrate spray — please make sure you tell the paramedics and hospital doctors that, they won't judge you, it's for your safety. Your oxygen level is fine so you don't need oxygen at the moment. Stay seated or lie down, don't walk around, and don't drive. I'll stay with you, with the defibrillator nearby, until the ambulance arrives. If you feel faint, the pain gets worse, or you feel your heart racing, tell me straight away. I'll send a letter with your tracing and medications to the hospital, and we can ring your wife so she can meet you there. After hospital you'll need to stop smoking and come back to see me for follow-up.
PT: A heart attack? Crikey. Can you just ring my missus now?
DR: Absolutely, we'll ring her right now and tell her which hospital to go to. You just sit still and breathe — you're in the right place and help is coming.
PT: Thanks, Doc. I just want to get this sorted out.
END CONSULT

## Bill: 295/480 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 ECG (12-lead)
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 Right-sided ECG (V4R)
- +15 Call an ambulance (000) immediately
- +5 Any recent bleeding
- +15 Aspirin 300 mg chewed
- +5 Any recent surgery
- +5 Ever had a stroke or mini-stroke
- +10 Blood thinners (anticoagulants)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +20 Red flag: Shortness of breath
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +5 Heart sounds
- +5 Breath sounds
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you, with the defibrillator nearby, until the ambulance arrives.")

Graham reaches the cath lab and has a stent to his right coronary artery.
