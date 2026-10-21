# qwen/qwen3.8-27b: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm Dr. Nguyen. I can see you're not feeling well — you've got tummy pain since last night, right? Take your time and tell me what's been going on, starting with when the pain began and where it is now.
PT: Started last night around ten o'clock, so maybe fourteen hours ago. It is down here on the right side, low down.
DR: Thanks. A few more questions to help me sort this out:
1. Where did the pain start — was it around your belly button or central, and did it move to the right lower side?
2. On a scale of 0 to 10, how bad is it now?
3. Have you had any nausea or vomiting, or any fever/chills?
4. Have you been able to eat or drink?
5. Any change in your bowel movements or urination — diarrhoea, constipation, pain or burning with urine?
6. Any chance of a stomach bug — anyone else at home or work with similar symptoms?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: My apologies — let me take it one step at a time. Where did the pain start — around your belly button, or did it start in the right lower side?
PT: It actually started around my belly button. It moved down to the right sometime overnight.
DR: Understood — so it started central and moved to the right lower side. Have you had any nausea or vomiting, or any fever or chills?
PT: Felt sick since the early hours and I threw up once this morning. I also felt hot and a bit shivery last night.
DR: Thanks. Have you been able to eat or drink anything since yesterday, and has the pain been constant or does it come and go?
PT: I couldn't face breakfast, not hungry at all, which isn't like me. And it is there all the time now. At first it sort of came and went.
DR: Okay. Have you noticed anything with your bowels or bladder — diarrhoea, constipation, or any pain or burning when you urinate?
PT: No diarrhoea, I went normally yesterday morning and nothing since. Weeing is normal.
DR: Right. Does moving, coughing, or walking make the pain worse — for instance, when you walked in here, did jarring the pain?
PT: Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
DR: That's helpful. Last bit of history — have you ever had abdominal surgery, and do you take any regular medicines or use alcohol or cannabis regularly?
PT: Never had an operation, I still have my appendix as far as I know, and I had a few beers on the weekend with nothing this week.
  (list_exams vitals)
  Temperature: 37.9 °C.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  (list_exams abdomen)
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation (Right lower quadrant): Marked tenderness, maximal at McBurney's point, with voluntary guarding. [abnormal]
  Rebound tenderness (Right lower quadrant): Rebound tenderness present; he winces sharply. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Renal angle tenderness: No renal angle tenderness.
  (search tests "full blood count": 1 found)
  (search tests "C reactive protein": 1 found)
  (search tests "urinalysis": 1 found)
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search referrals "emergency department": 3 found)
  (search drugs "paracetamol": 5 found)
  Given in clinic: Paracetamol 500 mg tablets, 1000 mg Stat dose
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforation": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 305/420 (Fellow), acceptable
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +10 Appetite
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Previous operations
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +10 Testes
- +5 Renal angle tenderness
- +5 Full blood examination (FBE)
- +5 C-reactive protein (CRP)
- +10 Urine dipstick
- +15 Pain relief before transfer
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis

Samuel gets to hospital and has his appendix out. Missing from the plan: explain that appendicitis is likely; advise nothing to eat or drink until the surgical team has seen him.
