# anthropic/claude-fable-5.1: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. You're looking quite unwell to me, so I'm going to move quickly. Tell me about this indigestion – where exactly do you feel it, what does it feel like, and when did it start?
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight sitting on my chest. It's been going the whole time — an hour and a half, near enough. Still there now. Right in the middle, behind the breastbone. Bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. About seven this morning. Came on over a few minutes.
DR: Thank you. Are you short of breath, feeling sick, or feeling faint or light-headed? And have you ever had anything like this before, or ever been told you have heart trouble?
PT: A bit short of breath, yeah. Hard to get a proper breath in. Feel a bit sick. Haven't vomited. Bit light-headed getting out of the car. Didn't pass out. This past week I've had a bit of a tightness going up ladders — goes away if I stop. Put it down to being unfit. It's been happening more. Never had anything wrong with my heart.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: Graham, I've called an ambulance – I'll explain fully in a moment. Quick questions first so I can give you the right medicines: have you ever had a bad reaction to aspirin, any stomach ulcers or bleeding problems, and have you taken any erection tablets like Viagra or Cialis in the last couple of days? Have you taken anything at all this morning for the pain?
PT: No bad reaction to aspirin, no ulcers or bleeding problems. Took one of those Viagra tablets last night. Had a couple of Quick-Eze this morning, didn't touch it.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg (chewed/dissolved) Stat dose
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Jugular venous pressure: JVP not raised.
  Radial pulse (left) (left): Radial pulse present, regular.
  Radial pulse (right) (right): Radial pulse present, regular.
  Given in clinic: Morphine sulfate 10 mg/1 mL injection, 2.5 mg IV, slowly, titrated to pain Stat dose
  Given in clinic: Ondansetron 4 mg/2 mL injection, 4 mg IV Stat dose
DR: Graham, I'll be straight with you. This isn't indigestion. The heart tracing shows you're having a heart attack – one of the arteries supplying the bottom part of your heart is blocked. That's why you feel the weight on your chest, the ache in your jaw and arm, and why you've been grey and sweaty. The tightness on ladders this past week was a warning sign of the same thing.

Here's what's happening right now: the ambulance is on its way and the hospital will be ready for you – they can open that artery with a small procedure, and the sooner that's done the less damage to the heart muscle. I've given you aspirin, which thins the blood and helps straight away, plus a small dose of a strong painkiller and something for the nausea. Normally I'd give a spray under the tongue for the chest pain, but because you took Viagra last night that combination can drop your blood pressure dangerously, so I'm deliberately not giving it – please tell the paramedics and hospital doctors about the Viagra too, it's important. I'm staying with you, we'll keep you on the monitor, and I want you to stay sitting or lying here – no walking around. Tell me straight away if the pain gets worse, you feel faint, or your breathing gets harder. Is your wife with you or can we ring her?
PT: No, I don't take aspirin or anything like that. The discomfort's more heavy than sore, maybe a six. I don't know how bad it is. My wife's not here, but we can ring her.
DR: We'll ring her now and let her know which hospital you're going to. I know this is frightening, but you've done the right thing coming in, and we've caught it at a stage where the hospital can do a lot. I'll send a letter with your heart tracing, the medicines I've given, your blood pressure tablet and cholesterol tablet, and a note about the Viagra. After hospital you'll be on several new heart medicines, and the single most important thing you can do for your heart is to stop smoking – we'll help you with that once you're home. I'll see you back here within a week of leaving hospital.
PT: I didn't know. I thought it was just indigestion. I'll try stop smoking. What's the name of the painkiller?
DR: It's morphine – a small dose through the vein. It may make you a little drowsy, which is fine. Rest now; the ambulance will be here any minute and I'm not leaving your side.
PT: I don't want to be a bother. Just get me to the hospital.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Unstable angina; can't miss Aortic dissection.
DR: You're no bother at all, Graham – this is exactly what we're here for. The paramedics are arriving now; I'll hand over to them directly and your wife will be told where you're going. You're in good hands.
PT: I didn't mean to worry you. Just get me to the hospital.
END CONSULT

## Bill: 313/505 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Previous heart problems, angina, stents or heart operations
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Whether antacids or anything else relieved it
- +15 Aspirin 300 mg chewed
- +5 Heart sounds
- +5 Breath sounds
- +5 Jugular venous pressure
- +5 Titrated IV morphine or fentanyl for pain (not if systolic BP is below 100)
- -2 Not indicated: ondansetron
- +10 Blood thinners (anticoagulants)
- +10 Already taking aspirin or clopidogrel
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Unstable angina
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'm staying with you, we'll keep you on the monitor, and I want you to stay sitting or lying here – no walking around.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
