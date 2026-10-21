# anthropic/claude-fable-5.1: abdo_pain_appendicitis #2

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm the doctor. I can see you're uncomfortable. Tell me about this tummy pain — when exactly did it start, where did it start, and where is it now?
PT: It started last night around ten o'clock, so about fourteen hours ago. It began near my belly button and then moved down to the right during the night. Now it's just staying right there all the time, whereas at first it sort of came and went.
DR: Thanks. A few more things: have you felt sick or vomited? Have you had any appetite? Does the pain get worse when you move, cough, or when the car went over bumps on the way here?
PT: I have felt sick since the early hours and threw up once this morning. I couldn't face breakfast and am not hungry at all, which isn't like me. Walking hurts, every bump in the car on the way here was awful, and coughing is the worst.
DR: Have you had any fevers or chills? Any diarrhoea or constipation? Any pain or burning when passing urine, blood in the urine, or going more often? Any pain or swelling in your testicles?
PT: I felt hot and a bit shivery last night. My bowels are normal, just went yesterday morning and nothing since. Weeing is completely normal, and there is nothing wrong down there.
DR: Have you had any pain like this before? Any previous operations on your tummy? Any other health problems, regular medicines, or allergies? Have you taken anything for the pain today? And when did you last eat or drink?
PT: I have never had anything like this before, and I've never had an operation, still got my appendix as far as I know. I don't have any health problems, regular medicines, or allergies. I took a couple of paracetamol at six this morning and it didn't do much. I haven't eaten or drunk anything unusual, just the usual, Mum's cooking on Sunday.
DR: When did you last have anything to eat or drink at all today? And has anyone around you been unwell with a stomach bug, or have you travelled recently?
PT: I haven't had anything today since I couldn't face breakfast, and nobody at home or work is sick, plus I haven't been anywhere.
  (list_exams vitals)
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Temperature: 37.9 °C.
  Respiratory rate: 16.
  (list_exams abdomen)
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Bowel sounds: Present, slightly reduced. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  Hernial orifices: No hernias.
  Renal angle tenderness: No renal angle tenderness.
  (search tests "urine dipstick": 1 found)
  Urine dipstick: Leucocytes trace, nitrites negative, blood trace, protein negative, ketones +. [abnormal]
  (search referrals "emergency": 5 found)
DR: Samuel, I'm fairly sure this isn't a stomach bug. The way the pain started around your belly button and moved to the lower right, together with the fever, loss of appetite, vomiting, and the tenderness I found in exactly that spot, all point to appendicitis — an inflamed appendix. This needs to be seen at the hospital today, most likely for an operation to remove it. If it's left, it can burst, which is much more serious. I'm going to phone the emergency department to let them know you're coming. Please don't eat or drink anything from now on in case you need surgery. Is there someone who can drive you to the hospital right now, or would you prefer I arrange an ambulance?
PT: Right, an operation. I can drive myself, I don't need an ambulance.
DR: I'd rather you didn't drive yourself — you're in a lot of pain, you've been vomiting, and if the pain spikes while you're driving it's not safe for you or anyone else. Can you call your mum, a mate, or a workmate to take you now? If no one is available within the next little while, I'll arrange an ambulance. Also, if at any point before you get there the pain suddenly gets much worse or spreads across your whole tummy, you become very pale, faint, or your fever climbs, call 000 straight away.
PT: Alright, I will get a mate to drive me. I haven't fainted or felt faint.
  Referred: Phone the emergency department (clinical handover)
  Referred: Emergency department (patient to self-present)
  (search diagnoses "appendicitis": 1 found)
  (search diagnoses "perforated": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Perforated viscus with peritonitis.
DR: Good. To sum up: I've phoned the emergency department so they're expecting you, and I'll give you a letter with my findings to take with you. Go straight there once your mate arrives — don't go home first. Nothing to eat or drink, including water, and don't take any more painkillers before you get there — the hospital will give you proper pain relief. If your mate can't get here within about 20 minutes, let reception know and we'll call an ambulance. Any questions before you go?
PT: No questions, I will head straight there.
END CONSULT

## Bill: 360/420 (Consultant), ideal
- +10 When the pain started
- +10 Whether the pain is constant or comes and goes
- +10 How bad the pain is
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +10 Appetite
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +20 Red flag: Fever, sweats or chills
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 Red flag excluded: Pain or swelling in the testicles
- +10 Whether he has had this pain before
- +10 Previous operations
- +5 Pain relief taken so far
- +5 Unusual food or takeaway recently
- +5 Anyone around him with vomiting or diarrhoea
- +5 Recent overseas travel
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
- +10 Urine dipstick
- +10 Red flag excluded: Fainting or light-headedness
- +5 Phone the emergency department with a handover
- +15 Refer to the emergency department today for surgical assessment
- +20 Correct diagnosis: Appendicitis
- +20 Can't-miss diagnosis considered: Perforated viscus with peritonitis
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "all point to appendicitis — an inflamed appendix")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Please don't eat or drink anything from now on in case you need surgery.")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
