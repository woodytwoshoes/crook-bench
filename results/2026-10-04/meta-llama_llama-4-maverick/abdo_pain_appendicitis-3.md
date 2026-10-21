# meta-llama/llama-4-maverick: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, thanks for coming in today. Can you tell me more about the tummy pain you've been having since last night?
PT: It's down here on the right side, low down. It started last night, about ten o'clock. It's there all the time now. It sort of came and went at first. It's a seven out of ten. I'm not one to complain.
DR: Can you describe the pain a bit more? Is it sharp, dull, crampy, or something else?
PT: It's more of a dull ache. Not sharp. Not crampy. Just a constant ache down there on the right side.
  Abdominal palpation (Right lower quadrant) at rlq: Marked tenderness, maximal at McBurney's point, with voluntary guarding. [abnormal]
  Rebound tenderness (Right lower quadrant) at rlq: Rebound tenderness present; he winces sharply. [abnormal]
DR: Samuel, the examination suggests there's significant tenderness in your lower right abdomen, and you experience pain when I release the pressure. Have you had any fever, nausea, or vomiting?
PT: Yes, I felt hot and a bit shivery last night, and I've felt sick since the early hours, threw up once this morning.
  Unknown exam "vitals.temperature". Use list_exams or search.
  Unknown exam "vitals.heart_rate". Use list_exams or search.
  Temperature at vitals: 37.9 °C.
  Heart rate at vitals: 102, regular.
  Unknown test "FBC". Use search with kind "tests".
  Unknown test "UEC". Use search with kind "tests".
  Unknown test "CRP". Use search with kind "tests".
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  Urea, electrolytes and creatinine (UEC): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
DR: Samuel, based on your symptoms and examination findings, I'm concerned about the possibility of appendicitis. I am going to refer you to the hospital for further evaluation and management. You may need surgery.
PT: I didn't think it was that bad. I just thought it was a stomach bug.
  Unknown referral "emergency_department". Use search with kind "referrals".
  Unknown referral "emergency_department". Use search with kind "referrals".
  Diagnosis saved: most likely Appendicitis; differential Gastroenteritis; can't miss Appendicitis.
END CONSULT

## Bill: 85/420 (Resident), missed_red_flag
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +10 Abdominal palpation
- +5 Rebound tenderness
- +20 Red flag: Fever, sweats or chills
- +10 Nausea or vomiting
- +10 Temperature
- +10 Heart rate
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Gastroenteritis
- -20 Can't-miss slot repeats another choice: Appendicitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I'm concerned about the possibility of appendicitis. I am going to refer you to the hospital for further evaluation and management.")
- -30 Not done: Refer to the emergency department today for surgical assessment

Without the story of the pain moving, the fever and the order of symptoms, the picture looked like a stomach bug. Samuel re-presents with a perforated appendix.
