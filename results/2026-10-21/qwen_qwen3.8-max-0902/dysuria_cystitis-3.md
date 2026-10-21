# qwen/qwen3.8-max-0902: dysuria_cystitis #3

Patient: Chloe Nguyen, 22, F, Hospitality worker (café barista), studying part-time.
Booked for: Burning when passing urine (booked as urgent). Consult starts 10:15.
Booking note, in the patient's words: "Burning when I wee since yesterday. Pretty sure it's a UTI again. Need antibiotics please."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: Combined oral contraceptive pill (levonorgestrel/ethinylestradiol)
General appearance: Looks well. Not unwell or toxic.
DR: Hi Chloe, I'm Dr — thanks for coming in. Let's get to the bottom of this. You've had burning when you pass urine since yesterday — can you tell me exactly how that feels, how often you're needing to go, and whether there's any blood in your urine or any tummy pain?
PT: It stings and burns worst right at the end when I wee, and I am going constantly, about every half hour, with only a little bit coming out so I have to rush. It is a bit cloudy and smells, but I have not seen any blood, and I just have a low ache above my bladder and nothing else.
DR: Thanks, that's helpful. A few important questions so I don't miss anything serious: have you had a fever, shivers or shakes, feeling generally unwell or sick/being sick? And any pain or ache in your back or side, under the ribs, rather than down low?
PT: No, I have not had any fevers or shivers and I feel fine apart from this, and I am eating normally and have not been sick. There is nothing in my back, just a bit of an ache low down in my tummy.
DR: Good — that's reassuring. Now, do you have any vaginal discharge, itching, soreness or irritation down there, or any bleeding between periods? And are you sexually active at the moment — any new partner recently?
PT: No, I have not had any itching, discharge, or bleeding between periods, and I have a boyfriend I have been with for about a year, just him.
DR: Right. Have you had this before — how many bladder infections or UTIs have you had in the past year or two, and were any confirmed with a urine test? And when was the first day of your last period?
PT: I had one UTI about two years ago, that is it, and my last period was about two weeks ago and it was normal.
DR: Any chance you could be pregnant — have you missed any pill doses? And have you taken any antibiotics in the last few months, or tried anything yourself for this already?
PT: I do not think I could be pregnant because I am on the pill and I do not miss it, and I have not had any antibiotics this year.
  (list_exams vitals)
  (search tests "dipstick": 1 found)
  Temperature: 36.8 °C.
  Blood pressure: 118/72.
  Urine dipstick: Leucocytes ++, nitrites positive, blood trace, protein trace. hCG not tested. [abnormal]
  (list_exams abdomen)
  Suprapubic palpation: Soft abdomen. Mild suprapubic tenderness. No guarding or rebound. No masses. [abnormal]
  Renal angle tenderness: No renal angle tenderness on either side.
  (search tests "pregnancy": 2 found)
  (search tests "urine culture": 1 found)
  Urine pregnancy test: Negative.
  Urine microscopy, culture and sensitivity (MC&S): ordered; the result takes 2 day(s) and will not be back during this consult
  (search diagnoses "cystitis": 2 found)
  (search diagnoses "pyelonephritis": 1 found)
  (search drugs "nitrofurantoin": 2 found)
  (search drugs "paracetamol": 5 found)
  Prescribed: Nitrofurantoin 100 mg capsules, 1 capsule (100 mg) Twice daily, 5 days
  Prescribed: Paracetamol 500 mg tablets, 1 to 2 tablets (500 mg to 1 g) When required, As directed
DR: Right, here's what I've found and what we'll do, Chloe.

What's going on: your symptoms — stinging at the end of passing urine, going every half hour with only a little coming, cloudy smelly urine and an ache low over the bladder — are the classic picture of a bladder infection, sometimes called cystitis. Your urine dipstick backs that up: it's positive for white cells and nitrites, which means bacteria are there. Your temperature is normal, your blood pressure is fine, your tummy is only mildly tender low down, and there's no tenderness in your kidney area at the back. Your pregnancy test is negative. So this is an uncomplicated bladder infection, not something more serious like a kidney infection.

