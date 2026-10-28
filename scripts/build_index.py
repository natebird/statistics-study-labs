#!/usr/bin/env python3
"""Rebuild index.html from the topic list and READY units in assets/lab.js.

Run from the repo root:  python3 scripts/build_index.py
Each lab's card text comes from its <meta name="description">, falling back to its lede.
"""
import html, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
js = open(os.path.join(ROOT, "assets/lab.js"), encoding="utf-8").read()
ready = json.loads(re.search(r"var READY = (\[[^\]]*\]);", js).group(1))
topics = re.findall(r'\{ id: "(\d\.\d+)", file: "([^"]+)", title: "([^"]+)" \}', js)
WEIGHTS = {1: "20–30%", 2: "15–25%", 3: "15–25%", 4: "10–20%", 5: "10–20%"}
TITLES = {1: "Exploring One-Variable Data and Collecting Data", 2: "Probability, Random Variables, and Probability Distributions", 3: "Inference for Categorical Data: Proportions",
          4: "Inference for Quantitative Data: Means", 5: "Regression Analysis"}

def blurb(path):
    try:
        s = open(path, encoding="utf-8").read()
    except FileNotFoundError:
        return ""
    m = re.search(r'<meta name="description" content="([^"]+)"', s) or re.search(r'<p class="lede">(.*?)</p>', s, re.S)
    if not m:
        return ""
    text = re.sub(r"<[^>]+>", "", m.group(1)).strip()
    first = re.split(r"(?<=[.!?])\s", text)[0]
    return html.escape(html.unescape(first), quote=False)

def decode(t):
    return re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), t)

units_html = []
for u in range(1, 6):
    ts = [(i, f, decode(t)) for i, f, t in topics if int(i.split(".")[0]) == u]
    head = f'''  <div class="unit-head">
    <h2 id="unit-{u}" style="font-size:1.4rem;"><span class="num">Unit {u}</span> {html.escape(TITLES[u])}</h2>
    <span class="meta">{WEIGHTS[u]} of the multiple-choice section · <a href="terms/unit-{u}.html">Unit {u} terms</a></span>
  </div>'''
    if u in ready:
        cards = "\n".join(
            f'    <a class="card lab-card" href="labs/{f}"><span class="num">Topic {i}</span><h3>{html.escape(t)}</h3><p>{blurb(os.path.join(ROOT, "labs", f))}</p><span class="go">Open lab →</span></a>'
            for i, f, t in ts)
        body = f'  <div class="labs">\n{cards}\n  </div>'
    else:
        body = f'  <p class="soon">Labs for this unit are on the way. The <a href="terms/unit-{u}.html">Unit {u} terminology guide</a> is ready now.</p>'
    units_html.append(f'<section aria-labelledby="unit-{u}" class="unit">\n{head}\n{body}\n</section>')

n_labs = sum(1 for i, f, t in topics if int(i.split(".")[0]) in ready)
jump = " ".join(f'<a href="#unit-{u}">Unit {u}</a>' for u in range(1, 6))
page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AP Statistics Study Labs</title>
<meta name="description" content="Interactive study labs and terminology guides for every unit of AP Statistics.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/lab.css?v=2">
<script src="assets/prefs.js?v=1"></script>
<style>
.labs {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }}
.lab-card {{ display: grid; gap: 8px; text-decoration: none; color: var(--ink); align-content: start; }}
.lab-card:hover {{ border-color: var(--accent); }}
.lab-card:focus-visible {{ outline: 3px solid var(--accent); outline-offset: 2px; }}
.lab-card .num, .unit-head .num {{ font-family: var(--mono); font-size: .8rem; color: var(--accent); }}
.lab-card p {{ color: var(--muted); font-size: .94rem; }}
.lab-card .go {{ color: var(--accent); font-weight: 500; font-size: .9rem; }}
.unit-head {{ display: grid; gap: 4px; border-bottom: 1px solid var(--rule); padding-bottom: 8px; }}
.unit-head .meta {{ font-size: .88rem; color: var(--muted); }}
.unit-head a, .soon a, .jump a {{ color: var(--accent); }}
.soon {{ color: var(--muted); }}
.jump {{ display: flex; flex-wrap: wrap; gap: 8px 16px; font-size: .92rem; }}
.unit {{ scroll-margin-top: 16px; }}
footer {{ color: var(--muted); font-size: .86rem; border-top: 1px solid var(--rule); padding-top: 16px; }}
</style>
</head>
<body>
<div class="wrap">

<header>
  <span class="kicker">AP Statistics</span>
  <h1>AP Statistics Study Labs</h1>
  <p class="lede">Interactive study labs for the revised (2026–27) AP Statistics course, one for each of its 55 topics. Each lab has data you can edit, graphs and simulations that react, a running explanation of what changed and why, worked examples, FRQ tips, practice questions, and the key terms for that topic.</p>
  <nav class="jump" aria-label="Jump to a unit">{jump} <a href="terms/index.html">All terms</a> <a href="calculator.html">Calculator guide (Desmos and TI-84)</a></nav>
</header>

<section aria-labelledby="terms-h">
  <div style="display:grid; gap:6px;">
    <h2 id="terms-h" style="font-size:1.3rem;">Terminology guides</h2>
    <p style="color:var(--muted); max-width:70ch;">Every key term in the course, with search, flashcards, and a self-quiz.</p>
  </div>
  <div class="unit-cards">
    <a class="card" href="terms/index.html"><span class="num">All units</span><b>Master terminology guide</b><span class="meta">Search and study every term in the course</span></a>
{chr(10).join(f'    <a class="card" href="terms/unit-{u}.html"><span class="num">Unit {u}</span><b>{html.escape(TITLES[u])}</b></a>' for u in range(1, 6))}
  </div>
</section>

{chr(10).join(units_html)}

<footer>Data sets in the labs are made up for practice unless a lab says otherwise. Topics follow the revised AP Statistics Course and Exam Description (effective fall 2026). {n_labs} labs are live.</footer>

</div>
</body>
</html>
'''
open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8").write(page)
print(f"index.html rebuilt: units ready {ready}, {n_labs} labs")
