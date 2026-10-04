// One consult for the benchmark, driven by tool calls instead of the UI.
// The same core functions and the same model requests as play.ts and the web
// app (useConsult.ts): the patient model plays the patient, classifies each
// utterance and judges the spoken plan; code does everything else. The doctor
// sees what a player sees, except the live points: a benchmark run is blind.
import {
  BODY,
  DURATIONS,
  FREQUENCIES,
  MODALITIES,
  STAT_DOSE,
  applyVerdicts,
  arrivalResults,
  buildActorMessages,
  buildClassifierRequest,
  buildJudgeRequest,
  buildVerifyRequests,
  classifierFlood,
  cleanActorOutput,
  diagnose,
  examine,
  examsAt,
  finalizeConsult,
  givenFindings,
  isRepeat,
  maxPoints,
  orderInvestigation,
  parseClassifierOutput,
  parseJudgement,
  prescribe,
  recordExchange,
  recordPatientReply,
  refer,
  searchCatalogue,
  startConsult,
  stripEchoedHeadings,
  type Award,
  type Case,
  type Catalogue,
  type ChatMessage,
  type ConsultState,
  type FinalScore,
  type FormularyItem,
  type Modality,
  type ReferralItem,
  type Region,
} from "../../src/index.ts";

export type Library = {
  catalogue: Catalogue;
  formulary: FormularyItem[];
  referrals: ReferralItem[];
  diagnoses: { id: string; name: string; aliases: string[] }[];
};

/** The patient model's chat call (OpenAI-compatible), injectable for tests. */
export type PatientChat = (
  messages: ChatMessage[],
  opts: { temperature?: number; maxTokens?: number; schema?: { name: string; schema: object }; seed?: number },
) => Promise<string>;

/** A move the consult log keeps, for the transcript and analysis. */
export type LogEntry = { type: string; [key: string]: unknown };

export class Consult {
  state: ConsultState;
  ended = false;
  result: FinalScore | null = null;
  readonly log: LogEntry[] = [];

  readonly c: Case;
  readonly lib: Library;
  readonly chat: PatientChat;

  constructor(c: Case, lib: Library, chat: PatientChat) {
    this.c = c;
    this.lib = lib;
    this.chat = chat;
    this.state = startConsult(c);
  }

  dxName = (id: string) => this.lib.diagnoses.find((d) => d.id === id)?.name ?? id;

  /** What the player sees as the patient walks in. */
  opening(): string {
    const c = this.c;
    const p = c.patient;
    const lines = [
      `Patient: ${p.name}, ${p.age}, ${p.sex}, ${p.occupation}.`,
      `Booked for: ${c.presenting_complaint}${c.booked_urgent ? " (booked as urgent)" : ""}. Consult starts ${c.consult_start}.`,
    ];
    if (c.condition_description) lines.push(`Booking note, in the patient's words: "${c.condition_description.trim()}"`);
    lines.push(
      "Clinic record:",
      `  Allergies: ${c.record.allergies.join("; ") || "nil known"}`,
      `  Conditions: ${c.record.conditions.join("; ") || "none recorded"}`,
      `  Medications: ${c.record.medications.join("; ") || "none recorded"}`,
    );
    for (const r of arrivalResults(c, this.lib.catalogue)) {
      lines.push(`  Result from an earlier visit, ${r.name}: ${r.result.trim()}${r.abnormal ? " [abnormal]" : ""}`);
    }
    for (const g of givenFindings(c, this.lib.catalogue)) lines.push(`${g.name}: ${g.finding.trim()}`);
    return lines.join("\n");
  }

  private push(entry: LogEntry) {
    this.log.push({ ...entry, score: this.state.awards.reduce((s, a) => s + a.points, 0) });
  }

  async say(text: string): Promise<string> {
    const utterance = text.trim();
    if (!utterance) return "(say needs some words)";
    const req = buildClassifierRequest(this.c, this.state, utterance);
    let ids: string[] = [];
    let flooded = false;
    if (req) {
      const raw = await this.chat(req.messages, {
        temperature: 0,
        maxTokens: req.maxTokens,
        schema: { name: "elicited_topics", schema: req.schema },
      });
      ids = parseClassifierOutput(raw, req);
      flooded = classifierFlood(raw, req, req.utterance);
    }
    const ex = recordExchange(this.c, this.state, utterance, ids);
    const reply = await this.speak(ex.state, utterance, ex.newlyRevealed, flooded);
    this.state = recordPatientReply(ex.state, reply);
    this.push({ type: "say", utterance, released: ex.newlyRevealed, flooded, reply, awards: ex.awards });
    return reply;
  }

