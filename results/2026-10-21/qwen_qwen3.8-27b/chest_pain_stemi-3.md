# qwen/qwen3.8-27b: chest_pain_stemi #3

Patient: Graham Mitchell, 58, M, Plumber, self-employed.
Booked for: Indigestion. Consult starts 08:30.
Booking note, in the patient's words: "Indigestion since this morning. Wife insisted I get it looked at."
Clinic record:
  Allergies: nil known
  Conditions: Hypertension; Hypercholesterolaemia; Current smoker
  Medications: Perindopril 5 mg daily; Atorvastatin 40 mg daily
General appearance: Pale and grey. Anxious, shifting in the chair.
DR: Good morning, Mr Mitchell. I'm Dr Rao, a general practitioner. Thanks for coming in — and your wife's a good judge, I'm glad you're here. So the note says "indigestion since this morning." Can you tell me in your own words what's been going on — where does it hurt or feel uncomfortable, and how would you describe it?
PT: Started around seven this morning, came on over a few minutes. It's like a heaviness, like indigestion but heavier, sort of a weight sitting on my chest right in the middle behind the breastbone, and a bit up into the throat. It's been going the whole time, near enough an hour and a half, and it's still there now. Now you mention it, my jaw is a bit achy and my left arm feels heavy, but not my back.
DR: Thank you, that's very helpful. A few quick questions: are you sweating or feeling clammy? Have you felt sick to your stomach, dizzy, or short of breath? Did it start when you were moving around or at rest, and does breathing in deeper, pressing on it, or moving your arms change it at all? Has anything like this happened before, even briefly? And does anyone in your family have heart problems?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Of course, one at a time. Are you feeling sweaty or clammy at the moment?
PT: Yeah, I have been sweating like anything. Thought it was just hot.
DR: Okay. Are you feeling sick to your stomach, or dizzy or faint?
PT: Feel a bit sick, but I haven't vomited. I was a bit light-headed getting out of the car, though I didn't pass out.
DR: Got it. Did this start when you were doing something — like moving around or exerting yourself — or was it just sitting or lying there?
PT: I was just sitting having a cuppa, reading the paper.
DR: Does the pain change when you take a deep breath, move your arms, or if I press on your chest?
PT: No, breathing doesn't change it, and moving doesn't change it either.
DR: Has anything like this happened to you before — even a brief episode of chest discomfort?
PT: This past week I have had a bit of a tightness going up ladders. It goes away if I stop, and I just put it down to being unfit, but it has been happening more.
  (list_exams vitals)
  (search tests "ECG": 4 found)
  General appearance: Pale and grey. Anxious, shifting in the chair. (already done)
  Heart rate: 54, regular.
  Blood pressure: 104/68.
  Respiratory rate: 20.
  Oxygen saturation: 96% on room air.
  Temperature: 36.6 °C.
  ECG (12-lead): Sinus bradycardia 54/min. ST elevation 2–3 mm in II, III and aVF. Reciprocal ST depression in I and aVL. No LBBB. [abnormal]
  (search referrals "ambulance": 1 found)
  (list_exams thorax)
  Heart sounds: Heart sounds dual, soft S4. No murmur. No rub. [abnormal]
  Breath sounds (Lungs (front)): Chest clear. No crackles.
  Right-sided ECG (V4R): No ST elevation in V4R. No evidence of right ventricular involvement.
  (search drugs "aspirin": 2 found)
  Given in clinic: Aspirin 300 mg dispersible tablets, 300 mg Stat dose
  Referred: Emergency department by ambulance (call 000)
DR: Graham, I need to be straight with you: this isn't indigestion. Your heart tracing — the ECG — shows that the blood supply to the bottom part of your heart is blocked. In plain terms, you're having a heart attack, and the sooner the blocked artery is opened up, the less damage there is.

Here's the plan. I've just given you a full dose of aspirin, which helps keep the artery from clotting further. I've called an ambulance, and you're going straight to the hospital — they have a cath lab there where they can open the artery, usually within the hour of you arriving. That's the definitive treatment.

Until the paramedics get here: sit still and relax, don't do any physical effort, and don't drive anywhere. Have your wife or someone call ahead to the hospital so they're expecting you. If the pain gets worse before they arrive, tell me immediately — and please don't take any more medication without telling them what it is.

The ambulance crew will be with you the whole way and can give you more treatment on the way. Is there anything you haven't told me — any bleeding problems, any other medicines you take, or anyone in your family with heart disease?
PT: No bleeding problems. Yeah, took one of those Viagra tablets last night, but don't tell the missus I told you, and I take perindopril and atorvastatin. Dad had a heart attack at fifty-five and he died from it. Look, are you sure about this? I've got a job to finish this afternoon.
DR: I'm sure, Graham — and I'd rather be sure. The tracing, your symptoms, the sweating, the family history with your dad: this is a heart attack until proven otherwise, and it's treatable. The job can wait a day; you can't come back twice.

