# anthropic/claude-fable-5.1: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning Graham, I'm the doctor. You look a bit uncomfortable — tell me about this indigestion. Where exactly do you feel it, what does it feel like, and when did it start?
PT: Right in the middle, behind the breastbone. Bit up into the throat. It's like a heaviness. Like indigestion but… heavier. Sort of a weight sitting on my chest. About seven this morning. Came on over a few minutes. It's been going the whole time — so an hour and a half, near enough. Still there now.
DR: Does the heaviness spread anywhere — into your arms, jaw, neck or back? And along with it, have you felt sweaty, sick in the stomach, short of breath, or light-headed?
PT: Now you mention it, my jaw's a bit achy, and my left arm feels heavy. Not my back. Yeah, I've been sweating like anything. Thought it was just hot. Feel a bit sick. Haven't vomited. A bit short of breath, yeah. Hard to get a proper breath in. Bit light-headed getting out of the car. Didn't pass out.
  (list_exams vitals)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Oxygen saturation: 96% on room air.
  Respiratory rate: 20.
  (search tests "ECG": 4 found)
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  Unknown referral "ambulance". Use search with kind "referrals".
  (search referrals "ambulance": 1 found)
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I'll be straight with you. Your heart tracing shows this is not indigestion — you are having a heart attack. One of the arteries supplying the bottom part of your heart is blocked. I've already called an ambulance; they'll take you straight to hospital where they can open that artery up. You're in the right place and we're going to look after you. A few quick questions so I can give you the right medicines: have you taken any aspirin or other tablets this morning? Have you ever had a stomach ulcer, bleeding problem, or a bad reaction to aspirin? And have you taken any erection tablets like Viagra or Cialis in the last couple of days?
PT: A heart attack? Crikey. No, I don't take aspirin or anything like that. No. I've had Disprin before, no problems. …Yeah. Took one of those Viagra tablets last night. Don't tell the missus I told you.
  (search drugs "aspirin": 2 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (list_exams thorax / listen)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds: Chest clear. No crackles.
DR: Thanks Graham — and don't worry, what you tell me stays between us, but I do need to pass the Viagra on to the hospital team because it means they must not give you a certain spray under the tongue; it could drop your blood pressure dangerously. Two more quick things: have you ever had heart trouble before, or chest pains like this in the past weeks? And has anyone in your family had a heart attack young?
PT: Never had anything wrong with my heart, though this past week I've had a bit of a tightness going up ladders that goes away if I stop, and I just put it down to being unfit as it's been happening more. And my dad had a heart attack at fifty-five and died from it.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: Graham, here's the plan. The ambulance is on its way and you're going straight to hospital — this needs treatment within the next hour or two, so there's no option of driving yourself or going home first. I've given you an aspirin to chew, which starts thinning the blood around the clot. Your oxygen level is fine so you don't need oxygen, and your chest is clear. I'm not giving you the usual spray under the tongue because of the Viagra last night — it could drop your pressure too far — so if the pain gets worse, tell us straight away and the paramedics can give you strong pain relief into a vein instead. I'll stay with you, keep the tracing going, and I'll call ahead so the hospital heart team is ready. I'll write up a letter with your tracing, your medicines, your blood pressure and the Viagra for the paramedics. Those tightness episodes going up ladders this week were warning signs — that's useful for the hospital to know too. Do you want us to ring your wife so she can meet you at the hospital? Please don't eat or drink anything now, stay sitting or lying down, and tell me immediately if you feel faint, more breathless, or the pain changes. Once you're through this, we'll talk about quitting smoking and getting your heart risk factors sorted — but today the job is just getting that artery open.
PT: I don't know. Maybe a six? It's more heavy than sore.
DR: Okay, a six out of ten — I'll let the paramedics know so they can give you something for it the moment they arrive. Is there anyone you'd like us to call — your wife? And just to confirm: nothing to eat or drink from now, stay seated, and sing out the moment anything changes.
PT: Better not ring her yet, she's flat out at work. Wait until we know what's going on.
DR: Graham, I'd really encourage you to let us call her now — this is serious enough that she'd want to know, and the hospital will want a family member there. I'll have our nurse ring her and let her know you're being taken to hospital with a suspected heart attack and which hospital to go to. I'll stay with you until the ambulance arrives.
PT: Alright. If you reckon.
END CONSULT

## Bill: 320/480 (Fellow), ideal
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Shortness of breath
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Heart rate
- +10 Blood pressure
- +10 Oxygen saturation
- +5 Respiratory rate
- +10 ECG (12-lead)
- +15 Call an ambulance (000) immediately
- +10 Already taking aspirin or clopidogrel
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Any recent bleeding
- +15 Aspirin 300 mg chewed
- +10 Right-sided ECG (V4R)
- +5 Heart sounds
- +5 Breath sounds
- +10 Previous heart problems, angina, stents or heart operations
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +5 Family history of heart disease at a young age
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you until the ambulance arrives.")

The ambulance arrives within minutes. Graham goes straight to the cath lab and has a stent to his right coronary artery. He is home in four days, starts cardiac rehab, and his wife sends the clinic a card. He's quit smoking.
