# anthropic/claude-fable-5.1: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. You're looking quite unwell to me. Tell me about this indigestion – where exactly do you feel it, what does it feel like, and when did it start?
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. It's been there an hour and a half, near enough. Right in the middle, behind the breastbone. Bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. About seven this morning. Came on over a few minutes.
DR: Graham, I'm concerned this may be your heart rather than indigestion, so I'm going to move quickly. A few quick questions: Is the pain still there now, and how bad is it out of ten? Are you short of breath, or feeling sick or faint? Have you taken anything for it this morning, and have you ever had anything like this before?
PT: Too much all at once. What do you want to know first?
DR: Sorry Graham. Is the pain still there now, and how bad is it out of ten?
PT: I don't know. Maybe a six? It's more heavy than sore.
  Unknown exam "vitals". Use list_exams or search.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: Graham, the heart tracing shows you are having a heart attack. I've already called an ambulance – they're on their way, and you're going straight to hospital where they can open the blocked artery. I'm going to give you some aspirin to chew now. Quickly: have you ever had a bad reaction to aspirin, or any stomach ulcers or bleeding problems? And have you taken any medicine for erections such as Viagra or Cialis in the last couple of days?
PT: No allergies that I know of. I've had Disprin before, no problems. Took one of those Viagra tablets last night.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
DR: Good – chew that up and swallow it, it helps thin the blood around the clot. Because you took Viagra last night, I'm not going to give you the spray under the tongue that we'd normally use, as the two together can drop your blood pressure dangerously – I'll make sure the ambulance crew and hospital know that too. Are you feeling short of breath, sick, or light-headed at the moment?
PT: A bit short of breath, feel a bit sick, bit light-headed getting out of the car.
  Breath sounds: Chest clear. No crackles.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Given in clinic: Morphine sulfate 10 mg/1 mL injection, 2.5 mg IV slowly Stat dose
  Given in clinic: Metoclopramide 10 mg/2 mL injection, 10 mg IV Stat dose
DR: Graham, I've put a small drip in your arm and given you a little morphine for the pain and something for the nausea. I want you lying back on the couch now, not walking around – I'll stay with you and keep checking your pulse and blood pressure until the ambulance arrives, and we have the resuscitation gear right here. Your oxygen level is fine so you don't need a mask. Is your wife with you or can we phone her so she can meet you at the hospital? And is there anything else you'd normally take – any other tablets or anything bought over the counter?
PT: Wife's at home. She'll be here. I take Perindopril and Atorvastatin daily. No other tablets.
DR: Good. We'll ring her now. Here's what's going to happen: the ambulance will take you to a hospital with a heart catheter lab, where they'll pass a thin tube up through your wrist to open the blocked artery – usually with a small stent – and the sooner that's done the less damage to the heart muscle. I'm sending a letter with you with your heart tracing, the aspirin and morphine I've given, your medications, and the fact that you had Viagra last night so they avoid the nitrate medicines. You'll likely be in hospital for several days. Afterwards you'll be on a few new tablets and we'll get you into cardiac rehab, and this is the time to stop smoking for good – I'll help with that. If the pain gets worse, you feel faint, or anything changes while we're waiting, tell me straight away. Any questions right now?
PT: No questions. I just want to get this over with.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Pericarditis; can't miss Aortic dissection.
DR: The ambulance is pulling up now, Graham. I'll hand over to the paramedics directly and the hospital team is expecting you. You've done the right thing coming in – your wife was spot on. I'll see you once you're home for follow-up.
PT: Thanks. I'll be seeing you later.
END CONSULT

## Bill: 263/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +5 Breath sounds
- +5 Heart sounds
- +5 Titrated IV morphine or fentanyl for pain (not if systolic BP is below 100)
- -2 Not indicated: metoclopramide
- +10 Smoking history
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Pericarditis
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you and keep checking your pulse and blood pressure until the ambulance arrives")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
