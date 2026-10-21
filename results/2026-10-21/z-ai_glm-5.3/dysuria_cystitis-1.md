# z-ai/glm-5.3: dysuria_cystitis #1

Patient: Chloe Nguyen, 22, F, Hospitality worker (café barista), studying part-time.
Booked for: Burning when passing urine (booked as urgent). Consult starts 10:15.
Booking note, in the patient's words: "Burning when I wee since yesterday. Pretty sure it's a UTI again. Need antibiotics please."
Clinic record:
  Allergies: nil known
  Conditions: none recorded
  Medications: Combined oral contraceptive pill (levonorgestrel/ethinylestradiol)
General appearance: Looks well. Not unwell or toxic.
DR: Hi Chloe, I'm Dr Patel. Sorry to hear about the burning when you wee. Before I examine you or prescribe anything, let me ask a few questions so we get it right.

1. Besides the burning, any other urinary symptoms — needing to wee more often or urgently, passing only small amounts, blood in the urine, or difficulty holding on?
2. Any pain in your lower tummy, back or loin (side of your back)?
3. Any fever, chills, or feeling generally unwell?
4. Any vaginal discharge, unusual smell, or pelvic/tummy pain with sex? Could this possibly be a sexually transmitted infection (any new partner, unprotected sex)?
5. How often do you get UTIs — when was your last one?
6. Are you pregnant or could you be? When was your last period?
PT: Sorry, that's a lot of questions at once. Could you ask me one thing at a time?
DR: Sure, my apologies! Let's take it slowly. Besides the burning, do you have any other urinary symptoms — needing to go more often or urgently, or blood in the urine?
PT: It is a bit cloudy and smells, but I haven't seen any blood.
DR: Are you needing to go more often or urgently than usual?
PT: I am going constantly, every half hour, and only a little bit comes out, so I really have to rush.
DR: That sounds miserable. Any fever, chills, or feeling generally unwell?
PT: No, I have no fevers or shivers and I feel fine apart from this. I am eating normally and haven't been sick.
DR: Any pain in your lower tummy, or in your back or side (near where your kidneys are)?
PT: No, nothing in my back, just a bit of an ache low down in my tummy right above my bladder.
DR: Could this be anything else for you — any new sexual partner recently, unprotected sex, or any vaginal discharge or irritation?
PT: It has been going on since yesterday morning, so about a day and a half. I have a boyfriend of about a year and it is just him, and we do not use condoms because I am on the pill. I have not noticed anything like vaginal discharge or irritation.
DR: When was your last period, and is there any chance you could be pregnant? Also, how often do you get UTIs — when was your last one?
PT: My last period was about two weeks ago and it was normal, and I don't think I could be pregnant. I had one UTI about two years ago, and that is it.
DR: Thanks, that's really helpful. Would you mind if I examine you — check your temperature and have a quick feel of your tummy? I'd also like a urine sample to confirm the infection before antibiotics. Is that okay?
PT: Do I really need a physical check and a sample? I am pretty sure it is just a UTI and I need to get back to work at the cafe.
DR: I understand you're busy, but it only takes a couple of minutes and it's important: a quick tummy check makes sure the infection hasn't spread to your kidneys, and a simple dipstick test of your urine confirms it really is a urine infection — the symptoms can occasionally be caused by other things like an STI, which needs different treatment. I'll have you back to work as quickly as possible, I promise. Is that okay?
PT: Fine, if it makes it faster.
  (list_exams vitals)
  (list_exams abdomen / feel)
  Temperature: 36.8 °C.
  Abdominal palpation: Soft. Mild suprapubic tenderness; non-tender elsewhere. No masses or organomegaly. [abnormal]
  (search tests "urine dipstick": 1 found)
  Urine dipstick: Leucocytes ++, nitrites positive, blood trace, protein trace. hCG not tested. [abnormal]
  (search drugs "trimethoprim": 2 found)
  Prescribed: Trimethoprim 300 mg tablets, 300 mg Once daily, 3 days
  Unknown diagnosis id(s): uncomplicated urinary tract infection (cystitis). Use search with kind "diagnoses".
  (search diagnoses "cystitis": 2 found)
  Diagnosis saved: most likely Acute uncomplicated cystitis; can't miss Pyelonephritis.
DR: Good news — the urine test confirms it is a urine infection, and the exam shows it hasn't spread to your kidneys. I've prescribed trimethoprim, one 300 mg tablet once a day for 3 days.

A few things:
- Take the tablets with or after food, with plenty of water.
- Drink lots of fluids generally, and it's fine to take paracetamol for the tummy ache.
- Your contraceptive pill isn't affected by this antibiotic, so keep taking it as normal.
- You should feel much better within 1–2 days, but finish all 3 days of tablets.

Safety net: if you get a fever, shivers, worsening back pain, vomiting, or you're not improving after 48 hours, come straight back — that could mean the infection has moved to your kidneys. Also see a doctor if symptoms return after finishing the course. Any questions before you head back to work?
PT: Oh good, at least I can get straight back to work now. Can I just grab that script from you?
DR: Yes — the script's all done and ready at the desk. Take care, and remember: fever, back pain, or no improvement in 48 hours means come straight back. Good luck at the café!
PT: Thanks, I will head out and grab it now.
END CONSULT

## Bill: 250/360 (Fellow), ideal
- +10 Colour of the urine or any visible blood
- +10 Red flag excluded: Fever, sweats, chills or shaking
- +10 Red flag excluded: Nausea, vomiting or feeling generally unwell
- +10 Red flag excluded: Abdominal pain beyond a low ache
- +10 Red flag excluded: Pain in the back or sides (loins)
- +10 How long the symptoms have been present
- +10 Sexual activity and partners
- +10 Condom use
- +10 Vaginal discharge, itch or irritation
- +10 When her last period was
- +10 Red flag excluded: Whether she could be pregnant
- +10 Previous urine infections
- +10 Temperature
- +10 Suprapubic palpation
- +10 Urine dipstick
- +15 First-line antibiotic: nitrofurantoin 100 mg 6-hourly for 5 days, fosfomycin 3 g once, or trimethoprim 300 mg daily for 3 days
- +20 Correct diagnosis: Acute uncomplicated cystitis
- +20 Can't-miss diagnosis considered: Pyelonephritis
- +15 Advise plenty of fluids (you said: "Drink lots of fluids generally")
- +15 Paracetamol for discomfort (you said: "it's fine to take paracetamol for the tummy ache.")
- +15 Safety-net — return if fever, loin pain, vomiting, or not improving within 48 hours (you said: "Safety net: if you get a fever, shivers, worsening back pain, vomiting, or you're not improving after 48 hours, come straight back")

Chloe texts the clinic two days later to say she's back to normal. No follow-up needed.
