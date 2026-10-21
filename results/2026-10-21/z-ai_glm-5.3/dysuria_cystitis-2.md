# z-ai/glm-5.3: dysuria_cystitis #2

Patient: Chloe Nguyen, 22, F, Hospitality worker (café barista), studying part-time.
Booked for: Burning when passing urine (booked as urgent). Consult starts 10:15.
Booking note, in the patient's words: "Burning when I wee since yesterday. Pretty sure it's a UTI again. Need antibiotics please."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: Combined oral contraceptive pill (levonorgestrel/ethinylestradiol)
General appearance: Looks well. Not unwell or toxic.
DR: Hi Chloe, I see you've had burning when you wee since yesterday. A few questions first: any fever or chills, back or flank pain, nausea or vomiting? Any vaginal discharge or irritation, or new sexual partner? Are you passing urine very frequently or with urgency? And have you had a UTI before — how many, and when was the last one?
PT: No fevers or shivers, and nothing in my back, just a bit of an ache low down in my tummy. I'm eating normally and haven't been sick, and I haven't noticed anything like that. I have a boyfriend we have been together about a year, just him. I am going constantly, every half hour, and only a little bit comes out and I have to rush, and I had one UTI about two years ago, that is it.
  Unknown exam "vitals_general". Use list_exams or search.
  (list_exams abdomen)
  (list_exams vitals)
  Abdominal palpation: Soft. Mild suprapubic tenderness; non-tender elsewhere. No masses or organomegaly. [abnormal]
  Renal angle tenderness: No renal angle tenderness on either side.
  Renal angle tenderness: No renal angle tenderness on either side. (repeated: no change since the last check)
  Temperature: 36.8 °C.
  (search tests "urine": 8 found)
  Urine dipstick: Leucocytes ++, nitrites positive, blood trace, protein trace. hCG not tested. [abnormal]
  Urine microscopy, culture and sensitivity (MC&S): ordered; the result takes 2 day(s) and will not be back during this consult
  Unknown drug "trimethoprim". Use search with kind "drugs".
  (search drugs "trimethoprim": 2 found)
  Prescribed: Trimethoprim 300 mg tablets, 300 mg Once daily, 3 days
DR: Here's your plan, Chloe:

- Diagnosis: a bladder infection (UTI/cystitis). Not a kidney infection, and no worrying signs.
- Treatment: Trimethoprim 300 mg, one tablet once a day for 3 days. Take it with or without food. Your pill is not affected by this antibiotic, but if you get vomiting or diarrhoea, that can reduce the pill's protection.
- The lab result will be back in about 2 days — if the germ turns out to be resistant, we'll call you to change the antibiotic.
- Drink plenty of water, and paracetamol or ibuprofen can help with the burning/discomfort. Peeing when you feel the urge (don't hold on) and wiping front-to-back help prevent recurrences.
- Come back or go to emergency if you get a fever above 38°C, worsening back/flank pain, vomiting, or you're not improving within 48 hours — that could mean the infection is spreading to your kidneys.
PT: Oh good, I just want to get this sorted quickly so I can get back to my shift at the café.
  Unknown diagnosis id(s): uncomplicated bacterial cystitis. Use search with kind "diagnoses".
  (search diagnoses "cystitis": 2 found)
  Diagnosis saved: most likely Acute uncomplicated cystitis; can't miss Pyelonephritis.
END CONSULT

## Bill: 205/360 (Registrar), ideal
- +10 Red flag excluded: Fever, sweats, chills or shaking
- +10 Red flag excluded: Pain in the back or sides (loins)
- +10 Red flag excluded: Nausea, vomiting or feeling generally unwell
- +10 Vaginal discharge, itch or irritation
- +10 Sexual activity and partners
- +10 Previous urine infections
- +10 Suprapubic palpation
- +10 Renal angle tenderness
- +10 Temperature
- +10 Urine dipstick
- +5 Urine microscopy, culture and sensitivity (MC&S)
- +15 First-line antibiotic: nitrofurantoin 100 mg 6-hourly for 5 days, fosfomycin 3 g once, or trimethoprim 300 mg daily for 3 days
- +20 Correct diagnosis: Acute uncomplicated cystitis
- +20 Can't-miss diagnosis considered: Pyelonephritis
- +15 Advise plenty of fluids (you said: "Drink plenty of water")
- +15 Paracetamol for discomfort (you said: "paracetamol or ibuprofen can help with the burning/discomfort")
- +15 Safety-net — return if fever, loin pain, vomiting, or not improving within 48 hours (you said: "Come back or go to emergency if you get a fever above 38°C, worsening back/flank pain, vomiting, or you're not improving within 48 hours")

Chloe texts the clinic two days later to say she's back to normal. No follow-up needed.
