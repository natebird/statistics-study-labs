/* Shared helpers for the AP Statistics study labs.
   Exposes a global `Lab` object: SVG chart drawing, statistics and distribution math,
   seeded random numbers, data displays (dotplot, histogram, boxplot, bar chart), a quiz builder, navigation. */
(function () {
  "use strict";

  /* Every topic in the revised (2026-27) course. A unit's labs go live when its number is in READY. */
  var READY = [1, 2, 3, 4, 5];
  var UNIT_TITLES = { 1: "Exploring One-Variable Data and Collecting Data", 2: "Probability, Random Variables, and Probability Distributions", 3: "Inference for Categorical Data: Proportions", 4: "Inference for Quantitative Data: Means", 5: "Regression Analysis" };
  var TOPICS = [
    { id: "1.1", file: "1-1-introducing-statistics.html", title: "Introducing Statistics" },
    { id: "1.2", file: "1-2-variables.html", title: "Variables" },
    { id: "1.3", file: "1-3-categorical-tables.html", title: "Tables and Summaries for One Categorical Variable" },
    { id: "1.4", file: "1-4-categorical-graphs.html", title: "Graphs for One Categorical Variable" },
    { id: "1.5", file: "1-5-quantitative-graphs.html", title: "Graphs for One Quantitative Variable" },
    { id: "1.6", file: "1-6-describing-distributions.html", title: "Describing Quantitative Distributions" },
    { id: "1.7", file: "1-7-summary-statistics.html", title: "Summary Statistics for One Quantitative Variable" },
    { id: "1.8", file: "1-8-boxplots.html", title: "Boxplots and Graphs of Summary Statistics" },
    { id: "1.9", file: "1-9-comparing-distributions.html", title: "Comparing Distributions" },
    { id: "1.10", file: "1-10-investigative-question.html", title: "The Investigative Question and Data Collection" },
    { id: "1.11", file: "1-11-random-sampling.html", title: "Random Sampling" },
    { id: "1.12", file: "1-12-sampling-problems.html", title: "Potential Problems with Sampling" },
    { id: "1.13", file: "1-13-experimental-design.html", title: "Experimental Design" },
    { id: "2.1", file: "2-1-two-way-tables.html", title: "Two-Way Tables and Graphs" },
    { id: "2.2", file: "2-2-two-categorical-summaries.html", title: "Summary Statistics for Two Categorical Variables" },
    { id: "2.3", file: "2-3-simulation.html", title: "Estimating Probabilities Using Simulation" },
    { id: "2.4", file: "2-4-intro-probability.html", title: "Introduction to Probability" },
    { id: "2.5", file: "2-5-mutually-exclusive.html", title: "Mutually Exclusive Events" },
    { id: "2.6", file: "2-6-conditional-probability.html", title: "Conditional Probability" },
    { id: "2.7", file: "2-7-independence-unions.html", title: "Independent Events and Unions of Events" },
    { id: "2.8", file: "2-8-random-variables.html", title: "Random Variables and Probability Distributions" },
    { id: "2.9", file: "2-9-parameters-random-variables.html", title: "Parameters of Random Variables" },
    { id: "2.10", file: "2-10-binomial.html", title: "The Binomial Distribution" },
    { id: "2.11", file: "2-11-normal.html", title: "The Normal Distribution" },
    { id: "2.12", file: "2-12-sampling-distributions-clt.html", title: "Sampling Distributions and the Central Limit Theorem" },
    { id: "3.1", file: "3-1-estimators.html", title: "Estimators" },
    { id: "3.2", file: "3-2-sampling-dist-p-hat.html", title: "Sampling Distributions for Sample Proportions" },
    { id: "3.3", file: "3-3-ci-one-proportion.html", title: "Confidence Interval for a Proportion" },
    { id: "3.4", file: "3-4-justify-ci-one-proportion.html", title: "Justifying a Claim with a Proportion Interval" },
    { id: "3.5", file: "3-5-setup-test-one-proportion.html", title: "Setting Up a Test for a Proportion" },
    { id: "3.6", file: "3-6-p-values.html", title: "p-Values" },
    { id: "3.7", file: "3-7-test-one-proportion.html", title: "Carrying Out a Test for a Proportion" },
    { id: "3.8", file: "3-8-errors-in-tests.html", title: "Potential Errors When Performing Tests" },
    { id: "3.9", file: "3-9-sampling-dist-diff-proportions.html", title: "Sampling Distributions for a Difference in Proportions" },
    { id: "3.10", file: "3-10-ci-two-proportions.html", title: "Confidence Interval for a Difference in Proportions" },
    { id: "3.11", file: "3-11-justify-ci-two-proportions.html", title: "Justifying a Claim with a Two-Proportion Interval" },
    { id: "3.12", file: "3-12-setup-test-two-proportions.html", title: "Setting Up a Test for a Difference in Proportions" },
    { id: "3.13", file: "3-13-test-two-proportions.html", title: "Carrying Out a Test for a Difference in Proportions" },
    { id: "3.14", file: "3-14-setup-chi-square.html", title: "Setting Up a Chi-Square Test" },
    { id: "3.15", file: "3-15-chi-square-test.html", title: "Carrying Out a Chi-Square Test" },
    { id: "4.1", file: "4-1-sampling-dist-x-bar.html", title: "Sampling Distributions for Sample Means" },
    { id: "4.2", file: "4-2-ci-one-mean.html", title: "Confidence Interval for a Mean or Mean Difference" },
    { id: "4.3", file: "4-3-justify-ci-one-mean.html", title: "Justifying a Claim with a Mean Interval" },
    { id: "4.4", file: "4-4-setup-test-one-mean.html", title: "Setting Up a Test for a Mean or Mean Difference" },
    { id: "4.5", file: "4-5-test-one-mean.html", title: "Carrying Out a Test for a Mean or Mean Difference" },
    { id: "4.6", file: "4-6-sampling-dist-diff-means.html", title: "Sampling Distributions for a Difference in Means" },
    { id: "4.7", file: "4-7-ci-two-means.html", title: "Confidence Interval for a Difference in Means" },
    { id: "4.8", file: "4-8-justify-ci-two-means.html", title: "Justifying a Claim with a Two-Mean Interval" },
    { id: "4.9", file: "4-9-setup-test-two-means.html", title: "Setting Up a Test for a Difference in Means" },
    { id: "4.10", file: "4-10-test-two-means.html", title: "Carrying Out a Test for a Difference in Means" },
    { id: "5.1", file: "5-1-scatterplots.html", title: "Scatterplots" },
    { id: "5.2", file: "5-2-correlation.html", title: "Correlation" },
    { id: "5.3", file: "5-3-linear-regression-models.html", title: "Linear Regression Models" },
    { id: "5.4", file: "5-4-residuals.html", title: "Residuals" },
    { id: "5.5", file: "5-5-least-squares-regression.html", title: "Least-Squares Regression" }
  ];
  function unitOf(id) { return +String(id).split(".")[0]; }

  var NS = "http://www.w3.org/2000/svg";
  var reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  function el(tag, attrs, parent, text) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }

  /* frame(svg, opts) clears the svg and draws axes + grid.
     opts: { x:[min,max], y:[min,max], xLabel, yLabel, xTicks:[], yTicks:[], fmtX(v), fmtY(v),
             width (440), height (330) }
     Returns F with sx(), sy(), g (clipped plot group), svg, xr, yr. */
  function frame(svg, o) {
    var W = o.width || 440, H = o.height || 330, M = { l: 52, r: 18, t: 18, b: 46 };
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var xr = o.x, yr = o.y;
    var sx = function (v) { return M.l + (v - xr[0]) / (xr[1] - xr[0]) * (W - M.l - M.r); };
    var sy = function (v) { return H - M.b - (v - yr[0]) / (yr[1] - yr[0]) * (H - M.t - M.b); };
    var fx = o.fmtX || function () { return ""; }, fy = o.fmtY || function () { return ""; };
    var defs = el("defs", {}, svg);
    var cid = (svg.id || "c") + "-clip";
    var cp = el("clipPath", { id: cid }, defs);
    el("rect", { x: M.l, y: M.t, width: W - M.l - M.r, height: H - M.t - M.b }, cp);
    (o.xTicks || []).forEach(function (v) {
      el("line", { x1: sx(v), x2: sx(v), y1: M.t, y2: H - M.b, stroke: "var(--grid)" }, svg);
      el("text", { x: sx(v), y: H - M.b + 16, "text-anchor": "middle" }, svg, fx(v));
    });
    (o.yTicks || []).forEach(function (v) {
      el("line", { x1: M.l, x2: W - M.r, y1: sy(v), y2: sy(v), stroke: "var(--grid)" }, svg);
      el("text", { x: M.l - 8, y: sy(v) + 4, "text-anchor": "end" }, svg, fy(v));
    });
    el("line", { x1: M.l, x2: M.l, y1: M.t, y2: H - M.b, stroke: "var(--ink)", "stroke-width": 1.5 }, svg);
    el("line", { x1: M.l, x2: W - M.r, y1: H - M.b, y2: H - M.b, stroke: "var(--ink)", "stroke-width": 1.5 }, svg);
    el("text", { x: (M.l + W - M.r) / 2, y: H - 8, "text-anchor": "middle", "class": "lbl", style: "fill:var(--ink)" }, svg, o.xLabel || "");
    var my = (M.t + H - M.b) / 2;
    el("text", { x: 14, y: my, "text-anchor": "middle", "class": "lbl", style: "fill:var(--ink)", transform: "rotate(-90 14 " + my + ")" }, svg, o.yLabel || "");
    var g = el("g", { "clip-path": "url(#" + cid + ")" }, svg);
    return { sx: sx, sy: sy, g: g, svg: svg, xr: xr, yr: yr, W: W, H: H, M: M };
  }

  /* line(F, [[x,y],...], color, width, dash) — polyline in data coords, clipped to plot. */
  function line(F, pts, color, w, dash) {
    var d = pts.map(function (p, i) { return (i ? "L" : "M") + F.sx(p[0]).toFixed(1) + " " + F.sy(p[1]).toFixed(1); }).join(" ");
    return el("path", { d: d, fill: "none", stroke: color, "stroke-width": w || 3, "stroke-linecap": "round", "stroke-dasharray": dash || null }, F.g);
  }
  /* fn(F, f, color, width, dash, steps) — plot y = f(x) across the x range. */
  function fn(F, f, color, w, dash, steps) {
    var n = steps || 60, pts = [];
    for (var i = 0; i <= n; i++) { var x = F.xr[0] + (F.xr[1] - F.xr[0]) * i / n; pts.push([x, f(x)]); }
    return line(F, pts, color, w, dash);
  }
  function vline(F, x, color, w, dash) { return line(F, [[x, F.yr[0]], [x, F.yr[1]]], color, w, dash); }
  function hline(F, y, color, w, dash) { return line(F, [[F.xr[0], y], [F.xr[1], y]], color, w, dash); }
  /* tag(F, x, y, text, color, anchor) — bold label, clamped inside the plot. */
  function tag(F, x, y, txt, color, anchor) {
    var cx = Math.max(F.xr[0], Math.min(F.xr[1], x)), cy = Math.max(F.yr[0], Math.min(F.yr[1], y));
    return el("text", { x: F.sx(cx), y: F.sy(cy), style: "fill:" + color, "class": "lbl", "text-anchor": anchor || "start" }, F.svg, txt);
  }
  /* dot(F, x, y, color, guides, xLabel, yLabel) — point with optional dashed guides to the axes. */
  function dot(F, x, y, color, guides, xl, yl) {
    if (guides) line(F, [[x, F.yr[0]], [x, y], [F.xr[0], y]], "var(--muted)", 1, "3 3");
    el("circle", { cx: F.sx(x), cy: F.sy(y), r: 6, fill: color || "var(--ink)", stroke: "var(--surface)", "stroke-width": 2 }, F.g);
    if (xl) el("text", { x: F.sx(x), y: F.H - F.M.b + 16, "text-anchor": "middle", style: "fill:var(--ink); font-weight:600" }, F.svg, xl);
    if (yl) el("text", { x: F.M.l - 8, y: F.sy(y) - 6, "text-anchor": "end", style: "fill:var(--ink); font-weight:600" }, F.svg, yl);
  }
  /* arrow(F, x1,y1,x2,y2,color) — a shift arrow. */
  function arrow(F, x1, y1, x2, y2, color) {
    var X1 = F.sx(x1), Y1 = F.sy(y1), X2 = F.sx(x2), Y2 = F.sy(y2);
    var len = Math.hypot(X2 - X1, Y2 - Y1); if (len < 8) return;
    var ux = (X2 - X1) / len, uy = (Y2 - Y1) / len, h = 8;
    el("path", { d: "M" + X1 + " " + Y1 + " L" + X2 + " " + Y2, stroke: color, "stroke-width": 2, fill: "none" }, F.svg);
    el("path", { d: "M" + X2 + " " + Y2 + " L" + (X2 - h * ux + h * .5 * uy) + " " + (Y2 - h * uy - h * .5 * ux) + " L" + (X2 - h * ux - h * .5 * uy) + " " + (Y2 - h * uy + h * .5 * ux) + " Z", fill: color }, F.svg);
  }
  /* rect(F, x0,y0,x1,y1, fill, opacity) — shaded region in data coords. */
  function rect(F, x0, y0, x1, y1, fill, op) {
    return el("rect", { x: Math.min(F.sx(x0), F.sx(x1)), y: Math.min(F.sy(y0), F.sy(y1)), width: Math.abs(F.sx(x1) - F.sx(x0)), height: Math.abs(F.sy(y1) - F.sy(y0)), fill: fill, opacity: op == null ? .18 : op }, F.g);
  }

  function fmt(v, d) { var k = Math.pow(10, d == null ? 1 : d); return (Math.round(v * k) / k).toFixed(d == null ? 1 : d); }

  /* animate(duration, onFrame(t in 0..1), onDone) with ease-in-out; jumps to the end under reduced motion. */
  function animate(dur, onFrame, done) {
    if (reduceMotion) { onFrame(1); if (done) done(); return function () {}; }
    var t0 = null, id = null, stopped = false;
    function step(t) {
      if (stopped) return;
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      onFrame(e);
      if (k < 1) id = requestAnimationFrame(step); else if (done) done();
    }
    id = requestAnimationFrame(step);
    return function () { stopped = true; if (id) cancelAnimationFrame(id); };
  }

  /* quiz(questions, quizEl, scoreEl, resetBtn)
     questions: [{ s: stem, o: [options], c: correctIndex, w: explanation }] */
  function quiz(Q, quizEl, scoreEl, resetBtn) {
    var answered = 0, right = 0;
    function upd() { scoreEl.textContent = right + " / " + answered + " correct"; }
    function build() {
      quizEl.innerHTML = ""; answered = 0; right = 0; upd();
      Q.forEach(function (q, i) {
        var card = document.createElement("div"); card.className = "card q";
        card.innerHTML = '<div class="qn">Question ' + (i + 1) + ' of ' + Q.length + '</div><div class="stem"></div><div class="opts"></div><div class="why" hidden></div>';
        card.querySelector(".stem").textContent = q.s;
        var opts = card.querySelector(".opts"), why = card.querySelector(".why");
        q.o.forEach(function (t, j) {
          var b = document.createElement("button"); b.className = "opt"; b.type = "button";
          b.textContent = String.fromCharCode(65 + j) + ".  " + t;
          b.addEventListener("click", function () {
            var all = opts.querySelectorAll("button");
            all.forEach(function (x) { x.disabled = true; });
            all[q.c].classList.add("right");
            if (j !== q.c) b.classList.add("wrong"); else right++;
            answered++; upd();
            why.hidden = false;
            why.innerHTML = (j === q.c ? "<b style='color:var(--good)'>Correct.</b> " : "<b style='color:var(--bad)'>Not quite.</b> The answer is " + String.fromCharCode(65 + q.c) + ". ") + q.w;
          });
          opts.appendChild(b);
        });
        quizEl.appendChild(card);
      });
    }
    if (resetBtn) resetBtn.addEventListener("click", build);
    build();
  }

  /* nav(currentId) fills #topnav and #pager on a lab page.
     The topic chips show the current unit; the pager walks every ready lab in course order. */
  function nav(cur) {
    var u = unitOf(cur);
    var top = document.getElementById("topnav");
    if (top) {
      top.innerHTML = '<span style="display:flex;gap:16px;flex-wrap:wrap"><a href="../index.html">\u2190 All labs</a><a href="../terms/unit-' + u + '.html">Unit ' + u + ' terms</a><a href="../terms/index.html">All terms</a></span><nav class="topics" aria-label="Unit ' + u + ' topics"></nav>';
      var t = top.querySelector(".topics");
      TOPICS.filter(function (x) { return unitOf(x.id) === u; }).forEach(function (x) {
        var a = document.createElement("a"); a.href = x.file; a.textContent = x.id; a.title = x.title;
        if (x.id === cur) a.setAttribute("aria-current", "page");
        t.appendChild(a);
      });
    }
    var pg = document.getElementById("pager");
    if (pg) {
      var live = TOPICS.filter(function (x) { return READY.indexOf(unitOf(x.id)) >= 0 || unitOf(x.id) === u; });
      var i = live.findIndex(function (x) { return x.id === cur; });
      var prev = live[i - 1], next = live[i + 1];
      pg.innerHTML = (prev ? '<a href="' + prev.file + '">\u2190 ' + prev.id + ' ' + prev.title + '</a>' : '<a href="../index.html">\u2190 All labs</a>') +
        (next ? '<a href="' + next.file + '">' + next.id + ' ' + next.title + ' \u2192</a>' : '<a href="../index.html">Back to all labs \u2192</a>');
    }
  }


  /* ===================== Numbers and formatting ===================== */
  /* num(v, d): rounds to d decimals (default 2) and drops trailing zeros; uses a true minus sign. */
  function num(v, d) {
    if (v == null || isNaN(v)) return "n/a";
    var k = Math.pow(10, d == null ? 2 : d), r = Math.round(v * k) / k;
    if (Object.is(r, -0)) r = 0;
    var s = Math.abs(r).toLocaleString("en-US", { maximumFractionDigits: d == null ? 2 : d });
    return (r < 0 ? "−" : "") + s;
  }
  /* pct(p, d): 0.1234 -> "12.3%" */
  function pct(p, d) { return num(p * 100, d == null ? 1 : d) + "%"; }
  /* niceTicks(lo, hi, n): round tick values spanning [lo, hi] */
  function niceStep(span, n) { var raw = span / (n || 5), mag = Math.pow(10, Math.floor(Math.log10(raw))), r = raw / mag; return (r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10) * mag; }
  function niceTicks(lo, hi, n) {
    if (hi <= lo) hi = lo + 1;
    var st = niceStep(hi - lo, n), a = Math.floor(lo / st) * st, out = [];
    for (var v = a; v <= hi + st * 1e-6; v += st) out.push(Math.round(v / st) * st);
    if (out[out.length - 1] < hi - 1e-9) out.push(out[out.length - 1] + st);
    return out.map(function (x) { return +x.toFixed(10); });
  }

  /* ===================== Seeded random numbers ===================== */
  /* rng(seed) returns a function giving uniform numbers in [0, 1); same seed, same sequence. */
  function rng(seed) {
    var a = (seed == null ? Math.floor(Math.random() * 4294967296) : seed) >>> 0;
    var f = function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    f.int = function (lo, hi) { return lo + Math.floor(f() * (hi - lo + 1)); };        // integer in [lo, hi]
    f.normal = function (mu, sd) { var u = 1 - f(), v = f(); return (mu || 0) + (sd == null ? 1 : sd) * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    f.shuffle = function (arr) { var a2 = arr.slice(); for (var i = a2.length - 1; i > 0; i--) { var j = Math.floor(f() * (i + 1)); var t = a2[i]; a2[i] = a2[j]; a2[j] = t; } return a2; };
    f.sample = function (arr, n) { return f.shuffle(arr).slice(0, n); };                // simple random sample without replacement
    f.pick = function (arr) { return arr[Math.floor(f() * arr.length)]; };
    return f;
  }

  /* ===================== Descriptive statistics ===================== */
  function sorted(xs) { return xs.slice().sort(function (a, b) { return a - b; }); }
  function sum(xs) { var s = 0; for (var i = 0; i < xs.length; i++) s += xs[i]; return s; }
  function mean(xs) { return xs.length ? sum(xs) / xs.length : NaN; }
  function median(xs) { var s = sorted(xs), n = s.length; if (!n) return NaN; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }
  /* quartiles: the AP / TI-84 method. Q1 is the median of the lower half and Q3 of the upper half;
     when n is odd the overall median is left out of both halves. */
  function quartiles(xs) {
    var s = sorted(xs), n = s.length; if (n < 2) return { q1: s[0], med: s[0], q3: s[0] };
    var h = Math.floor(n / 2);
    return { q1: median(s.slice(0, h)), med: median(s), q3: median(s.slice(n % 2 ? h + 1 : h)) };
  }
  /* sd(xs, pop): sample standard deviation (divide by n - 1) unless pop is true (divide by n). */
  function variance(xs, pop) { var n = xs.length; if (n < (pop ? 1 : 2)) return NaN; var m = mean(xs), ss = 0; xs.forEach(function (x) { ss += (x - m) * (x - m); }); return ss / (pop ? n : n - 1); }
  function sd(xs, pop) { return Math.sqrt(variance(xs, pop)); }
  /* summary(xs): everything a calculator's 1-Var Stats gives, plus the 1.5 x IQR fences and outliers. */
  function summary(xs) {
    var s = sorted(xs), q = quartiles(s), iqr = q.q3 - q.q1;
    var lo = q.q1 - 1.5 * iqr, hi = q.q3 + 1.5 * iqr;
    var inside = s.filter(function (x) { return x >= lo && x <= hi; });
    return { n: s.length, mean: mean(s), sd: sd(s), sdPop: sd(s, true), min: s[0], q1: q.q1, med: q.med, q3: q.q3, max: s[s.length - 1],
      range: s[s.length - 1] - s[0], iqr: iqr, fenceLo: lo, fenceHi: hi,
      outliers: s.filter(function (x) { return x < lo || x > hi; }),
      whiskerLo: inside.length ? inside[0] : q.q1, whiskerHi: inside.length ? inside[inside.length - 1] : q.q3, sorted: s };
  }
  function zscore(x, m, s) { return (x - m) / s; }
  /* percentile rank: percent of values strictly below x (the usual AP definition; say which one you use). */
  function percentileRank(xs, x) { return xs.filter(function (v) { return v < x; }).length / xs.length; }
  /* counts(arr): { category: count } in first-seen order, as [[cat, n], ...] */
  function counts(arr, order) {
    var m = {}, keys = order ? order.slice() : [];
    arr.forEach(function (v) { if (!(v in m)) { m[v] = 0; if (keys.indexOf(v) < 0) keys.push(v); } m[v]++; });
    return keys.map(function (k) { return [k, m[k] || 0]; });
  }

  /* ===================== Probability distributions ===================== */
  function erf(x) { // Abramowitz-Stegun 7.1.26 refined with a series near 0; |error| < 1.5e-7
    var s = x < 0 ? -1 : 1; x = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * x);
    var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return s * y;
  }
  function normPdf(x, mu, s) { mu = mu || 0; s = s == null ? 1 : s; var z = (x - mu) / s; return Math.exp(-z * z / 2) / (s * Math.sqrt(2 * Math.PI)); }
  /* normCdf(lo, hi, mu, s): like the calculator's normalcdf. Use -Infinity / Infinity for open ends. */
  function phi(z) { if (z === Infinity) return 1; if (z === -Infinity) return 0; return z < -8 ? 0 : z > 8 ? 1 : 0.5 * (1 + erf(z / Math.SQRT2)); }
  function normCdf(lo, hi, mu, s) { mu = mu || 0; s = s == null ? 1 : s; return phi((hi - mu) / s) - phi((lo - mu) / s); }
  /* invNorm(area, mu, s): value with the given area to its left. */
  function invNorm(p, mu, s) {
    mu = mu || 0; s = s == null ? 1 : s;
    if (p <= 0) return -Infinity; if (p >= 1) return Infinity;
    var lo = -10, hi = 10;
    for (var i = 0; i < 80; i++) { var m = (lo + hi) / 2; if (phi(m) < p) lo = m; else hi = m; }
    return mu + s * (lo + hi) / 2;
  }
  function lnGamma(z) {
    var g = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lnGamma(1 - z);
    z -= 1; var x = 0.99999999999980993; for (var i = 0; i < 8; i++) x += g[i] / (z + i + 1);
    var t = z + 7.5; return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
  }
  function betacf(a, b, x) {
    var qab = a + b, qap = a + 1, qam = a - 1, c = 1, d = 1 - qab * x / qap; if (Math.abs(d) < 1e-30) d = 1e-30; d = 1 / d; var h = d;
    for (var m = 1; m <= 200; m++) {
      var m2 = 2 * m, aa = m * (b - m) * x / ((qam + m2) * (a + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30; d = 1 / d; h *= d * c;
      aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30; d = 1 / d; var del = d * c; h *= del;
      if (Math.abs(del - 1) < 3e-12) break;
    }
    return h;
  }
  function ibeta(x, a, b) { // regularized incomplete beta I_x(a, b)
    if (x <= 0) return 0; if (x >= 1) return 1;
    var bt = Math.exp(lnGamma(a + b) - lnGamma(a) - lnGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
    return x < (a + 1) / (a + b + 2) ? bt * betacf(a, b, x) / a : 1 - bt * betacf(b, a, 1 - x) / b;
  }
  function tPdf(t, df) { return Math.exp(lnGamma((df + 1) / 2) - lnGamma(df / 2)) / Math.sqrt(df * Math.PI) * Math.pow(1 + t * t / df, -(df + 1) / 2); }
  function tLeft(t, df) { if (t === Infinity) return 1; if (t === -Infinity) return 0; var x = df / (df + t * t), p = 0.5 * ibeta(x, df / 2, 0.5); return t > 0 ? 1 - p : p; }
  /* tCdf(lo, hi, df): like the calculator's tcdf. invT(area, df): t with the given area to its left. */
  function tCdf(lo, hi, df) { return tLeft(hi, df) - tLeft(lo, df); }
  function invT(p, df) { var lo = -60, hi = 60; for (var i = 0; i < 100; i++) { var m = (lo + hi) / 2; if (tLeft(m, df) < p) lo = m; else hi = m; } return (lo + hi) / 2; }
  function gammaP(a, x) { // regularized lower incomplete gamma
    if (x <= 0) return 0;
    if (x < a + 1) { var ap = a, s = 1 / a, d = s; for (var n = 0; n < 500; n++) { ap++; d *= x / ap; s += d; if (Math.abs(d) < Math.abs(s) * 1e-14) break; } return s * Math.exp(-x + a * Math.log(x) - lnGamma(a)); }
    var b = x + 1 - a, c = 1e30, dd = 1 / b, h = dd;
    for (var i = 1; i < 500; i++) { var an = -i * (i - a); b += 2; dd = an * dd + b; if (Math.abs(dd) < 1e-30) dd = 1e-30; c = b + an / c; if (Math.abs(c) < 1e-30) c = 1e-30; dd = 1 / dd; var del = dd * c; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
    return 1 - Math.exp(-x + a * Math.log(x) - lnGamma(a)) * h;
  }
  function chiPdf(x, df) { if (x <= 0) return df === 2 ? 0.5 : 0; return Math.exp((df / 2 - 1) * Math.log(x) - x / 2 - (df / 2) * Math.LN2 - lnGamma(df / 2)); }
  /* chiCdf(lo, hi, df): like the calculator's chi2cdf. */
  function chiCdf(lo, hi, df) { var f = function (v) { return v === Infinity ? 1 : gammaP(df / 2, v / 2); }; return f(hi) - f(Math.max(0, lo)); }
  function choose(n, k) { if (k < 0 || k > n) return 0; k = Math.min(k, n - k); var r = 1; for (var i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; }
  /* binomPdf(n, p, k) and binomCdf(n, p, k) = P(X <= k), as on the calculator. */
  function binomPdf(n, p, k) {
    if (k < 0 || k > n || k !== Math.floor(k)) return 0;
    if (p <= 0) return k === 0 ? 1 : 0;
    if (p >= 1) return k === n ? 1 : 0;
    return Math.exp(Math.log(choose(n, k)) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  }
  function binomCdf(n, p, k) { var s = 0; for (var i = 0; i <= Math.min(n, Math.floor(k)); i++) s += binomPdf(n, p, i); return Math.min(1, s); }

  /* ===================== Data displays ===================== */
  /* axisFrame(svg, lo, hi, opts): a horizontal number line plot for one quantitative variable.
     opts: { xLabel, yMax (default 10), yLabel, yTicks, height, ticks (array), fmt } -> F from frame() */
  function axisFrame(svg, lo, hi, o) {
    o = o || {};
    var t = o.ticks || niceTicks(lo, hi, o.nTicks || 6);
    return frame(svg, { x: [t[0], t[t.length - 1]], y: [0, o.yMax || 10], xLabel: o.xLabel || "", yLabel: o.yLabel || "", xTicks: t, yTicks: o.yTicks || [],
      fmtX: o.fmt || function (v) { return num(v, 2); }, fmtY: o.fmtY || String, width: o.width, height: o.height });
  }
  /* dotplot(svg, data, opts): stacked dots. opts: { xLabel, lo, hi, ticks, color, highlight(v, i) -> color|null, binWidth (stacking resolution) }
     Returns F plus .stack (max dots in a column). */
  function dotplot(svg, data, o) {
    o = o || {};
    var s = summary(data), lo = o.lo != null ? o.lo : s.min, hi = o.hi != null ? o.hi : s.max;
    var bw = o.binWidth || (function () { var r = (hi - lo) || 1; return niceStep(r, 40); })();
    var cols = {}; var keys = [];
    data.forEach(function (v, i) { var k = Math.round(v / bw) * bw; k = +k.toFixed(10); if (!cols[k]) { cols[k] = []; keys.push(k); } cols[k].push({ v: v, i: i }); });
    var stack = 0; keys.forEach(function (k) { stack = Math.max(stack, cols[k].length); });
    var W = o.width || 440, H = o.height || Math.max(160, Math.min(330, 90 + stack * 16));
    var F = axisFrame(svg, lo, hi, { xLabel: o.xLabel, ticks: o.ticks, height: H, width: W, yMax: 1, fmt: o.fmt });
    var plotH = H - F.M.t - F.M.b, r = Math.max(2.5, Math.min(7, (plotH - 4) / Math.max(stack, 1) / 2 - 0.5));
    keys.forEach(function (k) {
      cols[k].forEach(function (d, j) {
        var c = (o.highlight && o.highlight(d.v, d.i)) || o.color || "var(--accent)";
        el("circle", { cx: F.sx(k), cy: H - F.M.b - r - 1 - j * (2 * r + 1), r: r, fill: c }, F.g);
      });
    });
    F.stack = stack; F.r = r;
    return F;
  }
  /* bins(data, start, width): [{ lo, hi, n }] with left-closed bins [lo, hi). */
  function bins(data, start, width) {
    var s = summary(data), out = [], a = start;
    while (a <= s.max) { out.push({ lo: a, hi: a + width, n: 0 }); a = +(a + width).toFixed(10); }
    if (!out.length) out.push({ lo: start, hi: start + width, n: 0 });
    data.forEach(function (v) { var i = Math.floor((v - start) / width + 1e-9); if (i >= 0 && i < out.length) out[i].n++; });
    return out;
  }
  /* histogram(svg, data, opts): opts { start, width (bin width), svgWidth, height, xLabel, relative (show proportions), color, ticks }
     Returns F plus .bins. */
  function histogram(svg, data, o) {
    o = o || {};
    var b = bins(data, o.start, o.width), n = data.length;
    var vals = b.map(function (x) { return o.relative ? x.n / n : x.n; });
    var top = Math.max.apply(null, vals.concat([o.relative ? 0.1 : 1]));
    var yt = niceTicks(0, top * 1.1, 5);
    var ticks = o.ticks || b.map(function (x) { return x.lo; }).concat([b[b.length - 1].hi]);
    if (!o.ticks && ticks.length > 12) ticks = ticks.filter(function (_, i) { return i % Math.ceil(ticks.length / 10) === 0; });
    var F = frame(svg, { x: [b[0].lo, b[b.length - 1].hi], y: [0, yt[yt.length - 1]], xLabel: o.xLabel || "", yLabel: o.relative ? "Relative frequency" : "Frequency",
      xTicks: ticks, yTicks: yt, fmtX: o.fmt || function (v) { return num(v, 2); }, fmtY: function (v) { return o.relative ? num(v, 2) : num(v, 0); }, width: o.svgWidth, height: o.height });
    b.forEach(function (x, i) {
      if (!vals[i]) return;
      el("rect", { x: F.sx(x.lo) + 0.5, y: F.sy(vals[i]), width: Math.max(0, F.sx(x.hi) - F.sx(x.lo) - 1), height: F.sy(0) - F.sy(vals[i]), fill: o.color || "var(--accent)", opacity: .85, stroke: "var(--surface)" }, F.g);
    });
    F.bins = b;
    return F;
  }
  /* boxplot(F, s, y, h, color, opts): draw one horizontal modified boxplot from a summary() at height y (data units)
     with box height h (data units). Outliers are drawn as separate points. opts { showOutliers: true, labels: false } */
  function boxplot(F, s, y, h, color, o) {
    o = o || {}; color = color || "var(--accent)";
    var showOut = o.showOutliers !== false;
    var wl = showOut ? s.whiskerLo : s.min, wh = showOut ? s.whiskerHi : s.max;
    line(F, [[wl, y], [s.q1, y]], color, 2); line(F, [[s.q3, y], [wh, y]], color, 2);
    line(F, [[wl, y - h * .3], [wl, y + h * .3]], color, 2); line(F, [[wh, y - h * .3], [wh, y + h * .3]], color, 2);
    el("rect", { x: F.sx(s.q1), y: F.sy(y + h / 2), width: Math.max(1, F.sx(s.q3) - F.sx(s.q1)), height: Math.abs(F.sy(y - h / 2) - F.sy(y + h / 2)), fill: "var(--accent-soft)", stroke: color, "stroke-width": 2 }, F.g);
    line(F, [[s.med, y - h / 2], [s.med, y + h / 2]], color, 3);
    if (showOut) s.outliers.forEach(function (v) { el("circle", { cx: F.sx(v), cy: F.sy(y), r: 4.5, fill: "var(--surface)", stroke: color, "stroke-width": 2 }, F.g); });
    if (o.labels) {
      [[wl === s.min ? "Min" : "Whisker", wl], ["Q₁", s.q1], ["Med", s.med], ["Q₃", s.q3], [wh === s.max ? "Max" : "Whisker", wh]].forEach(function (p, i) {
        el("text", { x: F.sx(p[1]), y: F.sy(y + h / 2) - 6 - (i % 2 ? 12 : 0), "text-anchor": "middle", style: "fill:var(--ink);font-size:10.5px" }, F.svg, p[0]);
      });
    }
  }
  /* bars(svg, rows, opts): bar chart for one categorical variable. rows: [[label, value], ...]
     opts { yLabel, xLabel, relative (divide by total), color, colors [], valueLabels: true, yMax } -> F */
  function bars(svg, rows, o) {
    o = o || {};
    var tot = rows.reduce(function (a, r) { return a + r[1]; }, 0) || 1;
    var vals = rows.map(function (r) { return o.relative ? r[1] / tot : r[1]; });
    var top = o.yMax || Math.max.apply(null, vals.concat([o.relative ? .1 : 1])) * 1.12;
    var yt = niceTicks(0, top, 5);
    var n = rows.length;
    var F = frame(svg, { x: [0, n], y: [0, yt[yt.length - 1]], xLabel: o.xLabel || "", yLabel: o.yLabel || (o.relative ? "Relative frequency" : "Frequency"),
      xTicks: [], yTicks: yt, fmtY: function (v) { return o.relative ? num(v, 2) : num(v, 0); }, width: o.width, height: o.height });
    rows.forEach(function (r, i) {
      var c = (o.colors && o.colors[i]) || o.color || "var(--accent)";
      el("rect", { x: F.sx(i + .15), y: F.sy(vals[i]), width: F.sx(i + .85) - F.sx(i + .15), height: F.sy(0) - F.sy(vals[i]), fill: c, opacity: .9 }, F.g);
      el("text", { x: F.sx(i + .5), y: F.H - F.M.b + 16, "text-anchor": "middle", style: "font-size:" + (n > 6 ? 9.5 : 11) + "px" }, F.svg, String(r[0]));
      if (o.valueLabels !== false) el("text", { x: F.sx(i + .5), y: F.sy(vals[i]) - 5, "text-anchor": "middle", style: "fill:var(--ink);font-size:10.5px;font-weight:600" }, F.svg, o.relative ? num(vals[i], 2) : num(vals[i], 0));
    });
    return F;
  }
  /* pie(svg, rows, colors): simple pie chart with percent labels. rows: [[label, value], ...] */
  var PALETTE = ["var(--accent)", "var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)", "var(--ghost)", "var(--muted)"];
  function pie(svg, rows, colors) {
    colors = colors || PALETTE;
    var W = 440, H = 330, cx = 160, cy = 165, R = 130;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H); while (svg.firstChild) svg.removeChild(svg.firstChild);
    var tot = rows.reduce(function (a, r) { return a + r[1]; }, 0) || 1, a0 = -Math.PI / 2;
    rows.forEach(function (r, i) {
      var f = r[1] / tot, a1 = a0 + f * 2 * Math.PI, c = colors[i % colors.length];
      if (f >= 0.9999) el("circle", { cx: cx, cy: cy, r: R, fill: c, stroke: "var(--surface)", "stroke-width": 2 }, svg);
      else if (f > 0) el("path", { d: "M" + cx + " " + cy + " L" + (cx + R * Math.cos(a0)) + " " + (cy + R * Math.sin(a0)) + " A" + R + " " + R + " 0 " + (f > .5 ? 1 : 0) + " 1 " + (cx + R * Math.cos(a1)) + " " + (cy + R * Math.sin(a1)) + " Z", fill: c, stroke: "var(--surface)", "stroke-width": 2 }, svg);
      if (f > .04) { var am = (a0 + a1) / 2; el("text", { x: cx + R * .62 * Math.cos(am), y: cy + R * .62 * Math.sin(am) + 4, "text-anchor": "middle", style: "fill:#fff;font-weight:600;font-size:12px" }, svg, Math.round(f * 100) + "%"); }
      el("rect", { x: 312, y: 40 + i * 24, width: 14, height: 14, rx: 3, fill: c }, svg);
      el("text", { x: 332, y: 52 + i * 24, style: "fill:var(--ink);font-size:12px" }, svg, String(r[0]));
      a0 = a1;
    });
  }
  /* curve(F, pdf, color, shadeFrom, shadeTo, shadeColor): draw a density curve and optionally shade an area under it. */
  function curve(F, f, color, a, b, shade) {
    if (a != null && b != null) {
      var lo = Math.max(F.xr[0], a), hi = Math.min(F.xr[1], b);
      if (hi > lo) {
        var pts = [[lo, 0]]; for (var i = 0; i <= 80; i++) { var x = lo + (hi - lo) * i / 80; pts.push([x, f(x)]); } pts.push([hi, 0]);
        el("path", { d: pts.map(function (p, j) { return (j ? "L" : "M") + F.sx(p[0]).toFixed(1) + " " + F.sy(p[1]).toFixed(1); }).join(" ") + " Z", fill: shade || "var(--accent)", opacity: .25 }, F.g);
      }
    }
    return fn(F, f, color || "var(--accent)", 2.5, null, 160);
  }
  /* stemplot(data, opts) -> HTML string (<pre>). opts { stemUnit: 10 (value of one stem), leafUnit: 1, split: false, key: "4 | 7 = 47" } */
  function stemplot(data, o) {
    o = o || {}; var su = o.stemUnit || 10, lu = o.leafUnit || su / 10;
    var s = sorted(data), rows = {}, stems = [];
    s.forEach(function (v) {
      var st = Math.floor(v / su + 1e-9), lf = Math.round((v - st * su) / lu); if (lf >= su / lu) { st++; lf = 0; }
      var key = o.split ? st * 2 + (lf >= (su / lu) / 2 ? 1 : 0) : st;
      if (!rows[key]) rows[key] = []; rows[key].push(lf);
    });
    var ks = Object.keys(rows).map(Number), lo = Math.min.apply(null, ks), hi = Math.max.apply(null, ks), out = [];
    for (var k = lo; k <= hi; k++) {
      var stem = o.split ? Math.floor(k / 2) : k;
      out.push((String(stem)).padStart(4) + " | " + (rows[k] || []).join(" "));
    }
    return '<pre class="stem">' + out.join("\n") + "\n\nKey: " + (o.key || (lo + " | 2 = " + num((o.split ? Math.floor(lo / 2) : lo) * su + 2 * lu, 2))) + "</pre>";
  }

  window.Lab = { TOPICS: TOPICS, READY: READY, UNIT_TITLES: UNIT_TITLES, unitOf: unitOf,
    el: el, frame: frame, line: line, fn: fn, vline: vline, hline: hline, tag: tag, dot: dot, arrow: arrow, rect: rect, fmt: fmt, animate: animate, quiz: quiz, nav: nav, reduceMotion: reduceMotion,
    num: num, pct: pct, niceTicks: niceTicks, niceStep: niceStep, rng: rng,
    sorted: sorted, sum: sum, mean: mean, median: median, quartiles: quartiles, variance: variance, sd: sd, summary: summary, zscore: zscore, percentileRank: percentileRank, counts: counts,
    normPdf: normPdf, normCdf: normCdf, invNorm: invNorm, tPdf: tPdf, tCdf: tCdf, invT: invT, chiPdf: chiPdf, chiCdf: chiCdf, choose: choose, binomPdf: binomPdf, binomCdf: binomCdf,
    axisFrame: axisFrame, dotplot: dotplot, bins: bins, histogram: histogram, boxplot: boxplot, bars: bars, pie: pie, curve: curve, stemplot: stemplot, PALETTE: PALETTE };
})();
