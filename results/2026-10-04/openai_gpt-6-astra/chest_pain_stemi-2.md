# openai/gpt-6-astra: chest_pain_stemi #2

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale, grey and clammy. Sweating. Anxious, shifting in the chair.
DR: Graham, I'm concerned because you look pale and sweaty. We'll assess you straight away. Where is the discomfort, when did it start, and is it still there now?
PT: It's like a heaviness, sort of a weight on my chest. It's been there about an hour and a half. Still there now. Right behind the breastbone, a bit up into the throat. Started about seven this morning.
DR: This could be a heart attack rather than indigestion. I'm calling an ambulance now; please stay resting here and don't walk around. We'll get a heart tracing while help is on its way. Are you short of breath or feeling faint? Have you ever had an aspirin allergy, serious bleeding, or taken aspirin today?
PT: A bit short of breath, yeah, hard to get a proper breath in. Bit light-headed getting out of the car, didn't pass out. No allergies that I know of, I've had Disprin before, no problems. No, I don't take aspirin or anything like that.
  Referred: Emergency department by ambulance (call 000)
  Heart rate (left) (left): 54, regular.
  Blood pressure (left) (left): 104/68.
  Respiratory rate (left) (left): 20.
  Oxygen saturation (left) (left): 96% on room air.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
DR: Your heart tracing shows a heart attack. The ambulance needs to take you urgently to a hospital that can open the blocked heart artery. We won't wait for blood tests here. Have you had any recent serious bleeding, vomiting blood or black stools? Did the pain hit at maximum intensity immediately, or tear through into your back?
PT: No, nothing like that. It crept up on me.
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg dissolved in water, orally now Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
DR: The aspirin helps stop the clot getting bigger. While we wait, how strong is the pain from zero to ten, and does it spread anywhere besides your throat? Have you felt sick or vomited? Have you used any erection medicines such as Viagra or Cialis in the last few days?
PT: It's more heavy than sore, maybe a six. It's in the middle, behind the breastbone, a bit up into the throat, and my jaw's a bit achy, left arm feels heavy. Feel a bit sick, haven't vomited. Took one of those Viagra tablets last night.
  Heart sounds (left) (left): Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (left) (left): Chest clear. No crackles.
DR: Thank you for telling me about Viagra. We must not give you angina spray, called GTN, because that combination can dangerously drop your blood pressure. Your oxygen level is normal, so extra oxygen isn't needed right now. Have you ever had heart trouble or similar symptoms before? What were you doing when this began? Are you taking any other medicines, blood thinners, supplements or recreational stimulants?
PT: Never had anything wrong with my heart. I was just sitting having a cuppa, reading the paper. No, nothing like that.
  Jugular venous pressure (left) (left): JVP not raised.
DR: I'll update the ambulance team that this is a heart attack on your tracing, starting at 7 am, and that you've had 300 mg aspirin and took Viagra last night. They need to arrange urgent treatment to reopen the artery, usually with a small tube and stent at hospital. I'll ask our nurse to stay with you, keep monitoring your heart rhythm, pulse and blood pressure, have the resuscitation equipment ready, and put a drip into a vein if available without delaying transfer. The ambulance team can give carefully monitored pain relief; your blood pressure is on the low side. Please tell me immediately if the discomfort worsens, breathing gets harder, or you feel faint. Is your wife here, and may we let her know what's happening?
PT: No, my wife's not here. Yeah, let her know what's happening.
  Blood pressure (left) (left): 104/68. (already done)
  Heart rate (left) (left): 54, regular. (already done)
  Oxygen saturation (left) (left): 96% on room air. (already done)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); differential Unstable angina; can't miss Aortic dissection.
DR: We'll contact your wife with your permission. You're not to drive yourself; I'll stay with you until the ambulance team takes over. I'll send your heart tracings, medication details and our findings with you, including the reason we haven't given angina spray. I know this is frightening, but you've done the right thing by coming in, and getting you to the artery-opening team quickly is our priority.
PT: Yeah. I'll go. Just hope it's not too bad.
END CONSULT

## Bill: 310/505 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 When the discomfort started
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +5 Any recent bleeding
- +10 Already taking aspirin or clopidogrel
- +15 Call an ambulance (000) immediately for STEMI transfer
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +10 ECG (12-lead)
- +10 Red flag excluded: Sudden severe tearing or ripping pain
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 Nausea or vomiting
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Heart sounds
- +5 Breath sounds
- +10 Previous heart problems, angina, stents or heart operations
- +10 Activity at the moment today's pain began
- +10 Blood thinners (anticoagulants)
- +5 Jugular venous pressure
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +5 Reasonable differential: Unstable angina
- +5 Reasonable differential: Aortic dissection
- +10 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "Please stay resting here and don't walk around. We'll get a heart tracing while help is on its way.")

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: phone the receiving hospital with the STEMI ECG.
