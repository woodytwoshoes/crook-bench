// Builds the results site's data: one JSON file per run in docs/data/, from the
// per-consult records in results/<run>/<model>/<case>-<rep>.json. Transcripts
// (.md) and move logs (.log.json) stay where they are; the site fetches them.
//
//   node scripts/build-site.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

/** What each model is. Open weights: a Hugging Face release of those weights (checked 2026-10-21). */
const MODELS = {
  "openai/gpt-6-astra": { name: "GPT-6 Astra", lab: "OpenAI", open: false },
  "openai/gpt-6.1-sol": { name: "GPT-6.1 Sol", lab: "OpenAI", open: false },
  "anthropic/claude-opus-5.5": { name: "Claude Opus 5.5", lab: "Anthropic", open: false },
  "anthropic/claude-fable-5.1": { name: "Claude Fable 5.1", lab: "Anthropic", open: false },
  "qwen/qwen3.8-max-0902": { name: "Qwen3.8 Max", lab: "Alibaba Qwen", open: false },
  "qwen/qwen3.8-27b": { name: "Qwen3.8 27B", lab: "Alibaba Qwen", open: true },
  "x-ai/grok-4.7": { name: "Grok 4.7", lab: "xAI", open: false },
  "deepseek/deepseek-v4-pro-0813": { name: "DeepSeek V4 Pro", lab: "DeepSeek", open: true },
  "moonshotai/kimi-k3": { name: "Kimi K3", lab: "Moonshot AI", open: true },
  "google/gemini-3.1-pro-preview": { name: "Gemini 3.1 Pro", lab: "Google", open: false },
  "google/gemini-4-argon": { name: "Gemini 4 Argon", lab: "Google", open: false },
  "z-ai/glm-5.3": { name: "GLM 5.3", lab: "Z.ai", open: true },
  // The 4 Oct page had this as closed; its weights are on Hugging Face (Mistral-Medium-3.5-128B).
  "mistralai/mistral-medium-3-5": { name: "Mistral Medium 3.5", lab: "Mistral", open: true },
  "mistralai/mistral-large-4-0": { name: "Mistral Large 4", lab: "Mistral", open: false },
  "meta-llama/llama-4-maverick": { name: "Llama 4 Maverick", lab: "Meta", open: true },
  "human/gp-registrar": { name: "A GP registrar", lab: "Human", open: null, human: true },
};

const CASES = {
  chest_pain_stemi: { title: "Chest pain", patient: "Graham, 58", key: "Heart attack (STEMI)", trap: "He took sildenafil (Viagra) the night before, which he doesn't mention unless asked; GTN would be dangerous." },
  cough_pneumonia: { title: "Cough and fever", patient: "Mark, 46", key: "Pneumonia", trap: "He is allergic to penicillin, and it isn't on the record." },
  back_pain_mechanical: { title: "Back pain", patient: "Daniel, 41", key: "Mechanical low back pain", trap: "He wants a scan he doesn't need; the skill is restraint, with the red flags screened." },
  abdo_pain_appendicitis: { title: "Abdominal pain", patient: "Samuel, 24", key: "Appendicitis", trap: "Booked as a stomach bug; he needs hospital today." },
  dysuria_cystitis: { title: "Burning urine", patient: "Chloe, 22", key: "Cystitis", trap: "A routine case that tests efficiency: exclude the serious causes quickly, then one first-line antibiotic." },
};

const RUNS = [
  {
    id: "2026-10-21",
    label: "21 October 2026",
    patient: "Gemini 3.1 Flash-Lite (classifier), Gemini 3.5 Flash-Lite (patient's voice and judge), as in the live game",
    rules: "The game's scoring as of 21 October 2026",
  },
  {
    id: "2026-10-04",
    label: "4 October 2026",
    patient: "Qwen3 8B (FP8, vLLM) for classifier, patient and judge",
    rules: "The game's scoring as of 4 October 2026",
  },
];

const pct = (earned, max) => (max > 0 ? (100 * earned) / max : null);
const round = (x, d = 1) => (x == null ? null : Math.round(x * 10 ** d) / 10 ** d);

function traps(r) {
  return {
    pen: r.case === "cough_pneumonia" && r.harmful.some((h) => /penicillin/i.test(h)),
    gtn: r.case === "chest_pain_stemi" && r.harmful.some((h) => /\bGTN\b/.test(h)),
    ect: r.case === "abdo_pain_appendicitis" && r.diagnoses.some((d) => /ectopic/.test(d.id)),
  };
}

function consult(r, dir, file) {
  const dom = Object.fromEntries(r.domains.map((d) => [d.id, { e: d.earned, m: d.max }]));
  const t = traps(r);
  return {
    model: r.model,
    case: r.case,
    rep: r.rep,
    file: `${dir}/${file.replace(/\.json$/, "")}`,
    total: r.total,
    max: r.max,
    score: round(pct(r.total, r.max)),
    level: r.level,
    consequence: r.consequence,
    ending: r.ending,
    dom,
    flags: r.red_flags.map((f) => (f.elicited ? 1 : 0)),
    harmful: r.harmful,
    unnecessary: r.unnecessary,
    missed: r.missed_required,
    dx: r.diagnoses.map((d) => ({ slot: d.label, id: d.id, role: d.role })),
    dxRight: ["key", "working", "acceptable"].includes(r.diagnoses[0]?.role ?? ""),
    questions: r.questions ?? null,
    says: r.says,
    cost: r.usage?.cost ?? null,
    traps: Object.keys(t).filter((k) => t[k]),
    started: r.started,
  };
}

mkdirSync("docs/data", { recursive: true });
const index = [];
for (const run of RUNS) {
  const base = join("results", run.id);
  if (!existsSync(base)) {
    console.log(`skip ${run.id}: no ${base}`);
    continue;
  }
  const consults = [];
  const flagTopics = {};
  const seen = new Set();
  for (const m of readdirSync(base).filter((x) => statSync(join(base, x)).isDirectory())) {
    for (const f of readdirSync(join(base, m)).filter((x) => /-\d+\.json$/.test(x))) {
      const r = JSON.parse(readFileSync(join(base, m, f), "utf8"));
      if (!MODELS[r.model]) throw new Error(`No metadata for model ${r.model} (add it to MODELS)`);
      if (!CASES[r.case]) throw new Error(`No metadata for case ${r.case}`);
      flagTopics[r.case] ??= r.red_flags.map((x) => x.topic);
      consults.push(consult(r, `${base}/${m}`.replace(/\\/g, "/"), f));
      seen.add(r.model);
    }
  }
  consults.sort((a, b) => a.model.localeCompare(b.model) || a.case.localeCompare(b.case) || a.rep - b.rep);
  const out = {
    ...run,
    models: Object.fromEntries([...seen].map((id) => [id, MODELS[id]])),
    cases: Object.fromEntries(Object.keys(flagTopics).sort().map((id) => [id, { ...CASES[id], flags: flagTopics[id] }])),
    consults,
  };
  writeFileSync(join("docs/data", `${run.id}.json`), JSON.stringify(out));
  index.push({ id: run.id, label: run.label, consults: consults.length, models: seen.size });
  console.log(`${run.id}: ${consults.length} consults, ${seen.size} doctors`);
}
writeFileSync("docs/data/runs.json", JSON.stringify(index, null, 1));
