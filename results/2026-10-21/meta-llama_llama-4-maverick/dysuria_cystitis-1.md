# meta-llama/llama-4-maverick: dysuria_cystitis #1

Patient: Chloe Nguyen, 22, F, Hospitality worker (café barista), studying part-time.
Booked for: Burning when passing urine (booked as urgent). Consult starts 10:15.
Booking note, in the patient's words: "Burning when I wee since yesterday. Pretty sure it's a UTI again. Need antibiotics please."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: Combined oral contraceptive pill (levonorgestrel/ethinylestradiol)
General appearance: Looks well. Not unwell or toxic.
DR: Hi Chloe, thanks for coming in today. Can you tell me more about the burning sensation you're experiencing when you pass urine?
PT: It stings and burns, and it is definitely the worst right at the end. It started yesterday morning, so about a day and a half ago, and now I am going constantly every half hour or so, just a little bit at a time, and I really have to rush. It is a bit cloudy and smells, but I haven't seen any blood.
  Unknown exam "urine_dipstick_test". Use list_exams or search.
DR: Have you had any UTIs or similar problems in the past?
PT: I had one urine infection about two years ago, and I haven't had any kidney or bladder problems like that since.
  (list_exams vitals)
DR: Do you have any pain or discomfort in your lower abdomen or back?
PT: Just the low ache above my bladder and nothing else, and there is nothing in my back, just that ache low down in my tummy.
  Temperature: 36.8 °C.
DR: Have you noticed any vaginal discharge or irritation?
PT: No, nothing like that.
  (search tests "urine culture": 1 found)
  (search tests "urine microscopy": 1 found)
DR: Are you sexually active?
PT: Um — yeah, I have a boyfriend. We have been together about a year, and it is just him.
DR: When was your last period?
PT: About two weeks ago, and it was normal.
  Unknown exam "suprapubic_tenderness". Use list_exams or search.
  (list_exams abdomen)
DR: Have you used any new soaps, bubble baths, or other products that could irritate your genital area recently?
PT: I haven't used anything like that.
  Suprapubic palpation (Suprapubic): Soft abdomen. Mild suprapubic tenderness. No guarding or rebound. No masses. [abnormal]
DR: Do you have any fever or chills?
PT: No, no fevers or shivers. I feel fine apart from this.
  Urine microscopy, culture and sensitivity (MC&S): ordered; the result takes 2 day(s) and will not be back during this consult
  Unknown drug "nitrofurantoin". Use search with kind "drugs".
DR: I'm going to prescribe you some antibiotics for a likely urine infection. Please take them as directed. We'll also send off a urine test to confirm the diagnosis. If your symptoms don't improve or get worse, come back and see us.
PT: Can I just grab the script now? I really need to get back to the cafe before my afternoon shift starts.
  (search drugs "nitrofurantoin": 2 found)
DR: Just a moment, I'll check on the medication.
PT: Okay, no worries.
  Prescribed: Nitrofurantoin 50 mg capsules, 50 mg Twice daily, 5 days
DR: Here's your prescription. Take two capsules twice a day for five days. If your symptoms don't improve or get worse, come back and see us.
PT: Thanks so much.
  Unknown diagnosis id(s): urinary_tract_infection. Use search with kind "diagnoses".
  (search diagnoses "urinary tract infection": 3 found)
  (search diagnoses "pyelonephritis": 1 found)
  Diagnosis saved: most likely Lower urinary tract infection; can't miss Pyelonephritis.
END CONSULT

## Bill: 170/360 (Registrar), acceptable
- +10 How long the symptoms have been present
- +10 Colour of the urine or any visible blood
- +10 Previous urine infections
- +10 Known kidney or bladder problems
- +10 Red flag excluded: Abdominal pain beyond a low ache
- +10 Red flag excluded: Pain in the back or sides (loins)
- +10 Temperature
- +10 Vaginal discharge, itch or irritation
- +10 Sexual activity and partners
- +10 When her last period was
- +10 Suprapubic palpation
- +10 Red flag excluded: Fever, sweats, chills or shaking
- +5 Urine microscopy, culture and sensitivity (MC&S)
- +10 Defensible diagnosis: Lower urinary tract infection
- +20 Can't-miss diagnosis considered: Pyelonephritis
- +15 Safety-net — return if fever, loin pain, vomiting, or not improving within 48 hours (you said: "If your symptoms don't improve or get worse, come back and see us.")

Symptoms settle over a few days and Chloe doesn't need to come back. Missing from the plan: first-line antibiotic: nitrofurantoin 100 mg 6-hourly for 5 days, fosfomycin 3 g once, or trimethoprim 300 mg daily for 3 days; advise plenty of fluids; paracetamol for discomfort.