  /** The patient's reply, with the web app's one retry if it repeats itself. */
  private async speak(s: ConsultState, utterance: string, newlyRevealed: string[], flooded: boolean) {
    const seed = Math.floor(Math.random() * 2 ** 31);
    const messages = buildActorMessages(this.c, s, utterance, newlyRevealed, flooded);
    const asked = s.turns.filter((t) => t.speaker === "doctor").map((t) => t.text).join("\n");
    const first = stripEchoedHeadings(cleanActorOutput(await this.chat(messages, { seed })), asked) || "…";
    if (!isRepeat(first, s)) return first;
    const last = messages.at(-1)!;
    const retry = [
      ...messages.slice(0, -1),
      { ...last, content: `${last.content}\n\n[You already said "${first}". Say something different that responds to the doctor.]` },
    ];
    return stripEchoedHeadings(cleanActorOutput(await this.chat(retry, { temperature: 0.9, seed })), asked) || first;
  }

  /** The examination wheel: what can be done at a region, sub-region and modality. */
  listExams(region: string, subregion?: string, modality?: string): string {
    if (region === "vitals") {
      return this.lib.catalogue.examinations.filter((e) => e.region === "vitals").map((e) => `${e.id}: ${e.name}`).join("\n");
    }
    if (!(region in BODY)) return `Unknown region. Regions: ${[...Object.keys(BODY), "vitals"].join(", ")}`;
    const r = BODY[region as Region];
    if (subregion && !(subregion in r.subregions)) {
      return `Unknown sub-region of ${region}. Sub-regions: ${Object.keys(r.subregions).join(", ") || "(none)"}`;
    }
    const mods = modality && MODALITIES.includes(modality as Modality) ? [modality as Modality] : MODALITIES;
    const out = mods.map((m) => {
      const exams = examsAt(this.lib.catalogue.examinations, region as Region, subregion ?? null, m);
      return `${m}:\n${exams.map((e) => `  ${e.id}: ${e.name}`).join("\n") || "  (nothing here)"}`;
    });
    const subs = Object.keys(r.subregions);
    if (!subregion && subs.length) out.push(`Sub-regions of ${region}: ${subs.join(", ")}`);
    return out.join("\n");
  }

  search(kind: string, query: string): string {
    const lists: Record<string, readonly { id: string; name: string; aliases: string[] }[]> = {
      exams: this.lib.catalogue.examinations,
      tests: this.lib.catalogue.investigations,
      drugs: this.lib.formulary,
      referrals: this.lib.referrals,
      diagnoses: this.lib.diagnoses,
    };
    const list = lists[kind];
    if (!list) return `Kind must be one of: ${Object.keys(lists).join(", ")}`;
    return searchCatalogue(list, query).map((x) => `${x.id}: ${x.name}`).join("\n") || "(no matches)";
  }

  examine(id: string, side?: string, subregion?: string): string {
    if (!this.lib.catalogue.examinations.some((e) => e.id === id)) return `Unknown exam "${id}". Use list_exams or search.`;
    const s = side === "left" || side === "right" ? side : undefined;
    try {
      const o = examine(this.c, this.lib.catalogue, this.state, id, s, subregion || undefined);
      this.state = o.state;
      this.push({ type: "exam", id, side: s, subregion, finding: o.finding, awards: [...(o.award ? [o.award] : []), ...o.awards] });
      return `${o.name}${s ? ` (${s})` : ""}${subregion ? ` at ${subregion}` : ""}: ${o.finding.trim()}${o.abnormal ? " [abnormal]" : ""}${o.isNew ? "" : " (already done)"}`;
    } catch (e) {
      return `Could not examine: ${(e as Error).message}`;
    }
  }

  order(id: string): string {
    if (!this.lib.catalogue.investigations.some((t) => t.id === id)) return `Unknown test "${id}". Use search with kind "tests".`;
    const o = orderInvestigation(this.c, this.lib.catalogue, this.state, id);
    this.state = o.state;
    this.push({ type: "order", id, result: o.result, awards: [...(o.award ? [o.award] : []), ...o.awards] });
    const result = o.result?.trim() ?? `ordered; the result takes ${o.turnaroundDays} day(s) and will not be back during this consult`;
    return `${o.name}: ${result}${o.abnormal ? " [abnormal]" : ""}${o.isNew ? "" : " (already ordered)"}`;
  }

  prescribe(id: string, dose: string, frequency: string, duration: string, quantity?: number): string {
    const item = this.lib.formulary.find((f) => f.id === id);
    if (!item) return `Unknown drug "${id}". Use search with kind "drugs".`;
    const freq = FREQUENCIES.find((f) => f.toLowerCase() === frequency.trim().toLowerCase());
    if (!freq) return `Frequency must be one of: ${FREQUENCIES.join(" | ")}`;
    const givenNow = freq === STAT_DOSE;
    const dur = givenNow ? "Single dose" : DURATIONS.find((d) => d.toLowerCase() === duration.trim().toLowerCase());
    if (!dur) return `Duration must be one of: ${DURATIONS.join(" | ")}`;
    const o = prescribe(
      this.c,
      this.state,
      item,
      { dose: dose.trim() || `1 ${item.unit}`, quantity: givenNow ? 0 : (quantity ?? item.pack), frequency: freq, duration: dur, instructions: "", givenNow },
      this.lib.catalogue.safety,
    );
    this.state = o.state;
    this.push({ type: "rx", id, dose, frequency: freq, duration: dur, givenNow, quantity, awards: o.awards });
    return `${givenNow ? "Given in clinic" : "Prescribed"}: ${item.name}, ${dose} ${freq}${givenNow ? "" : `, ${dur}`}`;
  }

