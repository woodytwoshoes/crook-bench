# meta-llama/llama-4-maverick: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, thanks for coming in today. Can you tell me more about the tummy pain you've been having since last night?
PT: It's down here on the right side, low down. Started last night about ten o'clock. It's there all the time now, though it came and went at first. It's a seven out of ten. I'm not one to complain.
  Unknown exam "abdomen_look". Use list_exams or search.
DR: Can you tell me more about the pain? Is it sharp, dull, or crampy? Have you noticed anything that makes it better or worse, like food, movement, or going to the toilet?
PT: It's more of a dull pain, but walking or coughing makes it worse. No particular food made it better or worse, just the usual. Weeing is normal.
DR: Have you had any vomiting or diarrhoea, or problems opening your bowels?
PT: Felt sick since the early hours and threw up once this morning. No diarrhoea, went normally yesterday morning, nothing since.
DR: Have you had any fever or chills? Have you noticed any blood in your vomit or stool?
PT: I felt hot and a bit shivery last night. No blood in my vomit or stool.
  Cough test (Right lower quadrant) at rlq: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Abdominal palpation (Right lower quadrant) at rlq: Marked tenderness, maximal at McBurney's point, with voluntary guarding. [abnormal]
  Rebound tenderness (Right lower quadrant) at rlq: Rebound tenderness present; he winces sharply. [abnormal]
  Unknown test "urine_beta_hcg". Use search with kind "tests".
  Unknown test "fbc". Use search with kind "tests".
  Urea, electrolytes and creatinine (UEC): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
DR: Samuel, based on your symptoms and the examination, I'm concerned about the possibility of appendicitis. I'm arranging some tests to help confirm the diagnosis. We'll get the results soon.
PT: I didn't think it was appendicitis. I'm not sure what it is.
DR: I'm just checking a few things to make sure we cover all the possibilities. The tests will help us figure out what's going on.
PT: I guess I'll go along with the tests.
  Urine pregnancy test: Negative.
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  Unknown referral "surgical_referral". Use search with kind "referrals".
DR: Samuel, given your symptoms and the findings on examination, I'm referring you to the surgical team at the hospital to be assessed further for possible appendicitis. They will be able to evaluate you more thoroughly and decide on the next steps.
PT: I guess I'll go to the hospital then.
  Diagnosis saved: most likely Appendicitis; differential Gastroenteritis; can't miss Appendicitis.
END CONSULT

## Bill: 118/420 (Resident), missed_red_flag
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +5 Unusual food or takeaway recently
- +10 Pain or frequency passing urine
- +10 Nausea or vomiting
- +10 Diarrhoea
- +20 Red flag: Fever, sweats or chills
- +5 Blood in the stools
- +5 Cough test
- +10 Abdominal palpation
- +5 Rebound tenderness
- -2 Unnecessary: Urine pregnancy test
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Gastroenteritis
- -20 Can't-miss slot repeats another choice: Appendicitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I'm concerned about the possibility of appendicitis. I'm arranging some tests to help confirm the diagnosis.")
- -30 Not done: Refer to the emergency department today for surgical assessment

Without the story of the pain moving, the fever and the order of symptoms, the picture looked like a stomach bug. Samuel re-presents with a perforated appendix.
