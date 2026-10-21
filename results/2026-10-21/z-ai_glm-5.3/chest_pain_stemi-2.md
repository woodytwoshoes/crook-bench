# z-ai/glm-5.3: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. I understand you've had indigestion since this morning. Can you tell me exactly where you feel it and what it's like — burning, pressure, sharp?
PT: It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. Right in the middle, behind the breastbone. Bit up into the throat. It's been going the whole time — so an hour and a half, near enough. Still there now.
DR: That's important to know. A few more questions: does it spread anywhere — to your arm, jaw or back? Any sweating, nausea, or shortness of breath? And did anything bring it on, like exertion or stress?
PT: Now you mention it, my jaw's a bit achy, and my left arm feels heavy, but not my back. Yeah, I've been sweating like anything, thought it was just hot. Feel a bit sick, though I haven't vomited. A bit short of breath, yeah, hard to get a proper breath in. I was just sitting having a cuppa, reading the paper.
DR: Graham, I'm concerned this may be more than indigestion — it sounds like it could be your heart. Let me examine you right now.
PT: My heart? Look, doc, I've got a job booked in for this afternoon, can't I just take some Mylanta and be on my way?
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (list_exams thorax)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  (search referrals "ambulance": 1 found)
  (search drugs "aspirin": 2 found)
  Referred: Emergency department by ambulance (call 000)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
DR: Graham, I have to be straight with you: your heart tracing shows you're having a heart attack right now — a blockage in one of the heart arteries. The afternoon job is off, and I've called an ambulance; they'll take you to hospital where they can open the artery. I've given you aspirin to chew, which thins the blood and helps.

I know that's frightening, but you came in time, and this is exactly the right place to be. Paramedics will be here shortly. Please don't drive yourself anywhere, and if the pain gets worse, your breathing changes, or you feel faint, tell us straight away. Your wife will be able to meet you at the hospital. Any questions before the crew arrives?
PT: A heart attack? Crikey. Will my missus know?
DR: Yes — my receptionist is calling her now, and she can meet you at the hospital. The ambulance is on its way and the paramedics will take excellent care of you. I've also told the hospital to expect you, so they can be ready to open the blocked artery as soon as you arrive. Just stay sitting and rest — don't get up and walk around. You did exactly the right thing coming in this morning.
PT: Alright, doc.
  Unknown diagnosis id(s): ST-elevation myocardial infarction (inferior STEMI). Use search with kind "diagnoses".
  (search diagnoses "myocardial infarction": 3 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Nothing to exclude.
END CONSULT

## Bill: 175/480 (Resident), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +10 Activity at the moment today's pain began
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +5 Heart sounds
- +5 Breath sounds
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +15 Aspirin 300 mg chewed
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
