// Crook bench results: every number on the page is computed here from docs/data/<run>.json,
// so the filters, the sort and the highlighted model always agree across the page.
"use strict";

const NS = "http://www.w3.org/2000/svg";
const $ = (s) => document.querySelector(s);
const FILES = location.hostname.endsWith("github.io") ? "https://raw.githubusercontent.com/woodytwoshoes/crook-bench/main/" : "../";
const SOURCE = "https://github.com/woodytwoshoes/crook-bench/blob/main/";

const state = { run: null, weights: "all", lab: "", human: true, sel: null, sort: { key: "score", dir: -1 }, heat: "case", cmp: "score", consult: null, tab: "transcript" };
const RUNS = {};
let runIndex = [];

// ---------- helpers ----------
function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") e.className = v;
    else if (k === "text") e.textContent = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? "" : v);
  }
  for (const c of kids.flat()) if (c != null) e.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return e;
}
function s(tag, attrs = {}, parent) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}
function stext(parent, x, y, str, cls = "", anchor = "start") {
  const t = s("text", { x, y, class: cls, "text-anchor": anchor }, parent);
  t.textContent = str;
  return t;
}
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const sd = (xs) => {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  return Math.sqrt(xs.reduce((t, x) => t + (x - m) ** 2, 0) / (xs.length - 1));
};
const pct = (e, m) => (m > 0 ? (100 * e) / m : null);
const f0 = (x) => (x == null || Number.isNaN(x) ? "–" : x.toFixed(0));
const f1 = (x) => (x == null || Number.isNaN(x) ? "–" : x.toFixed(1));
const money = (c) => (c == null ? "–" : c < 0.1 ? `${(c * 100).toFixed(1)}¢` : `$${c.toFixed(2)}`);
const signed = (n) => (n > 0 ? `+${n}` : String(n));

// ---------- aggregation ----------
const PARTS = [["history", "History"], ["examination", "Examination"], ["investigations", "Tests"], ["management", "Mgmt + dx"]];
function aggregate(run) {
  const by = new Map();
  for (const c of run.consults) by.set(c.model, [...(by.get(c.model) ?? []), c]);
  return [...by.entries()].map(([id, cs]) => {
    const meta = run.models[id];
    const scores = cs.map((c) => c.score);
    const part = (k) => mean(cs.map((c) => c.dom[k]).filter((d) => d && d.m > 0).map((d) => pct(d.e, d.m)));
    const flagsAll = cs.flatMap((c) => c.flags);
    const asked = cs.filter((c) => typeof c.questions === "number");
    const perTen = asked.filter((c) => c.questions > 0).map((c) => (10 * c.flags.reduce((a, b) => a + b, 0)) / c.questions);
    const costs = cs.map((c) => c.cost).filter((x) => typeof x === "number");
    const byCase = {};
    for (const k of Object.keys(run.cases)) byCase[k] = mean(cs.filter((c) => c.case === k).map((c) => c.score));
    const traps = {};
    for (const t of ["pen", "gtn", "ect"]) traps[t] = cs.filter((c) => c.traps.includes(t)).length;
    return {
      id, ...meta, n: cs.length, consults: cs,
      score: mean(scores), sd: sd(scores),
      history: part("history"), examination: part("examination"), investigations: part("investigations"), management: part("management"),
      flags: flagsAll.length ? (100 * flagsAll.reduce((a, b) => a + b, 0)) / flagsAll.length : null,
      questions: asked.length ? mean(asked.map((c) => c.questions)) : null,
      perTen: perTen.length ? mean(perTen) : null,
      dx: (100 * cs.filter((c) => c.dxRight).length) / cs.length,
      harms: cs.reduce((t, c) => t + c.harmful.length, 0) / cs.length,
      walkouts: cs.filter((c) => c.missed.length).length,
      cost: costs.length ? mean(costs) : null,
      byCase, traps,
    };
  });
}
function visible(m) {
  if (m.human) return state.human;
  if (state.weights === "open" && !m.open) return false;
  if (state.weights === "closed" && m.open) return false;
  if (state.lab && m.lab !== state.lab) return false;
  return true;
}
const rows = () => aggregate(RUNS[state.run]).filter(visible).sort((a, b) => b.score - a.score);

// ---------- tooltip ----------
const tip = $("#tip");
function showTip(ev, lines) {
  tip.replaceChildren(...lines.map(([k, v], i) => h("div", {}, i === 0 ? h("b", { text: k }) : [h("span", { class: "v", text: v }), " ", h("span", { class: "k", text: k })])));
  tip.hidden = false;
  moveTip(ev);
}
function moveTip(ev) {
  const r = tip.getBoundingClientRect();
  let x = ev.clientX + 14, y = ev.clientY + 14;
  if (x + r.width > innerWidth - 8) x = ev.clientX - r.width - 14;
  if (y + r.height > innerHeight - 8) y = ev.clientY - r.height - 14;
  tip.style.left = `${Math.max(8, x)}px`;
  tip.style.top = `${Math.max(8, y)}px`;
}
const hideTip = () => (tip.hidden = true);
function modelLines(m, extra = []) {
  const who = m.human ? "human, rescored under the 21 Oct rules" : `${m.lab}, ${m.open ? "open" : "closed"} weights`;
  return [[m.name], [who, ""], [`score (±${f0(m.sd)})`, `${f0(m.score)}%`], ["red flags caught", `${f0(m.flags)}%`], ["questions a consult", f0(m.questions)], ...(m.cost != null ? [["a consult", money(m.cost)]] : []), ...extra];
}
function hoverable(el, m, extra) {
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `${m.name}: ${f0(m.score)}%`);
  el.classList.add("hit");
  el.addEventListener("pointerenter", (e) => showTip(e, modelLines(m, extra)));
  el.addEventListener("pointermove", moveTip);
  el.addEventListener("pointerleave", hideTip);
  el.addEventListener("focus", () => { const b = el.getBoundingClientRect(); showTip({ clientX: b.right, clientY: b.top }, modelLines(m, extra)); });
  el.addEventListener("blur", hideTip);
  el.addEventListener("click", () => select(m.id));
  el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(m.id); } });
}
function select(id) {
  state.sel = state.sel === id ? null : id;
  render();
}

