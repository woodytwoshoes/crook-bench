# meta-llama/llama-4-maverick: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning, Graham. What seems to be the problem today? You mentioned indigestion?
PT: Morning. Indigestion, but it's heavier. Like a weight on my chest. Been there an hour and a half. Right behind the breastbone, up into the throat. My jaw's a bit achy, left arm feels heavy. Came on about seven this morning.
  Unknown exam "vitals.bp". Use list_exams or search.
  Unknown exam "vitals.rr". Use list_exams or search.
  Unknown exam "vitals.hr". Use list_exams or search.
  Unknown exam "vitals.spo2". Use list_exams or search.
  Unknown exam "vitals.temp". Use list_exams or search.
  Blood pressure (right) (right) at none: 104/68.
  Heart rate (right) (right) at none: 54, regular.
  Respiratory rate (right) (right) at none: 20.
  Oxygen saturation (right) (right) at none: 96% on room air.
  Temperature (right) (right) at none: 36.6 °C.
  Heart rate (right) (right) at none: 54, regular. (already done)
  Respiratory rate (right) (right) at none: 20. (already done)
  Oxygen saturation (right) (right) at none: 96% on room air. (already done)
  Temperature (right) (right) at none: 36.6 °C. (already done)
  Unknown exam "listen". Use list_exams or search.
  Heart sounds (Heart) at heart: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (Lungs (front)) at lungs_front: Chest clear. No crackles.
  Unknown test "ecg". Use search with kind "tests".
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: Graham, I'm concerned about your symptoms and the ECG results. I'm going to refer you to the emergency department for further evaluation and treatment.
PT: I see. You think it's serious? I just wanted some antacid.
  Unknown referral "emergency_department". Use search with kind "referrals".
  Unknown diagnosis id(s): acute_myocardial_infarction, acute_coronary_syndrome. Use search with kind "diagnoses".
  Referred: Emergency department by ambulance (call 000)
  Unknown diagnosis id(s): acute_myocardial_infarction, acute_coronary_syndrome. Use search with kind "diagnoses".
  Unknown diagnosis id(s): acute_coronary_syndrome. Use search with kind "diagnoses".
  Diagnosis saved: most likely Acute myocardial infarction; differential Unstable angina; can't miss Acute coronary syndrome.
END CONSULT

## Bill: 135/505 (Resident), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Blood pressure
- +10 Heart rate
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +5 Heart sounds
- +5 Breath sounds
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 Defensible diagnosis: Acute myocardial infarction
- +5 Reasonable differential: Unstable angina
- +5 Reasonable differential: Acute coronary syndrome
- +10 Can't-miss diagnosis considered: Acute coronary syndrome

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: aspirin 300 mg chewed; phone the receiving hospital with the STEMI ECG; stay with the patient with a defibrillator available until the ambulance arrives.
