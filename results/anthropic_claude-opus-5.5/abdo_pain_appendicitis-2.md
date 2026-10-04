# anthropic/claude-opus-5.5: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the GP. Sorry you're feeling rough. Can you tell me where the pain started, where it is now, and how it's changed since last night?
PT: It started down here on the right side, low down. Last night, about ten o'clock. So maybe fourteen hours. It's there all the time now. At first it sort of came and went.
DR: Have you had any vomiting, diarrhoea, fever or chills, loss of appetite? And does moving, coughing or bumps in the car make it worse?
PT: Yes, felt sick since the early hours and threw up once this morning. No diarrhoea, just normal yesterday morning, nothing since. Felt hot and a bit shivery last night. Not hungry at all, which isn't like me. Walking hurts, bumps in the car and coughing make it worse.
DR: A few more: any pain or swelling in your testicles or groin? Any burning or blood when passing urine, or going more often? Have you had anything like this before or any operations? Have you taken any painkillers today? And when did you last eat or drink?
PT: It's a lot at once. What do you want to know first?
DR: Sorry! First: any pain or swelling in your testicles or groin?
PT: No, nothing down there. No lumps down there either.
DR: Any burning, blood, or going more often when you pass urine?
PT: No, weeing is normal.
DR: Have you had pain like this before, or any operations or medical problems? And have you taken any painkillers today?
PT: No, never had anything like this. Never had an operation. I've still got my appendix, as far as I know. Took a couple of paracetamol this morning, didn't do much.
DR: When did you last eat or drink anything? And how bad is the pain out of 10?
PT: Last ate or drank about six hours ago, just the usual. Mum's cooking on Sunday. It's maybe a seven out of ten. I'm not one to complain.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  Oxygen saturation: 98% on room air.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  Bowel sounds: Present, slightly reduced. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
DR: Is there someone who can drive you to hospital right now? Please don't drive yourself.
PT: No, I can't drive myself. My mates are out. I'll wait for a lift.
  Referred: Emergency department by ambulance (call 000)
  Referred: Phone the emergency department (clinical handover)
DR: Samuel, from what you've told me and what I've found, I think this is most likely appendicitis — an inflamed appendix, the small tube coming off the bowel low on the right. The pain moving and settling there, the fever, feeling sick, not being hungry, and the tenderness when I press and let go all fit. This isn't a stomach bug, and it needs to be seen in hospital today — it usually needs surgery to take the appendix out, and if left it can burst, which is much more serious. Because you don't have a lift, I've called an ambulance to take you to the emergency department, and I'm phoning the doctors there to tell them about you. Until then, please don't eat or drink anything, not even water, in case you need an operation — they can give you fluids and stronger pain relief through a drip in hospital. Don't take any more tablets. If the pain suddenly gets much worse or spreads across your whole belly, you feel faint, or you start vomiting a lot while you wait, tell our staff straight away. Would you like us to call your mum or someone to meet you at the hospital?
PT: No, I haven't fainted or felt faint. The pain came first, the sickness came a few hours later. It started around my belly button and moved down to the right sometime overnight.
  Diagnosis saved: most likely Appendicitis; differential Mesenteric adenitis; can't miss Perforated viscus with peritonitis.
DR: Thanks, Samuel — the pain starting near your belly button and then moving down to the right is a classic pattern for appendicitis, which makes me more sure. The ambulance is on its way. Stay lying still, nothing to eat or drink, and let our nurse know right away if anything gets worse. Your urine test showed only small changes, which can happen with an inflamed appendix lying near the bladder. The hospital team will do blood tests and possibly a scan, and talk to you about surgery. You've done the right thing coming in.
PT: It's a lot at once. I just want to know what's going to happen next.
DR: Simple version: the ambulance takes you to hospital. They'll put a drip in your arm for fluids and pain relief, do blood tests, and probably get the surgeons to see you. Most likely they'll take your appendix out today with keyhole surgery, and most people go home in a day or two. Until then: lie still, nothing to eat or drink, and tell us if it gets worse.
PT: I just want to know what's going to happen next.
END CONSULT

## Bill: 375/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 Nausea or vomiting
- +10 Diarrhoea
- +20 Red flag: Fever, sweats or chills
- +10 Appetite
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 A lump or bulge in the groin
- +10 Pain or frequency passing urine
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
- +10 How bad the pain is
- +10 Heart rate
- +5 Blood pressure
- +10 Temperature
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +5 Hernial orifices
- +5 Renal angle tenderness
- +5 Cough test
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +10 Red flag excluded: Fainting or light-headedness
- +10 Whether the pain or the vomiting came first
- +20 Red flag: Where the pain started and whether it has moved
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Mesenteric adenitis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I think this is most likely appendicitis — an inflamed appendix, the small tube coming off the bowel low on the right. The pain moving and settling there, the fever, feeling sick, not being hungry, and the tenderness when I press and let go all fit.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Until then, please don't eat or drink anything, not even water, in case you need an operation — they can give you fluids and stronger pain relief through a drip in hospital.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
