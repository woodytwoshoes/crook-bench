// The benchmark: a model under test plays the GP in each case, blind to the
// points, against the game's own patient model; code scores every consult
// exactly as it scores a human player.
//
// Usage (from the repo root):
//   node packages/core/scripts/bench.ts run <model> [--cases free|all|id,id] [--reps 3] [--questions 50] [--concurrency 2] [--out bench-results]
//   (--questions: how many questions the doctor may ask, the consult's time budget)
//   node packages/core/scripts/bench.ts report [--out bench-results]
//   node packages/core/scripts/bench.ts rescore [--write] [--out bench-results]
//   (rescores finished consults from their logs against the current case files, no model calls)
//
// Env:
//   DOCTOR_URL   the model under test's OpenAI-compatible API (default https://openrouter.ai/api/v1)
//   DOCTOR_KEY   its API key (or OPENROUTER_API_KEY)
//   DOCTOR_EXTRA JSON merged into each request body, e.g. '{"reasoning":{"effort":"medium"}}'
//   PATIENT_URL  the patient model's API (default http://localhost:1234/v1)
//   PATIENT_MODEL (default qwen/qwen3-8b), PATIENT_KEY (optional)
import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
  parseCase,
  parseCatalogue,
  parseDiagnoses,
  parseFormulary,
  parseReferrals,
  type ChatMessage,
  type FinalScore,
} from "../src/index.ts";
import { Consult, signed, type Library, type LogEntry, type PatientChat } from "./bench/engine.ts";
import { DEFAULT_LIMITS, playConsult, questionsIn, type RunLimits, type Usage } from "./bench/doctor.ts";

/** The free five: the cases the public build ships, open to everyone. */
export const FREE_CASES = [
  "abdo_pain_appendicitis",
  "back_pain_mechanical",
  "chest_pain_stemi",
  "cough_pneumonia",
  "dysuria_cystitis",
];

const root = new URL("../../../", import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), "utf8");

function library(): Library {
  return {
    catalogue: parseCatalogue(read("catalogue/examinations.yaml"), read("catalogue/investigations.yaml"), read("catalogue/safety.yaml")),
    formulary: parseFormulary(read("catalogue/formulary.yaml")),
    referrals: parseReferrals(read("catalogue/referrals.yaml")),
    diagnoses: parseDiagnoses(read("catalogue/diagnoses.yaml")),
  };
}

const PATIENT_URL = process.env.PATIENT_URL ?? "http://localhost:1234/v1";
const PATIENT_MODEL = process.env.PATIENT_MODEL ?? "qwen/qwen3-8b";

/** The patient model: the same request as the web client and play.ts. */
const patientChat: PatientChat = async (messages, opts) => {
  const last = messages.findLastIndex((m) => m.role === "user");
  const sent: ChatMessage[] = /qwen3/i.test(PATIENT_MODEL)
    ? messages.map((m, i) => (i === last ? { ...m, content: `${m.content} /no_think` } : m))
    : messages;
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${PATIENT_URL}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(process.env.PATIENT_KEY && { Authorization: `Bearer ${process.env.PATIENT_KEY}` }) },
      body: JSON.stringify({
        model: PATIENT_MODEL,
        messages: sent,
        temperature: opts.temperature ?? 0.7,
        max_tokens: opts.maxTokens ?? 200,
        ...(opts.seed !== undefined && { seed: opts.seed }),
        ...(opts.schema && {
          response_format: { type: "json_schema", json_schema: { name: opts.schema.name, strict: true, schema: opts.schema.schema } },
        }),
      }),
    });
    if (res.ok) {
      const body = (await res.json()) as { choices: { message: { content: string } }[] };
      return body.choices[0]?.message.content ?? "";
    }
    if ((res.status !== 429 && res.status < 500) || attempt >= 5) throw new Error(`Patient model HTTP ${res.status}: ${await res.text()}`);
    await new Promise((r) => setTimeout(r, 2000 * 2 ** attempt));
  }
};

