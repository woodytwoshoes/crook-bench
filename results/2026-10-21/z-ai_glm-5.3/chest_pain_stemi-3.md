# z-ai/glm-5.3: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. I hear you've been feeling unwell since this morning with what seems like indigestion. Can you tell me more about it — where exactly do you feel it, what kind of discomfort is it (burning, pressure, squeezing), and how bad is it out of 10?
PT: Right in the middle behind the breastbone and a bit up into my throat, and now you mention it, my jaw is a bit achy and my left arm feels heavy, but not my back. It started about seven this morning and came on over a few minutes, and I don't know, maybe a six because it is more heavy than sore.
DR: That pattern of symptoms could indicate a heart problem, not just indigestion, so I need to check a few things carefully. Are you sweating or clammy? Any nausea or vomiting? Are you short of breath? Has anything like this happened before, or do you get chest heaviness when you walk or climb stairs? Any family history of heart attacks, and does anyone know your cholesterol besides your GP? I ask because chest heaviness with jaw and arm symptoms is something we take very seriously.
PT: Yeah, I have been sweating like anything, thought it was just hot, and I feel a bit sick, though I haven't vomited, plus I am a bit short of breath and it is hard to get a proper breath in. I have never had anything wrong with my heart before, but this past week I have had a bit of a tightness going up ladders that goes away if I stop, and I just put it down to being unfit, though it has been happening more. My dad had a heart attack at fifty-five and died from it, and I don't know anything about my cholesterol besides what the doctor tells me.
  (list_exams vitals)
  (list_exams thorax / listen)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  (search tests "ECG": 4 found)
  (search tests "troponin": 2 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Troponin (point-of-care): Collected 08:30 (consult start). Negative.
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
  Unknown diagnosis id(s): acute_myocardial_infarction. Use search with kind "diagnoses".
  (search diagnoses "myocardial infarction": 3 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: Graham, I want to be straight with you: this is not indigestion. Your heart tracing shows you are having a heart attack — a blockage in one of the heart arteries. I've given you aspirin to chew, which helps keep the clot from getting worse, and I've called an ambulance to take you straight to hospital, where they'll do an urgent procedure to open the artery. The paramedics will keep monitoring you on the way. If the pain suddenly gets much worse, moves to your back, or you feel faint, tell the paramedics immediately. Your wife can travel with you or meet you there. The sooner you get to hospital, the better your heart will recover — and you did the right thing coming in today.
PT: No, nothing like that, it crept up on me, and I was just a bit light-headed getting out of the car, though I didn't pass out.
DR: Thank you — that's all reassuring to know. The paramedics will check all that again. Is there anything you'd like to ask me before they arrive?
PT: How long am I going to be stuck in there? I've got a job to finish this afternoon.
DR: I understand, work matters — but this job has to wait. You'll likely be in hospital several days for the artery procedure and monitoring, and after that you'll need some weeks off before returning to light duties. If there's a client expecting you today, call them now or have your wife let them know. Your heart comes first; the plumber's tools will still be there next month. The ambulance is on its way.
PT: Right, I suppose so. I'll get the missus to call the client.
END CONSULT

## Bill: 275/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +10 Previous heart problems, angina, stents or heart operations
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +5 Family history of heart disease at a young age
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Heart sounds
- +5 Breath sounds
- +10 ECG (12-lead)
- +5 Troponin (point-of-care)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +20 Red flag: Dizziness, light-headedness or fainting

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
