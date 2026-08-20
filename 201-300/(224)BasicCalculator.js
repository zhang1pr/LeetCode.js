/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let operand = 0;
  let res = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= '0' && ch <= '9') {
      operand = 10 * operand + (ch - '0');
    } else if (ch === '+') {
      res += sign * operand;
      sign = 1;
      operand = 0;
    } else if (ch === '-') {
      res += sign * operand;
      sign = -1;
      operand = 0;
    } else if (ch === '(') {
      stack.push(res);
      stack.push(sign);
      sign = 1;
      res = 0;
    } else if (ch === ')') {
      res += sign * operand;
      res *= stack.pop();
      res += stack.pop();
      operand = 0;
    }
  }

  return res + (sign * operand);
};

// time:  O(n)
// space: O(1)

// '0'
// '1 + 1'
// ' 2-1 + 2 '
// '(1+(4+5+2)-3)+(6+8)'
