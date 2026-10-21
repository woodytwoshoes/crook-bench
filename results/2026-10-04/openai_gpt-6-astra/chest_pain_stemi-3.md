# openai/gpt-6-astra: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hello Graham, I'm the doctor. You look quite unwell, so we'll assess this straight away. Can you point to where the discomfort is, tell me when it started, and whether it's still there now?
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. It's been there an hour and a half, still there now. Right in the middle, behind the breastbone, bit up into the throat. Started about seven this morning, came on over a few minutes.
  Heart rate (left) (left): 54, regular.
  Blood pressure (left) (left): 104/68.
  Respiratory rate (left) (left): 20.
  Oxygen saturation (left) (left): 96% on room air.
DR: Graham, this could be a heart attack rather than indigestion. I'm calling an ambulance now and arranging a heart tracing immediately. Please rest here and don't walk around or drive. We'll stay with you and keep checking you while help comes.
PT: I don't want to be a bother. Just want some antacid so I can get back to work.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: You're not being a bother. Your heart tracing shows a heart attack, which needs urgent hospital treatment to open a blocked heart artery. An antacid won't treat this and going back to work would be dangerous. Have you ever had an allergy or a serious reaction to aspirin, any recent serious bleeding, or taken aspirin already today?
PT: No allergies that I know of. I've had Disprin before, no problems. No recent bleeding. I don't take aspirin or anything like that.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg chewed or dispersed in water orally Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Heart sounds (left) (left): Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (left) (left): Chest clear. No crackles.
DR: This aspirin helps stop the clot getting bigger. While the ambulance comes, how strong is the discomfort out of ten, and does it spread into either arm, your jaw or your back? Are you short of breath, feeling sick or feeling faint?
PT: It's more like a six, but heavier than sore. It's in my chest, up my throat, and my left arm feels heavy, jaw aches a bit. A bit short of breath, feeling sick but no vomiting. Bit light-headed getting out of the car, didn't pass out.
DR: Was the pain suddenly at its worst as it started, or tearing through to your back? Have you had any new weakness, trouble speaking, or a cold painful arm or leg? Have you taken Viagra, Cialis or similar medicines in the past few days, or any other medicines or recreational drugs?
PT: No, it crept up on me. No weakness, numbness or trouble speaking. Arm's heavy but I can use it fine. Took one of those Viagra tablets last night. Don't tell the missus I told you.
DR: Thank you for telling me—that's confidential, but I do need to tell the ambulance team because it affects which heart medicines are safe. We must avoid a medicine called GTN, often given as a spray under the tongue, because with Viagra it can dangerously lower your blood pressure. What dose did you take and roughly what time? Have you had this chest discomfort before, or any previous heart attack, stroke, stomach ulcer or bleeding?
PT: No, it's not exactly the same as before. I've had a bit of tightness going up ladders in the past week, goes away if I stop. Put it down to being unfit. Never had anything wrong with my heart, never had a stroke or mini-stroke. Never had a stomach ulcer or bleeding.
DR: Do you remember the Viagra dose and what time last night you took it? Apart from that, are you taking anything other than your perindopril and atorvastatin, including blood thinners?
PT: No. Took a 50mg tablet about nine last night. Nothing else. Just perindopril and atorvastatin.
  Jugular venous pressure (left) (left): JVP not raised.
  Blood pressure (right) (right): 104/68.
DR: The tracing shows a heart attack affecting the lower part of your heart. I'll send the tracing and tell the ambulance team it started at 7 am, your blood pressure is 104 over 68, pulse 54, that we've given 300 milligrams of aspirin, and that you took Viagra at 9 pm. They need to take you urgently to a hospital that can open the blocked artery, usually with a small tube and a stent. We won't wait here for blood tests. Your oxygen level is normal, so extra oxygen isn't needed at present. I'll ask our nurse to keep your heart rhythm, blood pressure and oxygen level under close observation, prepare a drip into a vein, and have emergency equipment ready while I stay with you. The ambulance team can give further pain relief safely with monitoring. Please tell me immediately if the discomfort worsens, breathing becomes harder or you feel faint. Would you like us to let your wife know what's happening?
PT: No, I don't want to bother her. Just get me to the hospital. I don't want to be a bother.
  Radial pulse (left) (left): Radial pulse present, regular.
  Radial pulse (right) (right): Radial pulse present, regular.
  Heart rate (left) (left): 54, regular. (already done)
  Oxygen saturation (left) (left): 96% on room air. (already done)
  Blood pressure (left) (left): 104/68. (already done)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Unstable angina; can't miss Aortic dissection.
DR: Of course—we won't contact her against your wishes. You are absolutely not a bother. This is a medical emergency and getting you safely to hospital is our priority. The ambulance has been called, and you'll stay here with us under observation until we hand you directly over to the crew. No walking out or driving yourself.
PT: I don't want to be a bother. Just get me to the hospital. I don't want to be a bother.
END CONSULT

## Bill: 335/505 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 ECG (12-lead)
- +5 Any recent bleeding
- +10 Already taking aspirin or clopidogrel
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +10 Red flag excluded: Weakness, numbness or other neurological symptoms, or limb pain
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Previous heart problems, angina, stents or heart operations
- +5 Ever had a stroke or mini-stroke
- +10 Blood thinners (anticoagulants)
- +5 Jugular venous pressure
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Unstable angina
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Please rest here and don't walk around or drive. We'll stay with you and keep checking you while help comes.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