// ---------- marks ----------
// Colour is the lab, one per lab (Meta, Moonshot and Z.ai share Other's grey, so red stays
// for harms). Shape is the weights: filled circle closed, ring open; the registrar an ink square.
// The highlighted doctor is outlined in ink and the others fade.
const LABS = [["OpenAI", "openai"], ["Anthropic", "anthropic"], ["Google", "google"], ["xAI", "xai"], ["Alibaba Qwen", "qwen"], ["DeepSeek", "deepseek"], ["Mistral", "mistral"]];
const labColour = (m) => (m.human ? "var(--human)" : `var(--lab-${(LABS.find(([n]) => n === m.lab) ?? [null, "other"])[1]})`);
function marker(g, m, x, y, r = 6) {
  const fill = labColour(m);
  if (m.id === state.sel) {
    if (m.human) s("rect", { x: x - r - 3.5, y: y - r - 3.5, width: 2 * r + 7, height: 2 * r + 7, rx: 3, fill: "none", stroke: "var(--text)", "stroke-width": 2 }, g);
    else s("circle", { cx: x, cy: y, r: r + 3.5, fill: "none", stroke: "var(--text)", "stroke-width": 2 }, g);
  }
  if (m.human) return s("rect", { x: x - r, y: y - r, width: 2 * r, height: 2 * r, rx: 1.5, fill, stroke: "var(--surface)", "stroke-width": 2 }, g);
  if (m.open) return s("circle", { cx: x, cy: y, r: r - 1, fill: "var(--surface)", stroke: fill, "stroke-width": 2.5 }, g);
  return s("circle", { cx: x, cy: y, r, fill, stroke: "var(--surface)", "stroke-width": 2 }, g);
}
function legend(el, withHuman = true) {
  const item = (label, draw) => {
    const svg = s("svg", { viewBox: "-7 -7 14 14" });
    draw(svg);
    return h("span", {}, svg, label);
  };
  const others = [...new Set(Object.values(RUNS[state.run]?.models ?? {}).filter((m) => !m.human && !LABS.some(([n]) => n === m.lab)).map((m) => m.lab))].sort();
  el.replaceChildren(
    ...LABS.map(([n, k]) => item(n, (g) => s("circle", { cx: 0, cy: 0, r: 5, fill: `var(--lab-${k})` }, g))),
    item(`Other${others.length ? ` (${others.join(", ")})` : ""}`, (g) => s("circle", { cx: 0, cy: 0, r: 5, fill: "var(--lab-other)" }, g)),
    h("span", { class: "sep", "aria-hidden": "true", text: "·" }),
    item("Closed weights", (g) => s("circle", { cx: 0, cy: 0, r: 5, fill: "var(--mark)" }, g)),
    item("Open weights", (g) => s("circle", { cx: 0, cy: 0, r: 4, fill: "none", stroke: "var(--mark)", "stroke-width": 2.5 }, g)),
    withHuman ? item("A GP registrar", (g) => s("rect", { x: -5, y: -5, width: 10, height: 10, rx: 1.5, fill: "var(--human)" }, g)) : null,
    item("Highlighted (others fade)", (g) => { s("circle", { cx: 0, cy: 0, r: 5.5, fill: "none", stroke: "var(--text)", "stroke-width": 1.5 }, g); s("circle", { cx: 0, cy: 0, r: 3, fill: "var(--mark)" }, g); }),
  );
}

// ---------- header ----------
function renderFacts() {
  const run = RUNS[state.run];
  const ai = run.consults.filter((c) => !run.models[c.model].human);
  const doctors = new Set(ai.map((c) => c.model)).size;
  const right = ai.filter((c) => c.dxRight).length;
  const pen = ai.filter((c) => c.traps.includes("pen")).length;
  const penN = ai.filter((c) => c.case === "cough_pneumonia").length;
  const cost = ai.reduce((t, c) => t + (c.cost ?? 0), 0);
  $("#eyebrow").textContent = `Crook bench · ${run.label}`;
  $("#facts").replaceChildren(
    ...[[String(ai.length), `consultations by ${doctors} models`], [`${right}/${ai.length}`, "named the right diagnosis first"], [`${pen}/${penN}`, "gave penicillin to the allergic patient"], [`US$${cost.toFixed(0)}`, "doctor-model cost of the run"]]
      .map(([b, t]) => h("li", {}, h("b", { text: b }), h("span", { text: t }))),
  );
}

// ---------- filters ----------
function renderFilters() {
  $("#f-run").replaceChildren(...runIndex.map((r) => h("button", { type: "button", "aria-pressed": String(r.id === state.run), text: r.label.replace(/ 2026$/, ""), onclick: () => { state.run = r.id; state.consult = null; render(); } })));
  for (const b of $("#f-weights").children) b.setAttribute("aria-pressed", String(b.dataset.v === state.weights));
  const run = RUNS[state.run];
  const labs = [...new Set(Object.values(run.models).filter((m) => !m.human).map((m) => m.lab))].sort();
  const sel = $("#f-lab");
  sel.replaceChildren(h("option", { value: "", text: "All labs" }), ...labs.map((l) => h("option", { value: l, text: l })));
  if (!labs.includes(state.lab)) state.lab = "";
  sel.value = state.lab;
  const hasHuman = Object.values(run.models).some((m) => m.human);
  $("#f-human-wrap").hidden = !hasHuman;
  $("#f-human").checked = state.human;
  const m = state.sel && run.models[state.sel];
  $("#f-sel").hidden = !m;
  $("#f-hint").hidden = !!m;
  if (m) $("#f-sel-name").textContent = m.name;
}

