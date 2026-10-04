# x-ai/grok-4.7: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Hello Graham, I'm one of the doctors here. I can see you're not looking well — pale and sweaty. Can you tell me what's been happening this morning?
PT: Morning. Not feeling good. Got this heaviness, like indigestion but worse. Feels like a weight on my chest. Been there since about seven this morning. Still there. Right behind my breastbone, a bit up my throat. My jaw's aching a bit, and my left arm feels heavy. Not my back.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair. (already done)
DR: That sounds more serious than simple indigestion. I need to check a few things quickly. Have you had pain like this before, and on a scale of 0 to 10, how bad is it right now?
PT: No, not really. Had a bit of tightness going up ladders, goes away if I stop. It's been happening more. Not sure about the scale — maybe a six? It's more heavy than sore.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: Graham, this heaviness with the jaw and arm, and looking so sweaty, makes me worried your heart might not be getting enough blood. I'm getting a heart tracing now. Have you ever had a heart attack, a stroke, bleeding problems, asthma, or an allergy to aspirin? Any recent vomiting or black stools?
PT: No, never had a heart attack or stroke. No allergies, took Disprin before, no problems. Feel a bit sick but haven't vomited.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  Apex beat and heaves: Apex beat not displaced. No heaves or thrills.
DR: Graham, the heart tracing shows a heart attack — a blockage in one of the heart arteries. We need to get you to hospital by ambulance right now so they can open that artery. I'm going to give you an aspirin to chew, which helps stop the clot getting bigger. Do you take any tablets for erections, like Viagra, or anything similar?
PT: Yeah. Took one of those Viagra tablets last night. Don't tell the missus I told you.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Thank you for telling me — that actually matters a lot. Because you took Viagra last night, I must not give you the spray under the tongue that we usually use for heart pain. It can drop your blood pressure dangerously with that tablet. The aspirin is the important one right now, and the ambulance is the priority. Are you diabetic, and has anyone in your family had a heart attack young? Any swelling in your legs, or have you coughed up blood or felt faint?
PT: No, not diabetic. Dad had a heart attack at fifty-five, he died from it. Legs are fine. Bit light-headed getting out of the car, didn't pass out. No coughed up blood or anything like that.
DR: Your blood pressure is a bit on the low side and your pulse is a little slow, which can happen with this type of heart attack. You are not short of oxygen, so you don't need oxygen right now. The ambulance is on the way. Chew that aspirin if you haven't already — don't swallow it whole. Stay sitting, try not to walk around, and tell me straight away if the pain gets worse, you feel faint, or you start vomiting.
PT: Chewing it now. Not sure about the rest. Staying put. If it gets worse, I'll say.
  Given in clinic: Ondansetron 4 mg orally disintegrating tablets, 4 mg Stat dose
DR: The aspirin is working to thin the blood a little so the clot doesn't grow. At the hospital they will do an urgent procedure, usually through the wrist or groin, to find the blocked artery and open it with a small balloon and often a stent. That's the best treatment, and the sooner the better — that's why we're not waiting for blood tests here. You felt a bit sick earlier; I've got a tablet that dissolves on the tongue for the nausea. Your wife should know you're going to hospital. Don't drive yourself. If you collapse or the pain becomes crushing before the ambulance arrives, we will treat that as an emergency here. Do you have any questions?
PT: No questions. Just need to get this sorted. Wife knows. Don't want to drive.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Pericarditis; can't miss Aortic dissection.
END CONSULT

## Bill: 293/505 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 ECG (12-lead)
- +10 Previous heart problems, angina, stents or heart operations
- +5 Ever had a stroke or mini-stroke
- +10 Nausea or vomiting
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 Diabetes
- +5 Family history of heart disease at a young age
- +5 Leg swelling or calf pain
- +5 Any recent bleeding
- +20 Red flag: Dizziness, light-headedness or fainting
- -2 Not indicated: ondansetron
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Pericarditis
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Stay sitting, try not to walk around, and tell me straight away if the pain gets worse, you feel faint, or you start vomiting.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
