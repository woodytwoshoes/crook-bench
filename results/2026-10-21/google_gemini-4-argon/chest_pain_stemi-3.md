# google/gemini-4-argon: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hello Graham, come on in. You look quite uncomfortable right now—can you tell me what's happening with this indigestion since this morning?
PT: Started about seven this morning, came on over a few minutes. It's like a heaviness, sort of a weight sitting on my chest right in the middle, behind the breastbone, and a bit up into the throat. It's been going the whole time, near enough an hour and a half, and it's still there now. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
DR: I'm glad your wife brought you in, Graham, because we need to check your heart straight away. Have you been feeling short of breath, sweaty, dizzy, or sick in the stomach with this?
PT: A bit short of breath, yeah, hard to get a proper breath in, and I've been sweating like anything, thought it was just hot. Bit light-headed getting out of the car, didn't pass out, and I feel a bit sick, haven't vomited.
  (list_exams vitals)
  (list_exams thorax)
  (search tests "ECG": 4 found)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (list_exams head)
  (list_exams upper_limb)
  (list_exams abdomen)
  Jugular venous pressure: JVP not raised.
  Blood pressure in both arms: Right 104/68, left 102/66. Radial pulses equal.
  Abdominal palpation (Epigastrium): Soft, non-tender. No masses.
  Chest wall: No chest wall tenderness.
  Radial pulse (left): Radial pulse present, regular.
  Radial pulse (right): Radial pulse present, regular.
DR: Graham, the heart trace shows that you are having a heart attack right now. We are going to call an ambulance urgently and give you some emergency medication right here. Before I give you anything, have you ever had an allergy or bad reaction to aspirin or any other medicines, any history of bleeding or stomach ulcers, or have you taken any erectile dysfunction tablets like Viagra or Cialis in the last couple of days?
PT: No allergies that I know of, and I've had Disprin before with no problems. No bleeding. And yeah, took one of those Viagra tablets last night, don't tell the missus I told you. Wait, an ambulance? Hang on, Doc, can't I just take some antacids and drive myself to the job?
DR: I'm really glad you told me about the Viagra, Graham—everything you tell me is strictly confidential, and knowing that is vital because mixing it with certain heart spray medicines can cause a dangerous drop in your blood pressure. Please don't drive: this is not indigestion, it's a blocked artery in your heart, and driving is very dangerous because your heart rhythm could become unstable suddenly. You need to go by ambulance straight to the hospital so they can open that artery up. Have you ever had chest pain like this before, or does anyone in your family have heart problems?
PT: This past week I've had a bit of a tightness going up ladders, which goes away if I stop, and I put it down to being unfit, but it's been happening more. My dad had a heart attack at fifty-five and he died from it.
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "myocardial infarction": 3 found)
  (search diagnoses "dissection": 2 found)
  (search diagnoses "nothing": 1 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: I have called 000 for an emergency ambulance to take you straight to the hospital emergency department, and here is 300 mg of soluble aspirin for you to chew or dissolve in water and swallow right now—it helps stop the blood clot in your heart artery from getting any bigger. Because you took Viagra last night and your blood pressure and heart rate are on the lower side, I am not giving you the GTN spray under your tongue, and I'll let the paramedics know privately so they don't give you nitrates either. Stay resting right here with us, don't walk around, and let me or the nurse know immediately if your chest pain gets worse, or if you feel more breathless, dizzy, or faint while we wait for the paramedics. Would you like us to bring your wife in or let her know where they're taking you?
PT: Yeah, if you could let her know, that would be good.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 315/480 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Shortness of breath
- +20 Red flag: Sweating or clamminess with the pain
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Nausea or vomiting
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +5 Heart sounds
- +5 Breath sounds
- +10 ECG (12-lead)
- +10 Right-sided ECG (V4R)
- +5 Jugular venous pressure
- +10 Blood pressure in both arms
- +5 Abdominal palpation
- +5 Chest wall
- +5 Any recent bleeding
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +5 Family history of heart disease at a young age
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