// ---------- leaderboard ----------
const COLS = [
  { k: "rank", label: "#", sort: false },
  { k: "name", label: "Doctor" },
  { k: "n", label: "Consults" },
  { k: "score", label: "Score % (±sd)" },
  { k: "history", label: "History" },
  { k: "examination", label: "Exam" },
  { k: "investigations", label: "Tests" },
  { k: "management", label: "Mgmt + dx" },
  { k: "flags", label: "Red flags caught" },
  { k: "questions", label: "Questions asked" },
  { k: "perTen", label: "Red flags per 10 questions" },
  { k: "dx", label: "Top dx right" },
  { k: "harms", label: "Harms per consult" },
  { k: "walkouts", label: "Required care missed" },
  { k: "cost", label: "Cost per consult" },
];
function renderBoard() {
  const rs = rows();
  const rank = new Map(rs.filter((r) => !r.human).map((r, i) => [r.id, i + 1]));
  const { key, dir } = state.sort;
  const sorted = [...rs].sort((a, b) => {
    const x = a[key], y = b[key];
    if (x == null && y == null) return 0;
    if (x == null) return 1;
    if (y == null) return -1;
    return typeof x === "string" ? dir * x.localeCompare(y) : dir * (x - y);
  });
  const head = h("tr", {}, ...COLS.map((c) => {
    const th = h("th", { scope: "col", "aria-sort": c.k === key ? (dir < 0 ? "descending" : "ascending") : null });
    if (c.sort === false) th.textContent = c.label;
    else th.append(h("button", { type: "button", onclick: () => { state.sort = { key: c.k, dir: c.k === key ? -dir : c.k === "name" || c.k === "cost" || c.k === "harms" || c.k === "walkouts" ? 1 : -1 }; render(); } }, c.label, h("span", { class: "arrow", "aria-hidden": "true", text: c.k === key ? (dir < 0 ? "↓" : "↑") : "" })));
    return th;
  }));
  const body = sorted.map((m) => {
    const tr = h("tr", { class: [m.id === state.sel ? "sel" : "", m.human ? "human" : ""].join(" "), tabindex: "0", onclick: () => select(m.id), onkeydown: (e) => { if (e.key === "Enter") select(m.id); } });
    const cell = (c) => {
      switch (c.k) {
        case "rank": return h("td", { class: "n", text: m.human ? "" : String(rank.get(m.id)) });
        case "name": return h("td", {}, h("div", { class: "who" }, h("b", { text: m.name }), h("span", { text: m.human ? "Human reference, one play a case" : `${m.lab} · ${m.open ? "open" : "closed"} weights` })));
        case "n": return h("td", { class: "n", text: `${m.n}` });
        case "score": return h("td", { class: "n" }, h("span", { class: "scorecell" }, h("span", { class: "bar", "aria-hidden": "true" }, h("i", { style: `width:${Math.max(0, Math.min(100, m.score))}%;background:${labColour(m)}` })), h("span", { text: f0(m.score) }), h("span", { class: "sd", text: `±${f0(m.sd)}` })));
        case "flags": case "dx": return h("td", { class: "n", text: `${f0(m[c.k])}%` });
        case "perTen": return h("td", { class: "n", text: f1(m.perTen) });
        case "harms": return h("td", { class: `n ${m.harms > 0 ? "bad" : ""}`, text: m.harms.toFixed(2) });
        case "walkouts": return h("td", { class: `n ${m.walkouts > 0 ? "bad" : ""}`, text: String(m.walkouts) });
        case "cost": return h("td", { class: "n", text: money(m.cost) });
        default: return h("td", { class: "n", text: f0(m[c.k]) });
      }
    };
    tr.append(...COLS.map(cell));
    return tr;
  });
  $("#board-table").replaceChildren(h("thead", {}, head), h("tbody", {}, body));
  const run = RUNS[state.run];
  $("#board-note").textContent = `Patient, classifier and judge: ${run.patient}. ${run.rules}. Score is the mean share of each case's maximum; the four parts are each out of their own maximum. Rank counts models only.`;
}

// ---------- score bars ----------
function renderScore() {
  const svg = $("#c-score");
  svg.replaceChildren();
  const rs = rows();
  // The highlighted doctor's row opens into one line per case, with a mark for each consultation.
  const run = RUNS[state.run], cases = caseOrder(run), sub = 20;
  const heightOf = (m) => row + (m.id === state.sel ? cases.length * sub + 6 : 0);
  const W = widthOf(svg, 600), row = 28, T = 6, L = 190, R = W - 70;
  const bottom = T + rs.reduce((t, m) => t + heightOf(m), 0), H = bottom + 28;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.style.width = `${W}px`;
  const x = (v) => L + ((R - L) * Math.max(0, Math.min(100, v))) / 100;
  for (const t of [0, 20, 40, 60, 80, 100]) {
    s("line", { x1: x(t), x2: x(t), y1: T, y2: bottom, class: t ? "grid" : "base" }, svg);
    stext(svg, x(t), H - 8, `${t}%`, "axis", "middle");
  }
  let top = T;
  rs.forEach((m) => {
    const cy = top + row / 2, sel = m.id === state.sel;
    top += heightOf(m);
    const g = s("g", { class: state.sel && !sel ? "faded" : "" }, svg);
    if (sel) {
      cases.forEach((k, j) => {
        const y = cy + row / 2 + 4 + j * sub + sub / 2;
        stext(g, L - 12, y + 4, run.cases[k].title, "axis", "end");
        s("line", { x1: L, x2: R, y1: y, y2: y, class: "grid" }, g);
        for (const c of m.consults.filter((c) => c.case === k)) consultMark(g, c, x(c.score), y, k, cases);
      });
    }
    stext(g, L - 24, cy + 4, m.name, `lbl ${sel ? "sel" : ""}`, "end");
    marker(g, m, L - 12, cy, 4.5);
    const w = Math.max(4, x(m.score) - L);
    s("path", { d: `M${L},${cy - 7} h${w - 4} a4,4 0 0 1 4,4 v6 a4,4 0 0 1 -4,4 h${-(w - 4)} z`, fill: labColour(m), stroke: sel ? "var(--text)" : "none", "stroke-width": sel ? 1.5 : 0 }, g);
    const lo = x(m.score - m.sd), hi = x(m.score + m.sd);
    for (const [x1, x2, y1, y2] of [[lo, hi, cy, cy], [lo, lo, cy - 4, cy + 4], [hi, hi, cy - 4, cy + 4]]) s("line", { x1, x2, y1, y2, stroke: "var(--muted)", "stroke-width": 1.5 }, g);
    stext(g, hi + 8, cy + 4, `${f0(m.score)}%`, "num");
    // Behind the consultation marks, so they keep their own hover and click.
    g.insertBefore(hitFor(s("rect", { x: 0, y: cy - row / 2, width: W, height: row, fill: "transparent" }), m), g.firstChild);
  });
}

