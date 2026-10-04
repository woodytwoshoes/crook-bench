# qwen/qwen3.8-27b: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Good morning, Mr Mitchell. I'm the doctor here — thanks for coming in, and I appreciate your wife's push to get you looked at. You've booked in for indigestion, but I can see you look pretty unwell, so I'd like to carefully go through what's been going on today. Could you start by telling me exactly what's been bothering you since this morning — where it is, what it feels like, and what makes it better or worse?
PT: It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. It's been going the whole time — so an hour and a half, near enough. Still there now.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair. (already done)
DR: Mr Mitchell, I need to ask some specific questions now. Please tell me honestly — is the heaviness in your chest spreading anywhere, like down into your arms, your neck, your jaw, or into your back? Have you had any nausea or vomiting, any sweating, or any shortness of breath?
PT: The heaviness is in my chest and it's spread to my jaw and left arm. I've been feeling sick but haven't thrown up. I've been sweating a lot, thought it was just hot. I'm a bit short of breath, can't get a proper breath in.
DR: Mr Mitchell, I'm going to be straight with you: this does not look like ordinary indigestion. The weight on your chest spreading to your jaw and left arm, with sweating, nausea and breathlessness — and your slow pulse and lower blood pressure — this could be a heart attack. The right thing to do is get you to hospital urgently for an ECG and blood tests. I'm going to give you a dispersible aspirin to chew now, which helps protect the heart in this situation, and I'm calling an ambulance to take you straight to the emergency department. Do you have any allergy to aspirin or any bleeding problems?
PT: No allergies that I know of. I've had Disprin before, no problems.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Referred: Emergency department by ambulance (call 000)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (Lungs (front)) at lungs_front: Chest clear. No crackles.
DR: Mr Mitchell, the ECG confirms my worst fear: your heart is being starved of blood — this is a heart attack, specifically one affecting the lower part of the heart. The ambulance is on its way to take you to the emergency department, and the doctors there will treat it quickly — probably with an operation to open the blocked artery. You are in the right place at the right time, and acting now makes a big difference to your heart muscle.

While we wait for the ambulance, here's what I need you to do: sit still and relax as much as you can, don't walk around or exert yourself, and let the paramedics look after you. I've given you the aspirin already — keep that. If the pain gets much worse, or you feel faint or collapse before they arrive, tell the paramedics straight away, and they have everything they need to help you.

One last thing: when you're back home, this is a big one — you need to stay off smoking, and you'll need to review your blood pressure and cholesterol medicines with your doctors. I'm sorry it turned out to be this, but I'm glad your wife pushed you in this morning.
PT: I don't know. Maybe a six? It's more heavy than sore.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Non-ST-elevation myocardial infarction (NSTEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 195/505 (Resident), acceptable
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 Nausea or vomiting
- +20 Red flag: Sweating or clamminess with the pain
- +20 Red flag: Shortness of breath
- +15 Aspirin 300 mg chewed
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately for STEMI transfer
- +5 Heart sounds
- +5 Breath sounds
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "You need to stay off smoking, and you'll need to review your blood pressure and cholesterol medicines with your doctors.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
