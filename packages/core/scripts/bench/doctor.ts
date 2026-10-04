// The doctor side of a benchmark run: a model under test plays the GP through
// tool calls, over any OpenAI-compatible chat API (OpenRouter, or a lab's own
// endpoint). It sees what a player sees, never the case file or the points.
import { DURATIONS, FREQUENCIES, MODALITIES, looksLikeQuestion, utteranceParts } from "../../src/index.ts";
import type { Consult } from "./engine.ts";

/** The instructions, the same for every case; maxQuestions sets the time budget. */
export const systemPrompt = (maxQuestions: number) => `You are a general practitioner (family doctor) in Australia, seeing a patient in a consultation. This is a scored clinical simulation.

How it works:
- The patient is a person, played by another AI. Talk to them with the "say" tool, in plain words a layperson understands: medical jargon and abbreviations are not understood and the patient will ask what you mean. The patient answers what you ask; they don't know their diagnosis.
- Examine with "examine" (find exam ids with "list_exams" or "search"). Vital signs are under region "vitals". Findings are fixed by the case and only revealed if you perform the exam.
- Order tests with "order_test". Some results come back during the consult; others take days and won't return today.
- Prescribe or give medicines with "prescribe", refer with "refer" (search for ids first). The clinic record shows allergies, conditions and medications on file, but it may not be complete.
- Explain your plan, advice and safety-netting to the patient with "say": spoken advice is scored from what you say.
- Before ending, commit a diagnosis with "diagnose": most likely, one differential, and a can't-miss diagnosis (a serious condition that must be considered). Then call "end_consult".

You are scored on process, as clinical assessors score a consultation: eliciting red flags and key history, examining and investigating what is indicated, a safe and appropriate management plan, and a defensible diagnosis. Asking questions and examining cost nothing. Unnecessary tests are penalised, and harmful actions are penalised heavily. Use Australian practice (eTG, PBS).

Time: you can ask the patient ${maxQuestions} questions in this consult. Each question counts, including several in one message. Explanations, your plan and safety-netting don't count, and nor do examining, tests, prescribing, referring and diagnosing. Each reply tells you how many questions are left.

Act only through the tools. The consult ends when you call end_consult.`;

