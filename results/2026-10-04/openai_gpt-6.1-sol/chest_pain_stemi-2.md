# openai/gpt-6.1-sol: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Graham, you look quite unwell. Indigestion can sometimes come from the heart, so I want to check you straight away. Where is the discomfort, what does it feel like, and is it happening right now?
PT: It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. It's been going the whole time — so an hour and a half, near enough. Still there now. Right in the middle, behind the breastbone. Bit up into the throat.
  Referred: Emergency department by ambulance (call 000)
DR: This could be a heart attack. I'm calling an emergency ambulance now; you must not drive. We'll keep you resting here and get a heart tracing while help is on the way. Have you ever reacted badly to aspirin, or had recent serious bleeding? Have you taken anything for this today?
PT: No allergies that I know of. I've had Disprin before, no problems. No recent bleeding. Had a couple of Quick-Eze, didn't touch it.
  Heart rate (left) (left): 54, regular.
  Blood pressure (left) (left): 104/68.
  Respiratory rate (left) (left): 20.
  Oxygen saturation (left) (left): 96% on room air.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
DR: The heart tracing shows a heart attack. You need urgent hospital treatment to reopen the blocked artery. We've given aspirin to help stop the clot growing. I'll tell the ambulance team the tracing results so they can arrange the right heart unit without delay. Did this start suddenly at its worst, and have you had pain into your back, arms or jaw? How bad is it out of ten? Are you short of breath, feeling sick, or faint?
PT: Started suddenly at seven this morning, came on over a few minutes. It's spread to my jaw and left arm, feels heavy rather than sore. Maybe a six out of ten. A bit short of breath, feel a bit sick, bit light-headed getting out of the car.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Heart sounds (left) (left): Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (left) (left): Chest clear. No crackles.
DR: Have you had any pain tearing through to your back, weakness on one side, or passed out? Have you had a heart attack or heart procedure before? Have you taken any erection medicines such as Viagra or Cialis in the last few days? Are your usual medicines still perindopril and atorvastatin, with anything else including blood thinners?
PT: No tearing pain, just crept up on me. Arm's heavy but I can use it fine. Never had anything wrong with my heart. Took one of those Viagra tablets last night. Still on perindopril and atorvastatin, nothing else.
  Jugular venous pressure (left) (left): JVP not raised.
  Blood pressure (right) (right): 104/68.
DR: Thank you for telling me about Viagra—that's important. I won't give you the usual angina spray because it could dangerously lower your blood pressure after Viagra. Your oxygen level is normal, so extra oxygen isn't needed now. Please stay resting on the couch and don't get up or walk around. Tell me straight away if the pain worsens, you feel more faint, or breathing becomes harder. We'll stay with you, monitor your heart rhythm, blood pressure and oxygen, and have resuscitation equipment ready until the ambulance arrives. The ambulance team can give further pain relief safely. We won't wait for blood tests here.
PT: Yeah. I don't want to be a bother. Just… get this sorted.
DR: You're not a bother at all—getting help quickly is exactly the right thing. I'm handing over that your pain began at 7 am and is ongoing, your tracing shows a heart attack affecting the lower part of the heart, your pulse is 54 and blood pressure 104 over 68, you've received 300 milligrams of aspirin, and you took Viagra last night. I'll send both heart tracings and your medicine details with you and request urgent transfer to a hospital that can open the artery. We can contact your wife while we wait.
PT: I just want to get this fixed. Not be stuck here.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Unstable angina; can't miss Aortic dissection.
END CONSULT

## Bill: 295/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +15 Call an ambulance (000) immediately for STEMI transfer
- +5 Any recent bleeding
- +5 Whether antacids or anything else relieved it
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +15 Aspirin 300 mg chewed
- +10 When the discomfort started
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +10 Red flag excluded: Weakness, numbness or other neurological symptoms, or limb pain
- +10 Previous heart problems, angina, stents or heart operations
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Jugular venous pressure
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Unstable angina
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "We'll stay with you, monitor your heart rhythm, blood pressure and oxygen, and have resuscitation equipment ready until the ambulance arrives.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