// ---------- one doctor's consultations ----------
// A doctor's point, clicked, opens into its consultations: one mark each, its shape the case.
const SHAPES = ["circle", "square", "triangle", "diamond", "cross"];
const caseOrder = (run) => Object.keys(run.cases);
function shapeAt(g, kind, x, y, r, attrs) {
  const at = { ...attrs };
  if (kind === "circle") return s("circle", { cx: x, cy: y, r, ...at }, g);
  if (kind === "square") return s("rect", { x: x - r * 0.88, y: y - r * 0.88, width: r * 1.76, height: r * 1.76, ...at }, g);
  if (kind === "triangle") return s("path", { d: `M${x},${y - r * 1.1} L${x + r * 1.05},${y + r * 0.8} L${x - r * 1.05},${y + r * 0.8} Z`, ...at }, g);
  if (kind === "diamond") return s("path", { d: `M${x},${y - r * 1.2} L${x + r * 1.1},${y} L${x},${y + r * 1.2} L${x - r * 1.1},${y} Z`, ...at }, g);
  const a = r * 0.42;
  return s("path", { d: `M${x - a},${y - r} h${2 * a} v${r - a} h${r - a} v${2 * a} h${-(r - a)} v${r - a} h${-2 * a} v${-(r - a)} h${-(r - a)} v${-2 * a} h${r - a} Z`, ...at }, g);
}
function consultMark(g, c, x, y, k, cases) {
  const run = RUNS[state.run];
  const kind = SHAPES[cases.indexOf(k) % SHAPES.length];
  shapeAt(g, kind, x, y, 5, { fill: labColour(run.models[c.model]), stroke: "var(--text)", "stroke-width": 1 });
  const hit = s("circle", { cx: x, cy: y, r: 11, fill: "transparent", class: "hit", tabindex: "0", role: "button" }, g);
  const flagShare = c.flags.length ? (100 * c.flags.reduce((a, b) => a + b, 0)) / c.flags.length : null;
  const lines = () => [[`${run.cases[k].title} #${c.rep}`], ["score", `${f0(c.score)}%`], ["questions", c.questions == null ? "–" : String(c.questions)], ["red flags", `${f0(flagShare)}%`], ...(c.cost != null ? [["doctor cost", money(c.cost)]] : []), ["click to open the consultation", ""]];
  hit.setAttribute("aria-label", `${run.cases[k].title} #${c.rep}: ${f0(c.score)}%. Open the consultation.`);
  hit.addEventListener("pointerenter", (e) => showTip(e, lines()));
  hit.addEventListener("pointermove", moveTip);
  hit.addEventListener("pointerleave", hideTip);
  hit.addEventListener("focus", () => { const b = hit.getBoundingClientRect(); showTip({ clientX: b.right, clientY: b.top }, lines()); });
  hit.addEventListener("blur", hideTip);
  hit.addEventListener("click", (e) => { e.stopPropagation(); hideTip(); openConsult(c.file); });
  hit.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openConsult(c.file); } });
}
function renderBurstLegend() {
  const el = $("#burst-legend"), run = RUNS[state.run], m = state.sel && run.models[state.sel];
  el.hidden = !m;
  if (!m) return;
  const cases = caseOrder(run);
  el.replaceChildren(h("span", { text: `${m.name}'s consultations, by case:` }), ...cases.map((k, i) => {
    const sv = s("svg", { viewBox: "-7 -7 14 14" });
    shapeAt(sv, SHAPES[i % SHAPES.length], 0, 0, 5, { fill: labColour(m), stroke: "var(--text)", "stroke-width": 1 });
    return h("span", {}, sv, run.cases[k].title);
  }), h("span", { text: "Click a mark to open that consultation." }));
}
const hitFor = (el, m, extra) => { hoverable(el, m, extra); return el; };

