/* AP Statistics Unit 5 terms: Regression Analysis.
   Fields: t term, d definition, u unit, tp topic where introduced, also later topics that use it, x example or AP tip, f formula, r related terms. */
window.GLOSSARY = (window.GLOSSARY || []).concat([
  // 5.1 Scatterplots
  { t: "Scatterplot", d: "A graph of the relationship between two quantitative variables measured on the same individuals, with the explanatory variable on the x-axis and the response on the y-axis.", u: 5, tp: "5.1", also: ["5.2"], r: ["Explanatory variable","Response variable"] },
  { t: "Direction", d: "Whether a scatterplot shows a positive association (y tends to increase as x increases) or a negative association (y tends to decrease as x increases).", u: 5, tp: "5.1", r: ["Positive association","Negative association"] },
  { t: "Form", d: "The overall shape of the pattern in a scatterplot, such as linear or curved, plus any clusters.", u: 5, tp: "5.1", r: ["Direction","Strength"] },
  { t: "Strength", d: "How closely the points in a scatterplot follow a clear form.", u: 5, tp: "5.1", also: ["5.2"], r: ["Correlation coefficient"] },
  { t: "Positive association", d: "Above-average values of one variable tend to go with above-average values of the other.", u: 5, tp: "5.1", r: ["Negative association","Direction"] },
  { t: "Negative association", d: "Above-average values of one variable tend to go with below-average values of the other.", u: 5, tp: "5.1", r: ["Positive association","Direction"] },
  { t: "DUFS", d: "A checklist for describing a scatterplot: Direction, Unusual features (outliers, clusters), Form, and Strength, in context.", u: 5, tp: "5.1", r: ["Direction","Form","Strength"] },

  // 5.2 Correlation
  { t: "Correlation coefficient", d: "A number r between −1 and 1 that measures the direction and strength of a linear relationship between two quantitative variables.", u: 5, tp: "5.2", also: ["5.5"], f: "r = (1 ÷ (n − 1)) Σ z_x z_y", x: "Interpret: \"The correlation of r = −0.82 indicates a strong, negative, linear relationship between ...\"", r: ["Strength","Coefficient of determination"] },
  { t: "Properties of correlation", d: "r has no units and is unchanged by changing units or by swapping x and y. It measures only linear association and is not resistant to outliers.", u: 5, tp: "5.2", x: "AP tip: r near 0 does not mean no relationship. There may be a strong curved one.", r: ["Correlation coefficient"] },
  { t: "Correlation is not causation", d: "A strong correlation between two variables does not show that one causes the other. A lurking variable or coincidence may explain it.", u: 5, tp: "5.2", r: ["Confounding variable","Lurking variable"] },
  { t: "Lurking variable", d: "A variable not included in a study that affects the relationship between the variables being studied.", u: 5, tp: "5.2", r: ["Confounding variable","Correlation is not causation"] },

  // 5.3 Linear regression models
  { t: "Regression line", d: "A line that describes how a response variable y changes as an explanatory variable x changes, used to predict y from x.", u: 5, tp: "5.3", also: ["5.5"], f: "ŷ = a + bx", r: ["Slope","y-intercept","Predicted value"] },
  { t: "Predicted value", d: "The value ŷ (\"y-hat\") of the response given by the regression line for a particular x.", u: 5, tp: "5.3", also: ["5.4"], r: ["Regression line","Residual"] },
  { t: "Slope", d: "The amount the predicted y changes for each 1-unit increase in x, written b.", u: 5, tp: "5.3", also: ["5.5"], x: "Interpret: \"For each additional hour studied, the predicted test score increases by 4.2 points.\"", r: ["y-intercept","Regression line"] },
  { t: "y-intercept", d: "The predicted value of y when x = 0, written a. It often has no practical meaning if x = 0 is outside the data.", u: 5, tp: "5.3", also: ["5.5"], r: ["Slope"] },
  { t: "Extrapolation", d: "Using a regression line to predict for x-values far outside the range of the data. Such predictions are often unreliable.", u: 5, tp: "5.3", r: ["Predicted value"] },

  // 5.4 Residuals
  { t: "Residual", d: "The difference between an observed value of y and the value predicted by the regression line.", u: 5, tp: "5.4", also: ["5.5"], f: "residual = y − ŷ", x: "A positive residual means the point is above the line: the model underpredicted.", r: ["Predicted value","Residual plot"] },
  { t: "Residual plot", d: "A scatterplot of the residuals against x (or ŷ). A linear model is appropriate when the residual plot shows no leftover pattern.", u: 5, tp: "5.4", x: "AP tip: a curved pattern in the residual plot means a linear model is not appropriate.", r: ["Residual"] },
  { t: "Standard deviation of the residuals", d: "The typical size of a prediction error when using the regression line, written s, in the units of y.", u: 5, tp: "5.4", also: ["5.5"], f: "s = √( Σ residuals² ÷ (n − 2) )", x: "Interpret: \"The actual test scores typically vary by about 5.1 points from the scores predicted by the line.\"", r: ["Residual"] },

  // 5.5 Least-squares regression
  { t: "Least-squares regression line", d: "The line that makes the sum of the squared residuals as small as possible. It always passes through (x̄, ȳ).", u: 5, tp: "5.5", f: "b = r · (s_y ÷ s_x);  a = ȳ − b x̄", r: ["Regression line","Residual"] },
  { t: "Coefficient of determination", d: "The value r², the proportion of the variation in y that is accounted for by the least-squares regression line on x.", u: 5, tp: "5.5", f: "r² = 1 − Σresid² ÷ Σ(y − ȳ)²", x: "Interpret: \"About 67% of the variation in test score is accounted for by the linear model relating score to hours studied.\"", r: ["Correlation coefficient"] },
  { t: "Computer regression output", d: "A table from software giving the y-intercept (Constant) and slope (labeled with the x-variable's name) in the Coef column, along with s, r², and R-sq.", u: 5, tp: "5.5", x: "AP tip: read the slope from the row named for the explanatory variable, not the Constant row.", r: ["Slope","y-intercept"] }
]);
