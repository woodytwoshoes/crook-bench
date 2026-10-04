import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { parseCase, parseCatalogue, parseDiagnoses, parseFormulary, parseReferrals } from "../src/index.ts";
import { Consult, type Library, type PatientChat } from "../scripts/bench/engine.ts";
import { DEFAULT_LIMITS, playConsult, questionsIn, systemPrompt, type Usage } from "../scripts/bench/doctor.ts";
import { leaderboard, summarise } from "../scripts/bench.ts";

const read = (path: string) => readFileSync(new URL(`../../../${path}`, import.meta.url), "utf8");
const lib: Library = {
  catalogue: parseCatalogue(read("catalogue/examinations.yaml"), read("catalogue/investigations.yaml"), read("catalogue/safety.yaml")),
  formulary: parseFormulary(read("catalogue/formulary.yaml")),
  referrals: parseReferrals(read("catalogue/referrals.yaml")),
  diagnoses: parseDiagnoses(read("catalogue/diagnoses.yaml")),
};
const stemi = parseCase(read("cases/chest_pain_stemi.yaml"));

// The patient model, stubbed: the classifier and judge name nothing, the actor says "Okay."
const patient: PatientChat = async (_messages, opts) => (opts.schema ? "{}" : "Okay.");

/** A doctor model that makes these tool calls, one per turn. */
function scriptedDoctor(calls: [string, Record<string, unknown>][]) {
  const seen: unknown[] = [];
  let i = 0;
  vi.stubGlobal("fetch", async (_url: string, init: { body: string }) => {
    seen.push(JSON.parse(init.body));
    const call = calls[i++];
    const message = call
      ? { role: "assistant", content: null, tool_calls: [{ id: `c${i}`, type: "function", function: { name: call[0], arguments: JSON.stringify(call[1]) } }] }
      : { role: "assistant", content: "I'm done." };
    return new Response(JSON.stringify({ choices: [{ message }], usage: { prompt_tokens: 10, completion_tokens: 5, cost: 0.001 } }));
  });
  return seen;
}

const api = { url: "http://doctor.test/v1", model: "test/doctor" };
const fresh = (): Usage => ({ calls: 0, prompt_tokens: 0, completion_tokens: 0, cost: 0 });

afterEach(() => vi.unstubAllGlobals());