Treatment: I've prescribed an antibiotic called nitrofurantoin, 100 mg, one capsule twice a day for five days. Take it with food or a glass of milk — that reduces stomach upset — and finish the whole course even if you feel better after a day or two. It can turn your urine a dark yellow or brownish colour, which is harmless and nothing to worry about.

For the stinging and the ache you can take paracetamol, one or two tablets up to four times a day as needed — I've written that as a "when required" script. Drinking plenty of water helps, and a urinary alkaliniser from the pharmacy (the sachets you dissolve in water) can take the sting off as well.

About your pill: this antibiotic does not stop the contraceptive pill working. The one exception is if you get vomiting or severe diarrhoea — then keep taking the pill as normal but use condoms as well, and for seven days afterwards.

I've also sent your urine off to the lab for a culture, which identifies exactly which germ it is and which antibiotics kill it. That takes about two days. If it shows something that needs a different antibiotic, we'll ring you.

Things that mean you need to be seen again urgently — the same day, or go to an emergency department if you can't get in to see us: a fever or shaking chills, pain in your back or side under the ribs, vomiting or not being able to keep fluids down, visible blood in the urine, or just feeling properly unwell. Those can mean the infection has travelled up to a kidney, which needs different treatment. Also come back if you're not clearly improving after 48 hours of the antibiotic, or if the burning is still there when you've finished the course.

And if you develop any new vaginal discharge, itching, soreness, bleeding after sex or pain deep in your pelvis, tell me — then we'd test for things like chlamydia, which can irritate the urethra too. On what you've told me today that's unlikely, but it's worth knowing.

Prevention going forward: keep drinking through your shifts and don't hold on when you need the toilet, pass urine after sex, wipe front to back, and avoid spermicide-coated condoms or a diaphragm, which raise the risk of bladder infections. You're fine to keep working.

Any questions about the medicines or anything I've said?
PT: That is great, thanks, I just want to get this script and get back to work.
  Diagnosis saved: most likely Acute uncomplicated cystitis; can't miss Pyelonephritis.
DR: Thanks, Chloe. Two scripts at the front desk — nitrofurantoin for five days and paracetamol as needed. Drink plenty of water, and ring us straight away if you get a fever, back pain, vomiting or you're not improving in 48 hours. We'll call you if the urine culture changes anything. Take care.
PT: Thank you, I will go grab those now.
END CONSULT

## Bill: 278/360 (Consultant), ideal
- +10 Colour of the urine or any visible blood
- +10 Red flag excluded: Abdominal pain beyond a low ache
- +10 Red flag excluded: Fever, sweats, chills or shaking
- +10 Red flag excluded: Nausea, vomiting or feeling generally unwell
- +10 Red flag excluded: Pain in the back or sides (loins)
- +10 Vaginal discharge, itch or irritation
- +10 Bleeding after sex or between periods
- +10 Sexual activity and partners
- +10 Previous urine infections
- +10 When her last period was
- +10 Red flag excluded: Whether she could be pregnant
- +10 Contraception
- +10 Antibiotics in the last few months
- +10 Temperature
- +5 Blood pressure
- +10 Urine dipstick
- +10 Suprapubic palpation
- +10 Renal angle tenderness
- +5 Urine pregnancy test
- +5 Urine microscopy, culture and sensitivity (MC&S)
- -2 Not indicated: paracetamol
- +20 Correct diagnosis: Acute uncomplicated cystitis
- +20 Can't-miss diagnosis considered: Pyelonephritis
- +15 Advise plenty of fluids (you said: "Drinking plenty of water helps")
- +15 Paracetamol for discomfort (you said: "For the stinging and the ache you can take paracetamol, one or two tablets up to four times a day as needed")
- +15 Safety-net — return if fever, loin pain, vomiting, or not improving within 48 hours (you said: "Also come back if you're not clearly improving after 48 hours of the antibiotic")
- +5 Take the nitrofurantoin with food (you said: "Take it with food or a glass of milk — that reduces stomach upset")
- +5 Pass urine soon after sex (you said: "pass urine after sex")

Chloe texts the clinic two days later to say she's back to normal. No follow-up needed.