function flag(args: string[], name: string, fallback: string): string {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1]! : fallback;
}

const slug = (model: string) => model.replace(/[^a-zA-Z0-9.-]+/g, "_");

/** The record of one consult, written as JSON beside its transcript. */
export type RunRecord = {
  model: string;
  case: string;
  rep: number;
  ending: string;
  total: number;
  max: number;
  level: string;
  consequence: string;
  domains: { id: string; name: string; earned: number; max: number }[];
  red_flags: { topic: string; elicited: boolean }[];
  harmful: string[];
  unnecessary: string[];
  missed_required: string[];
  diagnoses: { label: string; id: string; role: string | null }[];
  says: number;
  /** Questions asked (questionsIn over every say), the efficiency columns' base. */
  questions: number;
  max_questions?: number;
  usage: Usage;
  patient_model: string;
  started: string;
  error?: string;
};

export function summarise(model: string, caseId: string, rep: number, ending: string, f: FinalScore, says: number, questions: number, usage: Usage, started: string): RunRecord {
  return {
    model,
    case: caseId,
    rep,
    ending,
    total: f.total,
    max: f.max,
    level: f.level.name,
    consequence: f.consequence,
    domains: f.domains,
    red_flags: f.redFlags.map((r) => ({ topic: r.topic, elicited: r.elicited })),
    harmful: f.harmfulItems,
    unnecessary: f.unnecessaryItems,
    missed_required: f.missedRequired,
    diagnoses: f.diagnoses.map((d) => ({ label: d.label, id: d.id, role: d.role })),
    says,
    questions,
    usage,
    patient_model: PATIENT_MODEL,
    started,
  };
}

async function runOne(model: string, caseId: string, rep: number, outDir: string, lib: Library, limits: RunLimits) {
  const dir = join(outDir, slug(model));
  mkdirSync(dir, { recursive: true });
  const base = join(dir, `${caseId}-${rep}`);
  if (existsSync(`${base}.json`)) {
    console.log(`skip ${model} ${caseId} #${rep} (done)`);
    return;
  }
  const c = parseCase(read(`cases/${caseId}.yaml`));
  const consult = new Consult(c, lib, patientChat);
  const usage: Usage = { calls: 0, prompt_tokens: 0, completion_tokens: 0, cost: 0 };
  const lines: string[] = [`# ${model}: ${caseId} #${rep}`, ""];
  const started = new Date().toISOString();
  const api = {
    url: process.env.DOCTOR_URL ?? "https://openrouter.ai/api/v1",
    key: process.env.DOCTOR_KEY ?? process.env.OPENROUTER_API_KEY,
    model,
    extra: process.env.DOCTOR_EXTRA ? (JSON.parse(process.env.DOCTOR_EXTRA) as Record<string, unknown>) : undefined,
  };
  try {
    const { ending } = await playConsult(consult, api, usage, limits, (l) => lines.push(l));
    // A model that stops early is billed as it stands, as a player who walks out.
    const f = consult.result ?? (await consult.end());
    const saids = consult.log.filter((e) => e.type === "say").map((e) => e.utterance as string);
    const questions = saids.reduce((n, u) => n + questionsIn(u), 0);
    const record = { ...summarise(model, caseId, rep, ending, f, saids.length, questions, usage, started), max_questions: limits.maxQuestions };
    lines.push("", `## Bill: ${f.total}/${f.max} (${f.level.name}), ${f.consequence}`, ...f.awards.map((a) => `- ${signed(a)}`), "", f.consequenceText.trim());
    writeFileSync(`${base}.md`, `${lines.join("\n")}\n`);
    writeFileSync(`${base}.log.json`, JSON.stringify(consult.log, null, 1));
    writeFileSync(`${base}.json`, JSON.stringify(record, null, 1));
    console.log(`${model} ${caseId} #${rep}: ${f.total}/${f.max} (${Math.round((100 * f.total) / f.max)}%) ${ending}, $${usage.cost.toFixed(3)}`);
  } catch (e) {
    // Nothing is written as a result, so a re-run retries it.
    writeFileSync(`${base}.error.md`, `${lines.join("\n")}\n\nERROR: ${(e as Error).stack}\n`);
    console.log(`${model} ${caseId} #${rep}: ERROR ${(e as Error).message}`);
  }
}

