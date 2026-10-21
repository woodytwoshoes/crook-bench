# z-ai/glm-5.3: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm Dr. [name]. Sorry to hear you're not well. Let's get to the bottom of this. Can you tell me where the pain is, and has it moved at all since it started last night?
PT: It started around my belly button. It moved down to the right sometime overnight.
DR: Thanks. That's a typical pattern I hear with certain tummy problems. A few more questions: Have you been able to eat anything since it started? Any nausea or vomiting? Any fever or chills? And does the pain get worse when you move, cough or go over a bump in the car?
PT: No, just the usual. Mum's cooking on Sunday. Felt sick since the early hours and threw up once this morning. I felt hot and a bit shivery last night. Walking hurts, every bump in the car was awful, and coughing is the worst.
DR: I see. Some more important questions: Have you had any problems passing urine - burning, needing to go often, or blood in your wee? Any diarrhoea or loose motions, or any blood or slime in them? When was your last bowel motion? And any pain in your groin or testicles?
PT: Weeing is normal. No diarrhoea, I went normally yesterday morning, nothing since. No lumps down there. Nothing down there.
DR: Got it. A few background questions: Any previous episodes like this or any surgery on your tummy before? Any medical conditions or regular medicines? Does anyone at home or work have a similar bug? And do you smoke or drink much?
PT: No, never had anything like this before. Never had an operation, I've still got my appendix as far as I know. No medical conditions, just a few beers on the weekend, nothing this week. Everyone at home and work is fine. I don't smoke.
  Heart rate: 102, regular.
  Temperature: 37.9 °C.
  Blood pressure: 126/78.
  Respiratory rate: 16.
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Full blood examination (FBE): ordered; the result takes 1 day(s) and will not be back during this consult
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
  Referred: Phone the emergency department (clinical handover)
DR: Samuel, I've finished examining you and I have a good idea of what's going on. Your story - pain starting around the belly button and moving down to the lower right, feeling sick, throwing up, and now a low-grade temperature with tenderness and guarding in the right lower side of your tummy - is the classic pattern of an inflamed appendix, called appendicitis. Your urine test makes a urine infection or kidney stone very unlikely, and I checked your testes and hernia areas, which are normal. I've also sent off blood tests to measure your infection markers.

Here's the plan: this needs to be dealt with in hospital, not here. I've phoned the emergency department and given them a handover, so they'll be expecting you. Please have someone drive you there now - don't drive yourself. They will assess you again, likely repeat some bloods and imaging, and the usual treatment is an operation to remove the appendix (keyhole surgery in most cases), sometimes with antibiotics first. Most people your age recover quickly and are home within a couple of days.

Important safety advice: if the pain suddenly gets much worse or spreads across your whole belly, if you keep vomiting and can't keep fluids down, if you feel faint or drowsy, call 000 straight away - that can mean the appendix is leaking or has burst. Otherwise, don't eat or drink anything more for now (hospitals prefer an empty stomach before an operation), just take small sips of water if your mouth is dry. Avoid painkillers like ibuprofen or aspirin as they can upset the stomach; if you need something on the way, paracetamol is okay.

Do you have any questions about any of this?
PT: It's a lot at once. What do you want to know first?
DR: No problem, let's keep it simple. The main thing: your appendix looks inflamed and needs to come out at the hospital. The most important thing right now is getting you there safely. Do you have someone who can drive you to the emergency department now, or would you like me to call an ambulance for you?
PT: I'll get someone to drive me.
  Unknown diagnosis id(s): Acute appendicitis, Mesenteric adenitis / viral gastroenteritis, Appendiceal perforation with generalised peritonitis. Use search with kind "diagnoses".
  Diagnosis saved: most likely Appendicitis; differential Mesenteric adenitis; can't miss Perforated viscus with peritonitis.
DR: Great. One last summary before you go: your symptoms and my examination point to appendicitis. The hospital is expecting you, and you should head there straight away - don't stop for food on the way. Don't eat anything more from now, only small sips of water. If the pain suddenly gets much worse, spreads across your whole tummy, or you feel faint or keep vomiting, call 000 immediately. Take it easy, and I hope you're back on your feet soon. Thanks for coming in today.
PT: Thanks. I'll be okay.
END CONSULT

## Bill: 315/420 (Consultant), ideal (rescored)
- +20 Red flag: Where the pain started and whether it has moved
- +5 Unusual food or takeaway recently
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Pain or frequency passing urine
- +10 Diarrhoea
- +10 A lump or bulge in the groin
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Diabetes
- +5 Anyone around him with vomiting or diarrhoea
- +10 Heart rate
- +10 Temperature
- +5 Blood pressure
- +5 Respiratory rate
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Rovsing's sign
- +5 Cough test
- +10 Testes
- +5 Hernial orifices
- +10 Urine dipstick
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Mesenteric adenitis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "Your symptoms and my examination point to appendicitis.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat anything more from now, only small sips of water.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
