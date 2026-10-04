# crook-bench

How do AI models do as the doctor in a GP consultation game?

*Crook* is a game in which you are a general practitioner (family doctor) in
Australia: you talk to a patient in your own words, examine them, order
tests, prescribe or refer, and commit to a diagnosis. This repository lets a
language model sit in the doctor's chair and play the same consultations a
human player does, scored by the game's own code.

This is a benchmark of a game, not of medical competence. A score here says
how a model plays *Crook*'s cases under *Crook*'s marking. It says nothing
about whether a model can or should practise medicine.

## Results

The first full run (13 models) is in progress; the leaderboard and transcripts will be added here.

## Method

**The doctor** is the model under test. It acts only through tools: `say`
(talk to the patient), `list_exams` and `search` (find exams, tests, drugs,
referrals and diagnoses), `examine`, `order_test`, `prescribe`, `refer`,
`diagnose` (most likely, a differential, and a can't-miss diagnosis) and
`end_consult`. It sees what a player sees: the patient's name, age and
booking, the clinic record, its own findings and results. It never sees the
case file or the points.

**The patient** is the game's own patient model, Qwen3 8B, on the game's
server, the same one human players talk to. It plays a person from a
private chart and does not know its diagnosis. A separate classifier call
(same model) decides which history items each question asked about, and only
those facts are released to the patient. A question it misses gets a denial,
as it would for a human player.

**The score** is decided by code against a hand-written key, exactly as for
a human player: red flags asked about, key history, indicated exams and
tests, a safe plan, and a defensible diagnosis. Process, not outcome: the
question is whether the consultation was safe and well targeted given what
the doctor had found when they committed. Unnecessary tests cost points
(more for each further one); harmful actions cost a lot. Spoken advice and
the plan are judged at the end from the doctor's own words, by the patient
model quoting what was said, with code checking the quote was really said.

**The time budget** is 50 questions per consultation. Each question counts,
including several in one message. Explanations, the plan and safety-netting
are free, as are examining, tests, prescribing, referring and diagnosing.
Asking questions is never penalised in itself: the budget only stops a model
from asking everything.

**Efficiency columns.** *Questions asked* is the mean per consultation.
*Red flags per 10 questions* is red flags elicited ÷ questions asked × 10,
averaged over consultations that asked any.

**Runs.** Five cases (the game's free cases), three consultations each per
model, through OpenRouter with each provider's default settings. Llama 4
Maverick wrote its tool calls as plain text under `tool_choice: "auto"`, so
it ran with `tool_choice: "required"`; every other model ran with `auto`.

## Caveats

- **All cases are drafts** (`status: draft`), written with AI help from
  standard references and still under review by the game's author, a GP
  registrar. Management follows Australian practice (eTG, PBS), which may
  differ from where you are.
- **The patient and the marker are an 8B model.** It misses some questions
  (the classifier's held-out recall is about 90%) and the end-of-consult
  judge sometimes credits or misses a spoken item. Every model faces the same
  patient, but the noise is real: see known issues.
- **Three runs per case is a small sample.** The ± column is the standard
  deviation across a model's consultations.
- The developer wrote the cases, so no human baseline is given.

## Known issues

To be listed with the results.

## Running it

```sh
npm ci
export OPENROUTER_API_KEY=...            # the doctor models
export PATIENT_URL=http://localhost:1234/v1   # any OpenAI-compatible server running qwen/qwen3-8b
npm run bench -- run <openrouter-model-id> --cases free --reps 3
npm run bench -- report                  # writes bench-results/LEADERBOARD.md
```

Options: `--questions 50` (the budget), `--concurrency 2`, `--out
bench-results`. `DOCTOR_URL` and `DOCTOR_KEY` point at any other
OpenAI-compatible API; `DOCTOR_EXTRA` merges JSON into each request (e.g.
`{"tool_choice":"required"}`). Tests: `npx vitest run`.

## Licence and contact

The code (`packages/`) is MIT. The case files and catalogue are all rights reserved, published so results can be checked and reproduced: see `cases/LICENSE`.

The game: https://doctorfoo.ai
