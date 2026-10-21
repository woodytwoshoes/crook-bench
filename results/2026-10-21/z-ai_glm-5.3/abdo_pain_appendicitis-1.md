# z-ai/glm-5.3: abdo_pain_appendicitis #1

Patient: Samuel Okafor, 24, M, Apprentice electrician.
Booked for: Tummy pain. Consult starts 11:40.
Booking note, in the patient's words: "Tummy pain since last night. Probably a stomach bug, but it's not going away."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and uncomfortable. Lies very still on the couch and walks in slightly stooped.
DR: Hi Samuel, I'm Dr. Chen. I hear you've had tummy pain since last night. Can you tell me where exactly the pain is, and has it moved at all since it started?
PT: It started around my belly button. It moved down to the right sometime overnight.
DR: Thanks. That movement from around the belly button to the lower right is a pattern I want to take seriously. A few more questions: have you felt sick or vomited? Any fever or chills? When did you last eat, and how's your appetite been?
PT: Felt sick since the early hours and I threw up once this morning. I felt hot and a bit shivery last night. Just the usual, Mum's cooking on Sunday. I couldn't face breakfast, not hungry at all, which isn't like me.
DR: And a few more: has the pain changed if you cough, sneeze or move? Have your bowels been opened since the pain started? Any pain when passing urine? And any pain like this before?
PT: Yeah, walking hurts, every bump in the car on the way here was awful, and coughing is the worst. No diarrhoea, I went normally yesterday morning, nothing since. Weeing is normal. No, never had anything like this.
  (list_exams abdomen)
  (list_exams vitals)
  Heart rate: 102, regular.
  Temperature: 37.9 °C.
  Blood pressure: 126/78.
  Abdominal palpation: Right lower quadrant: Marked tenderness, maximal at McBurney's point, with voluntary guarding. Central (periumbilical): Mild tenderness only. Elsewhere: soft and non-tender. [abnormal]
  Cough test: Coughing causes sharp pain in the right lower quadrant; he holds his side. [abnormal]
  Rovsing's sign: Positive. Pressure in the left lower quadrant causes pain in the right lower quadrant. [abnormal]
  (search referrals "emergency": 5 found)
  (search diagnoses "appendicitis": 1 found)
  Diagnosis saved: most likely Appendicitis; can't miss Appendicitis.
  Referred: Emergency department (patient to self-present)
DR: Samuel, your story and my examination strongly suggest this is appendicitis — inflammation of your appendix, likely from the infection starting overnight. Your pulse and temperature are up, and the tenderness in your right lower side fits. This needs to be seen in hospital urgently: they will do blood tests and a scan (probably a CT or ultrasound) and will most likely remove the appendix with keyhole surgery.

Please go straight to the emergency department now — don't drive yourself, get someone to take you or call a taxi. Don't eat or drink anything from now on, in case you need an operation. If your pain suddenly gets much worse, you feel faint, or you start vomiting constantly, call 000. This is very fixable if treated early, which is why we're not waiting. Any questions?
PT: I just wanted a quick fix so I could get back to the job site. Do I really have to go straight to the hospital now?
DR: I'm afraid yes, it really does have to be now. There's no safe quick fix for appendicitis — if the appendix isn't removed in time it can burst and cause a serious infection through your whole abdomen. Going today is the difference between keyhole surgery and being back at work in a week or two, versus emergency surgery and weeks in hospital. Please head to the emergency department right away, and don't eat or drink until they've seen you. If you get suddenly worse on the way, call 000.
PT: Alright, I will head over there now.
END CONSULT

## Bill: 215/420 (Registrar), ideal
- +20 Red flag: Where the pain started and whether it has moved
- +10 Nausea or vomiting
- +20 Red flag: Fever, sweats or chills
- +5 Unusual food or takeaway recently
- +10 Appetite
- +20 Red flag: Whether moving, walking or coughing makes it worse
- +10 Diarrhoea
- +10 Pain or frequency passing urine
- +10 Whether he has had this pain before
- +10 Heart rate
- +10 Temperature
- +5 Blood pressure
- +10 Abdominal palpation
- +5 Cough test
- +5 Rovsing's sign
- +20 Correct diagnosis: Appendicitis
- -10 Can't-miss slot repeats the most likely diagnosis: Appendicitis. Can't miss here: Testicular torsion, Perforated viscus with peritonitis, Strangulated or incarcerated hernia
- +15 Refer to the emergency department today for surgical assessment
- +15 Explain that appendicitis is likely (e.g. "I think this is your appendix", "it looks like appendicitis") (you said: "Samuel, your story and my examination strongly suggest this is appendicitis")
- +15 Advise nothing to eat or drink until the surgical team has seen him (e.g. "don't eat or drink anything", "nil by mouth") (you said: "Don't eat or drink anything from now on")

Samuel is seen by the surgical team that afternoon and has a laparoscopic appendicectomy the same evening. The appendix was inflamed but intact. He goes home two days later.
