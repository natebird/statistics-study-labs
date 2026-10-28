/* AP Statistics Unit 3 terms: Inference for Categorical Data: Proportions.
   Fields: t term, d definition, u unit, tp topic where introduced, also later topics that use it, x example or AP tip, f formula, r related terms. */
window.GLOSSARY = (window.GLOSSARY || []).concat([
  // 3.1 Estimators
  { t: "Estimator", d: "A statistic used to estimate a population parameter, such as p̂ for p or x̄ for μ.", u: 3, tp: "3.1", r: ["Point estimate","Unbiased estimator"] },
  { t: "Point estimate", d: "A single value of a statistic, calculated from sample data, used as an estimate of a parameter.", u: 3, tp: "3.1", also: ["3.3"], r: ["Estimator","Confidence interval"] },
  { t: "Unbiased estimator", d: "A statistic whose sampling distribution has a mean equal to the parameter it estimates. It does not systematically over- or underestimate.", u: 3, tp: "3.1", x: "p̂ and x̄ are unbiased estimators of p and μ. The sample range is a biased estimator of the population range.", r: ["Bias","Estimator"] },
  { t: "Variability of an estimator", d: "How spread out the sampling distribution of a statistic is. Larger random samples give less variability.", u: 3, tp: "3.1", r: ["Sampling variability","Unbiased estimator"] },
  { t: "Sample proportion", d: "The proportion of individuals in a sample that have a characteristic: p̂ = x ÷ n.", u: 3, tp: "3.1", also: ["3.2"], f: "p̂ = x ÷ n", r: ["Proportion","Population proportion"] },
  { t: "Population proportion", d: "The proportion of the whole population with a characteristic, written p. It is a parameter.", u: 3, tp: "3.1", r: ["Sample proportion","Parameter"] },

  // 3.2 Sampling distribution of p-hat
  { t: "Sampling distribution of p̂", d: "The distribution of the sample proportion over all random samples of size n. Its mean is p and its standard deviation is √(p(1 − p) ÷ n).", u: 3, tp: "3.2", f: "μ_p̂ = p;  σ_p̂ = √( p(1 − p) ÷ n )", r: ["Large counts condition","Sampling distribution"] },
  { t: "Large counts condition", d: "The sampling distribution of p̂ is approximately normal when the expected numbers of successes and failures are both at least 10: np ≥ 10 and n(1 − p) ≥ 10.", u: 3, tp: "3.2", also: ["3.3","3.7","3.9","3.10","3.13"], x: "AP tip: for confidence intervals use p̂ in place of p; for tests use p₀.", r: ["Sampling distribution of p̂","Normal distribution"] },

  // 3.3 CI for p
  { t: "Confidence interval", d: "An interval of plausible values for a parameter, calculated as point estimate ± margin of error.", u: 3, tp: "3.3", also: ["3.4","3.10","4.2"], f: "statistic ± (critical value)(standard error)", r: ["Margin of error","Confidence level"] },
  { t: "Margin of error", d: "How far the point estimate is likely to be from the parameter in either direction, from sampling variability alone.", u: 3, tp: "3.3", also: ["3.4","3.10","4.2"], f: "ME = (critical value)(standard error)", x: "The margin of error covers only sampling variability, not bias from poor sampling or wording.", r: ["Confidence interval","Critical value"] },
  { t: "Confidence level", d: "The success rate of the method: the percent of all possible samples whose interval would capture the true parameter, such as 95%.", u: 3, tp: "3.3", also: ["3.4","3.11","4.3"], x: "Interpret: \"If we took many random samples of this size and built a 95% interval from each, about 95% of them would capture the true proportion.\"", r: ["Confidence interval"] },
  { t: "Critical value", d: "The multiplier z* or t* that gives the desired confidence level: the central C% of the standard normal (or t) distribution lies between −z* and z*.", u: 3, tp: "3.3", also: ["3.10","4.2"], x: "Common z* values: 1.645 for 90%, 1.960 for 95%, 2.576 for 99%.", r: ["Confidence level","Margin of error"] },
  { t: "One-sample z interval for a proportion", d: "A confidence interval for a population proportion p.", u: 3, tp: "3.3", f: "p̂ ± z* √( p̂(1 − p̂) ÷ n )", x: "Conditions: random sample, 10% condition, and large counts (np̂ ≥ 10 and n(1 − p̂) ≥ 10).", r: ["Confidence interval","Large counts condition"] },
  { t: "Conditions for inference", d: "The checks that justify a procedure: Random (data from a random sample or random assignment), Independence (10% condition when sampling without replacement), and Normal/Large sample (large counts or the CLT).", u: 3, tp: "3.3", also: ["3.7","4.2","4.5"], r: ["10% condition","Large counts condition"] },
  { t: "Sample size for a desired margin of error", d: "To find the sample size n needed for a margin of error at most ME, solve z*√(p(1−p)/n) ≤ ME. Use p = 0.5 if no estimate is available, and round up.", u: 3, tp: "3.3", f: "n ≥ (z* ÷ ME)² · p(1 − p)", r: ["Margin of error"] },

  // 3.4 Justifying a claim with a CI
  { t: "Plausible value", d: "A value of the parameter that lies inside the confidence interval. Values outside the interval are not plausible.", u: 3, tp: "3.4", also: ["3.11","4.3","4.8"], x: "AP tip: if the claimed value is inside the interval, say the data do not give convincing evidence against it — never that the claim is proven.", r: ["Confidence interval"] },
  { t: "Width of a confidence interval", d: "The interval is narrower with a larger sample size and wider with a higher confidence level.", u: 3, tp: "3.4", also: ["3.11","4.3"], x: "Quadrupling n cuts the margin of error in half.", r: ["Margin of error","Confidence level"] },

  // 3.5 Setting up a test
  { t: "Significance test", d: "A procedure that uses sample data to weigh the evidence against a claim (the null hypothesis) about a parameter. Also called a hypothesis test.", u: 3, tp: "3.5", also: ["4.4"], r: ["Null hypothesis","Alternative hypothesis","P-value"] },
  { t: "Null hypothesis", d: "The claim of no effect or no difference that a significance test looks for evidence against, written H₀. It always uses an equals sign, such as H₀: p = 0.5.", u: 3, tp: "3.5", also: ["3.8","3.12","4.4","4.9"], r: ["Alternative hypothesis"] },
  { t: "Alternative hypothesis", d: "The claim we are trying to find evidence for, written Hₐ. It is one-sided (< or >) or two-sided (≠).", u: 3, tp: "3.5", also: ["3.12","4.4","4.9"], x: "AP tip: hypotheses are about parameters (p, μ), never statistics (p̂, x̄). Define the parameter in words.", r: ["Null hypothesis","One-sided test","Two-sided test"] },
  { t: "One-sided test", d: "A test whose alternative hypothesis says the parameter is greater than, or less than, the null value.", u: 3, tp: "3.5", r: ["Two-sided test","Alternative hypothesis"] },
  { t: "Two-sided test", d: "A test whose alternative hypothesis says the parameter is different from (≠) the null value, in either direction.", u: 3, tp: "3.5", r: ["One-sided test"] },
  { t: "Significance level", d: "The cutoff α for deciding a P-value is small enough to reject H₀, chosen before collecting data. Usually 0.05.", u: 3, tp: "3.5", also: ["3.8"], x: "α is also the probability of a Type I error when H₀ is true.", r: ["P-value","Type I error"] },

  // 3.6 P-values
  { t: "P-value", d: "Assuming the null hypothesis is true, the probability of getting a statistic as extreme as or more extreme than the one observed, in the direction of the alternative.", u: 3, tp: "3.6", also: ["3.7","3.13","4.5"], x: "Interpret: \"Assuming H₀ is true, there is a 0.032 probability of getting a sample proportion of 0.62 or higher by chance alone.\"", r: ["Significance level","Test statistic"] },
  { t: "Test statistic", d: "A standardized value that measures how far the sample statistic is from the null value, in standard errors.", u: 3, tp: "3.6", also: ["3.7","3.13","4.5"], f: "test statistic = (statistic − null value) ÷ (standard error of statistic)", r: ["P-value","z test statistic"] },
  { t: "Decision rule", d: "If the P-value ≤ α, reject H₀: there is convincing evidence for Hₐ. If the P-value > α, fail to reject H₀: there is not convincing evidence for Hₐ.", u: 3, tp: "3.6", also: ["3.8"], x: "AP tip: never \"accept H₀.\" Failing to reject means the evidence was not strong enough, not that H₀ is true.", r: ["P-value","Significance level"] },

  // 3.7 Carrying out a test for p
  { t: "One-sample z test for a proportion", d: "A significance test about a population proportion p.", u: 3, tp: "3.7", f: "z = (p̂ − p₀) ÷ √( p₀(1 − p₀) ÷ n )", x: "Use p₀ (not p̂) in the standard error and in the large counts check.", r: ["Significance test","z test statistic"] },
  { t: "z test statistic", d: "A test statistic that follows the standard normal distribution when H₀ is true and conditions are met.", u: 3, tp: "3.7", r: ["Test statistic","Standard normal distribution"] },
  { t: "Four-step process", d: "The AP structure for inference: State (parameter, hypotheses or confidence level, α), Plan (name the procedure, check conditions), Do (calculations), Conclude (in context, linked to the P-value or interval).", u: 3, tp: "3.7", also: ["3.13","4.5"], r: ["Conditions for inference"] },

  // 3.8 Errors
  { t: "Type I error", d: "Rejecting H₀ when H₀ is actually true: finding convincing evidence for an effect that is not really there. Its probability is α.", u: 3, tp: "3.8", also: ["4.5"], x: "AP tip: describe the error in context and give a consequence of making it.", r: ["Type II error","Significance level"] },
  { t: "Type II error", d: "Failing to reject H₀ when Hₐ is actually true: missing a real effect. Its probability is β.", u: 3, tp: "3.8", also: ["4.5"], r: ["Type I error","Power"] },
  { t: "Power", d: "The probability that a test correctly rejects H₀ when a particular alternative value of the parameter is true. Power = 1 − β.", u: 3, tp: "3.8", f: "Power = 1 − P(Type II error)", x: "Power goes up with a larger sample size, a larger α, or a true value farther from the null value.", r: ["Type II error"] },

  // 3.9 Sampling dist of difference
  { t: "Sampling distribution of p̂₁ − p̂₂", d: "The distribution of the difference in sample proportions over all pairs of independent random samples. Its mean is p₁ − p₂.", u: 3, tp: "3.9", f: "μ = p₁ − p₂;  σ = √( p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂ )", r: ["Large counts condition"] },
  { t: "Independent samples", d: "Samples in which the individuals selected for one sample have no influence on which individuals are selected for the other.", u: 3, tp: "3.9", also: ["3.12","4.6","4.9"], r: ["Paired data"] },

  // 3.10 CI for p1-p2
  { t: "Two-sample z interval for a difference in proportions", d: "A confidence interval for p₁ − p₂.", u: 3, tp: "3.10", also: ["3.11"], f: "(p̂₁ − p̂₂) ± z* √( p̂₁(1−p̂₁)/n₁ + p̂₂(1−p̂₂)/n₂ )", x: "Check the large counts condition in all four groups: n₁p̂₁, n₁(1−p̂₁), n₂p̂₂, n₂(1−p̂₂) ≥ 10.", r: ["Confidence interval","Sampling distribution of p̂₁ − p̂₂"] },

  // 3.11 Justifying a claim with a two-proportion CI
  { t: "Interval containing zero", d: "If a confidence interval for a difference includes 0, then \"no difference\" is plausible. If the whole interval is above or below 0, there is convincing evidence of a difference in that direction.", u: 3, tp: "3.11", also: ["4.8"], r: ["Plausible value"] },

  // 3.12 Setting up a two-proportion test
  { t: "Pooled proportion", d: "The combined proportion of successes in both samples, used in a two-proportion z test because H₀ says p₁ = p₂.", u: 3, tp: "3.12", also: ["3.13"], f: "p̂_c = (x₁ + x₂) ÷ (n₁ + n₂)", r: ["Two-sample z test for a difference in proportions"] },

  { t: "Hypotheses for a difference in proportions", d: "H₀: p₁ − p₂ = 0 (the two population proportions are equal) against Hₐ: p₁ − p₂ < 0, > 0, or ≠ 0, with p₁ and p₂ defined in context.", u: 3, tp: "3.12", x: "AP tip: define both parameters and say which group is 1 and which is 2.", r: ["Null hypothesis","Pooled proportion"] },

  // 3.13 Carrying out a two-proportion test
  { t: "Two-sample z test for a difference in proportions", d: "A significance test of H₀: p₁ − p₂ = 0.", u: 3, tp: "3.13", f: "z = (p̂₁ − p̂₂) ÷ √( p̂_c(1−p̂_c)(1/n₁ + 1/n₂) )", r: ["Pooled proportion","Significance test"] },

  // 3.14 Setting up chi-square
  { t: "Chi-square test for homogeneity", d: "A test of whether the distribution of a categorical variable is the same in two or more populations or treatment groups, using separate samples or groups.", u: 3, tp: "3.14", also: ["3.15"], x: "AP tip: homogeneity = several samples, one variable. Independence = one sample, two variables.", r: ["Chi-square test for independence","Expected count"] },
  { t: "Chi-square test for independence", d: "A test of whether two categorical variables are associated in one population, using a single random sample classified on both variables.", u: 3, tp: "3.14", also: ["3.15"], r: ["Chi-square test for homogeneity","Association"] },
  { t: "Expected count", d: "The count expected in a cell of a two-way table if H₀ were true.", u: 3, tp: "3.14", also: ["3.15"], f: "Expected = (row total)(column total) ÷ table total", x: "Condition: all expected counts must be at least 5.", r: ["Observed count","Chi-square statistic"] },
  { t: "Observed count", d: "The actual count in a cell of a table from the sample data.", u: 3, tp: "3.14", r: ["Expected count"] },

  // 3.15 Carrying out chi-square
  { t: "Chi-square statistic", d: "A measure of how far the observed counts are from the expected counts, summed over all cells.", u: 3, tp: "3.15", f: "χ² = Σ (Observed − Expected)² ÷ Expected", r: ["Chi-square distribution","Expected count"] },
  { t: "Chi-square distribution", d: "A family of right-skewed density curves taking only nonnegative values, each determined by its degrees of freedom. Its mean equals its df.", u: 3, tp: "3.15", r: ["Chi-square statistic","Degrees of freedom"] },
  { t: "Degrees of freedom", d: "The parameter that identifies which t or chi-square distribution to use. For a two-way table chi-square test, df = (rows − 1)(columns − 1).", u: 3, tp: "3.15", also: ["4.2"], f: "df = (r − 1)(c − 1)", r: ["Chi-square distribution","t distribution"] },
  { t: "Contribution to chi-square", d: "The value (O − E)² ÷ E for one cell. The largest contributions show which cells differ most from what H₀ predicts.", u: 3, tp: "3.15", r: ["Chi-square statistic"] }
]);