  refer(id: string): string {
    const item = this.lib.referrals.find((r) => r.id === id);
    if (!item) return `Unknown referral "${id}". Use search with kind "referrals".`;
    const o = refer(this.c, this.state, item);
    this.state = o.state;
    this.push({ type: "refer", id, awards: o.awards });
    return `Referred: ${item.name}`;
  }

  diagnose(primary: string, differential: string, cantMiss: string): string {
    const unknown = [primary, differential, cantMiss].filter((id) => !this.lib.diagnoses.some((d) => d.id === id));
    if (unknown.length) return `Unknown diagnosis id(s): ${unknown.join(", ")}. Use search with kind "diagnoses".`;
    const o = diagnose(this.c, this.state, { primary, differentials: [differential, cantMiss] }, this.dxName);
    this.state = o.state;
    this.push({ type: "dx", primary, differentials: [differential, cantMiss], awards: o.awards });
    return `Diagnosis saved: most likely ${this.dxName(primary)}; differential ${this.dxName(differential)}; can't miss ${this.dxName(cantMiss)}.`;
  }

  /** End consult: judge the spoken plan (same requests as play.ts), then the bill. */
  async end(): Promise<FinalScore> {
    const said = this.state.turns.filter((t) => t.speaker === "doctor").map((t) => t.text).join("\n");
    const req = buildJudgeRequest(this.c, said);
    let judgement = { managementIds: [] as string[], quotes: {} as Record<string, string> };
    if (req) {
      const raw = await this.chat(req.messages, { temperature: 0, maxTokens: 400, schema: { name: "said_items", schema: req.schema } });
      const proposed = parseJudgement(raw, req, said);
      const checks = buildVerifyRequests(this.c, proposed, said, this.state);
      const verdicts = await Promise.all(
        checks.map((v) => this.chat(v.messages, { temperature: 0, maxTokens: v.maxTokens, schema: { name: "verdict", schema: v.schema } })),
      );
      const j = applyVerdicts(proposed, Object.fromEntries(checks.map((v, i) => [v.id, verdicts[i]!])));
      judgement = { managementIds: j.managementIds, quotes: j.quotes ?? {} };
    }
    const f = finalizeConsult(this.c, this.lib.catalogue, this.state, judgement);
    this.ended = true;
    this.result = f;
    this.push({ type: "end", judged: judgement, total: f.total, max: f.max, level: f.level.name, consequence: f.consequence });
    return f;
  }

  /**
   * Rebuilds a consult from its log, with no model calls: each turn's logged
   * releases and reply, then the same actions and the logged judgement of the
   * spoken plan, scored against the case as it is now (a fixed case key
   * rescores old consults without replaying them with the models).
   */
  replay(log: LogEntry[]): FinalScore {
    const str = (v: unknown) => (typeof v === "string" ? v : undefined);
    for (const e of log) {
      switch (e.type) {
        case "say": {
          const utterance = e.utterance as string;
          const ex = recordExchange(this.c, this.state, utterance, e.released as string[]);
          this.state = recordPatientReply(ex.state, e.reply as string);
          this.push({ type: "say", utterance, released: ex.newlyRevealed, flooded: e.flooded, reply: e.reply, awards: ex.awards });
          break;
        }
        case "exam":
          this.examine(e.id as string, str(e.side), str(e.subregion));
          break;
        case "order":
          this.order(e.id as string);
          break;
        case "rx":
          this.prescribe(e.id as string, e.dose as string, e.frequency as string, e.duration as string, typeof e.quantity === "number" ? e.quantity : undefined);
          break;
        case "refer":
          this.refer(e.id as string);
          break;
        case "dx": {
          const [differential, cantMiss] = e.differentials as string[];
          this.diagnose(e.primary as string, differential!, cantMiss!);
          break;
        }
        case "end": {
          const judgement = e.judged as { managementIds: string[]; quotes: Record<string, string> };
          const f = finalizeConsult(this.c, this.lib.catalogue, this.state, judgement);
          this.ended = true;
          this.result = f;
          this.push({ type: "end", judged: judgement, total: f.total, max: f.max, level: f.level.name, consequence: f.consequence });
        }
      }
    }
    if (!this.result) throw new Error("The log has no end entry");
    return this.result;
  }

  max(): number {
    return maxPoints(this.c);
  }
}

export const signed = (a: Award) => `${a.points > 0 ? "+" : ""}${a.points} ${a.label}`;
