# anthropic/claude-fable-5.1: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. You look a bit uncomfortable - tell me about this indigestion. Where exactly do you feel it, what does it feel like, and when did it start?
PT: Right in the middle, behind the breastbone. Bit up into the throat. It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. About seven this morning. Came on over a few minutes. It's been going the whole time — so an hour and a half, near enough. Still there now.
DR: Does it spread anywhere - into your arms, jaw, neck or back? And have you had any sweating, feeling sick or vomiting, shortness of breath, or feeling faint or dizzy with it?
PT: Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. Yeah, I've been sweating like anything. Thought it was just hot. Feel a bit sick. Haven't vomited. A bit short of breath, yeah. Hard to get a proper breath in. Bit light-headed getting out of the car. Didn't pass out.
DR: Graham, I'm concerned this is coming from your heart rather than your stomach, so I'm going to move quickly. A few quick questions: have you ever had heart trouble before, or anything like this? Have you taken anything for it this morning - antacids, aspirin, or any medicine for erections like Viagra in the last couple of days? And any history of stomach ulcers or bleeding problems?
PT: Never had anything wrong with my heart, though this past week I've had a bit of a tightness going up ladders that goes away if I stop, and I put it down to being unfit. Had a couple of Quick-Eze and it didn't touch it, and I don't take aspirin or anything like that. Took one of those Viagra tablets last night, but don't tell the missus I told you. No.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  (search referrals "ambulance": 1 found)
  (search tests "ECG": 4 found)
  (search drugs "aspirin": 2 found)
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (list_exams thorax)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  (search exams "JVP": 1 found)
  (search exams "pulses": 2 found)
  Jugular venous pressure: JVP not raised.
  (search exams "radial": 2 found)
  (search drugs "morphine": 2 found)
  (search drugs "ondansetron": 4 found)
  Blood pressure in both arms: Right 104/68, left 102/66. Radial pulses equal.
  Radial pulse: Radial pulse present, regular.
  Given in clinic: Morphine sulfate 10 mg/1 mL injection, 2.5 mg IV, titrated to pain Stat dose
  Given in clinic: Ondansetron 4 mg/2 mL injection, 4 mg IV Stat dose
DR: Graham, I need to be straight with you. Your heart tracing shows you are having a heart attack - a blocked artery in the bottom part of your heart. That's why the pain feels like heavy indigestion and why your Quick-Eze didn't help. The tightness going up ladders this past week was an early warning of the same thing.

Here's what's happening right now:
- I've called an ambulance and it's on its way. You'll go straight to the hospital, where they can open the blocked artery - the quicker that's done, the less damage to the heart muscle, so we aren't going to wait or send you by car.
- I've given you aspirin to chew, which thins the blood and helps limit the clot.
- I've put a drip in and given you some pain relief and something for the nausea.
- I'm deliberately NOT giving you the usual spray under the tongue for chest pain, because you took Viagra last night - the two together can drop your blood pressure dangerously. I will tell the ambulance crew and the hospital about that for the same reason, so it's important you don't leave it out when they ask. They've heard it all before, and it will be handled discreetly.
- I'm going to stay with you and keep watching your heart rate and blood pressure until the paramedics arrive. If the pain changes, you feel faint, or anything feels worse, tell me straight away.

Is there someone we can ring for you - your wife? And do you have any questions for me?
PT: A heart attack? Crikey, are you sure? You had better call the missus then.
DR: I'm sure, Graham - the tracing is very clear, and the good news is we've caught it early and you're in the right place. We'll ring your wife now and tell her which hospital to meet you at. Please stay sitting back, don't get up and walk around, and don't smoke. I'll write a letter for the ambulance crew with your tracing, the medicines you've had, your blood pressure tablet and cholesterol tablet, and the Viagra. After the hospital, you'll be on several new heart medicines, you'll be referred to a cardiac rehabilitation program, and stopping smoking will be the single most important thing you can do - we'll help you with that when you're home. I'll see you for a follow-up after you're discharged.
PT: Right. Can I just have a quick cough drop or something first?
DR: Best to have nothing by mouth for now, Graham, apart from the aspirin you've already chewed - the hospital may need to do a procedure soon and an empty stomach is safer. A sip of water to wet your mouth is fine. Just rest back and we'll keep an eye on you until the paramedics get here.
PT: Okay then.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 343/480 (Fellow), ideal
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Previous heart problems, angina, stents or heart operations
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +5 Whether antacids or anything else relieved it
- +10 Already taking aspirin or clopidogrel
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Any recent bleeding
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +15 Call an ambulance (000) immediately
- +10 ECG (12-lead)
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +5 Jugular venous pressure
- +10 Blood pressure in both arms
- +5 Titrated IV morphine or fentanyl for pain (not if systolic BP is below 100)
- -2 Not indicated: ondansetron
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'm going to stay with you and keep watching your heart rate and blood pressure until the paramedics arrive.")

The ambulance arrives within minutes. Graham goes straight to the cath lab and has a stent to his right coronary artery. He is home in four days, starts cardiac rehab, and his wife sends the clinic a card. He's quit smoking.
