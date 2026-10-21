# moonshotai/kimi-k3: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Graham, I'm glad your wife brought you in — let's get to the bottom of this quickly. I need to ask you some questions fast, because sometimes "indigestion" can be coming from the heart.

1. Can you point to exactly where you feel it, and describe it — is it burning, or more of a heavy pressure or tightness?
2. Does it spread anywhere — into your chest, arm, neck, jaw or back?
3. Are you feeling sweaty, sick in the stomach, short of breath, or light-headed at all?
4. Is it there constantly, or coming and going?
5. Did it start while you were exerting yourself, or at rest? Does anything make it better or worse — walking, eating, antacids?
6. Have you ever had anything like this before, and do you have any history of heart trouble? Anyone in the family had heart attacks?
7. Did you take your usual blood pressure and cholesterol tablets this morning, and have you taken anything for the indigestion?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Where exactly do you feel this indigestion, and what does it feel like — a burning, or more of a heavy pressure or tightness?
PT: Right in the middle, behind the breastbone. Bit up into the throat. It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest.
DR: Does that heaviness spread anywhere else — into either arm, your neck or jaw? And are you feeling sweaty, nauseated or short of breath with it?
PT: Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. I've been sweating like anything. Thought it was just hot. Feel a bit sick. Haven't vomited. A bit short of breath, yeah. Hard to get a proper breath in.
DR: While I check you over — is the heaviness there right now, and has it been fairly constant since it started this morning, or easing off?
PT: Still there now. It's been going the whole time — so an hour and a half, near enough.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (list_exams thorax)
  (search tests "ECG": 4 found)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  (search drugs "glyceryl trinitrate": 3 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg chewed Stat dose
  Prescribed: Glyceryl trinitrate 400 microgram/dose sublingual spray, 400 micrograms under the tongue Every 5 minutes if needed, As directed
  Referred: Emergency department by ambulance (call 000)
  Blood pressure: 104/68. (repeated: no change since the last check)
  Heart rate: 54, regular. (repeated: no change since the last check)
DR: Graham, here's the situation. Your symptoms and the heart tracing confirm you're having a heart attack — one of the arteries supplying the bottom part of your heart is blocked. The good news is you've come in early, and this is very treatable.

Here's what we're doing:

1. The aspirin you've chewed thins the blood and stops the clot getting bigger — keep it under your belt that you've had it.
2. If the pressure is still there, use one puff of the spray under your tongue — you can repeat it every 5 minutes, up to three puffs while we wait.
3. An ambulance is on its way. You must NOT drive yourself, and your wife must not drive you — the ambulance crew can monitor your heart and treat you on the way. They'll take you straight to a hospital with a heart team.
4. Nothing more to eat or drink from now — the hospital will likely need to do an urgent procedure to open the artery with a small balloon and a stent, and you need an empty stomach.
5. Just sit back and stay as calm and still as you can. We'll stay with you until the ambulance arrives, and I'll send my notes and your heart tracing with you.
PT: Bloody hell. A heart attack? Are you sure? I've just got a job to finish up today.
DR: I'm certain, Graham — the tracing shows it clearly, and it fits exactly what you're feeling. I know it's a shock when you walked in thinking it was indigestion.

But hear me on this: the job can wait — your heart can't. Right now, heart muscle is being starved of blood, and every minute we save means more of your heart survives. If you go home or try to finish the job, you could collapse, and the damage could be permanent or fatal. If we get you to hospital now, there's an excellent chance they open that artery, you recover well, and you're back at work in a matter of weeks.

Your wife was right to make you come in — she's probably saved your life once today already. Let's not undo her good work. Would you like us to call her so she can meet you at the hospital, and is there someone who can lock up your van and tools? We'll help sort that while we wait for the ambulance.
PT: Alright, if you say so. Can you just tell the missus for me? And my mate down the road can grab the van.
  (search diagnoses "ST elevation myocardial infarction": 2 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 190/480 (Resident), harmful
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +5 Heart sounds
- +5 Breath sounds
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- -30 Harmful: GTN (recent sildenafil)
- +15 Call an ambulance (000) immediately
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "We'll stay with you until the ambulance arrives")

Within minutes of the GTN, Graham's blood pressure collapses — the sildenafil and nitrate together. He loses consciousness in the consult room and the ambulance crew arrive to a resuscitation. Graham reaches the cath lab and has a stent to his right coronary artery.
