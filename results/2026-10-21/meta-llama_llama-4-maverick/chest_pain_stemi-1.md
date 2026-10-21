# meta-llama/llama-4-maverick: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning, Graham. What seems to be the problem today? You mentioned indigestion?
PT: Just some indigestion really, right in the middle behind the breastbone and a bit up into the throat. Now you mention it, my jaw's a bit achy and my left arm feels heavy, but not my back. It started about seven this morning and came on over a few minutes. I get a bit of heartburn after a big feed sometimes, but this isn't like that really.
  Unknown exam "vitals.bp". Use list_exams or search.
  Unknown exam "vitals.rr". Use list_exams or search.
  Unknown exam "vitals.pulse". Use list_exams or search.
  (list_exams vitals)
  Blood pressure: 104/68.
  Heart rate: 54, regular.
  Respiratory rate: 20.
  Heart rate: 54, regular. (repeated: no change since the last check)
  Unknown exam "thorax.listen". Use list_exams or search.
  (list_exams thorax / precordium / listen)
  (list_exams thorax / precordium)
  (list_exams thorax / heart)
  (list_exams thorax / heart / listen)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Unknown referral "ambulance". Use search with kind "referrals".
DR: Graham, I'm very concerned about your symptoms and the ECG results. I'm going to call an ambulance to take you to the hospital immediately for further evaluation and treatment. Your symptoms and the ECG changes suggest you may be having a heart attack.
PT: An ambulance? Look, I've got a plumbing job booked in for this morning, can't I just drive myself over after?
  Unknown diagnosis id(s): acute_myocardial_infarction, acute_myocardial_infarction. Use search with kind "diagnoses".
  (search referrals "ambulance": 1 found)
  (search diagnoses "myocardial infarction": 3 found)
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I'm very concerned about your symptoms and the ECG results. I'm going to call an ambulance to take you to the hospital immediately for further evaluation and treatment. Your symptoms and the ECG changes suggest you may be having a heart attack.
PT: Right. Well, if you reckon it's that serious, I suppose I better let them take me.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss ST-elevation myocardial infarction (STEMI).
END CONSULT

## Bill: 100/480 (Resident), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +5 Previous heartburn or reflux
- +10 Blood pressure
- +10 Heart rate
- +5 Respiratory rate
- +5 Heart sounds
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Can't-miss slot repeats the most likely diagnosis: ST-elevation myocardial infarction (STEMI). Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: aspirin 300 mg chewed; stay with the patient with a defibrillator available until the ambulance arrives.
