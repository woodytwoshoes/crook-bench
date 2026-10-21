# openai/gpt-6-astra: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Hello Graham, I'm Dr Smith. You look unwell, so I want to check you promptly. Where exactly is the discomfort, when did it start, and is it still there now?
PT: Right in the middle, behind the breastbone. Bit up into the throat. About seven this morning. Came on over a few minutes. It's been going the whole time, so an hour and a half, near enough. Still there now.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  (search tests "ECG": 4 found)
  (search referrals "ambulance": 1 found)
DR: Pain behind the breastbone that hasn't stopped, together with your appearance, could be a heart attack rather than indigestion. I'm calling an ambulance now and arranging a heart tracing immediately. Please stay resting here; don't walk or drive. What does the discomfort feel like, how severe is it out of ten, and does it spread to your arms, jaw or back?
PT: Hold on, an ambulance? It's just a bit of indigestion, mate. I've got a job I need to get to.
  Referred: Emergency department by ambulance (call 000)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: Graham, the heart tracing shows a heart attack affecting the bottom part of your heart. This can be life-threatening, even when it feels like indigestion. The ambulance can monitor and treat you on the way to hospital, where they can urgently open the blocked artery. Delaying for work isn't safe. Have you any allergy to aspirin, any current bleeding or recent serious bleeding, and have you taken aspirin today?
PT: I've had Disprin before, no problems, and no bleeding. I don't take aspirin or anything like that.
  (search drugs "aspirin": 2 found)
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (list_exams thorax)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
DR: I'm giving you aspirin now to help stop the clot getting bigger. Please chew it or take it dissolved in water. While we wait for the ambulance, can you describe the pain, rate it out of ten, and tell me whether it spreads anywhere?
PT: It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. I don't know. Maybe a six? It's more heavy than sore. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
  General appearance: Pale and grey. Anxious, shifting in the chair. (already done)
DR: Have you felt short of breath, sweaty, sick or faint? Did the pain start suddenly at its worst, or feel like tearing through to your back? Have you had any new weakness, numbness or trouble speaking?
PT: A bit short of breath, yeah, hard to get a proper breath in, and I've been sweating like anything, thought it was just hot. Feel a bit sick, haven't vomited. Bit light-headed getting out of the car, didn't pass out. No, nothing like that, it crept up on me. No, arm's heavy but I can use it fine.
DR: Have you taken any medicines today, including indigestion treatments, blood thinners, or erection medicines such as Viagra or Cialis? Have you ever had heart problems, a stroke or a serious stomach bleed?
PT: Had a couple of Quick-Eze, didn't touch it. Nothing like that. Yeah, took one of those Viagra tablets last night. Don't tell the missus I told you. Never had anything wrong with my heart. Never.
DR: Thank you for telling me; that's confidential, but I must tell the ambulance team for your safety. Viagra can interact dangerously with some chest-pain medicines and drop your blood pressure. What dose did you take and about what time? Are perindopril and atorvastatin still your regular medicines, and do you have any other allergies?
PT: I'm not sure about the exact dose, just a normal one last night. Perindopril and atorvastatin are my regular medicines. No allergies that I know of.
DR: We will not give you the nitrate spray called GTN because you took Viagra last night and your blood pressure is already on the low side. Your oxygen level is adequate, so oxygen isn't needed right now. We'll keep you resting and watched closely, with heart monitoring and resuscitation equipment ready, until the ambulance takes over. The ambulance team can give suitable pain relief if the discomfort continues.
PT: An ambulance? Bloody hell. I hope the missus doesn't make a big fuss over this.
  (search exams "peripheral pulses": no matches)
  (search tests "monitoring": 2 found)
  (search tests "cannula": no matches)
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "aortic dissection": 1 found)
  (list_exams upper_limb / feel)
  Radial pulse (left): Radial pulse present, regular.
  Radial pulse (right): Radial pulse present, regular.
  Blood pressure: 104/68. (repeated: no change since the last check)
  Arm and hand skin (warmth and texture) (left): Skin warmth normal. No induration or crepitus.
DR: I know this is a shock, Graham. You did the right thing coming in. May we contact your wife for you? Please tell me immediately if the pain worsens, breathing gets harder or you feel faint; don't get up. I'll stay with you and have our team prepare heart monitoring, a defibrillator and a vein line while we await the ambulance. We won't delay transfer for blood tests. I'll hand over that your pain began at 7 am, your tracing shows a heart attack, your pulse is slow, you've had 300 mg aspirin, and you took Viagra last night. I'll request urgent transfer to a hospital that can open the artery with a small balloon and stent, with their heart team alerted now.
PT: Yeah, alright. Call her, I suppose.
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
END CONSULT

## Bill: 335/480 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 When the discomfort started
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +15 Call an ambulance (000) immediately
- +10 ECG (12-lead)
- +5 Any recent bleeding
- +10 Already taking aspirin or clopidogrel
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- +5 Heart sounds
- +5 Breath sounds
- +20 Red flag: Shortness of breath
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +10 Red flag excluded: Weakness, numbness or other neurological symptoms, or limb pain
- +10 Blood thinners (anticoagulants)
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Whether antacids or anything else relieved it
- +10 Previous heart problems, angina, stents or heart operations
- +5 Ever had a stroke or mini-stroke
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you and have our team prepare heart monitoring, a defibrillator and a vein line while we await the ambulance.")

Graham reaches the cath lab and has a stent to his right coronary artery.