async function run(args: string[]) {
  const model = args[0];
  if (!model || model.startsWith("--")) throw new Error("Usage: bench.ts run <model> [--cases free|all|id,id] [--reps 3]");
  const which = flag(args, "cases", "free");
  const all = readdirSync(new URL("cases/", root)).filter((f) => f.endsWith(".yaml")).map((f) => f.replace(/\.yaml$/, ""));
  const cases = which === "free" ? FREE_CASES : which === "all" ? all : which.split(",");
  const reps = Number(flag(args, "reps", "3"));
  const concurrency = Number(flag(args, "concurrency", "2"));
  const outDir = flag(args, "out", "bench-results");
  const limits = { ...DEFAULT_LIMITS, maxQuestions: Number(flag(args, "questions", String(DEFAULT_LIMITS.maxQuestions))) };
  const lib = library();
  const jobs = cases.flatMap((id) => Array.from({ length: reps }, (_, i) => ({ id, rep: i + 1 })));
  let next = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (next < jobs.length) {
        const job = jobs[next++]!;
        await runOne(model, job.id, job.rep, outDir, lib, limits);
      }
    }),
  );
}

const pct = (earned: number, max: number) => (max > 0 ? (100 * earned) / max : 100);
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);
const sd = (xs: number[]) => {
  const m = mean(xs);
  return xs.length > 1 ? Math.sqrt(xs.reduce((s, x) => s + (x - m) ** 2, 0) / (xs.length - 1)) : 0;
};

/** The per-model folders in a results folder (LEADERBOARD.md sits beside them). */
export const modelDirs = (outDir: string) =>
  existsSync(outDir) ? readdirSync(outDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name) : [];

/** The leaderboard, from every record in the results folder. */
export function leaderboard(records: RunRecord[]): string {
  const byModel = new Map<string, RunRecord[]>();
  for (const r of records) byModel.set(r.model, [...(byModel.get(r.model) ?? []), r]);
  const rows = [...byModel.entries()].map(([model, rs]) => {
    const scores = rs.map((r) => pct(r.total, r.max));
    const dom = (id: string) => mean(rs.map((r) => r.domains.find((d) => d.id === id)).filter((d) => d && d.max > 0).map((d) => pct(d!.earned, d!.max)));
    const flags = rs.flatMap((r) => r.red_flags);
    // Efficiency: questions asked, and red flags caught per 10 of them (consults with none asked skipped).
    const asked = rs.filter((r) => typeof r.questions === "number");
    const perTen = asked.filter((r) => r.questions > 0).map((r) => (10 * r.red_flags.filter((f) => f.elicited).length) / r.questions);
    const correct = rs.filter((r) => ["key", "working", "acceptable"].includes(r.diagnoses[0]?.role ?? "")).length;
    return {
      model,
      n: rs.length,
      cases: new Set(rs.map((r) => r.case)).size,
      score: mean(scores),
      sd: sd(scores),
      history: dom("history"),
      exam: dom("examination"),
      tests: dom("investigations"),
      mgmt: dom("management"),
      questions: mean(asked.map((r) => r.questions)),
      perTen: mean(perTen),
      flags: flags.length ? (100 * flags.filter((f) => f.elicited).length) / flags.length : NaN,
      dx: (100 * correct) / rs.length,
      harms: rs.reduce((s, r) => s + r.harmful.length, 0) / rs.length,
      walkouts: rs.filter((r) => r.missed_required.length).length,
      cost: rs.reduce((s, r) => s + r.usage.cost, 0) / rs.length,
    };
  });
  rows.sort((a, b) => b.score - a.score);
  const f = (x: number) => (Number.isNaN(x) ? "–" : x.toFixed(0));
  return [
    "| Rank | Model | Consults | Score % (±sd) | History | Exam | Tests | Mgmt + dx | Red flags caught | Questions asked | Red flags per 10 questions | Top dx right | Harms per consult | Required care missed | Cost per consult |",
    "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
    ...rows.map((r, i) =>
      `| ${i + 1} | ${r.model} | ${r.n} (${r.cases} cases) | ${f(r.score)} (±${f(r.sd)}) | ${f(r.history)} | ${f(r.exam)} | ${f(r.tests)} | ${f(r.mgmt)} | ${f(r.flags)}% | ${f(r.questions)} | ${Number.isNaN(r.perTen) ? "–" : r.perTen.toFixed(1)} | ${f(r.dx)}% | ${r.harms.toFixed(2)} | ${r.walkouts} | $${r.cost.toFixed(2)} |`,
    ),
  ].join("\n");
}

