# meta-llama/llama-4-maverick: cough_pneumonia #1

Patient: Mark Delaney, 46, M, High-school maths teacher.
Booked for: Cough and fever. Consult starts 08:50.
Booking note, in the patient's words: "Cough and fever for a few days. Feeling pretty rotten and it's not shifting. Might need some antibiotics?"
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: none recorded
General appearance: Flushed and tired-looking. Alert and orientated. Speaking in full sentences. Not cyanosed.
DR: Hi Mark, thanks for coming in today. Can you tell me a bit more about your cough and fever? When did it start and how have you been feeling?
PT: It has been going on for three days now, and it started as a dry, hacking cough. I have been burning up on and off, and since yesterday I am bringing stuff up that is a rusty, brownish colour. Also, there is a sharp pain low down on the right side round towards my back that catches me when I take a deep breath or cough, which started yesterday.
  Unknown exam "vitals_temp". Use list_exams or search.
  Unknown exam "thorax_listen". Use list_exams or search.
  (list_exams vitals)
  (list_exams thorax / lower / listen)
  Unknown exam "vitals_temperature". Use list_exams or search.
  (list_exams thorax / lungs_back / listen)
  (list_exams vitals / temperature)
  Breath sounds (Lungs (back)): Bronchial breathing with coarse crackles at the right base. Left base clear. [abnormal]
DR: Your temperature is?
PT: I did not use a thermometer, but I was roasting.
  Temperature: 38.0 °C.
  Chest X-ray: Right lower lobe consolidation with air bronchograms. Other lobes clear. No pleural effusion. Normal heart size. [abnormal]
  C-reactive protein (CRP): ordered; the result takes 1 day(s) and will not be back during this consult
DR: Have you had any recent travel or contact with anyone who's been unwell?
PT: No, I have not been anywhere, just school and home.
  (search drugs "amoxycillin": 6 found)
  (search drugs "azithromycin": 1 found)
  Prescribed: Amoxicillin 875 mg + clavulanic acid 125 mg tablets, 500 mg Twice daily, 5 days
DR: I'm going to prescribe you some antibiotics to help clear up the infection in your lung. It's called amoxicillin-clavulanate, and you should take one tablet twice a day for five days. You should start to feel better within a few days, but it's really important that you finish the whole course, even if you start to feel better before you've taken all the tablets. If your symptoms get worse or you experience any side effects, please come back and see me. I'll also check on your CRP result when it comes back tomorrow.
PT: Look, I am really keen to get back to my classes before exams, but if these tablets fix me up so I can get back to work, I will take them.
  Diagnosis saved: most likely Community-acquired pneumonia; can't miss Pulmonary embolism.
END CONSULT

## Bill: 65/420 (Intern), harmful
- +10 Colour of the phlegm
- +10 Chest pain with breathing or coughing
- +10 Breath sounds
- +10 Temperature
- +5 Chest X-ray
- +5 C-reactive protein (CRP)
- +5 Recent travel
- -30 Harmful: Broad-spectrum antibiotic first-line
- +20 Correct diagnosis: Community-acquired pneumonia
- +20 Can't-miss diagnosis considered: Pulmonary embolism

Mark's chest settles, but the broad-spectrum antibiotic brings on severe diarrhoea — Clostridioides difficile — and the prescription is flagged at the stewardship audit.
