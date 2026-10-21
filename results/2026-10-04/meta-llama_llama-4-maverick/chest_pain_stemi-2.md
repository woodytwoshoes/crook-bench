# meta-llama/llama-4-maverick: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning, Mr Mitchell. Your wife has brought you in today with some indigestion. Can you tell me more about it? When did it start and what does it feel like?
PT: Started about seven this morning. Came on over a few minutes. Feels like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. Right in the middle, behind the breastbone. Bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
DR: So the discomfort is in the centre of your chest and has radiated to your jaw and left arm. Is there anything that makes it better or worse? Have you experienced anything like this before?
PT: Nothing's made it better. Quick-Eze didn't touch it. Had a bit of tightness going up ladders before, goes away if I stop. It's been happening more.
  Unknown exam "vitals.bp". Use list_exams or search.
  Unknown exam "vitals.pulse". Use list_exams or search.
  Unknown exam "vitals.rr". Use list_exams or search.
  Unknown exam "vitals.spo2". Use list_exams or search.
  Unknown exam "vitals.temp". Use list_exams or search.
  Blood pressure: 104/68.
  Heart rate: 54, regular.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  Heart rate (left) (left): 54, regular.
  Unknown exam "precordium.listen". Use list_exams or search.
  Heart sounds (Heart) at heart: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: Mr Mitchell, I'm very concerned about your symptoms and the ECG results. I'm going to arrange for you to be taken to the emergency department immediately by ambulance for further assessment and treatment. Your symptoms and ECG findings are suggestive of a myocardial infarction, commonly known as a heart attack.
PT: I didn't know. I thought it was indigestion. I've had high blood pressure and high cholesterol. I take Perindopril and Atorvastatin. I'm a smoker. I don't want to go in an ambulance. I just want to get back to work.
  Referred: Emergency department by ambulance (call 000)
  Unknown diagnosis id(s): ST_elevation_myocardial_infarction, acute_coronary_syndrome. Use search with kind "diagnoses".
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Acute coronary syndrome; can't miss Acute myocardial infarction.
END CONSULT

## Bill: 180/505 (Resident), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +5 Whether antacids or anything else relieved it
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Blood pressure
- +10 Heart rate
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +5 Heart sounds
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately for STEMI transfer
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Acute coronary syndrome
- +5 Reasonable differential: Acute myocardial infarction
- +10 Can't-miss diagnosis considered: Acute myocardial infarction
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'm going to arrange for you to be taken to the emergency department immediately by ambulance for further assessment and treatment.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: aspirin 300 mg chewed; phone the receiving hospital with the STEMI ECG.
