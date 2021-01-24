/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  let sign = 1;
  let coeff = 0;
  let tot = 0;
  let i = 0;

  for (let j = 0; j < equation.length; j++) {
    if (equation[j] == '+' || equation[j] == '-') {
      if (j > i) {
        tot += sign * parseInt(equation.slice(i, j), 10);
      }

      i = j;
    } else if (equation[j] == 'x') {
      if (i == j || equation[j - 1] == '+') {
        coeff += sign;
      } else if (equation[j - 1] == '-') {
        coeff -= sign;
      } else {
        coeff += sign * parseInt(equation.slice(i, j), 10);
      }

      i = j + 1;
    } else if (equation[j] == '=') {
      if (j > i) {
        tot += sign * parseInt(equation.slice(i, j), 10);
      }

      sign = -1;
      i = j + 1;
    }
  }

  if (i < equation.length) {
    tot += sign * parseInt(equation.slice(i), 10);
  }

  if (coeff == 0 && tot == 0) {
    return 'Infinite solutions';
  }

  if (coeff == 0 && tot) {
    return 'No solution';
  }

  const res = -Math.trunc(tot/coeff);
  return 'x=' + res.toString();
};

// time:  O(n)
// space: O(1)

// 'x=x'
// '2x=x'
// 'x=x+2'
// '2x+3x-6x=x+2'
// 'x+5-3+x=6+x-2'
