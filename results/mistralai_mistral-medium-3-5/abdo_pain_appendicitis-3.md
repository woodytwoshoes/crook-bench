# mistralai/mistral-medium-3-5: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm Dr. Smith. I can see you're in some discomfort. Can you tell me more about the tummy pain you've been having?
PT: It's down here on the right side, low down. It started last night, about ten o'clock. It's there all the time now. It sort of came and went at first. It's a seven out of ten. I'm not one to complain.
DR: Thanks for that. Can you describe the pain a bit more? Is it sharp, dull, or cramping? And does it move anywhere else or stay in that one spot?
PT: It started around my belly button. It moved down to the right sometime overnight. It's more of a dull ache, not sharp or cramping. It stays in that spot mostly.
DR: Have you had any nausea, vomiting, or changes in your bowel habits, like diarrhoea or constipation? And have you noticed any fever or sweats?
PT: I've felt sick since the early hours and threw up once this morning. No diarrhoea, I went normally yesterday morning and nothing since. I felt hot and a bit shivery last night.
DR: Have you had any pain like this before? And have you noticed any blood in your vomit, stool, or urine?
PT: No, never had anything like this. No blood.
DR: Have you had any recent illnesses, like a cold or flu? And have you been eating normally, or has your appetite changed?
PT: No, not that I know of. I couldn't face breakfast. Not hungry at all, which isn't like me.
DR: Have you noticed any pain when you pass urine, or any unusual discharge from your penis? And are you sexually active?
PT: No, weeing is normal. No, no discharge. No, not currently.
DR: Have you had any recent travel, or been in contact with anyone who’s been unwell? And have you noticed any swelling or lumps in your groin or abdomen?
PT: No, haven't been anywhere. Everyone at home and work is fine. No lumps down there.
DR: Let me check your temperature and pulse, and then I’ll examine your abdomen. Can you lie back for me?
PT: Okay.
  Temperature: 37.9 °C.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
DR: Samuel, I’m concerned this might be appendicitis, which is a serious condition. I need to check a few more things and then we’ll get you the right help. Have you had any pain in your back or shoulders, or any shortness of breath?
PT: No, nothing like that.
  Bowel sounds: Present, slightly reduced. [abnormal]
  Inguinal lymph nodes: No inguinal lymphadenopathy.
DR: I’m going to check your blood to see if there’s an infection. This will help confirm what’s going on. Can I take some blood for a test?
PT: Okay, I'm not sure.
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
DR: Samuel, based on your symptoms and my examination, I’m very concerned that you have appendicitis. This is a serious condition where the appendix is inflamed, and it often needs urgent surgery. Your pain started around your belly button and moved to the right lower side, you’ve got a fever, nausea, and the examination shows tenderness in the typical spot. This is a medical emergency.
PT: I don't want to have surgery.
DR: I understand that surgery can be scary, but appendicitis can be life-threatening if it’s not treated quickly. The appendix can burst, which can cause a serious infection in your abdomen. We need to get you to the hospital right away for further assessment and likely surgery. Would you like me to call an ambulance for you, or can someone drive you to the emergency department immediately?
PT: I'll go with an ambulance.
  Unknown referral "ambulance". Use search with kind "referrals".
  Referred: Emergency department by ambulance (call 000)
DR: I’ve arranged for an ambulance to take you to the emergency department. While we wait, don’t eat or drink anything, as you may need surgery. I’ll also let the hospital know you’re coming so they can prepare for your arrival. Do you have any questions or concerns before the ambulance arrives?
PT: No, I don't.
  Diagnosis saved: most likely Appendicitis; differential Gastroenteritis; can't miss Ectopic pregnancy.
DR: Samuel, to recap: I’m very concerned you have appendicitis, which is an emergency. The ambulance is on its way to take you to the hospital. They’ll assess you further and likely operate to remove your appendix. It’s important you don’t eat or drink anything until you’ve been seen. If your pain gets worse, or you feel faint or very unwell, let the ambulance crew know immediately. Do you understand?
PT: Yes. I understand.
END CONSULT

## Bill: 250/420 (Registrar), acceptable
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Diarrhoea
- +20 Red flag: Fever, sweats or chills
- +10 Whether he has had this pain before
- +5 Blood in the stools
- +10 Appetite
- +10 Pain or frequency passing urine
- +5 Recent overseas travel
- +5 Anyone around him with vomiting or diarrhoea
- +10 A lump or bulge in the groin
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Gastroenteritis
- -20 Not a can't-miss diagnosis here: Ectopic pregnancy
- +10 Red flag excluded: Fainting or light-headedness
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I’m very concerned you have appendicitis, which is an emergency.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "While we wait, don’t eat or drink anything, as you may need surgery.")

Samuel gets to hospital and has his appendix out. Missing from the plan: pain relief before transfer.
