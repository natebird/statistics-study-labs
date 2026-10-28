/* AP Statistics Unit 4 terms: Inference for Quantitative Data: Means.
   Fields: t term, d definition, u unit, tp topic where introduced, also later topics that use it, x example or AP tip, f formula, r related terms. */
window.GLOSSARY = (window.GLOSSARY || []).concat([
  // 4.1 Sampling distribution of x-bar
  { t: "Sample mean", d: "The mean of the values in a sample, written x̄. It is an unbiased estimator of the population mean μ.", u: 4, tp: "4.1", r: ["Population mean","Mean"] },
  { t: "Population mean", d: "The mean of all values in a population, written μ. It is a parameter.", u: 4, tp: "4.1", r: ["Sample mean","Parameter"] },
  { t: "Sampling distribution of x̄", d: "The distribution of the sample mean over all random samples of size n. Its mean is μ and its standard deviation is σ ÷ √n.", u: 4, tp: "4.1", f: "μ_x̄ = μ;  σ_x̄ = σ ÷ √n", x: "AP tip: the sampling distribution is exactly normal if the population is normal, and approximately normal by the CLT if n ≥ 30.", r: ["Central Limit Theorem (CLT)","Sampling distribution"] },
  { t: "Standard deviation of x̄", d: "How much sample means typically vary from μ. It gets smaller as n increases, by a factor of √n.", u: 4, tp: "4.1", f: "σ_x̄ = σ ÷ √n", x: "To cut the standard deviation of x̄ in half, multiply the sample size by 4.", r: ["Sampling distribution of x̄","Standard error"] },
  { t: "Normal/large sample condition", d: "For inference about a mean: the population distribution is approximately normal, or n ≥ 30, or (for small samples) a graph of the sample data shows no strong skew or outliers.", u: 4, tp: "4.1", also: ["4.2","4.5","4.7"], r: ["Central Limit Theorem (CLT)","Conditions for inference"] },

  // 4.2 CI for mean / mean difference
  { t: "t distribution", d: "A family of symmetric, bell-shaped density curves centered at 0 with heavier tails than the standard normal. As degrees of freedom increase it approaches the standard normal.", u: 4, tp: "4.2", also: ["4.5","4.7"], x: "Use t instead of z for means because σ is unknown and estimated by s.", r: ["Degrees of freedom","Standard normal distribution"] },
  { t: "Standard error of x̄", d: "The estimate of the standard deviation of x̄ using the sample standard deviation: s ÷ √n.", u: 4, tp: "4.2", f: "SE_x̄ = s ÷ √n", r: ["Standard error","Standard deviation of x̄"] },
  { t: "One-sample t interval for a mean", d: "A confidence interval for a population mean μ when σ is unknown.", u: 4, tp: "4.2", f: "x̄ ± t* (s ÷ √n),  df = n − 1", x: "Calculator: TInterval. On the FRQ, name the procedure and give x̄, s, n, and df.", r: ["t distribution","Confidence interval"] },
  { t: "Paired data", d: "Data in which each observation in one group is matched with one in the other, such as before-and-after measurements on the same individual or matched pairs of similar individuals.", u: 4, tp: "4.2", also: ["4.4","4.5"], x: "AP tip: with paired data, take differences first and analyze the single list of differences. Do not use two-sample procedures.", r: ["Mean difference","Matched pairs design","Independent samples"] },
  { t: "Mean difference", d: "The population mean of the differences for paired data, written μ_d. Its estimate is the sample mean of the differences, x̄_d.", u: 4, tp: "4.2", also: ["4.4"], r: ["Paired data","Paired t interval"] },
  { t: "Paired t interval", d: "A one-sample t interval applied to the differences in paired data.", u: 4, tp: "4.2", f: "x̄_d ± t* (s_d ÷ √n),  df = n − 1", r: ["Paired data","One-sample t interval for a mean"] },

  // 4.3 Justifying a claim with a mean CI
  { t: "Interpreting a confidence interval", d: "\"We are C% confident that the interval from __ to __ captures the true [parameter in context].\"", u: 4, tp: "4.3", also: ["4.8"], x: "AP tip: the confidence is in the method. Do not say \"there is a 95% probability that μ is in this interval.\"", r: ["Confidence level","Plausible value"] },
  { t: "Practical significance", d: "Whether an effect or difference is large enough to matter in the real world. A statistically significant result can be too small to be practically important.", u: 4, tp: "4.3", also: ["4.5","4.8"], r: ["Statistically significant"] },

  // 4.4 Setting up a test for mean
  { t: "Hypotheses for a mean", d: "H₀: μ = μ₀ against Hₐ: μ < μ₀, μ > μ₀, or μ ≠ μ₀, where μ is the population mean in context.", u: 4, tp: "4.4", r: ["Null hypothesis","Alternative hypothesis"] },
  { t: "Hypotheses for a mean difference", d: "For paired data, H₀: μ_d = 0 (no difference on average) against a one- or two-sided alternative, where μ_d is defined with a clear order of subtraction.", u: 4, tp: "4.4", x: "Define the difference: \"μ_d = true mean of (after − before) heart rate.\"", r: ["Mean difference","Paired data"] },

  // 4.5 Carrying out a test for mean
  { t: "One-sample t test for a mean", d: "A significance test about a population mean μ when σ is unknown.", u: 4, tp: "4.5", f: "t = (x̄ − μ₀) ÷ (s ÷ √n),  df = n − 1", x: "Calculator: T-Test. The P-value comes from the t distribution with n − 1 df.", r: ["t distribution","Significance test"] },
  { t: "Paired t test", d: "A one-sample t test performed on the differences in paired data, usually testing H₀: μ_d = 0.", u: 4, tp: "4.5", f: "t = (x̄_d − 0) ÷ (s_d ÷ √n)", r: ["Paired data","One-sample t test for a mean"] },
  { t: "t test statistic", d: "A test statistic that follows a t distribution when H₀ is true and conditions are met.", u: 4, tp: "4.5", also: ["4.10"], r: ["Test statistic","t distribution"] },

  // 4.6 Sampling dist of difference in means
  { t: "Sampling distribution of x̄₁ − x̄₂", d: "The distribution of the difference in sample means over all pairs of independent random samples. Its mean is μ₁ − μ₂.", u: 4, tp: "4.6", f: "μ = μ₁ − μ₂;  σ = √( σ₁²/n₁ + σ₂²/n₂ )", x: "The variances add even though the means are subtracted.", r: ["Independent samples"] },
  { t: "Standard error of x̄₁ − x̄₂", d: "The estimated standard deviation of the difference in sample means, using the sample standard deviations.", u: 4, tp: "4.6", also: ["4.7","4.10"], f: "SE = √( s₁²/n₁ + s₂²/n₂ )", r: ["Sampling distribution of x̄₁ − x̄₂"] },

  // 4.7 CI for difference in means
  { t: "Two-sample t interval for a difference in means", d: "A confidence interval for μ₁ − μ₂ from two independent random samples or two groups in a randomized experiment.", u: 4, tp: "4.7", f: "(x̄₁ − x̄₂) ± t* √( s₁²/n₁ + s₂²/n₂ )", x: "Use technology for df (2-SampTInt, not pooled), or use the smaller of n₁ − 1 and n₂ − 1 as a conservative df.", r: ["t distribution","Confidence interval"] },
  { t: "Conservative degrees of freedom", d: "For two-sample t procedures, using df = the smaller of n₁ − 1 and n₂ − 1. It gives a slightly wider interval or larger P-value than technology.", u: 4, tp: "4.7", also: ["4.10"], r: ["Degrees of freedom"] },

  // 4.8 Justifying a claim with a two-mean CI
  { t: "Difference of zero", d: "When a confidence interval for μ₁ − μ₂ contains 0, it is plausible the two population means are equal; when it lies entirely above or below 0, there is convincing evidence they differ.", u: 4, tp: "4.8", r: ["Interval containing zero"] },

  // 4.9 Setting up a two-mean test
  { t: "Hypotheses for a difference in means", d: "H₀: μ₁ − μ₂ = 0 against Hₐ: μ₁ − μ₂ < 0, > 0, or ≠ 0, where each μ is defined in context.", u: 4, tp: "4.9", r: ["Null hypothesis","Two-sample t test for a difference in means"] },
  { t: "Randomized experiment inference", d: "When treatments are randomly assigned, two-sample procedures test whether the difference in responses is larger than random assignment alone would produce; a significant result supports cause and effect.", u: 4, tp: "4.9", also: ["4.10"], r: ["Random assignment","Scope of inference"] },

  // 4.10 Carrying out two-mean test
  { t: "Two-sample t test for a difference in means", d: "A significance test of H₀: μ₁ − μ₂ = 0 using two independent samples or groups.", u: 4, tp: "4.10", f: "t = (x̄₁ − x̄₂) ÷ √( s₁²/n₁ + s₂²/n₂ )", x: "Do not pool variances on the AP exam. Calculator: 2-SampTTest with Pooled: No.", r: ["Hypotheses for a difference in means","t test statistic"] }
]);
