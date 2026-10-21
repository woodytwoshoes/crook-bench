# z-ai/glm-5.3: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I'm sorry you're not feeling well. Tell me about this tummy pain — where did it start, and has it moved anywhere since?
PT: It started around my belly button and moved down to the right side, low down. It's been there all the time now, though it sort of came and went at first. It's a seven out of ten.
DR: That's very helpful. A few more questions: have you felt sick or actually vomited? Have you been able to eat or drink anything? Any fever, chills or sweating? And have your bowels moved normally — any diarrhoea or constipation?
PT: Felt sick since the early hours and threw up once this morning. Couldn't face breakfast, not hungry at all. Felt hot and a bit shivery last night. Went normally yesterday morning, nothing since.
DR: Thanks. A couple more things to rule out other causes: any pain or burning when you pass urine, or blood in your wee? Any pain in your groin or testicles? And have you had any cough, cold or chest troubles recently?
PT: No pain or burning when I wee, and weeing's normal. No lumps down there, and nothing in the testicles. No cough, cold or chest issues.
DR: Are you normally fit and well — any past operations, health conditions, or regular medicines? Has anyone around you been sick with vomiting or diarrhoea recently? And have you been somewhere the pain could be — any knocks or heavy lifting?
PT: I'm normally fit and well. Never had an operation, still got my appendix. Everyone at home and work is fine. No knocks or heavy lifting.
  Temperature: 37.9 °C.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Unknown exam "rovsiags_sign". Use list_exams or search.
  Bowel sounds: Present, slightly reduced. [abnormal]
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  Testes: Both testes normal lie, non-tender, no swelling.
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  Given in clinic: Paracetamol 500 mg tablets, 1 g (2 tablets) Stat dose
  Referred: Phone the emergency department (clinical handover)
DR: Samuel, I've examined your tummy and I'm fairly sure this isn't a stomach bug. Everything points to your appendix — the pain starting around your belly button and moving to the lower right side, the fever, feeling sick, and the way your tummy is tender and protective when I press there — is the classic picture of appendicitis, which is an inflamed or infected appendix. I've just spoken to the emergency department at the hospital and told them you're coming. I've given you paracetamol for the pain here. Here's what I need you to do:

1. Go straight to the emergency department now — please don't drive yourself; get someone to drive you or take a taxi. Take this letter with you.
2. Don't eat or drink anything from now on, in case they need to do an operation.
3. The hospital will do blood tests and a scan to confirm it. Most people with appendicitis need their appendix removed, and these days it's usually done with keyhole surgery, which is very safe and most people are home within a day or two.

If the pain suddenly gets much worse, you start vomiting more, the pain spreads across your whole tummy, or you feel faint or very unwell on the way, call 000 for an ambulance. Any questions?
PT: No, I haven't fainted or felt faint. I don't got any questions. I'll go to the hospital.
  Unknown diagnosis id(s): acute_appendicitis, acute_gastroenteritis, perforated_appendicitis_with_peritonitis. Use search with kind "diagnoses".
  Diagnosis saved: most likely Appendicitis; differential Gastroenteritis; can't miss Perforated viscus with peritonitis.
END CONSULT

## Bill: 340/420 (Consultant), acceptable (rescored)
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 A lump or bulge in the groin
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Previous operations
- +5 Anyone around him with vomiting or diarrhoea
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +10 Abdominal palpation
- +5 Rebound tenderness
- +5 Cough test
- +5 Hernial orifices
- +5 Renal angle tenderness
- +10 Testes
- +5 Rovsing's sign
- +10 Urine dipstick
- +15 Pain relief before transfer
- +15 Refer to the emergency department today for surgical assessment
- +5 Phone the emergency department with a handover
- +10 Red flag excluded: Fainting or light-headedness
- +20 Correct diagnosis: Appendicitis
- +5 Reasonable differential: Gastroenteritis
- +5 Reasonable differential: Perforated viscus with peritonitis
- +10 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely and why he needs to go to hospital today (you said: "I'm fairly sure this isn't a stomach bug. Everything points to your appendix — the pain starting around your belly button and moving to the lower right side, the fever, feeling sick, and the way your tummy is tender and protective when I press there — is the classic picture of appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat or drink anything from now on, in case they need to do an operation.")

Samuel gets to hospital and has his appendix out.
