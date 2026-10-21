# mistralai/mistral-large-4-0: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, thanks for coming in today. I can see you're not looking great, so let's work out what's going on. Can you tell me in your own words what's been happening since this morning?
PT: It started about seven this morning while I was just sitting having a cuppa reading the paper, and it came on over a few minutes. It is right in the middle, behind the breastbone, and a bit up into the throat. Now you mention it, my jaw is a bit achy and my left arm feels heavy, but not my back. It has been going the whole time, near enough an hour and a half, and it is still there now. It is like a heaviness, like indigestion but heavier, sort of a weight sitting on my chest. I do not know, maybe a six? It is more heavy than sore.
DR: A few quick questions while I check things: Are you sweaty or clammy? Any nausea or vomiting? Any shortness of breath or feeling faint? And have you ever had anything like this before? Also — do you have any allergy to aspirin, and are you on any blood-thinning medications?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
  (list_exams vitals)
  (search tests "ECG": 4 found)
  (search referrals "ambulance": 1 found)
DR: Are you feeling sweaty or clammy, nauseous, or short of breath at all?
PT: I have been sweating like anything, thought it was just hot, and I feel a bit sick, though I haven't vomited. I am a bit short of breath too, it is hard to get a proper breath in.
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Referred: Emergency department by ambulance (call 000)
  (search drugs "aspirin": 2 found)
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg (one tablet, chewed) Stat dose
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "acute coronary syndrome": 1 found)
DR: Graham, here's what's happening and what we're doing about it. The ECG shows you're having a heart attack — a blocked artery at the back of the heart. That's why you've had the heavy chest pressure spreading to your jaw and arm, the sweating and nausea. I've called 000 — an ambulance is on its way to take you to hospital urgently. I've just given you a 300 mg aspirin to chew and swallow, which thins the blood and helps protect your heart muscle — please take it now if you haven't. Please sit or lie down and stay as still as you can, don't walk around, and don't eat or drink anything from now on. The ambulance crew will give you pain relief and other treatment on the way, and at hospital they'll likely take you straight for a procedure to open the blocked artery. Your heart rate is a bit slow and your blood pressure is on the lower side, so the crew will monitor you closely. If anything changes — the pain gets much worse, you feel faint, or your breathing gets worse — tell the crew straight away, or call 000 yourself if you're ever in this situation again. Do you have any questions? Your wife is welcome to come with you in the ambulance.
PT: A heart attack? Are you sure it's not just a bad case of indigestion? Can't I just take some antacids and get to my job?
DR: Graham, I understand it's a shock, and I wish I had better news — but yes, I'm sure. This isn't indigestion. Indigestion doesn't cause sweating, nausea, pain spreading to your jaw and arm, and it doesn't show up on the heart tracing the way yours has. The ECG shows a blocked artery in your heart happening right now, and that blockage is what's causing the pain. Antacids won't touch this — they treat acid, and there's no acid problem here. What will help is getting that artery opened up quickly at hospital, and every minute counts for protecting your heart muscle. I know you're self-employed and work matters, but please hear me: if you go back to work, drive yourself, or wait at home, you could collapse, and this can be life-threatening. The ambulance is the fastest and safest way to get you to the treatment you need. Please let them take you. Is there anything practical I can help with — like calling your wife or your employer to let them know you're unwell?
PT: Alright, if you say so. You better call Brenda and let her know.
DR: Thank you, Graham, for listening — you're doing the right thing. I'll ask our receptionist to call Brenda and let her know you're being taken to hospital by ambulance with a suspected heart attack, and the ambulance crew can also help contact her when they arrive. Please keep the aspirin down, stay sitting or lying comfortably, and try to stay calm and breathe slowly. The crew will be here very soon. You're in good hands now.
PT: Alright.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Nothing to exclude.
END CONSULT

## Bill: 205/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +10 Activity at the moment today's pain began
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- +20 Red flag: Dizziness, light-headedness or fainting
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Aortic dissection, Pulmonary embolism, Pneumothorax

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
