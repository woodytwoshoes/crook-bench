# x-ai/grok-4.7: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hello Graham, I'm the doctor. I can see you're here about indigestion that started this morning, and your wife wanted you checked. You look a bit uncomfortable. Can you tell me what's been happening?
PT: It is like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. About seven this morning. Came on over a few minutes. It has been going the whole time — so an hour and a half, near enough. Still there now. Right in the middle, behind the breastbone. Bit up into the throat. Now you mention it, my jaw is a bit achy, and my left arm feels heavy. Not my back.
DR: That sounds more than ordinary indigestion, and I want to check it carefully. On a scale of 0 to 10, how bad is the heaviness right now? Does anything make it better or worse — breathing, moving, lying down, or food? Have you felt sick, sweaty, short of breath, or light-headed?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  General appearance: Pale and grey. Anxious, shifting in the chair. (already done)
DR: On a scale from 0 to 10, how bad is the chest heaviness right now?
PT: I don't know. Maybe a six? It is more heavy than sore.
DR: Have you felt sweaty, sick in the stomach, short of breath, or light-headed with this?
PT: Yeah, I have been sweating like anything, thought it was just hot, and I feel a bit sick though I haven't vomited. I am a bit short of breath, yeah, hard to get a proper breath in, and I was a bit light-headed getting out of the car, but I didn't pass out.
  (search tests "ECG": 4 found)
  (search exams "chest": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  (list_exams thorax)
DR: Have you ever had pain like this before, or any heart problems, angina, or a previous heart attack?
PT: Never had anything wrong with my heart, though this past week I have had a bit of a tightness going up ladders that goes away if I stop, and I put it down to being unfit, but it has been happening more.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  (search drugs "glyceryl": 3 found)
DR: Graham, this is not ordinary indigestion. Your heart tracing shows a heart attack — a blockage in one of the heart arteries, the one that supplies the bottom of the heart. We need to get you to hospital by ambulance straight away so they can open that artery. I'm going to give you an aspirin to chew now, which helps the clot. Have you taken any aspirin, blood thinners, or medicines for erection problems like Viagra in the last day or two?
PT: I don't take aspirin or anything like that, nothing like that, but yeah, I took one of those Viagra tablets last night, just don't tell the missus I told you. A heart attack? Crikey. Are you sure it's not just a bad case of indigestion? Can't this wait until I finish this job?
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  (search drugs "morphine": 2 found)
  (search drugs "ondansetron": 4 found)
  Referred: Emergency department by ambulance (call 000)
DR: I'm sure this is a heart attack, not indigestion, and it cannot wait — waiting or driving yourself could be dangerous. An ambulance is the safest way, and they can start treatment on the way. You took a Viagra tablet last night, so I must not give you the usual spray under the tongue for chest pain, because the two together can drop your blood pressure dangerously. The aspirin is already working. How is the heaviness right now compared with when you arrived?
PT: Still there. Same as before.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "myocardial infarction": 3 found)
  Given in clinic: Ondansetron 4 mg orally disintegrating tablets, 4 mg Stat dose
  Given in clinic: Morphine sulfate 10 mg/1 mL injection, 2.5 mg Stat dose
  (search diagnoses "dissection": 2 found)
  (search exams "blood pressure": 3 found)
DR: I've given you a small injection of morphine for the pain, and a tablet that dissolves on the tongue for the sick feeling. The ambulance is on its way. Please stay seated or lying down, and don't eat or drink. If the pain suddenly gets much worse, you feel faint, or you feel like you might pass out, tell me or the staff immediately. Do you have pain going through to your back, or is it only in the chest, jaw and arm?
PT: Not my back.
  Blood pressure in both arms: Right 104/68, left 102/66. Radial pulses equal.
DR: At the hospital they will do an urgent procedure, usually through the wrist or groin, to find the blocked artery and open it with a small balloon and often a stent. That is the best treatment for this type of heart attack. You must go in the ambulance, not drive, and not go back to the job. Do you understand that this is an emergency and you need to go now?
PT: Right. Well, if you say so, I suppose I had better go.
  Heart rate: 54, regular. (repeated: no change since the last check)
  Blood pressure: 104/68. (repeated: no change since the last check)
  Oxygen saturation: 96% on room air. (repeated: no change since the last check)
DR: Your blood pressure is similar in both arms, which is reassuring. Please tell the ambulance crew you took a Viagra tablet last night, and that you have had aspirin, a small dose of morphine, and a nausea tablet here. Keep taking slow breaths and stay with the staff until they arrive. After the hospital treats the blockage, they will talk to you about blood pressure tablets, cholesterol tablets, stopping smoking, and cardiac rehabilitation — those matter for preventing another one, but the priority right now is getting the artery opened.
PT: Right, okay. Thanks, Doc.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 338/480 (Fellow), ideal
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 ECG (12-lead)
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Previous heart problems, angina, stents or heart operations
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +10 Already taking aspirin or clopidogrel
- +10 Blood thinners (anticoagulants)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- -2 Not indicated: ondansetron
- +5 Titrated IV morphine or fentanyl for pain (not if systolic BP is below 100)
- +10 Blood pressure in both arms
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Keep taking slow breaths and stay with the staff until they arrive.")

The ambulance arrives within minutes. Graham goes straight to the cath lab and has a stent to his right coronary artery. He is home in four days, starts cardiac rehab, and his wife sends the clinic a card. He's quit smoking.