export const TOOLS = [
  {
    type: "function",
    function: {
      name: "say",
      description: "Say something to the patient: a question, an explanation, advice or your plan. Returns the patient's reply.",
      parameters: { type: "object", properties: { text: { type: "string" } }, required: ["text"], additionalProperties: false },
    },
  },
  {
    type: "function",
    function: {
      name: "list_exams",
      description: `List the examinations available at a body region (optionally a sub-region and modality). Regions: head, thorax, abdomen (includes the back), upper_limb, lower_limb, vitals (call with region alone to see sub-regions). Modalities: ${MODALITIES.join(", ")}.`,
      parameters: {
        type: "object",
        properties: { region: { type: "string" }, subregion: { type: "string" }, modality: { type: "string" } },
        required: ["region"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "search",
      description: "Search a catalogue by words. Returns ids and names.",
      parameters: {
        type: "object",
        properties: { kind: { type: "string", enum: ["exams", "tests", "drugs", "referrals", "diagnoses"] }, query: { type: "string" } },
        required: ["kind", "query"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "examine",
      description: "Perform an examination by id. Limb exams take a side (left or right); some exams can be done at a sub-region.",
      parameters: {
        type: "object",
        properties: { exam_id: { type: "string" }, side: { type: "string", enum: ["left", "right"] }, subregion: { type: "string" } },
        required: ["exam_id"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "order_test",
      description: "Order (or perform at the bedside) an investigation by id.",
      parameters: { type: "object", properties: { test_id: { type: "string" } }, required: ["test_id"], additionalProperties: false },
    },
  },
  {
    type: "function",
    function: {
      name: "prescribe",
      description: `Prescribe a medicine, or give it now in the clinic with frequency "${FREQUENCIES[0]}".`,
      parameters: {
        type: "object",
        properties: {
          drug_id: { type: "string" },
          dose: { type: "string", description: 'e.g. "500 mg" or "2 tablets"' },
          frequency: { type: "string", enum: [...FREQUENCIES] },
          duration: { type: "string", enum: [...DURATIONS] },
          quantity: { type: "integer" },
        },
        required: ["drug_id", "dose", "frequency", "duration"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "refer",
      description: "Refer the patient (emergency department, ambulance, specialist, allied health) by id.",
      parameters: { type: "object", properties: { referral_id: { type: "string" } }, required: ["referral_id"], additionalProperties: false },
    },
  },
  {
    type: "function",
    function: {
      name: "diagnose",
      description: "Save your diagnosis (ids from search kind diagnoses): most likely, a differential, and a can't-miss diagnosis. Revising a saved diagnosis is penalised.",
      parameters: {
        type: "object",
        properties: { most_likely: { type: "string" }, differential: { type: "string" }, cant_miss: { type: "string" } },
        required: ["most_likely", "differential", "cant_miss"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "end_consult",
      description: "End the consultation. A diagnosis must be saved first.",
      parameters: { type: "object", properties: {}, additionalProperties: false },
    },
  },
] as const;

type ToolCall = { id: string; type: "function"; function: { name: string; arguments: string } };
type Message =
  | { role: "system" | "user"; content: string }
  | { role: "assistant"; content: string | null; tool_calls?: ToolCall[]; [k: string]: unknown }
  | { role: "tool"; tool_call_id: string; content: string };

export type DoctorApi = {
  url: string;
  key?: string | undefined;
  model: string;
  /** Extra body fields, e.g. a reasoning effort. */
  extra?: Record<string, unknown> | undefined;
};

export type Usage = { calls: number; prompt_tokens: number; completion_tokens: number; cost: number };

/** One chat call to the model under test, retried on rate limits and server errors. */
async function complete(api: DoctorApi, messages: Message[], usage: Usage): Promise<Extract<Message, { role: "assistant" }>> {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${api.url}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(api.key && { Authorization: `Bearer ${api.key}` }) },
      body: JSON.stringify({ model: api.model, messages, tools: TOOLS, tool_choice: "auto", usage: { include: true }, ...api.extra }),
    });
    if (res.ok) {
      const body = (await res.json()) as {
        choices?: { message: Extract<Message, { role: "assistant" }> }[];
        usage?: { prompt_tokens?: number; completion_tokens?: number; cost?: number };
        error?: { message: string };
      };
      if (body.error) throw new Error(`Doctor model error: ${body.error.message}`);
      usage.calls++;
      usage.prompt_tokens += body.usage?.prompt_tokens ?? 0;
      usage.completion_tokens += body.usage?.completion_tokens ?? 0;
      usage.cost += body.usage?.cost ?? 0;
      const m = body.choices?.[0]?.message;
      if (!m) throw new Error("Doctor model returned no message");
      return m;
    }
    const retryable = res.status === 429 || res.status >= 500;
    if (!retryable || attempt >= 5) throw new Error(`Doctor model HTTP ${res.status}: ${await res.text()}`);
    await new Promise((r) => setTimeout(r, 2000 * 2 ** attempt));
  }
}

// maxQuestions is the consult's time budget (the developer's figure: a GP
// might ask 50); maxSays and maxToolCalls only stop a runaway model.
export type RunLimits = { maxQuestions: number; maxSays: number; maxToolCalls: number; maxNudges: number };

export const DEFAULT_LIMITS: RunLimits = { maxQuestions: 50, maxSays: 100, maxToolCalls: 200, maxNudges: 3 };

// A request that asks without a question mark ("Tell me about the pain.").
const REQUEST = /^(?:(?:now|so|and|ok(?:ay)?|right),?\s+)?(?:tell me|describe|talk me through|walk me through|let me know)\b/i;

/**
 * The questions in a typed message: each part of a sentence ending in "?"
 * that reads as a question (split as the classifier splits it, so "When did it
 * start, and has it moved?" is two), and each "tell me..." request. Not
 * looksLikeQuestion alone: built for speech, it reads "I'm worried this is
 * your heart" as a run-on question.
 */
export function questionsIn(text: string): number {
  return text
    .split(/(?<=[.?!;])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((n, s) => n + (s.endsWith("?") ? Math.max(1, utteranceParts(s).filter((p) => looksLikeQuestion(p)).length) : REQUEST.test(s) ? 1 : 0), 0);
}

/** Plays one consult to the end. Returns how it ended. */
export async function playConsult(
  consult: Consult,
  api: DoctorApi,
  usage: Usage,
  limits: RunLimits = DEFAULT_LIMITS,
  onEvent: (line: string) => void = () => {},
): Promise<{ ending: "ended" | "tool_limit" | "stopped" }> {
  const messages: Message[] = [
    { role: "system", content: systemPrompt(limits.maxQuestions) },
    { role: "user", content: `${consult.opening()}\n\nThe patient is in the room. Begin the consultation.` },
  ];
  onEvent(consult.opening());
  let calls = 0;
  let nudges = 0;
  while (!consult.ended) {
    const m = await complete(api, messages, usage);
    // Keep the message as returned (some APIs carry reasoning fields between turns).
    messages.push({ ...m, role: "assistant", content: m.content ?? null });
    const toolCalls = m.tool_calls ?? [];
    if (!toolCalls.length) {
      if (m.content) onEvent(`(text, no tool call) ${m.content}`);
      if (++nudges > limits.maxNudges) return { ending: "stopped" };
      messages.push({ role: "user", content: "Act through the tools: use say to talk to the patient, and end_consult when you have finished." });
      continue;
    }
    for (const call of toolCalls) {
      let out: string;
      if (consult.ended) {
        out = "The consultation has ended.";
      } else if (++calls > limits.maxToolCalls) {
        out = "Tool limit reached.";
      } else {
        out = await runTool(consult, call.function.name, call.function.arguments, limits, onEvent);
      }
      messages.push({ role: "tool", tool_call_id: call.id, content: out });
    }
    if (calls > limits.maxToolCalls && !consult.ended) return { ending: "tool_limit" };
  }
  return { ending: "ended" };
}

async function runTool(consult: Consult, name: string, rawArgs: string, limits: RunLimits, onEvent: (line: string) => void): Promise<string> {
  let a: Record<string, unknown>;
  try {
    a = rawArgs ? (JSON.parse(rawArgs) as Record<string, unknown>) : {};
  } catch {
    return `Arguments were not valid JSON: ${rawArgs}`;
  }
  const str = (k: string) => (typeof a[k] === "string" ? (a[k] as string) : "");
  switch (name) {
    case "say": {
      const says = consult.log.filter((e) => e.type === "say");
      const asked = says.reduce((n, e) => n + questionsIn(e.utterance as string), 0);
      const questions = questionsIn(str("text"));
      if (says.length >= limits.maxSays || (questions > 0 && asked >= limits.maxQuestions)) {
        return "You have no questions left. You can still explain your plan to the patient, and finish with any orders, your diagnosis and end_consult.";
      }
      onEvent(`DR: ${str("text")}`);
      const reply = await consult.say(str("text"));
      onEvent(`PT: ${reply}`);
      const left = Math.max(0, limits.maxQuestions - asked - questions);
      return `${reply}\n(${left} question${left === 1 ? "" : "s"} left)`;
    }
    case "list_exams":
      return consult.listExams(str("region"), str("subregion") || undefined, str("modality") || undefined);
    case "search":
      return consult.search(str("kind"), str("query"));
    case "examine":
      return note(onEvent, consult.examine(str("exam_id"), str("side") || undefined, str("subregion") || undefined));
    case "order_test":
      return note(onEvent, consult.order(str("test_id")));
    case "prescribe":
      return note(onEvent, consult.prescribe(str("drug_id"), str("dose"), str("frequency"), str("duration"), typeof a.quantity === "number" ? a.quantity : undefined));
    case "refer":
      return note(onEvent, consult.refer(str("referral_id")));
    case "diagnose":
      return note(onEvent, consult.diagnose(str("most_likely"), str("differential"), str("cant_miss")));
    case "end_consult":
      if (!consult.state.diagnoses) return "Save a diagnosis with diagnose before ending the consult.";
      await consult.end();
      onEvent("END CONSULT");
      return "The consultation has ended.";
    default:
      return `Unknown tool "${name}".`;
  }
}

function note(onEvent: (line: string) => void, line: string) {
  onEvent(`  ${line}`);
  return line;
}
