# meta-llama/llama-4-maverick: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning, Graham. What seems to be the problem today? You mentioned indigestion?
PT: Just some indigestion, right in the middle behind the breastbone and a bit up into the throat. Now you mention it, my jaw's a bit achy, and my left arm feels heavy, but not my back. It started about seven this morning and came on over a few minutes. I get a bit of heartburn after a big feed sometimes, but this isn't like that really.
  Unknown exam "vitals.bp". Use list_exams or search.
  Unknown exam "vitals.rr". Use list_exams or search.
  Unknown exam "vitals.pulse". Use list_exams or search.
  (list_exams vitals)
  Blood pressure: 104/68.
  Heart rate: 54, regular.
  Respiratory rate: 20.
  Unknown exam "thorax.look". Use list_exams or search.
  (list_exams thorax / precordium / listen)
  (list_exams thorax / chest / listen)
  (list_exams thorax / heart)
  (list_exams thorax / lungs_front)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  (search tests "ECG": 4 found)
  (search tests "Troponin": 2 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Troponin (high-sensitivity, laboratory): ordered; the result takes 1 day(s) and will not be back during this consult
DR: Graham, your ECG is showing some changes that suggest you might be having a heart attack. I'm going to call an ambulance to get you to the hospital as quickly as possible for further assessment and treatment.
PT: An ambulance? Hang on, Doc, can't I just drive myself? I've got a job to get to.
  Unknown referral "Ambulance". Use search with kind "referrals".
  Unknown diagnosis id(s): Acute myocardial infarction, Acute coronary syndrome. Use search with kind "diagnoses".
  (search referrals "Ambulance": 1 found)
  (search diagnoses "Acute myocardial infarction": 2 found)
  (search diagnoses "Acute coronary syndrome": 1 found)
  Referred: Emergency department by ambulance (call 000)
DR: I'm afraid not, Graham. It's not safe for you to drive yourself to the hospital. Your condition requires immediate medical attention, and an ambulance will be equipped to handle any emergencies on the way.
PT: Alright then, if you reckon it's that serious. Just bloody typical, right in the middle of a job.
  Diagnosis saved: most likely Acute myocardial infarction; can't miss Acute coronary syndrome.
END CONSULT

## Bill: 95/480 (Intern), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +5 Previous heartburn or reflux
- +10 Blood pressure
- +10 Heart rate
- +5 Respiratory rate
- +5 Heart sounds
- +5 Breath sounds
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +10 Defensible diagnosis: Acute myocardial infarction
- -10 Can't-miss slot names the most likely diagnosis again: Acute coronary syndrome. Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: aspirin 300 mg chewed; stay with the patient with a defibrillator available until the ambulance arrives.
