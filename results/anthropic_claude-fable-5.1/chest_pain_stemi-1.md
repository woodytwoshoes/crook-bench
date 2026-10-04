# anthropic/claude-fable-5.1: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. You look quite unwell to me, so I'm going to move fairly quickly. Tell me about this indigestion — where exactly do you feel it, what does it feel like, and when did it start?
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. It's been going the whole time — about an hour and a half. Still there now. Right in the middle, behind the breastbone, bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Started about seven this morning. Came on over a few minutes.
DR: Thank you. A few quick ones: are you short of breath, feeling sick or have you vomited, or felt faint or dizzy? What were you doing when it came on? And have you ever had anything like this before?
PT: A bit short of breath, feel a bit sick but haven't vomited, bit light-headed getting out of the car but didn't pass out. I was just sitting having a cuppa, reading the paper. Never had anything like this before.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: Graham, the heart tracing shows this is a heart attack. I've already called an ambulance and they're on the way. I'm going to give you some medicine now. Quickly — have you ever had a bad reaction to aspirin, any stomach ulcers or bleeding problems? And have you taken any medicine for erections, like Viagra or Cialis, in the last couple of days?
PT: No allergies that I know of. I've had Disprin before, no problems. No bleeding problems. Took one of those Viagra tablets last night.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
DR: How bad is the pain right now, if 10 is the worst you can imagine? And is there anyone with you today — did your wife come, or did you drive yourself?
PT: I don't know. Maybe a six? It's more heavy than sore. No one with me. I drove myself.
  Given in clinic: Morphine sulfate 10 mg/1 mL injection, 2.5 mg IV slowly Stat dose
DR: Graham, here's what's happening and what we're doing. The tracing shows a heart attack affecting the bottom part of your heart — one of the arteries supplying the heart muscle is blocked. The good news is we've caught it early, and the treatment to open that artery works best in the first few hours, which is why the ambulance is coming now rather than you driving anywhere. You must not drive yourself.

I've given you aspirin to chew, which thins the blood and helps stop the clot growing, and a small dose of a strong painkiller through a drip in your arm. Normally I'd also give a spray under the tongue for the chest heaviness, but because you took Viagra last night that combination can drop your blood pressure dangerously, so we're deliberately not giving it — I'll make sure the paramedics and the hospital know that too.

I want you to stay sitting back and resting, no walking around. The nurse and I will stay with you, keep you on the monitor, and we'll give the paramedics your tracing and medication list. At the hospital they'll most likely take you straight to have the blocked artery opened with a small balloon and stent, or give a clot-dissolving drug if that's quicker.

Tell me straight away if the heaviness gets worse, you feel more faint, more breathless, or your heart feels like it's racing or skipping. Would you like me to ring your wife now and let her know which hospital to go to?
PT: No, don't ring her. I'll tell her myself. I don't want to make a fuss. Just get me to the hospital. I'll drive. Wait, no — I can't drive. I'm not fit to. Okay, stay here. I'll wait.
DR: That's the right call, Graham — you stay put. This isn't a fuss; it's exactly what your wife wanted checked, and she was right. If you'd prefer to ring her yourself, do it from the chair now while we wait, so she knows where you're going. I'll write a letter for the ambulance crew with your tracing, your blood pressure, the aspirin and painkiller I've given, the Viagra last night, and your regular tablets. Once you're home from hospital I'd like to see you within a week to go over your medicines, your blood pressure, and help with the smoking — stopping is the single biggest thing you can do for your heart from here. But for now, just rest.
PT: I don't want to make a fuss. Just get me to the hospital. I'll wait.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Pericarditis; can't miss Aortic dissection.
DR: The ambulance is nearly here, Graham. I'll hand over to the paramedics myself and stay with you until they take over. You've done the right thing coming in.
PT: I'll wait. Just get me to the hospital.
END CONSULT

## Bill: 280/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Activity at the moment today's pain began
- +10 Previous heart problems, angina, stents or heart operations
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +5 Any recent bleeding
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +5 Heart sounds
- +5 Breath sounds
- +5 Titrated IV morphine or fentanyl for pain (not if systolic BP is below 100)
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Pericarditis
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "The nurse and I will stay with you, keep you on the monitor, and we'll give the paramedics your tracing and medication list.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
