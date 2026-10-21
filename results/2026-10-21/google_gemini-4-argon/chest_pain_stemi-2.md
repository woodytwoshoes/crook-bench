# google/gemini-4-argon: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hello Graham, come on in. I can see you're looking quite uncomfortable. Can you tell me what's been happening this morning?
PT: It started about seven this morning, came on over a few minutes. It is like a heaviness, like indigestion but heavier, sort of a weight sitting on my chest. It is right in the middle, behind the breastbone, bit up into the throat. Now you mention it, my jaw is a bit achy, and my left arm feels heavy. Not my back. It has been going the whole time, so an hour and a half, near enough, and it is still there now.
DR: Have you felt short of breath, dizzy, sweaty, or sick in the stomach with this? And what were you doing when it started?
PT: I was just sitting having a cuppa, reading the paper. A bit short of breath, yeah, hard to get a proper breath in. Bit light-headed getting out of the car, didn't pass out. Sweating like anything, thought it was just hot. Feel a bit sick, haven't vomited.
DR: Have you ever had anything like this before, perhaps when you're exerting yourself at work? And have you taken any medicines this morning, including any aspirin, antacids, or erection medications like Viagra?
PT: This past week I have had a bit of a tightness going up ladders, goes away if I stop, put it down to being unfit, it has been happening more. I do not take aspirin or anything like that, had a couple of Quick-Eze, didn't touch it. Yeah, took one of those Viagra tablets last night, don't tell the missus I told you.
DR: It's very important you told me about the Viagra, Graham, because that changes which medications are safe to give you right now. Do you have any allergies to aspirin or any history of stomach ulcers or bleeding problems? And does anyone in your family have a history of heart disease?
PT: No allergies that I know of, I have had Disprin before, no problems, and no recent bleeding. Dad had a heart attack at fifty-five, he died from it.
  (list_exams vitals)
  (list_exams thorax)
  (search tests "ECG": 4 found)
  (search drugs "aspirin": 2 found)
  (search referrals "ambulance": 1 found)
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
  (list_exams abdomen)
  (list_exams lower_limb)
  Jugular venous pressure: JVP not raised.
  Pitting oedema (left): No pitting oedema.
  Pitting oedema (right): No pitting oedema.
  Abdominal palpation: Soft, non-tender. No masses.
  (list_exams upper_limb)
  Blood pressure in both arms: Right 104/68, left 102/66. Radial pulses equal.
  Radial pulse (left): Radial pulse present, regular.
  Radial pulse (right): Radial pulse present, regular.
  Chest wall: No chest wall tenderness.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "myocardial infarction": 3 found)
  (search diagnoses "aortic dissection": 1 found)
  (search diagnoses "acute coronary syndrome": 1 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I want to be straightforward with you. The heart trace we just did shows that this isn't indigestion—you are having a heart attack affecting the bottom part of your heart. You are in the right place and we are taking immediate action.

Here is what we are doing right now:
1. I have given you a 300 mg soluble aspirin tablet—please chew that up and swallow it now, as it helps stop the blood clot in your heart artery from growing.
2. We are NOT giving you the standard under-the-tongue heart spray or tablet (glyceryl trinitrate / nitrate) because you took Viagra last night, and combining those two medications can cause a dangerous, life-threatening drop in your blood pressure. Please also make sure you tell the paramedics and hospital doctors that you took Viagra last night.
3. We have called 000 for an emergency ambulance to take you straight to the hospital emergency department so they can open up the blocked artery as quickly as possible. Do not attempt to drive yourself or walk anywhere.
4. While we wait for the paramedics, we will keep you resting here quietly on the bed with the heart monitor and defibrillator attached, and we will check your blood pressure, heart rate, and oxygen levels closely. Your oxygen level is normal right now so you don't need oxygen, unless it drops.
5. Please let me or the nurse know immediately if your chest pain gets worse, if you feel more short of breath, or if you feel faint or dizzy. Would you like us to call your wife for you so she can meet you at the hospital?
PT: A heart attack? Crikey. Yeah, you better call the missus.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 355/480 (Fellow), ideal
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +10 Activity at the moment today's pain began
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Already taking aspirin or clopidogrel
- +5 Whether antacids or anything else relieved it
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Any recent bleeding
- +5 Family history of heart disease at a young age
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
- +5 Abdominal palpation
- +10 Blood pressure in both arms
- +5 Chest wall
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "While we wait for the paramedics, we will keep you resting here quietly on the bed with the heart monitor and defibrillator attached")

The ambulance arrives within minutes. Graham goes straight to the cath lab and has a stent to his right coronary artery. He is home in four days, starts cardiac rehab, and his wife sends the clinic a card. He's quit smoking.
