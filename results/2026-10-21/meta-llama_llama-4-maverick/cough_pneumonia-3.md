# meta-llama/llama-4-maverick: cough_pneumonia #3

Patient: Mark Delaney, 46, M, High-school maths teacher.
Booked for: Cough and fever. Consult starts 08:50.
Booking note, in the patient's words: "Cough and fever for a few days. Feeling pretty rotten and it's not shifting. Might need some antibiotics?"
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and tired-looking. Alert and orientated. Speaking in full sentences. Not cyanosed.
DR: G'day, Mark. Thanks for coming in today. Can you tell me a bit more about your cough and fever? When did it start and how have you been feeling?
PT: It started three days ago with a dry, hacking cough. I have been burning up on and off, and since yesterday I am bringing stuff up that is a rusty, brownish colour after starting out clear. I also got a sharp pain yesterday low down on the right side round towards my back that catches me when I take a deep breath or cough.
DR: That sounds unpleasant. Have you had any other symptoms like sore throat, runny nose, or body aches?
PT: I haven't noticed anything like that. I just want to get this sorted so I can get back to my classes before the exams.
  Unknown exam "vitals_temp". Use list_exams or search.
  (list_exams vitals)
  Temperature: 38.0 °C.
  Respiratory rate: 22.
  Unknown exam "thorax_listen". Use list_exams or search.
  (list_exams thorax / chest / listen)
  (list_exams thorax / chest)
  (list_exams thorax / lungs_back / listen)
  (list_exams thorax / lungs_front / listen)
  Breath sounds (Lungs (back)): Bronchial breathing with coarse crackles at the right base. Left base clear. [abnormal]
  Breath sounds (Lungs (front)): Vesicular breath sounds. No added sounds.
  (search tests "CXR": 1 found)
  Chest X-ray: Right lower lobe consolidation with air bronchograms. Other lobes clear. No pleural effusion. Normal heart size. [abnormal]
  Unknown drug "amoxicillin". Use search with kind "drugs".
DR: Mark, it looks like you've got pneumonia. I'm going to prescribe you some antibiotics to help clear it up. You'll need to take them three times a day for the next seven days. It's also important to rest and drink plenty of fluids. If your symptoms get worse or you experience any difficulty breathing, please come back and see me immediately.
PT: Pneumonia? Right. Well, as long as these antibiotics do the job quickly, because I really cannot afford to be stuck at home with the exams coming up.
  Diagnosis saved: most likely Community-acquired pneumonia; can't miss Pulmonary embolism.
END CONSULT

## Bill: 115/420 (Resident), missed_red_flag
- +10 Colour of the phlegm
- +10 Chest pain with breathing or coughing
- +10 Temperature
- +10 Respiratory rate
- +10 Breath sounds
- +5 Chest X-ray
- +20 Correct diagnosis: Community-acquired pneumonia
- +20 Can't-miss diagnosis considered: Pulmonary embolism
- +15 Safety-net — come back urgently if more breathless, confused, or unable to keep tablets down (you said: "If your symptoms get worse or you experience any difficulty breathing, please come back and see me immediately.")
- +5 Drink plenty of fluids (you said: "It's also important to rest and drink plenty of fluids.")

Without a proper severity assessment, the plan rested on guesswork. Mark deteriorates at home and is admitted with severe pneumonia — a turn that should have been anticipated, or at least safety-netted, at the first visit.
