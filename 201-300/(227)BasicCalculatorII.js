/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const len = s.length;

  if (s == null || len == 0) {
    return 0;
  }

  const stack = [];

  let num = 0;
  let sign = '+';

  for (let i = 0; i < len; i++) {
    const char = s[i];

    if (Number.isInteger(Number(char)) && char != ' ') {
      num = num * 10 + Number(char);
    }

    if (!Number.isInteger(Number(char)) && char != ' ' || i == len - 1) {
      if (sign == '-') {
        stack.push(-num);
      }

      if (sign == '+') {
        stack.push(num);
      }

      if (sign == '*') {
        stack.push(stack.pop() * num);
      }

      if (sign == '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }

      sign = char;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};

// time:  O(n)
// space: O(n)

// '0'
// '42'
// '1 + 1'
// '3+2*2'
// ' 2-1 + 2 '
// ' 3/2'
// '5/3 '
// ' 3/5*5'
// ' 3+5 / 2 '
// ' 14-3/2  '
