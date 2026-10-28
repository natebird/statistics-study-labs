/* AP Statistics Unit 2 terms: Probability, Random Variables, and Probability Distributions.
   Fields: t term, d definition, u unit, tp topic where introduced, also later topics that use it, x example or AP tip, f formula, r related terms. */
window.GLOSSARY = (window.GLOSSARY || []).concat([
  // 2.1 Two categorical variables: tables and graphs
  { t: "Two-way table", d: "A table of counts that organizes data on two categorical variables, with one variable's categories as rows and the other's as columns. Also called a contingency table.", u: 2, tp: "2.1", also: ["2.6","3.14"], r: ["Marginal distribution","Conditional distribution"] },
  { t: "Side-by-side bar graph", d: "A bar graph that shows the distribution of one categorical variable for each category of another, with the bars for each group placed next to each other.", u: 2, tp: "2.1", r: ["Segmented bar graph","Bar graph"] },
  { t: "Segmented bar graph", d: "A graph in which each bar represents 100% of one group and is divided into segments showing the conditional relative frequencies of the other variable. Also called a stacked bar graph.", u: 2, tp: "2.1", x: "AP tip: compare segment heights across bars. If the segments line up, there is no association.", r: ["Conditional distribution","Mosaic plot"] },
  { t: "Mosaic plot", d: "A segmented bar graph whose bar widths are proportional to the size of each group, so the area of each rectangle shows the joint relative frequency.", u: 2, tp: "2.1", r: ["Segmented bar graph"] },
  { t: "Association", d: "Two variables are associated if knowing the value of one helps predict the value of the other. For categorical variables, the conditional distributions differ across groups.", u: 2, tp: "2.1", also: ["2.2","5.1"], x: "AP tip: association is not causation. An observational study can show association but not cause and effect.", r: ["Conditional distribution","Independent events"] },

  // 2.2 Summary statistics for two categorical variables
  { t: "Joint relative frequency", d: "The count in one cell of a two-way table divided by the table total.", u: 2, tp: "2.2", also: ["2.4"], f: "Joint relative frequency = cell count ÷ table total", r: ["Marginal relative frequency","Conditional relative frequency"] },
  { t: "Marginal relative frequency", d: "A row total or column total in a two-way table divided by the table total.", u: 2, tp: "2.2", r: ["Marginal distribution","Joint relative frequency"] },
  { t: "Conditional relative frequency", d: "A cell count divided by the total for its row or column, giving the proportion within one group.", u: 2, tp: "2.2", also: ["2.6"], x: "Of the 80 seniors, 52 drive to school: 52 ÷ 80 = 0.65.", r: ["Conditional distribution","Conditional probability"] },
  { t: "Marginal distribution", d: "The distribution of one categorical variable alone, from the row totals or column totals of a two-way table.", u: 2, tp: "2.2", r: ["Marginal relative frequency","Two-way table"] },
  { t: "Conditional distribution", d: "The distribution of one variable among only the individuals who have a particular value of the other variable.", u: 2, tp: "2.2", r: ["Conditional relative frequency","Association"] },

  // 2.3 Simulation
  { t: "Simulation", d: "Imitating a chance process, using random numbers, coins, cards, or software, so the long-run behavior of the process can be estimated.", u: 2, tp: "2.3", also: ["3.6"], x: "AP tip: describe the model (what each random number stands for), how one trial works, what you record, and how you use many trials.", r: ["Random process","Law of large numbers"] },
  { t: "Random process", d: "A process whose individual outcomes are unpredictable, but which has a regular distribution of outcomes over many repetitions.", u: 2, tp: "2.3", also: ["2.4"], r: ["Simulation","Probability"] },
  { t: "Trial", d: "One repetition of a random process in a simulation.", u: 2, tp: "2.3", also: ["2.10"], r: ["Simulation"] },
  { t: "Law of large numbers", d: "As a random process is repeated many times, the relative frequency of an outcome gets closer and closer to its true probability.", u: 2, tp: "2.3", also: ["2.4"], x: "AP tip: it says nothing about the short run. A coin that landed heads five times is not \"due\" for tails.", r: ["Probability","Relative frequency"] },
  { t: "Estimated probability", d: "The proportion of trials in a simulation (or of repetitions in real life) in which an event occurred. Also called empirical or experimental probability.", u: 2, tp: "2.3", r: ["Simulation","Probability"] },

  // 2.4 Introduction to probability
  { t: "Probability", d: "A number from 0 to 1 that describes the proportion of times an outcome would occur in a very long series of repetitions of a random process.", u: 2, tp: "2.4", r: ["Sample space","Event","Law of large numbers"] },
  { t: "Sample space", d: "The list of all possible outcomes of a random process.", u: 2, tp: "2.4", r: ["Event","Outcome"] },
  { t: "Outcome", d: "One possible result of a random process.", u: 2, tp: "2.4", r: ["Sample space","Event"] },
  { t: "Event", d: "A collection of outcomes from a random process, usually written with a capital letter such as A.", u: 2, tp: "2.4", also: ["2.5"], r: ["Sample space","Complement"] },
  { t: "Equally likely outcomes", d: "When all outcomes in the sample space have the same probability, the probability of an event is the number of outcomes in it divided by the total number of outcomes.", u: 2, tp: "2.4", f: "P(A) = outcomes in A ÷ total outcomes", r: ["Probability"] },
  { t: "Complement", d: "The event that A does not occur, written Aᶜ or A′. Its probability is 1 − P(A).", u: 2, tp: "2.4", also: ["2.5"], f: "P(Aᶜ) = 1 − P(A)", x: "AP tip: for \"at least one,\" use the complement: P(at least one) = 1 − P(none).", r: ["Event"] },

  // 2.5 Mutually exclusive events
  { t: "Mutually exclusive", d: "Two events are mutually exclusive (disjoint) if they cannot occur together, so P(A and B) = 0.", u: 2, tp: "2.5", also: ["2.7"], x: "AP tip: mutually exclusive is not the same as independent. Two disjoint events with positive probability can never be independent.", r: ["Joint probability","Independent events"] },
  { t: "Joint probability", d: "The probability that two events both occur, written P(A ∩ B) or P(A and B).", u: 2, tp: "2.5", also: ["2.6"], r: ["Intersection","Joint relative frequency"] },
  { t: "Intersection", d: "The event that both A and B occur, written A ∩ B (\"A and B\").", u: 2, tp: "2.5", r: ["Union","Joint probability"] },
  { t: "Venn diagram", d: "A diagram that shows events as overlapping circles inside a rectangle representing the sample space. The overlap is the intersection.", u: 2, tp: "2.5", r: ["Intersection","Union"] },

  // 2.6 Conditional probability
  { t: "Conditional probability", d: "The probability that one event happens given that another event is known to have happened, written P(A | B).", u: 2, tp: "2.6", also: ["2.7"], f: "P(A | B) = P(A ∩ B) ÷ P(B)", x: "AP tip: the event after the bar is the \"given\" — it tells you which row or column total goes in the denominator.", r: ["Conditional relative frequency","Multiplication rule"] },
  { t: "Multiplication rule", d: "The probability that two events both occur is the probability of one times the conditional probability of the other given the first.", u: 2, tp: "2.6", also: ["2.7"], f: "P(A ∩ B) = P(A) · P(B | A)", r: ["Conditional probability","Tree diagram"] },
  { t: "Tree diagram", d: "A diagram that shows a sequence of chance events as branches, with conditional probabilities on each branch. Multiply along a path to get the probability of that path.", u: 2, tp: "2.6", r: ["Multiplication rule","Conditional probability"] },

  // 2.7 Independence and unions
  { t: "Independent events", d: "Two events are independent if knowing that one occurred does not change the probability of the other: P(A | B) = P(A).", u: 2, tp: "2.7", also: ["2.10","3.14"], f: "Independent if P(A | B) = P(A), or P(A ∩ B) = P(A)·P(B)", x: "AP tip: to check independence, compare a conditional probability with the unconditional one and show both numbers.", r: ["Conditional probability","Mutually exclusive"] },
  { t: "Union", d: "The event that A or B (or both) occurs, written A ∪ B.", u: 2, tp: "2.7", r: ["Intersection","Addition rule"] },
  { t: "Addition rule", d: "The probability that A or B occurs is the sum of their probabilities minus the probability that both occur.", u: 2, tp: "2.7", f: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", x: "For mutually exclusive events, the last term is 0, so P(A ∪ B) = P(A) + P(B).", r: ["Union","Mutually exclusive"] },

  // 2.8 Random variables
  { t: "Random variable", d: "A variable whose numerical value is determined by the outcome of a random process. Written with a capital letter such as X.", u: 2, tp: "2.8", also: ["2.9"], r: ["Probability distribution","Discrete random variable","Continuous random variable"] },
  { t: "Probability distribution", d: "A table, graph, or formula that gives the possible values of a random variable and their probabilities.", u: 2, tp: "2.8", r: ["Random variable"] },
  { t: "Discrete random variable", d: "A random variable that takes a countable set of values, each with its own probability. The probabilities are between 0 and 1 and add to 1.", u: 2, tp: "2.8", r: ["Continuous random variable","Binomial random variable"] },
  { t: "Continuous random variable", d: "A random variable that can take any value in an interval. Probabilities are areas under a density curve, and P(X = any single value) = 0.", u: 2, tp: "2.8", also: ["2.11"], r: ["Density curve","Discrete random variable"] },
  { t: "Cumulative probability", d: "The probability that a random variable is at or below a given value, P(X ≤ x).", u: 2, tp: "2.8", r: ["Probability distribution"] },
  { t: "Density curve", d: "A curve that is always on or above the horizontal axis and has an area of exactly 1 underneath it. Areas under it give probabilities or proportions.", u: 2, tp: "2.8", also: ["2.11"], r: ["Continuous random variable","Normal distribution"] },

  // 2.9 Parameters of random variables
  { t: "Expected value", d: "The mean of a random variable: the long-run average value over many repetitions. Written μₓ or E(X).", u: 2, tp: "2.9", f: "μₓ = Σ x · P(x)", x: "AP tip: the expected value need not be a possible value. A game can have an expected value of −$0.25.", r: ["Mean","Standard deviation of a random variable"] },
  { t: "Standard deviation of a random variable", d: "The typical distance of a random variable's values from its mean over many repetitions. Written σₓ.", u: 2, tp: "2.9", f: "σₓ = √( Σ (x − μₓ)² · P(x) )", r: ["Expected value","Standard deviation"] },
  { t: "Linear transformation of a random variable", d: "If Y = a + bX, then μ_Y = a + bμₓ and σ_Y = |b|σₓ. Adding a constant does not change the standard deviation.", u: 2, tp: "2.9", f: "μ_Y = a + bμₓ;  σ_Y = |b|σₓ", r: ["Linear transformation","Expected value"] },

  // 2.10 Binomial
  { t: "Binomial setting", d: "A situation with a fixed number n of independent trials, each with two outcomes (success or failure) and the same probability of success p. Memory aid: BINS — Binary, Independent, Number fixed, Same p.", u: 2, tp: "2.10", r: ["Binomial random variable","Trial"] },
  { t: "Binomial random variable", d: "The count X of successes in a binomial setting. Its distribution is called a binomial distribution with parameters n and p.", u: 2, tp: "2.10", r: ["Binomial setting","Binomial probability formula"] },
  { t: "Binomial probability formula", d: "The probability of exactly k successes in n binomial trials.", u: 2, tp: "2.10", f: "P(X = k) = ₙCₖ · pᵏ · (1 − p)ⁿ⁻ᵏ", x: "Calculator: binompdf(n, p, k) for exactly k; binomcdf(n, p, k) for at most k. Write the parameters with labels on the FRQ.", r: ["Binomial random variable","Binomial coefficient"] },
  { t: "Binomial coefficient", d: "The number of ways to arrange k successes among n trials, written ₙCₖ or (n choose k).", u: 2, tp: "2.10", f: "ₙCₖ = n! ÷ ( k!(n − k)! )", r: ["Binomial probability formula"] },
  { t: "Mean of a binomial distribution", d: "The expected number of successes in n trials with success probability p.", u: 2, tp: "2.10", f: "μₓ = np", r: ["Standard deviation of a binomial distribution","Expected value"] },
  { t: "Standard deviation of a binomial distribution", d: "The typical distance of the number of successes from its mean np.", u: 2, tp: "2.10", f: "σₓ = √( np(1 − p) )", r: ["Mean of a binomial distribution"] },
  { t: "10% condition", d: "When sampling without replacement, trials can be treated as independent if the sample size is no more than 10% of the population size (n ≤ 0.10N).", u: 2, tp: "2.10", also: ["3.3","4.2"], x: "AP tip: state it in context: \"It is reasonable to assume there are more than 10(50) = 500 students at the school.\"", r: ["Sampling without replacement","Independent events"] },

  // 2.11 Normal
  { t: "Normal distribution", d: "A family of symmetric, single-peaked, bell-shaped density curves described by a mean μ and standard deviation σ, written N(μ, σ).", u: 2, tp: "2.11", also: ["2.12","3.2","4.1"], x: "Calculator: normalcdf(lower, upper, μ, σ) for areas; invNorm(area to the left, μ, σ) for values.", r: ["Empirical rule","Standard normal distribution","Density curve"] },
  { t: "Empirical rule", d: "In a normal distribution, about 68% of values are within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3. Also called the 68–95–99.7 rule.", u: 2, tp: "2.11", r: ["Normal distribution","z-score"] },
  { t: "Standard normal distribution", d: "The normal distribution with mean 0 and standard deviation 1. Standardizing any normal value with a z-score gives a value from this distribution.", u: 2, tp: "2.11", r: ["z-score","Normal distribution"] },
  { t: "Inverse normal", d: "Finding the value that has a given area (percentile) to its left in a normal distribution.", u: 2, tp: "2.11", f: "x = μ + z·σ", r: ["Percentile","Normal distribution"] },
  { t: "Normal probability plot", d: "A graph of each data value against its expected z-score. A roughly straight, linear pattern means the data are approximately normal.", u: 2, tp: "2.11", also: ["4.2"], r: ["Normal distribution"] },

  // 2.12 Sampling distributions and CLT
  { t: "Sampling distribution", d: "The distribution of the values of a statistic in all possible samples of the same size from the same population.", u: 2, tp: "2.12", also: ["3.2","3.9","4.1","4.6"], x: "AP tip: keep three distributions straight — the population, one sample's data, and the sampling distribution of the statistic.", r: ["Sampling variability","Central Limit Theorem (CLT)"] },
  { t: "Central Limit Theorem (CLT)", d: "When n is large, the sampling distribution of a sample mean (or sum) is approximately normal, no matter what the shape of the population distribution.", u: 2, tp: "2.12", also: ["4.1"], x: "AP tip: n ≥ 30 is the usual rule of thumb. The CLT is about the sampling distribution, not the shape of the sample's data.", r: ["Sampling distribution","Normal distribution"] },
  { t: "Standard error", d: "An estimate of the standard deviation of a statistic's sampling distribution, computed from sample data.", u: 2, tp: "2.12", also: ["3.3","3.10","4.2"], r: ["Sampling distribution","Margin of error"] }
]);
