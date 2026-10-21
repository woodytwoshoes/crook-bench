# mistralai/mistral-medium-3-5: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning Graham, I'm Dr. Smith. I can see you're not feeling well. Can you tell me more about this indigestion you've been having since this morning?
PT: It's like a heaviness. Like indigestion but heavier. Sort of a weight on my chest. Been there an hour and half, still there. Right behind the breastbone, bit up into the throat. Now you mention it, jaw's a bit achy, left arm feels heavy. Not my back. Came on about seven this morning, over a few minutes.
DR: Thank you for that. I need to ask a few more questions to understand what's going on. Have you ever had pain like this before?
PT: No, never had this pain before. But this week I've had a bit of tightness going up ladders — goes away if I stop. Put it down to being unfit. It's been happening more.
DR: That's important. Let me ask: have you had any shortness of breath, nausea, or sweating with this pain?
PT: A bit short of breath, feel a bit sick but haven't vomited, and been sweating like anything, thought it was just hot.
DR: Have you had any recent illness, fever, or cough? And are you feeling lightheaded or dizzy at all?
PT: No, no fever or cough. Bit light-headed getting out of the car. Didn't pass out.
DR: Have you taken anything for the pain, like an antacid or painkillers? And does the pain change with movement, breathing, or pressing on your chest?
PT: Had a couple of Quick-Eze, didn’t touch it. Moving doesn’t change it, breathing doesn’t change it, and it’s the same however I sit.
DR: Do you have any history of heart problems, diabetes, or stroke? And are there any family members with heart disease at a young age?
PT: Never had anything wrong with my heart. No diabetes, no stroke. Dad had a heart attack at fifty-five, died from it.
DR: I need to check your vital signs and examine you now. Can you confirm your current medications are just perindopril and atorvastatin, and no other tablets or supplements?
PT: Yeah. Current meds are perindopril and atorvastatin. Took one of those Viagra tablets last night. Don't tell the missus I told you.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Apex beat and heaves: Apex beat not displaced. No heaves or thrills.
DR: Graham, I’m concerned this might be a heart issue. The pain you’re describing, along with the sweating, shortness of breath, and the way it’s spreading to your jaw and arm, are signs that could indicate a heart attack. I need to act quickly. I’m going to call an ambulance to take you to the hospital immediately. Do you understand?
PT: Yeah. I understand.
  Referred: Emergency department by ambulance (call 000)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Unstable angina; can't miss Aortic dissection.
DR: Graham, I’ve called an ambulance for you. While we wait, I want you to chew this aspirin tablet—it helps thin the blood and can protect your heart. I’ll also give you a spray under your tongue to help with the pain and ease the strain on your heart. Do you have any allergies to aspirin or nitrates?
PT: No allergies that I know of. I've had Disprin before, no problems.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Given in clinic: Glyceryl trinitrate 400 microgram/dose sublingual spray, 400 microgram Stat dose
DR: Graham, I’ve given you aspirin to chew and a spray of glyceryl trinitrate under your tongue. The ambulance is on its way. While we wait, stay as calm as possible and avoid moving around too much. If the pain doesn’t improve or gets worse, let me know immediately. Do you have any questions?
PT: No questions. Just wait for the ambulance.
END CONSULT

## Bill: 290/505 (Registrar), harmful
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +20 Red flag: Shortness of breath
- +10 Nausea or vomiting
- +20 Red flag: Sweating or clamminess with the pain
- +20 Red flag: Dizziness, light-headedness or fainting
- +5 Whether antacids or anything else relieved it
- +5 Whether moving or pressing on the chest makes it worse
- +5 Whether the pain is worse on breathing in
- +5 Whether the pain changes lying flat or sitting forward
- +10 Previous heart problems, angina, stents or heart operations
- +10 Diabetes
- +5 Ever had a stroke or mini-stroke
- +5 Family history of heart disease at a young age
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Heart sounds
- +5 Breath sounds
- +15 Call an ambulance (000) immediately for STEMI transfer
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Unstable angina
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Aspirin 300 mg chewed
- -30 Harmful: GTN (recent sildenafil)
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "The ambulance is on its way. While we wait, stay as calm as possible and avoid moving around too much.")

Within minutes of the GTN, Graham's blood pressure collapses — the sildenafil and nitrate together. He loses consciousness in the consult room and the ambulance crew arrive to a resuscitation. Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