// ---------- scatter ----------
function scatter(svg, pts, xs, ys, xLabel, yLabel, burst) {
  svg.replaceChildren();
  const W = widthOf(svg, 360), H = Math.round(Math.min(460, Math.max(320, W * 0.66))), L = 56, R = W - 20, T = 12, B = H - 50;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.style.width = `${W}px`;
  for (const t of ys.ticks) {
    const y = ys.f(t, T, B);
    s("line", { x1: L, x2: R, y1: y, y2: y, class: t === ys.ticks[0] ? "base" : "grid" }, svg);
    stext(svg, L - 8, y + 4, ys.fmt(t), "axis", "end");
  }
  for (const t of xs.ticks) {
    const x = xs.f(t, L, R);
    s("line", { x1: x, x2: x, y1: T, y2: B, class: "grid" }, svg);
    stext(svg, x, B + 18, xs.fmt(t), "axis", "middle");
  }
  stext(svg, (L + R) / 2, H - 6, xLabel, "", "middle");
  stext(svg, 12, (T + B) / 2, yLabel, "", "middle").setAttribute("transform", `rotate(-90 12 ${(T + B) / 2})`);
  const P = pts.map((m) => ({ m, x: xs.f(xs.v(m), L, R), y: ys.f(ys.v(m), T, B) }));
  // The highlighted model is labelled first, so it always gets its label.
  P.sort((a, b) => (b.m.id === state.sel) - (a.m.id === state.sel));
  const boxes = P.map((p) => ({ x1: p.x - 8, x2: p.x + 8, y1: p.y - 8, y2: p.y + 8 }));
  const clash = (b) => b.x1 < L || b.x2 > R || b.y1 < T || b.y2 > B || boxes.some((o) => b.x1 < o.x2 && b.x2 > o.x1 && b.y1 < o.y2 && b.y2 > o.y1);
  for (const p of P) {
    const w = p.m.name.length * 6.4, hgt = 14;
    for (const [dx, dy, a] of [[11, 4, "start"], [-11, 4, "end"], [0, -12, "middle"], [0, 22, "middle"], [11, -8, "start"], [-11, -8, "end"], [11, 16, "start"], [-11, 16, "end"]]) {
      const x1 = a === "start" ? p.x + dx : a === "end" ? p.x + dx - w : p.x - w / 2;
      const b = { x1, x2: x1 + w, y1: p.y + dy - 11, y2: p.y + dy - 11 + hgt };
      if (!clash(b)) { boxes.push(b); p.label = [p.x + dx, p.y + dy, a]; break; }
    }
  }
  for (const p of P.reverse()) {
    const g = s("g", { class: state.sel && p.m.id !== state.sel ? "faded" : "" }, svg), sel = p.m.id === state.sel;
    marker(g, p.m, p.x, p.y, sel ? 7.5 : 6);
    if (p.label) stext(g, p.label[0], p.label[1], p.m.name, `lbl ${sel ? "sel" : ""}`, p.label[2]);
    hoverable(s("circle", { cx: p.x, cy: p.y, r: 14, fill: "transparent" }, g), p.m);
  }
  // The highlighted doctor's consultations, each at its own position, spoked to the mean.
  const hub = P.find((p) => p.m.id === state.sel);
  if (hub && burst) {
    const run = RUNS[state.run], cases = caseOrder(run), g = s("g", {}, svg);
    const at = hub.m.consults.map((c) => ({ c, v: burst(c) })).filter((d) => d.v);
    const px = (d) => Math.max(L, Math.min(R, xs.f(d.v[0], L, R))), py = (d) => Math.max(T, Math.min(B, ys.f(d.v[1], T, B)));
    for (const d of at) s("line", { x1: hub.x, y1: hub.y, x2: px(d), y2: py(d), stroke: "var(--text)", "stroke-width": 1, opacity: 0.3 }, g);
    for (const d of at) consultMark(g, d.c, px(d), py(d), d.c.case, cases);
  }
}
const lin = (lo, hi) => (v, a, b) => b - ((v - lo) / (hi - lo)) * (b - a);
const linX = (lo, hi) => (v, a, b) => a + ((v - lo) / (hi - lo)) * (b - a);
const logX = (lo, hi) => (v, a, b) => a + ((Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo))) * (b - a);
// Charts are drawn at the width they're shown at, so text stays 12px; below minW the panel scrolls.
const widthOf = (svg, minW) => Math.max(minW, Math.floor((svg.parentElement.clientWidth || 1100) - 32));
const niceMax = (v, step) => Math.max(step, Math.ceil(v / step) * step);
function renderScatters() {
  const rs = rows();
  const priced = rs.filter((m) => m.cost != null && m.cost > 0);
  // The axes stretch to take the highlighted doctor's single consultations too.
  const own = rs.find((m) => m.id === state.sel)?.consults ?? [];
  const costs = [...priced.map((m) => m.cost), ...own.map((c) => c.cost).filter((x) => x > 0)];
  const cLo = Math.min(0.01, ...costs) / 1.5, cHi = Math.max(1, ...costs) * 1.5;
  const sLo = Math.max(0, Math.floor((Math.min(...rs.map((m) => m.score), ...own.map((c) => c.score)) - 5) / 10) * 10);
  const ticksC = [0.003, 0.01, 0.03, 0.1, 0.3, 1, 3, 10].filter((t) => t >= cLo && t <= cHi);
  const ticksS = []; for (let t = sLo; t <= 100; t += 10) ticksS.push(t);
  scatter($("#c-cost"), priced, { v: (m) => m.cost, f: logX(cLo, cHi), ticks: ticksC, fmt: (t) => (t < 0.1 ? `${+(t * 100).toFixed(1)}¢` : `$${t}`) },
    { v: (m) => m.score, f: lin(sLo, 100), ticks: ticksS, fmt: (t) => `${t}%` }, "Cost per consultation (US$, log scale)", "Score",
    (c) => (c.cost > 0 ? [c.cost, c.score] : null));
  const qMax = niceMax(Math.max(...rs.map((m) => m.questions ?? 0), ...own.map((c) => c.questions ?? 0)) + 2, 5);
  const ticksQ = []; for (let t = 0; t <= qMax; t += 5) ticksQ.push(t);
  scatter($("#c-flags"), rs.filter((m) => m.questions != null), { v: (m) => m.questions, f: linX(0, qMax), ticks: ticksQ, fmt: String },
    { v: (m) => m.flags, f: lin(0, 100), ticks: [0, 20, 40, 60, 80, 100], fmt: (t) => `${t}%` }, "Questions asked per consultation", "Red flags caught",
    (c) => (c.questions == null || !c.flags.length ? null : [c.questions, (100 * c.flags.reduce((a, b) => a + b, 0)) / c.flags.length]));
}

// ---------- heatmap ----------
const BINS = [40, 55, 70, 80, 90];
const bin = (v) => (v == null ? -1 : BINS.findIndex((b) => v < b) === -1 ? 5 : BINS.findIndex((b) => v < b));
function renderHeat() {
  for (const b of $("#heat-mode").children) b.setAttribute("aria-pressed", String(b.dataset.v === state.heat));
  const run = RUNS[state.run], rs = rows();
  const cols = state.heat === "case" ? Object.entries(run.cases).map(([k, c]) => [k, c.title, c.key]) : PARTS.map(([k, n]) => [k, n, ""]);
  const svg = $("#c-heat");
  svg.replaceChildren();
  const W = widthOf(svg, 720), L = 190, T = 46, row = 28, cw = (W - L) / cols.length, H = T + rs.length * row + 4;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.style.width = `${W}px`;
  cols.forEach(([, a, b], j) => {
    stext(svg, L + j * cw + cw / 2, b ? 18 : 28, a, "lbl", "middle");
    if (b) stext(svg, L + j * cw + cw / 2, 34, b, "axis", "middle");
  });
  rs.forEach((m, i) => {
    const y = T + i * row, sel = m.id === state.sel;
    stext(svg, L - 12, y + row / 2 + 4, m.name, `lbl ${sel ? "sel" : ""}`, "end");
    cols.forEach(([k, a], j) => {
      const v = state.heat === "case" ? m.byCase[k] : m[k];
      const b = bin(v), x = L + j * cw, g = s("g", {}, svg);
      s("rect", { x: x + 1, y: y + 1, width: cw - 2, height: row - 2, rx: 3, fill: b < 0 ? "var(--raised)" : `var(--seq-${b})`, stroke: sel ? "var(--text)" : "none", "stroke-width": sel ? 2 : 0 }, g);
      const t = stext(g, x + cw / 2, y + row / 2 + 4, v == null ? "–" : f0(v), "num", "middle");
      t.style.fill = b < 0 ? "var(--text)" : `var(--seq-t${b})`;
      hoverable(s("rect", { x, y, width: cw, height: row, fill: "transparent" }, g), m, [[a, `${f0(v)}%`]]);
    });
  });
  const lg = $("#heat-legend");
  lg.replaceChildren(...["under 40", "40–54", "55–69", "70–79", "80–89", "90 and over"].map((t, i) => {
    const sv = s("svg", { viewBox: "0 0 12 12" });
    s("rect", { x: 0, y: 0, width: 12, height: 12, rx: 2, fill: `var(--seq-${i})`, stroke: "var(--control)", "stroke-width": i ? 0 : 1 }, sv);
    return h("span", {}, sv, `${t}%`);
  }));
}