function report(args: string[]) {
  const outDir = flag(args, "out", "bench-results");
  const records: RunRecord[] = [];
  for (const m of modelDirs(outDir)) {
    const dir = join(outDir, m);
    for (const f of readdirSync(dir).filter((x) => /-\d+\.json$/.test(x))) records.push(JSON.parse(readFileSync(join(dir, f), "utf8")) as RunRecord);
  }
  if (!records.length) return console.log(`No results in ${outDir}.`);
  const table = leaderboard(records);
  writeFileSync(join(outDir, "LEADERBOARD.md"), `# Leaderboard\n\n${table}\n`);
  console.log(table);
}

/**
 * Rescores every finished consult from its log against the case files as they
 * are now, with no model calls (Consult.replay). Without --write it only
 * reports consults whose score would change; with it, the record and the
 * transcript's bill are rewritten.
 */
function rescore(args: string[]) {
  const outDir = flag(args, "out", "bench-results");
  const write = args.includes("--write");
  const lib = library();
  let same = 0;
  for (const m of modelDirs(outDir)) {
    const dir = join(outDir, m);
    for (const f of readdirSync(dir).filter((x) => /-\d+\.json$/.test(x))) {
      const base = join(dir, f.replace(/\.json$/, ""));
      const old = JSON.parse(readFileSync(`${base}.json`, "utf8")) as RunRecord;
      const consult = new Consult(parseCase(read(`cases/${old.case}.yaml`)), lib, () => Promise.reject(new Error("no model in a rescore")));
      const fs = consult.replay(JSON.parse(readFileSync(`${base}.log.json`, "utf8")) as LogEntry[]);
      if (fs.total === old.total && fs.consequence === old.consequence) {
        same++;
        continue;
      }
      console.log(`${old.model} ${old.case} #${old.rep}: ${old.total} -> ${fs.total} (${old.consequence} -> ${fs.consequence})`);
      if (!write) continue;
      const record: RunRecord = { ...old, ...summarise(old.model, old.case, old.rep, old.ending, fs, old.says, old.questions, old.usage, old.started) };
      writeFileSync(`${base}.json`, JSON.stringify(record, null, 1));
      writeFileSync(`${base}.log.json`, JSON.stringify(consult.log, null, 1));
      const md = readFileSync(`${base}.md`, "utf8");
      const head = md.slice(0, md.indexOf("\n## Bill:"));
      writeFileSync(`${base}.md`, `${head}\n## Bill: ${fs.total}/${fs.max} (${fs.level.name}), ${fs.consequence} (rescored)\n${fs.awards.map((x) => `- ${signed(x)}`).join("\n")}\n\n${fs.consequenceText.trim()}\n`);
    }
  }
  console.log(`${same} consult(s) unchanged.`);
}

const [command, ...rest] = process.argv.slice(2);
if (import.meta.url === `file://${process.argv[1]}`) {
  if (command === "run") await run(rest);
  else if (command === "report") report(rest);
  else if (command === "rescore") rescore(rest);
  else console.log("Usage: bench.ts run <model> [--cases free|all|id,id] [--reps 3] | bench.ts report | bench.ts rescore [--write]");
}