And thank you for being honest about the tablet — I understand, and I won't breathe a word. I only need to know because it rules out one particular pain medicine they might otherwise use. What I need is for the ambulance crew to know about it, because they give treatments on the way in and need the full picture. I'm going to hand them your medication list — perindopril, atorvastatin, and that tablet from last night.

I'll stay with you until they arrive. The paramedics will take another heart tracing, start the further blood-thinners, and take you straight through to the cath lab. You're in the right place at the right time, and your wife was right to push you in. Is there anyone I should call to let them know — your wife, maybe, on the way?
PT: My wife is sitting out in the car.
  (search diagnoses "STEMI": 1 found)
  (search diagnoses "aortic dissection": 1 found)
  Diagnosis saved: most likely ST-elevation myocardial infarction (STEMI); can't miss Aortic dissection.
DR: Graham, here's where we are, plain and simple.

Your heart tracing shows that the artery supplying the bottom wall of your heart is blocked. That's a heart attack — specifically, what we call an inferior STEMI. It's serious, but it's very treatable, and you're exactly where you need to be right now. The ambulance is on its way; they'll take you straight to a hospital with a cath lab, where they can open the artery with a stent. The faster we get you there, the more heart muscle we can save.

A few things I've already done:
- Given you 300 mg of aspirin, which you've had.
- Ruled out the part of the heart on the right being involved, so we know what medicines are safe.
- I've noted you took sildenafil (the "Viagra" tablet) last night. That matters to the doctors because a common heart-attack pain medicine — the nitrate tablets — can't be mixed with it and would drop your blood pressure dangerously. So I've made sure that's written down for the paramedics and the hospital.

What I want from you:
- Do not drive, do not exert yourself, and do not go back to the job this afternoon. I'm sorry — I know you've got a job to finish, but this comes first. No one loses a customer if you take a week for this.
- Sit or lie still until the ambulance crew takes over. If the pain worsens, you feel faint, or you start to sweat or feel sick, tell them straight away.
- Your wife is welcome to come with you in the ambulance or call ahead to the hospital.

How does that sound?
PT: I don't know, maybe a six? It's more heavy than sore. Dad died from his, so I'm not keen on following him. Can you just make sure the missus knows?
DR: You won't be following your dad, Graham. He had his heart attack at fifty-five and — in those days — the artery stayed blocked. You're 58, you're in a system that can open the artery within the hour, and the fact that it started as warning twinges over the last week means your heart was telling you to come in before it got this far. You're on the right side of this.

I've asked the reception to bring your wife in and tell her, and the paramedics will update her again as you leave. She'll know.

One last thing: if anything changes before the ambulance gets here — the pain gets much worse, you feel like fainting, or you collapse — call out and I'll stay with you. Otherwise just rest, and let the crew take over. I'll be right here.
PT: Right. Thanks, Doc.
END CONSULT

## Bill: 305/480 (Fellow), acceptable
- +10 Where exactly the discomfort is
- +10 Whether the discomfort spreads or travels anywhere (arms, jaw, neck, back)
- +10 When the discomfort started
- +20 Red flag: Sweating or clamminess with the pain
- +10 Nausea or vomiting
- +20 Red flag: Dizziness, light-headedness or fainting
- +10 Activity at the moment today's pain began
- +5 Whether the pain is worse on breathing in
- +5 Whether moving or pressing on the chest makes it worse
- +20 Red flag: Had this chest pain before, e.g. on stairs or exertion
- +10 Heart rate
- +10 Blood pressure
- +5 Respiratory rate
- +10 Oxygen saturation
- +5 Temperature
- +10 ECG (12-lead)
- +5 Heart sounds
- +5 Breath sounds
- +10 Right-sided ECG (V4R)
- +15 Aspirin 300 mg chewed
- +15 Call an ambulance (000) immediately
- +5 Any recent bleeding
- +20 Red flag: Taking any other medicines or tablets, beyond the regular ones (e.g. occasional, from the chemist, a friend or online)
- +5 Family history of heart disease at a young age
- +20 Correct diagnosis: ST-elevation myocardial infarction (STEMI)
- +20 Can't-miss diagnosis considered: Aortic dissection
- +15 Stay with the patient with a defibrillator available until the ambulance arrives (you said: "I'll stay with you until they arrive.")

Graham reaches the cath lab and has a stent to his right coronary artery.