// ---------- traps ----------
function renderTraps() {
  const run = RUNS[state.run], rs = rows();
  const T = [["pen", "cough_pneumonia", "Penicillin for the allergic patient", "Cough and fever"], ["gtn", "chest_pain_stemi", "GTN after Viagra", "Chest pain"], ["ect", "abdo_pain_appendicitis", "Ectopic pregnancy named for a man", "Abdominal pain"]];
  const dots = (n, of) => h("span", { class: "dots", "aria-hidden": "true" }, ...Array.from({ length: of }, (_, i) => h("i", { class: i < n ? "on" : "" })));
  const head = h("tr", {}, h("th", { text: "Doctor" }), ...T.map(([, , a, b]) => h("th", {}, a, h("br"), h("span", { class: "muted", text: `(${b})` }))), h("th", { text: "Harmful actions, all cases" }), h("th", { text: "Required care missed" }));
  const body = rs.map((m) => h("tr", { class: m.id === state.sel ? "sel" : "", onclick: () => select(m.id), style: "cursor:pointer" },
    h("td", { text: m.name }),
    ...T.map(([k, c]) => { const of = m.consults.filter((x) => x.case === c).length; return h("td", { class: "n" }, dots(m.traps[k], of), `${m.traps[k]} of ${of}`); }),
    h("td", { class: "n", text: String(m.consults.reduce((t, c) => t + c.harmful.length, 0)) }),
    h("td", { class: "n", text: String(m.walkouts) })));
  $("#traps-table").replaceChildren(h("thead", {}, head), h("tbody", {}, body));
  $("#case-notes").replaceChildren(h("ul", {}, ...Object.values(run.cases).map((c) => h("li", {}, h("b", { text: `${c.title} (${c.patient}): ` }), `${c.key}. ${c.trap}`))));
}

// ---------- two runs ----------
const SUCCESSORS = { "google/gemini-3.1-pro-preview": "google/gemini-4-argon", "mistralai/mistral-medium-3-5": "mistralai/mistral-large-4-0" };
function renderCompare() {
  for (const b of $("#cmp-metric").children) b.setAttribute("aria-pressed", String(b.dataset.v === state.cmp));
  const svg = $("#c-compare");
  svg.replaceChildren();
  const A = RUNS["2026-10-04"], B = RUNS["2026-10-21"];
  if (!A || !B) { svg.setAttribute("viewBox", "0 0 640 40"); stext(svg, 320, 24, "The comparison needs both runs.", "", "middle"); return; }
  const a = new Map(aggregate(A).map((m) => [m.id, m])), b = new Map(aggregate(B).map((m) => [m.id, m]));
  const pairs = [];
  for (const [id, old] of a) {
    const nid = b.has(id) ? id : SUCCESSORS[id];
    const now = nid && b.get(nid);
    if (now && visible(now)) pairs.push({ old, now, swap: nid !== id });
  }
  const k = state.cmp;
  pairs.sort((p, q) => q.now[k] - p.now[k]);
  const vals = pairs.flatMap((p) => [p.old[k], p.now[k]]);
  const hi = k === "questions" ? niceMax(Math.max(...vals) + 2, 5) : 100;
  const lo = k === "questions" ? 0 : Math.max(0, Math.floor((Math.min(...vals) - 5) / 10) * 10);
  const W = widthOf(svg, 640), row = 30, T = 6, L = 300, R = W - 50, H = T + pairs.length * row + 28;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.style.width = `${W}px`;
  const x = (v) => L + ((R - L) * (v - lo)) / (hi - lo);
  const step = k === "questions" ? 5 : 10;
  for (let t = lo; t <= hi; t += step) {
    s("line", { x1: x(t), x2: x(t), y1: T, y2: T + pairs.length * row, class: t === lo ? "base" : "grid" }, svg);
    stext(svg, x(t), H - 8, k === "questions" ? String(t) : `${t}%`, "axis", "middle");
  }
  pairs.forEach((p, i) => {
    const cy = T + i * row + row / 2, sel = p.now.id === state.sel || p.old.id === state.sel;
    const g = s("g", { class: state.sel && !sel ? "faded" : "" }, svg);
    stext(g, L - 16, cy + 4, p.swap ? `${p.old.name} → ${p.now.name}` : p.now.name, `lbl ${sel ? "sel" : ""}`, "end");
    const x1 = x(p.old[k]), x2 = x(p.now[k]), lab = labColour(p.now);
    s("line", { x1, x2, y1: cy, y2: cy, stroke: lab, "stroke-width": 2, "stroke-dasharray": p.swap ? "4 3" : null }, g);
    s("circle", { cx: x1, cy, r: 5, fill: "var(--surface)", stroke: lab, "stroke-width": 2 }, g);
    if (sel) s("circle", { cx: x2, cy, r: 9.5, fill: "none", stroke: "var(--text)", "stroke-width": 2 }, g);
    s("circle", { cx: x2, cy, r: 6, fill: lab, stroke: "var(--surface)", "stroke-width": 2 }, g);
    const d = p.now[k] - p.old[k];
    stext(g, Math.max(x1, x2) + 12, cy + 4, `${d >= 0 ? "+" : "−"}${f0(Math.abs(d))}`, "num");
    const fmt = (v) => (k === "questions" ? f0(v) : `${f0(v)}%`);
    hoverable(s("rect", { x: 0, y: cy - row / 2, width: W, height: row, fill: "transparent" }, g), p.now, [[`on 4 Oct${p.swap ? ` (${p.old.name})` : ""}`, fmt(p.old[k])], ["on 21 Oct", fmt(p.now[k])]]);
  });
  const lg = $("#cmp-legend");
  const it = (label, draw) => { const sv = s("svg", { viewBox: "-7 -7 14 14" }); draw(sv); return h("span", {}, sv, label); };
  lg.replaceChildren(
    it("4 October", (g) => s("circle", { cx: 0, cy: 0, r: 4, fill: "var(--surface)", stroke: "var(--muted)", "stroke-width": 2 }, g)),
    it("21 October", (g) => s("circle", { cx: 0, cy: 0, r: 5, fill: "var(--mark)" }, g)),
    h("span", { text: "Colour: the lab. Dashed: a successor model replaced the 4 October one" }),
  );
}
const CHANGES = [
  ["The patient", "Qwen3 8B played the patient, the question classifier and the end-of-consult judge on 4 October. On 21 October the live game's models did: Gemini 3.1 Flash-Lite as the classifier, Gemini 3.5 Flash-Lite as the patient's voice and the judge."],
  ["8 October", "The diagnosis became two slots, most likely and can't miss (a middle differential slot worth +5 was dropped). Alternatives for one job, such as two antibiotics, pay once, and each further one costs 2. Palpating the abdomen counts as palpating above the pubic bone."],
  ["12–13 October", "A medicine costs one −30 however many safety rules it breaks. No part of the bill reads over its maximum. A question listing more than six topics gets a request to slow down and earns nothing."],
  ["19 October", "Only essential tests count in the Tests maximum. A medicine given earlier in the consult counts for interactions. Some spoken items are matched by their words in code (for example the phone number of a crisis line). A credited plan item must share a word with what was said, and is checked against what the doctor then did."],
  ["The models", "Gemini 4 Argon replaced Gemini 3.1 Pro, and Mistral Large 4 replaced Mistral Medium 3.5. The other eleven are the same model versions."],
  ["The cases", "The five cases were revised between the runs as the developer reviewed them."],
];
function renderChanges() {
  $("#changes").replaceChildren(...CHANGES.map(([a, b]) => h("li", {}, h("b", { text: `${a}. ` }), b)));
}

