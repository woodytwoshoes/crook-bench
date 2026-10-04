import { z } from "zod";
import { parseList } from "./catalogue.ts";

// Lay explanations of clinical terms, shown when the player hovers a term on
// screen (docs/explain/plan.md). Authored and looked up, never generated.
// Everything here takes text and the glossary, never a case or a consult
// state: an explanation is identical in every case, so it can never hint.

const Id = z.string().regex(/^[a-z0-9_]+$/, "use lower_snake_case");

const Entry = z.strictObject({
  id: Id,
  // The card's heading, and a phrase looked for in on-screen text.
  term: z.string().min(1),
  aliases: z.array(z.string().min(1)).default([]),
  kind: z.enum(["exam", "finding", "test", "medicine", "condition", "general"]),
  // What the thing is, in one or two plain sentences.
  explain: z.string().min(1).max(280),
  source: z.string().min(1),
  // False if no source backs the wording: hidden from players until reviewed.
  grounded: z.boolean().default(true),
  status: z.enum(["draft", "reviewed"]),
});
export type GlossaryEntry = z.infer<typeof Entry>;

const EntryList = z.array(Entry).superRefine((entries, ctx) => {
  const ids = new Set<string>();
  const owner = new Map<string, string>();
  entries.forEach((e, i) => {
    if (ids.has(e.id)) ctx.addIssue({ code: "custom", path: ["glossary", i, "id"], message: `duplicate id "${e.id}"` });
    ids.add(e.id);
    for (const phrase of [e.term, ...e.aliases]) {
      const key = phrase.toLowerCase();
      const other = owner.get(key);
      if (other !== undefined && other !== e.id) {
        ctx.addIssue({ code: "custom", path: ["glossary", i], message: `"${phrase}" is a phrase of both ${other} and ${e.id}` });
      }
      owner.set(key, e.id);
    }
  });
});

type Word = { text: string; lower: string; exact: boolean };
type Phrase = { text: string; words: Word[]; entry: GlossaryEntry };
export type Segment = { text: string; entry?: GlossaryEntry };
export type Glossary = { entries: GlossaryEntry[]; phrases: Phrase[] };

const isWordChar = (ch: string | undefined) => ch !== undefined && /[\p{L}\p{N}]/u.test(ch);

// Case is decided word by word: a capital after the first letter (ECG, HbA1c,
// aVF) means that word must match exactly; any other word matches in any case.
const toWord = (text: string): Word => ({ text, lower: text.toLowerCase(), exact: /\p{Lu}/u.test(text.slice(1)) });

const fits = (p: Phrase, found: string) => {
  const parts = found.split(" ");
  return (
    parts.length === p.words.length &&
    p.words.every((w, k) => (w.exact ? parts[k] === w.text : parts[k]?.toLowerCase() === w.lower))
  );
};

/** Entries that are neither reviewed nor grounded are left out of `phrases` unless asked for. */
export function parseGlossary(yamlText: string, opts: { showUngrounded?: boolean } = {}): Glossary {
  const entries = parseList(EntryList, yamlText, "glossary.yaml");
  const shown = entries.filter((e) => e.status === "reviewed" || e.grounded || opts.showUngrounded);
  const phrases = shown
    .flatMap((entry) => [entry.term, ...entry.aliases].map((text) => ({ text, words: text.split(" ").map(toWord), entry })))
    // Longest first, so "Sinus bradycardia" wins over "bradycardia".
    .sort((a, b) => b.text.length - a.text.length || a.text.localeCompare(b.text));
  return { entries, phrases };
}

/**
 * Split text into plain runs and glossary terms: at each word start the
 * longest phrase that fits wins, whole words only. `except`: entry ids not to
 * link (an entry inside its own card).
 */
export function annotate(g: Glossary, text: string, except: readonly string[] = []): Segment[] {
  const out: Segment[] = [];
  let plain = 0;
  let i = 0;
  while (i < text.length) {
    let hit: Phrase | undefined;
    if (!isWordChar(text[i - 1]) && isWordChar(text[i])) {
      hit = g.phrases.find((p) => {
        if (except.includes(p.entry.id)) return false;
        const end = i + p.text.length;
        return end <= text.length && !isWordChar(text[end]) && fits(p, text.slice(i, end));
      });
    }
    if (!hit) {
      i++;
      continue;
    }
    if (i > plain) out.push({ text: text.slice(plain, i) });
    out.push({ text: text.slice(i, i + hit.text.length), entry: hit.entry });
    i += hit.text.length;
    plain = i;
  }
  if (plain < text.length) out.push({ text: text.slice(plain) });
  return out;
}

/** The entry whose phrase is exactly this text, if any ("Heart rate"). */
export function lookupTerm(g: Glossary, phrase: string): GlossaryEntry | undefined {
  const segments = annotate(g, phrase);
  return segments.length === 1 ? segments[0]!.entry : undefined;
}

// A net under the developer's read-through, not a replacement for it: these
// catch the common forms of a dose or a warning, not every form.
const DOSE =
  /\d\s?(mg|mcg|micrograms?|milligrams?|g|grams?|mL|ml|millilitres?|units?|IU)\b|\b(once|twice|three times|four times) (a|per|each) day\b|\bdaily\b/i;
const WARNING = /\b(interact\w*|contraindicat\w*|avoid\w*|must not|should not|do not|don't|never|dangerous|together with)\b/i;

/** Content rules a schema can't express. Returns problems; empty is good. */
export function checkGlossary(g: Glossary, ingredients: readonly string[] = []): string[] {
  const problems: string[] = [];
  for (const e of g.entries) {
    for (const phrase of [e.term, ...e.aliases]) {
      if (!isWordChar(phrase[0]) || !isWordChar(phrase.at(-1))) {
        problems.push(`${e.id}: "${phrase}" must start and end with a letter or digit`);
      }
      if (/ {2}|[^\S ]/.test(phrase)) problems.push(`${e.id}: "${phrase}" has spacing other than single plain spaces`);
    }
    if (DOSE.test(e.explain)) problems.push(`${e.id}: explain gives a dose or a frequency`);
    if (WARNING.test(e.explain)) problems.push(`${e.id}: explain gives a warning or an interaction`);
    if (e.kind === "medicine") {
      const own = new Set([e.term, ...e.aliases].map((p) => p.toLowerCase()));
      const text = e.explain.toLowerCase();
      for (const name of ingredients) {
        const n = name.toLowerCase();
        if (own.has(n)) continue;
        const at = text.indexOf(n);
        if (at >= 0 && !isWordChar(text[at - 1]) && !isWordChar(text[at + n.length])) {
          problems.push(`${e.id}: explain names another medicine, ${name}`);
        }
      }
    }
  }
  return problems;
}
