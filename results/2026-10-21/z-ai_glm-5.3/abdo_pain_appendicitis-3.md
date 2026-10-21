# z-ai/glm-5.3: abdo_pain_appendicitis #3

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm sorry you're not feeling well. Can you tell me where exactly the pain is in your tummy, and has it moved anywhere since it started?
PT: Down here on the right side, low down. It started around my belly button and moved down overnight.
DR: That's helpful, thanks. A few more questions: how bad is the pain out of 10, is it constant or coming in waves, does anything make it better or worse (like coughing or moving)? Any vomiting, fever, loss of appetite, or trouble passing urine or bowel motions? Any diarrhea or blood? And is there any chance a partner could be pregnant, or any sharp pain at the top of your scrotum?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Sorry about that! Let's take it one at a time. How bad is the pain out of 10, and is it constant or does it come in waves?
PT: Maybe a seven out of ten, and I'm not one to complain. It's there all the time now, though at first it sort of came and went.
DR: That sounds rough. Have you felt feverish or hot and cold?
PT: I felt hot and a bit shivery last night.
DR: Have you been vomiting, or felt sick in your stomach? And have you felt like eating at all today?
PT: I've felt sick since the early hours and threw up once this morning. I couldn't face breakfast either, and I'm not hungry at all, which isn't like me.
DR: Any diarrhoea, or trouble passing urine? Any blood in your poo or when you pee?
PT: No diarrhoea, I went normally yesterday morning, nothing since. Weeing is normal, and no blood.
DR: When you move or cough, does the pain get sharper? And is the tummy tender if you press on that right lower spot?
PT: Yeah, walking hurts. Every bump in the car on the way here was awful, and coughing is the worst.
DR: Thanks, that's very helpful. Let me examine your tummy and check you over now. I'd also like to check your temperature and pulse. Is that okay?
PT: Yeah, alright.
  (list_exams abdomen)
  (list_exams vitals)
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Abdomen: Flat. No scars. Moves little with breathing. [abnormal]
  Temperature: 37.9 °C.
  Heart rate: 102, regular.
  Blood pressure: 126/78.
  Rebound tenderness: Right lower quadrant: Rebound tenderness present; he winces sharply. Elsewhere: no rebound tenderness. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  Testes: Both testes normal lie, non-tender, no swelling.
  (search referrals "emergency": 5 found)
  (search diagnoses "appendicitis": 1 found)
  (search referrals "surgical": no matches)
  Diagnosis saved: most likely Appendicitis; can't miss Nothing to exclude.
DR: Samuel, I'm concerned this is appendicitis — your appendix looks inflamed. That means it needs to come out with an operation, and it's not something I can treat here. I'll phone the hospital emergency department now so they're expecting you, and I'd like you to go straight there — get someone to drive you, don't drive yourself. Don't eat or drink anything from now, in case you need surgery tonight. If the pain suddenly gets much worse, spreads across your whole belly, or you feel faint, call an ambulance. At the hospital they'll do blood tests and a scan to confirm, and a surgeon will see you. This is very treatable, and most people recover fully within a couple of weeks. Any questions before I make the call?
PT: Do I really have to go straight there? I've got work tomorrow.
DR: I'm afraid yes — this really can't wait. If an inflamed appendix bursts, it can make you seriously ill with infection through the whole belly, and that means a much longer hospital stay and recovery. Going tonight gives you the best chance of a quick, straightforward operation and a faster return to work. I'll phone the emergency department now and let them know you're coming. Please go straight there, don't eat or drink anything, and come back or call if anything changes on the way.
PT: Alright then. I will get my partner to drive me now.
  Referred: Phone the emergency department (clinical handover)
DR: Done — the emergency department is expecting you, Samuel. To recap: your partner drives you there now, nothing to eat or drink, and if the pain suddenly worsens or you feel faint, call 000. Take care, and I hope you're back on your feet soon.
PT: Thanks, doc.
END CONSULT

## Bill: 195/420 (Registrar), missed_red_flag
- +20 Red flag: Where the pain started and whether it has moved
- +10 How bad the pain is
- +10 Whether the pain is constant or comes and goes
- +20 Red flag: Fever, sweats or chills
- +10 Nausea or vomiting
- +10 Appetite
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +5 Blood in the stools
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Abdominal palpation
- +10 Temperature
- +10 Heart rate
- +5 Blood pressure
- +5 Rebound tenderness
- +5 Rovsing's sign
- +10 Testes
- +20 Correct diagnosis: Appendicitis
- -10 Something can't be excluded here: the can't-miss slot needs it. Can't miss here: Testicular torsion, Perforated viscus with peritonitis, Strangulated or incarcerated hernia
- +5 Phone the emergency department with a handover
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "Samuel, I'm concerned this is appendicitis — your appendix looks inflamed.")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat or drink anything from now, in case you need surgery tonight.")
- -30 Not done: Refer to the emergency department today for surgical assessment

Without the story of the pain moving, the fever and the order of symptoms, the picture looked like a stomach bug. Samuel re-presents with a perforated appendix.