// ---------- consultation map and viewer ----------
function renderMap() {
  const run = RUNS[state.run], rs = rows();
  const cases = Object.entries(run.cases);
  const head = h("tr", {}, h("th", { text: "Doctor" }), ...cases.map(([, c]) => h("th", { text: c.title })));
  const body = rs.map((m) => h("tr", { class: m.id === state.sel ? "sel" : "" },
    h("td", { text: m.name }),
    ...cases.map(([k]) => h("td", { class: "cell" }, ...m.consults.filter((c) => c.case === k).map((c) => {
      const b = bin(c.score);
      return h("button", { type: "button", class: "cbtn", "aria-current": String(state.consult === c.file), title: `${m.name}, ${run.cases[k].title} #${c.rep}: ${f0(c.score)}%`, style: `background:var(--seq-${b});color:var(--seq-t${b})`, text: f0(c.score), onclick: () => openConsult(c.file) });
    })))));
  $("#cmap").replaceChildren(h("thead", {}, head), h("tbody", {}, body));
}
const cache = new Map();
async function fetchText(path) {
  if (!cache.has(path)) cache.set(path, fetch(FILES + path).then((r) => { if (!r.ok) throw new Error(`${r.status} ${path}`); return r.text(); }));
  return cache.get(path);
}
function openConsult(file) {
  state.consult = file;
  state.tab = "transcript";
  writeHash();
  renderMap();
  renderViewer();
  $("#viewer").scrollIntoView({ behavior: "smooth", block: "start" });
}
function parseMd(md) {
  const lines = md.replace(/\r/g, "").split("\n");
  const pre = [], talk = [], bill = [];
  let outcome = [], head = "", phase = "pre";
  for (const line of lines) {
    if (line.startsWith("# ")) continue;
    if (line.startsWith("## Bill")) { phase = "bill"; head = line.slice(3); continue; }
    if (phase === "bill") {
      const m = line.match(/^- ([+−-]?\d+) (.*)$/);
      if (m) bill.push({ p: Number(m[1].replace("−", "-")), label: m[2] });
      else if (line.trim()) { phase = "outcome"; outcome.push(line); }
      continue;
    }
    if (phase === "outcome") { outcome.push(line); continue; }
    const dr = line.match(/^DR: (.*)$/), pt = line.match(/^PT: (.*)$/);
    if (dr || pt) { phase = "talk"; talk.push({ who: dr ? "dr" : "pt", text: (dr || pt)[1] }); continue; }
    if (phase === "pre") { if (line.trim()) pre.push(line); continue; }
    if (!line.trim()) continue;
    const last = talk[talk.length - 1];
    if (last && last.who === "act") last.lines.push(line.trim());
    else talk.push({ who: "act", lines: [line.trim()] });
  }
  return { pre, talk, bill, head, outcome: outcome.join("\n").trim() };
}
function actLine(t) {
  const abn = /\[abnormal\]/.test(t);
  return h("div", { class: abn ? "abn" : "" }, t.replace(/\s*\[abnormal\]/, abn ? " (abnormal)" : ""));
}
async function renderViewer() {
  const run = RUNS[state.run];
  const c = state.consult && run.consults.find((x) => x.file === state.consult);
  const main = $("#v-main"), side = $("#v-side");
  if (!c) { main.replaceChildren(h("div", { class: "empty", text: "Pick a consultation above." })); side.hidden = true; return; }
  const m = run.models[c.model], kase = run.cases[c.case];
  const tabs = [["transcript", "Transcript"], ["bill", "Bill"], ["log", "Move log"]];
  const body = h("div", {}, h("div", { class: "empty", text: "Loading…" }));
  main.replaceChildren(
    h("div", { class: "vhead" }, h("div", {}, h("h3", { text: `${m.name} · ${kase.title} #${c.rep}` }), h("div", { class: "small", text: `${kase.patient} · ${kase.key}` })), h("div", { class: "score", text: `${c.total} / ${c.max}` })),
    h("div", { class: "tabs", role: "tablist" }, ...tabs.map(([k, l]) => h("button", { type: "button", role: "tab", "aria-selected": String(state.tab === k), text: l, onclick: () => { state.tab = k; renderViewer(); } }))),
    body,
  );
  renderSide(c, m, kase);
  try {
    if (state.tab === "log") {
      const log = JSON.parse(await fetchText(`${c.file}.log.json`));
      body.replaceChildren(renderLog(log));
    } else {
      const md = parseMd(await fetchText(`${c.file}.md`));
      body.replaceChildren(state.tab === "bill" ? renderBill(md) : renderTranscript(md, m));
    }
  } catch (e) {
    body.replaceChildren(h("div", { class: "empty", text: `Couldn't load this file (${e.message}).` }));
  }
}
function renderTranscript(md, m) {
  return h("div", { class: "transcript" },
    h("div", { class: "preamble", text: md.pre.join("\n") }),
    ...md.talk.map((t) => t.who === "act" ? h("div", { class: "act" }, ...t.lines.map(actLine))
      : h("div", { class: `say ${t.who}` }, h("div", { class: "who", text: t.who === "dr" ? `Doctor (${m.name})` : "Patient" }), h("p", { text: t.text }))));
}
function renderBill(md) {
  return h("div", { class: "bill" },
    h("p", { class: "small", text: md.head }),
    h("ul", {}, ...md.bill.map((b) => h("li", {}, h("span", { class: `p ${b.p < 0 ? "minus" : b.p === 0 ? "zero" : ""}`, text: signed(b.p) }), h("span", { text: b.label })))),
    h("p", { class: "outcome", text: md.outcome }));
}
function renderLog(log) {
  const what = (e) => {
    switch (e.type) {
      case "say": return `“${e.utterance}”${e.released?.length ? ` → released ${e.released.join(", ")}` : ""}${e.flooded ? " (flooded)" : ""}`;
      default: {
        const { type, awards, score, reply, ...rest } = e;
        return Object.entries(rest).map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`).join("; ");
      }
    }
  };
  return h("div", { class: "scroll", style: "max-height:760px;overflow:auto" }, h("table", { class: "log" },
    h("thead", {}, h("tr", {}, h("th", { text: "Move" }), h("th", { text: "What" }), h("th", { text: "Points" }))),
    h("tbody", {}, ...log.map((e) => h("tr", {}, h("td", { class: "t", text: e.type }), h("td", { text: what(e) }),
      h("td", {}, ...(e.awards ?? []).map((a) => h("div", { class: `pts ${a.points < 0 ? "minus" : ""}`, text: `${signed(a.points)} ${a.label}` }))))))));
}
function renderSide(c, m, kase) {
  const side = $("#v-side");
  side.hidden = false;
  const parts = PARTS.map(([k, n]) => {
    const d = c.dom[k];
    const p = d && d.m > 0 ? Math.min(100, pct(d.e, d.m)) : 100;
    return h("div", { class: "part" }, h("div", { class: "figs" }, h("span", { text: n }), h("b", { text: d ? `${d.e} of ${d.m}` : "–" })), h("div", { class: "track" }, h("i", { style: `width:${Math.max(0, p)}%` })));
  });
  const flags = kase.flags.map((t, i) => h("li", { class: c.flags[i] ? "" : "bad" }, `${c.flags[i] ? "✓" : "✗"} ${t}`));
  const dl = (pairs) => h("dl", { class: "kv" }, ...pairs.flatMap(([k, v]) => [h("dt", { text: k }), h("dd", {}, v)]));
  side.replaceChildren(
    h("div", { class: "vhead" }, h("div", {}, h("div", { class: "score", text: `${f0(c.score)}%` }), h("div", { class: "small", text: `${c.level} · outcome ${c.consequence}` }))),
    h("div", { class: "parts" }, ...parts),
    dl([
      ["Diagnosis", h("div", {}, ...c.dx.map((d) => h("div", { text: `${d.slot}: ${d.id.replace(/_/g, " ")}${d.role ? ` (${d.role})` : ""}` })))],
      ["Questions", c.questions == null ? "–" : String(c.questions)],
      ["Harmful", c.harmful.length ? h("div", { class: "bad" }, ...c.harmful.map((x) => h("div", { text: x }))) : "none"],
      ["Unnecessary", c.unnecessary.length ? c.unnecessary.join("; ") : "none"],
      ["Required care missed", c.missed.length ? h("span", { class: "bad", text: c.missed.join("; ") }) : "none"],
      ["Doctor cost", money(c.cost)],
      ["Files", h("span", {}, h("a", { href: `${SOURCE}${c.file}.md`, text: "transcript" }), " · ", h("a", { href: `${SOURCE}${c.file}.log.json`, text: "log" }), " · ", h("a", { href: `${SOURCE}${c.file}.json`, text: "record" }))],
    ]),
    h("div", { style: "padding:0 16px 16px" }, h("h3", { text: "Red flags", style: "margin-bottom:6px" }), h("ul", { class: "small", style: "margin:0;padding-left:0;list-style:none;display:grid;gap:2px" }, ...flags)),
  );
}

// ---------- URL state ----------
function writeHash() {
  const p = new URLSearchParams();
  p.set("run", state.run);
  if (state.weights !== "all") p.set("w", state.weights);
  if (state.lab) p.set("lab", state.lab);
  if (!state.human) p.set("human", "0");
  if (state.sel) p.set("m", state.sel);
  if (state.sort.key !== "score" || state.sort.dir !== -1) p.set("sort", `${state.sort.key}${state.sort.dir < 0 ? "-" : "+"}`);
  if (state.heat !== "case") p.set("heat", state.heat);
  if (state.cmp !== "score") p.set("cmp", state.cmp);
  if (state.consult) p.set("c", state.consult);
  history.replaceState(null, "", `#${p}`);
}
function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  if (p.get("run") && RUNS[p.get("run")]) state.run = p.get("run");
  if (["open", "closed"].includes(p.get("w"))) state.weights = p.get("w");
  state.lab = p.get("lab") ?? "";
  state.human = p.get("human") !== "0";
  state.sel = p.get("m");
  const so = p.get("sort")?.match(/^(\w+)([+-])$/);
  if (so && COLS.some((c) => c.k === so[1])) state.sort = { key: so[1], dir: so[2] === "-" ? -1 : 1 };
  if (p.get("heat") === "part") state.heat = "part";
  if (["flags", "questions"].includes(p.get("cmp"))) state.cmp = p.get("cmp");
  state.consult = p.get("c");
}

// ---------- wiring ----------
function render() {
  writeHash();
  hideTip();
  renderFilters();
  renderFacts();
  renderBoard();
  legend($("#legend"));
  renderScore();
  renderScatters();
  renderBurstLegend();
  renderHeat();
  renderTraps();
  renderCompare();
  renderMap();
  renderViewer();
}
for (const b of $("#f-weights").children) b.addEventListener("click", () => { state.weights = b.dataset.v; render(); });
$("#f-lab").addEventListener("change", (e) => { state.lab = e.target.value; render(); });
$("#f-human").addEventListener("change", (e) => { state.human = e.target.checked; render(); });
$("#f-sel").addEventListener("click", () => { state.sel = null; render(); });
for (const b of $("#heat-mode").children) b.addEventListener("click", () => { state.heat = b.dataset.v; render(); });
for (const b of $("#cmp-metric").children) b.addEventListener("click", () => { state.cmp = b.dataset.v; render(); });
let resizeTimer;
addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { if (state.run) { renderScore(); renderScatters(); renderHeat(); renderCompare(); } }, 150); });
renderChanges();

(async function boot() {
  runIndex = await fetch("data/runs.json").then((r) => r.json());
  await Promise.all(runIndex.map(async (r) => { RUNS[r.id] = await fetch(`data/${r.id}.json`).then((x) => x.json()); }));
  state.run = runIndex[0].id;
  readHash();
  render();
})().catch((e) => {
  $("main").prepend(h("div", { class: "panel pad bad", text: `Couldn't load the results: ${e.message}` }));
});
