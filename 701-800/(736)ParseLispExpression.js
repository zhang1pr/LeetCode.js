/**
 * @param {string} expression
 * @return {number}
 */
 var evaluate = function(expression) {
  const scope = [new Map()];

  function evaluatePrep(expression) {
    scope.push(new Map());
    const res = evaluateInner(expression);
    scope.pop();

    return res;
  }

  function evaluateInner(expression) {
    if (expression[0] != '(') {
      if ('0' <= expression[0] && expression[0] <= '9' || expression[0] == '-') {
        return Number(expression);
      }

      for (let i = scope.length - 1; i >= 0; --i) {
        if (scope[i].has(expression)) {
          return scope[i].get(expression);
        }
      }
    }

    const tokens = parse(expression.slice(expression[1] == 'm' ? 6 : 5, expression.length - 1));

    if (expression.startsWith('add', 1)) {
      return evaluatePrep(tokens[0]) + evaluatePrep(tokens[1]);
    } else if (expression.startsWith('mult', 1)) {
      return evaluatePrep(tokens[0]) * evaluatePrep(tokens[1]);
    } else {
      for (let j = 1; j < tokens.length; j += 2) {
        scope[scope.length - 1].set(tokens[j - 1], evaluatePrep(tokens[j]));
      }

      return evaluatePrep(tokens[tokens.length - 1]);
    }
  }

  return evaluatePrep(expression);
};

var parse = function(expression) {
  const res = [];
  let cnt = 0;
  let str = '';

  for (const token of expression.split(' ')) {
    for (const ch of token) {
      if (ch == '(') {
        cnt++;
      }

      if (ch == ')') {
        cnt--;
      }
    }

    if (str.length) {
      str += ' ';
    }

    str += token;

    if (cnt == 0) {
      res.push(str);
      str = '';
    }
  }

  if (str.length) {
    res.push(str);
  }

  return res;
};

// time:  O(n^2)
// space: O(n^2)

// '(add 1 2)'
// '(let x 3 x 2 x)'
// '(mult 3 (add 2 3))'
// '(let x 2 (mult x 5))'
// '(let a1 3 b2 (add a1 1) b2)'
// '(let x 1 y 2 x (add x y) (add x y))'
// '(let x 2 (add (let x 3 (let x 4 x)) x))'
// '(let x 2 (mult x (let x 3 y 4 (add x y))))'
