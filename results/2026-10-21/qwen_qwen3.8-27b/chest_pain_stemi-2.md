# qwen/qwen3.8-27b: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning, Graham. I'm Dr Patel, a GP here. Your wife rang and booked you in for some indigestion since this morning — what's been going on? Walk me through it from when you woke up.
PT: About seven this morning, came on over a few minutes. It's like a heaviness. Like indigestion but... heavier. Sort of a weight sitting on my chest. Right in the middle, behind the breastbone. Bit up into the throat. It's been going the whole time — so an hour and a half, near enough. Still there now. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
DR: Thank you — that sounds like more than simple indigestion, and I'm glad you're here. A few quick questions to sort out how urgent this is:

- Was it there when you first got up, or did it come on with any activity — like carrying something, walking, or stairs?
- On a scale of 0 to 10, how bad is the pressure right now?
- Have you had any sweating, nausea or vomiting, or felt short of breath or dizzy?
- Does anything make it better or worse — resting, leaning forward, breathing in, eating, antacids?
- Have you ever had chest pain or pressure like this before, and any heart problems in the family?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Of course, sorry. Let's take it one at a time. Was this pressure present when you first got up this morning, or did it come on with something you were doing — like carrying tools or walking up stairs?
PT: I was just sitting having a cuppa, reading the paper.
DR: Got it — so it started while you were just sitting at rest. Thank you. On a scale of 0 to 10, with 10 being the worst pain you've ever had, how bad is the pressure right now?
PT: I don't know. Maybe a six? It's more heavy than sore.
DR: That helps. Have you had any sweating, nausea or vomiting, or felt short of breath or light-headed at any point since it started?
PT: Yeah, I've been sweating like anything, thought it was just hot. Feel a bit sick, haven't vomited. A bit short of breath, yeah, hard to get a proper breath in. Bit light-headed getting out of the car, didn't pass out.
DR: Thanks, Graham. Does anything make the pressure better or worse — resting, leaning forward, taking a deep breath, or having antacids or indigestion tablets?
PT: No, breathing doesn't change it, and it's the same however I sit. Had a couple of Quick-Eze and it didn't touch it.
DR: Okay. Have you ever had chest pressure or pain like this before, even briefly? And does anyone in your family have heart problems?
PT: This past week I've had a bit of a tightness going up ladders, which goes away if I stop, and I put it down to being unfit, though it's been happening more. And my dad had a heart attack at fifty-five and died from it.
  (list_exams vitals)
  General appearance: Pale and grey. Anxious, shifting in the chair. (already done)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  (search tests "troponin": 2 found)
  (search referrals "ambulance": 1 found)
  (search drugs "aspirin": 2 found)
  Referred: Emergency department by ambulance (call 000)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Unknown diagnosis id(s): acute_inferior_stemi, acute_coronary_syndrome_nstemi. Use search with kind "diagnoses".
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "heart attack": 4 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Nothing to exclude.
END CONSULT

## Bill: 235/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Activity at the moment today's pain began
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +5 Whether the pain is worse on breathing in
- +5 Whether the pain changes lying flat or sitting forward
- +5 Whether antacids or anything else relieved it
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +5 Family history of heart disease at a young age
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +15 Aspirin 300 mg chewed
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
