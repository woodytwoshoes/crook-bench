# anthropic/claude-fable-5.1: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. You look a bit uncomfortable - tell me about this indigestion. Where exactly do you feel it, what does it feel like, and when did it start?
PT: Right in the middle, behind the breastbone. Bit up into the throat. It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. About seven this morning. Came on over a few minutes.
DR: Is it still there now? Does it spread anywhere - into your arms, jaw, neck or back? And are you sweaty, short of breath, sick in the stomach or light-headed with it?
PT: Yeah, still there the whole time. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. I've been sweating like anything. Thought it was just hot. A bit short of breath, yeah. Hard to get a proper breath in. Feel a bit sick. Haven't vomited. Bit light-headed getting out of the car. Didn't pass out.
DR: Graham, I'm concerned this may be coming from your heart rather than your stomach, so I'm going to move quickly - check your pulse and blood pressure and do a heart tracing right now. A few quick questions while I do: have you ever had anything like this before, or any known heart problems? Have you taken anything for it this morning? And have you taken Viagra, Cialis or similar in the last couple of days?
PT: Never had anything wrong with my heart, though this past week I've had a bit of a tightness going up ladders that goes away if I stop, and I put it down to being unfit. Had a couple of Quick-Eze and it didn't touch it. …Yeah, took one of those Viagra tablets last night. Don't tell the missus I told you.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  (search referrals "ambulance": 1 found)
  (search drugs "aspirin": 2 found)
  Referred: Emergency department by ambulance (call 000)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: Graham, the heart tracing shows you are having a heart attack - a blood vessel supplying the bottom part of your heart is blocked. I've called an ambulance and it's on its way; you need to go to hospital now so they can open that artery up, and the sooner that happens the better your heart does. I've given you an aspirin to chew - that helps thin the blood. I'm not going to give you the usual spray under the tongue because it can't be mixed with the Viagra you took last night - it could drop your blood pressure dangerously, and that's exactly why it was important you told me, so thank you. I'm going to stay with you, and I'd like you to sit still and not walk anywhere. A few quick questions so I can hand over properly: do you have any problems with bleeding, stomach ulcers, or do you take any blood thinners? And is your wife nearby - would you like me to call her?
PT: Hang on, an ambulance? Look, I've got a job to finish this morning. Can't I just take some stronger antacids and drive myself down later?
DR: Graham, I understand, but I have to be very straight with you: this is not indigestion, it's a heart attack happening right now, and it's shown clearly on the tracing. The job can wait - your heart muscle can't. Every minute the artery stays blocked, more of the heart is damaged, and the heart can go into a dangerous rhythm without warning. If that happened while you were up a ladder or driving, you could die. The ambulance crew carry a defibrillator and can treat you on the way; you must not drive. Let me ring your wife so she can meet you at the hospital, and we'll sort out the job later. Now - any bleeding problems, stomach ulcers or blood thinners I need to know about?
PT: No. No, nothing like that.
  (search exams "heart sounds": 1 found)
  (search exams "lung sounds": 1 found)
  (search exams "JVP": 1 found)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Jugular venous pressure: JVP not raised.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: Thanks Graham. Your lungs are clear and your heart is coping at the moment, which is good. Here's the plan: the ambulance will take you straight to a hospital with a cardiac unit, where they'll most likely do a procedure through the wrist or groin to open the blocked artery - often with a small stent. I'm sending the heart tracing and a letter with them, including that you took Viagra last night, because the hospital team must know that before they give you certain medicines - please tell them again yourself too. While we wait: stay sitting, don't get up, and tell me straight away if the pain gets worse, you feel faint, or your breathing gets harder. I'll ring your wife now. Afterwards you'll be in hospital for a few days, you'll go home on new heart tablets including the aspirin, and we'll see you here within a week of discharge to go over everything. Stopping smoking will be the single most important thing you can do once you're through this, and I'll help you with that. No driving, and no going back up ladders, until the hospital and I have cleared you. You did the right thing coming in - your wife was spot on.
PT: Right. Well, I suppose the missus was right for once. Just hope they sort it quick.
END CONSULT

## Bill: 315/480 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Previous heart problems, angina, stents or heart operations
- +5 Whether antacids or anything else relieved it
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +5 Any recent bleeding
- +10 Blood thinners (anticoagulants)
- +5 Heart sounds
- +5 Breath sounds
- +5 Jugular venous pressure
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
