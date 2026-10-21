# google/gemini-4-argon: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm Dr Smith. I can see you're quite uncomfortable right now. Can you tell me what's been happening with your tummy pain since last night?
PT: It started last night about ten o'clock, so maybe fourteen hours ago. At first it sort of came and went, but it is there all the time now. It is down here on the right side, low down. It is maybe a seven out of ten, but I am not one to complain.
DR: Did the pain start down in that lower right side, or did it start somewhere else like around your belly button and move down there? And what does the pain feel like?
PT: It actually started around my belly button. It moved down to the right sometime overnight.
DR: Does anything make the pain worse, like walking, coughing, or going over bumps in the car? And have you felt sick in the stomach, vomited, or lost your appetite?
PT: Yes, walking hurts, every bump in the car on the way here was awful, and coughing is the worst. I have felt sick since the early hours, and I threw up once this morning. I could not face breakfast and am not hungry at all, which is not like me.
DR: Have you noticed any fever, chills, or sweats? And how have your bowels been—any diarrhoea, constipation, or blood in your poo?
PT: I felt hot and a bit shivery last night. I went normally yesterday morning, nothing since, and no blood.
DR: Have you had any stinging or pain when passing urine, blood in your urine, or any pain in your testicles or groin?
PT: Weeing is normal, and I have nothing down there or any lumps.
DR: Have you had any pain like this before, any previous operations on your tummy, or any other medical conditions? And have you taken any medicines or painkillers for this today, or do you have any allergies?
PT: Never had anything like this, and I have never had an operation, so I still have my appendix as far as I know. I took a couple of paracetamol at six this morning, but it did not do much, and I do not have any allergies.
DR: Does anyone in your family have any gut conditions like Crohn's disease or ulcerative colitis? And do you smoke, drink alcohol, or have you eaten anything unusual or been around anyone with a stomach bug?
PT: Nobody in my family has gut conditions, I do not smoke, and I had a few beers on the weekend with nothing this week. I just had the usual food with Mum's cooking on Sunday, and everyone at home and work is fine.
  (list_exams vitals)
  (list_exams abdomen)
  (search exams "psoas": 1 found)
  (search exams "obturator": 1 found)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Temperature: 37.9 °C.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Abdominal percussion: Right lower quadrant: Tender to light percussion. Elsewhere: resonant and non-tender. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Psoas sign (right): Negative.
  Obturator sign (right): Negative.
  Hernial orifices: No hernias.
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  (search tests "urine": 8 found)
  (search referrals "emergency": 5 found)
  (search referrals "surgical": no matches)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "torsion": 2 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search diagnoses "peritonitis": 1 found)
  (search diagnoses "perforated": 1 found)
  (search diagnoses "crohn": 1 found)
  (search diagnoses "calculus": no matches)
  (search diagnoses "colic": 3 found)
DR: Samuel, based on your symptoms—the pain starting around your belly button and moving to the lower right side, the loss of appetite, nausea, fever—and the tenderness I found when examining your tummy, I am very concerned that you have acute appendicitis, which is an inflamed appendix. 

You need to go straight to the hospital emergency department today so the surgical team can assess you, run blood tests and scans, and likely arrange an operation to remove your appendix before it bursts. How did you get to the clinic today—is someone here with you who can drive you straight to the emergency department?
PT: An operation? Can't I just get some antibiotics and go back to work?
DR: I understand it is a shock to hear you might need an operation, and I know you want to get back to work. However, appendicitis cannot be safely treated with tablet antibiotics at home. If an inflamed appendix is left untreated, it can burst (perforate) and cause a life-threatening infection throughout your abdomen called peritonitis. In the hospital, they will start intravenous antibiotics and fluids through a drip, give you strong pain relief, and the surgeons will talk you through the best treatment, which is usually keyhole surgery to remove the appendix.

It is really important that you do not eat or drink anything at all from now on—not even water—in case you need an operation under general anaesthetic today. Also, please do not drive yourself to the hospital. Have you got someone with you or nearby who can drive you straight to the emergency department now, or should we arrange an ambulance?
PT: Okay, I will get my mate to drive me over now.
  Referred: Emergency department (patient to self-present)
  Referred: Phone the emergency department (clinical handover)
DR: That sounds like a good plan. I have written a referral letter for you to take with you, and I have also called the emergency department to let them know you are on your way. 

To recap:
- Head straight to the hospital emergency department now with your mate driving you.
- Stay nil by mouth—do not eat or drink anything at all—so you are ready for surgery if needed.
- Do not take any anti-inflammatory painkillers like ibuprofen.
- If on the way or while waiting you start to feel dizzy, faint, have a sudden worsening of your pain, or start vomiting repeatedly, let the emergency triage staff know immediately or call 000 for an ambulance.

All the best Samuel, the team at the hospital will take good care of you.
PT: Cheers, Doc. I'll get going now.
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 380/420 (Director), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +5 Blood in the stools
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
- +5 Anyone around him with vomiting or diarrhoea
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Temperature
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Abdominal percussion
- +5 Rovsing's sign
- +5 Cough test
- +5 Psoas sign
- +5 Obturator sign
- +5 Hernial orifices
- +10 Testes
- +5 Renal angle tenderness
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "I am very concerned that you have acute appendicitis, which is an inflamed appendix.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "It is really important that you do not eat or drink anything at all from now on—not even water—in case you need an operation under general anaesthetic today.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
