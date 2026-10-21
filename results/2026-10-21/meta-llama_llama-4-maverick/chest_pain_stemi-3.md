# meta-llama/llama-4-maverick: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning, Mr Mitchell. What seems to be the problem with your indigestion today?
PT: Started about seven this morning, came on over a few minutes. It is like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. Right in the middle, behind the breastbone. Bit up into the throat. It has been going the whole time — so an hour and a half, near enough. Still there now. Now you mention it, my jaw is a bit achy, and my left arm feels heavy. Not my back.
  Unknown exam "vitals.bp". Use list_exams or search.
  Unknown exam "vitals.pulse". Use list_exams or search.
  Unknown exam "vitals.rr". Use list_exams or search.
  Unknown exam "vitals.spo2". Use list_exams or search.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  General appearance: Pale and grey. Anxious, shifting in the chair. (already done)
  Unknown exam "listen". Use list_exams or search.
  Unknown exam "percuss". Use list_exams or search.
  (list_exams thorax / chest / listen)
  (list_exams thorax / chest / percuss)
  (list_exams thorax / lungs_front)
  (list_exams thorax / heart)
  Breath sounds (Lungs (front)): Chest clear. No crackles.
  Heart sounds (Heart): Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  (search tests "ECG": 4 found)
  (search tests "troponin": 2 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Troponin (high-sensitivity, laboratory): ordered; the result takes 1 day(s) and will not be back during this consult
  Unknown referral "ambulance". Use search with kind "referrals".
  (search referrals "ambulance": 1 found)
  Referred: Emergency department by ambulance (call 000)
DR: Mr Mitchell, I'm very concerned about your symptoms. I'm going to arrange for an ambulance to take you to the hospital immediately for further assessment and treatment.
PT: Hold on, Doc, can't I just take some Mylanta? I've got a hot water heater to put in this morning.
  Unknown diagnosis id(s): acute myocardial infarction, acute myocardial infarction. Use search with kind "diagnoses".
  (search diagnoses "acute myocardial infarction": 2 found)
  Unknown diagnosis id(s): acute_myocardial_infarction, acute_myocardial_infarction. Use search with kind "diagnoses".
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss ST-elevation myocardial infarction (STEMI).
END CONSULT

## Bill: 110/480 (Resident), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Breath sounds
- +5 Heart sounds
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Can't-miss slot repeats the most likely diagnosis: ST-elevation myocardial infarction (STEMI). Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: aspirin 300 mg chewed; stay with the patient with a defibrillator available until the ambulance arrives.
