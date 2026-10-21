# z-ai/glm-5.3: chest_pain_stemi #1

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. I understand you've had indigestion since this morning — your wife was right to insist. Tell me, where exactly do you feel it, and does it feel like burning, pressure, or something else?
PT: It started about seven this morning, came on over a few minutes, and it's been going the whole time. Right in the middle, behind the breastbone, bit up into the throat. It's like a heaviness. Like indigestion but... heavier. Sort of a weight sitting on my chest. Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back.
DR: That description worries me — it sounds more like a heart problem than indigestion. I need to act quickly. A few quick questions: any sweating, nausea or shortness of breath? Does the pain change if you take a deep breath or move? Do you feel dizzy or lightheaded right now?
PT: Yeah, I've been sweating like anything, thought it was just hot. Feel a bit sick, haven't vomited, and a bit short of breath, yeah, hard to get a proper breath in. Breathing doesn't change it, and moving doesn't change it. Bit light-headed getting out of the car, didn't pass out.
  (list_exams vitals)
  (search drugs "aspirin": 2 found)
  Blood pressure: 104/68.
  Heart rate: 54, regular.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (search referrals "ambulance": 1 found)
  Referred: Emergency department by ambulance (call 000)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Unknown diagnosis id(s): acute_coronary_syndrome, acute_coronary_syndrome. Use search with kind "diagnoses".
  (search diagnoses "coronary": 4 found)
  Diagnosis saved: most likely Acute coronary syndrome; can't miss ST-elevation myocardial infarction (STEMI).
DR: Graham, I'm treating this as a possible heart attack, not indigestion. I've called an ambulance to take you straight to hospital. I've given you a dispersible aspirin (300 mg) to chew — it helps reduce clotting in the heart arteries. Please don't drive yourself or let your wife drive you; the ambulance crew can treat you on the way if things change. I'll update your wife now. If the pain suddenly worsens, you feel faint, or it spreads further, tell me immediately — I'm right here. The hospital will do an ECG and blood tests and likely a procedure to open any blocked artery. You're in the best place right now, and you did the right thing coming in.
PT: I don't know, maybe a six? It's more heavy than sore. Look, I can't be going to hospital, I've got a job booked in for this morning.
DR: Graham, I hear you about the job — but this genuinely can't wait. A heart attack can be fatal within hours, and the treatments work best the sooner they're given. Every minute of delay risks permanent heart damage. Please call your client and cancel this morning's job; I'll happily write a medical certificate for you. The ambulance is on its way and I'll stay with you until it arrives. Can you do that now — ring and cancel?
PT: Alright. I will ring them.
END CONSULT

## Bill: 205/480 (Registrar), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +5 Whether the pain is worse on breathing in
- +5 Whether moving or pressing on the chest makes it worse
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Blood pressure
- +10 Heart rate
- +10 Oxygen saturation
- +5 Respiratory rate
- +15 Call an ambulance (000) immediately
- +15 Aspirin 300 mg chewed
- +10 Defensible diagnosis: Acute coronary syndrome
- +20 Can't-miss diagnosis considered: ST-elevation myocardial infarction (STEMI)

Graham reaches the cath lab and has a stent to his right coronary artery. Missing from the plan: stay with the patient with a defibrillator available until the ambulance arrives.