describe("benchmark consult", () => {
  it("plays a consult through tool calls and bills it as the game does", async () => {
    const consult = new Consult(stemi, lib, patient);
    const usage = fresh();
    scriptedDoctor([
      ["say", { text: "What brings you in today?" }],
      ["order_test", { test_id: "ecg_12_lead" }],
      ["refer", { referral_id: "ambulance_ed" }],
      ["end_consult", {}],
      ["diagnose", { most_likely: "stemi", differential: "unstable_angina", cant_miss: "aortic_dissection" }],
      ["end_consult", {}],
    ]);
    const { ending } = await playConsult(consult, api, usage);
    expect(ending).toBe("ended");
    const f = consult.result!;
    expect(f.missedRequired).toEqual([]);
    expect(f.diagnoses[0]?.role).toBe("key");
    expect(f.total).toBeGreaterThan(0);
    expect(usage.calls).toBe(6);
    expect(usage.cost).toBeCloseTo(0.006);
  });

  it("refuses to end without a diagnosis, as the app asks for one", async () => {
    const consult = new Consult(stemi, lib, patient);
    scriptedDoctor([["end_consult", {}]]);
    await playConsult(consult, api, fresh(), { ...DEFAULT_LIMITS, maxNudges: 0 });
    expect(consult.ended).toBe(false);
  });

  it("never shows the doctor the points or the case key", async () => {
    const consult = new Consult(stemi, lib, patient);
    const seen = scriptedDoctor([
      ["order_test", { test_id: "ecg_12_lead" }],
      ["diagnose", { most_likely: "stemi", differential: "gord", cant_miss: "aortic_dissection" }],
      ["end_consult", {}],
    ]);
    await playConsult(consult, api, fresh());
    const sent = JSON.stringify(seen);
    expect(consult.state.awards.length).toBeGreaterThan(0);
    // Tool results carry findings and results, never awards or necessities.
    expect(sent).not.toMatch(/[+-]\d+ |\bessential\b|\bunnecessary\b|\bharmful\b(?! actions)/);
    expect(sent).not.toContain(stemi.ground_truth.notes.slice(0, 40));
    expect(systemPrompt(20)).not.toMatch(/stemi|myocard/i);
  });

  it("stops a model that won't use the tools, and bills what it did", async () => {
    const consult = new Consult(stemi, lib, patient);
    scriptedDoctor([]);
    const { ending } = await playConsult(consult, api, fresh(), { ...DEFAULT_LIMITS, maxNudges: 2 });
    expect(ending).toBe("stopped");
    const f = await consult.end();
    expect(f.missedRequired.length).toBeGreaterThan(0);
  });

  it("stops the questions at the budget, but not the plan or the orders", async () => {
    const consult = new Consult(stemi, lib, patient);
    const seen = scriptedDoctor([
      ["say", { text: "What brings you in? Where is the pain?" }],
      ["say", { text: "Does it spread anywhere?" }],
      ["say", { text: "Any sweating?" }],
      ["say", { text: "I'm worried this is your heart, so I'm calling an ambulance." }],
      ["order_test", { test_id: "ecg_12_lead" }],
      ["diagnose", { most_likely: "stemi", differential: "gord", cant_miss: "aortic_dissection" }],
      ["end_consult", {}],
    ]) as { messages: { role: string; content: string }[] }[];
    await playConsult(consult, api, fresh(), { ...DEFAULT_LIMITS, maxQuestions: 3 });
    const said = consult.log.filter((e) => e.type === "say").map((e) => e.utterance);
    expect(said).toHaveLength(3);
    expect(said.at(-1)).toMatch(/ambulance/);
    expect(consult.state.ordered.map((o) => o.id)).toContain("ecg_12_lead");
    const results = seen.at(-1)!.messages.filter((m) => m.role === "tool").map((m) => m.content);
    expect(results[0]).toMatch(/\(1 question left\)$/);
    expect(results[1]).toMatch(/\(0 questions left\)$/);
    expect(results[2]).toMatch(/no questions left/);
    expect(consult.ended).toBe(true);
  });

  it("counts each question in a message", () => {
    expect(questionsIn("When did it start, and has it moved?")).toBe(2);
    expect(questionsIn("What brings you in? Where is the pain?")).toBe(2);
    expect(questionsIn("Hi Graham, I'm Dr Chen. Tell me what's been happening.")).toBe(1);
    expect(questionsIn("I'm worried this is your heart, so I'm calling an ambulance.")).toBe(0);
    expect(questionsIn("If you get worse, call 000.")).toBe(0);
  });

  it("ranks models by mean share of the maximum", async () => {
    const consult = new Consult(stemi, lib, patient);
    const f = await consult.end();
    const low = summarise("low/model", stemi.id, 1, "ended", f, 0, 0, fresh(), "");
    const high = { ...low, model: "high/model", total: f.max };
    const table = leaderboard([low, high]);
    expect(table.indexOf("high/model")).toBeLessThan(table.indexOf("low/model"));
  });

  it("reports questions asked and red flags caught per 10 questions", async () => {
    const consult = new Consult(stemi, lib, patient);
    const f = await consult.end();
    const base = summarise("a/model", stemi.id, 1, "ended", f, 0, 0, fresh(), "");
    const flags = (n: number) => base.red_flags.map((r, i) => ({ ...r, elicited: i < n }));
    // 4 flags in 20 questions (2.0 per 10) and 2 in 40 (0.5): means 30 asked, 1.3 per 10.
    const a1 = { ...base, questions: 20, red_flags: flags(4) };
    const a2 = { ...base, rep: 2, questions: 40, red_flags: flags(2) };
    // A consult with no questions counts towards questions asked but not the rate.
    const a3 = { ...base, rep: 3, questions: 0, red_flags: flags(0) };
    const row = leaderboard([a1, a2, a3]).split("\n").find((l) => l.includes("a/model"))!;
    const cells = row.split("|").map((c) => c.trim());
    const header = leaderboard([a1]).split("\n")[0]!.split("|").map((c) => c.trim());
    expect(cells[header.indexOf("Questions asked")]).toBe("20");
    expect(cells[header.indexOf("Red flags per 10 questions")]).toBe("1.3");
  });
});
