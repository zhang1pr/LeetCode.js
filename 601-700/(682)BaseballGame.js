/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];

  for (const op of ops) {
    if (op == '+') {
      stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
    } else if (op == 'C') {
      stack.pop();
    } else if (op == 'D') {
      stack.push(2 * stack[stack.length - 1]);
    } else {
      stack.push(Number(op));
    }
  }

  return stack.reduce((a, b) => a + b);
};

// time:  O(n)
// space: O(n)

// ['1']
// ['5', '2', 'C', 'D', '+']
// ['5', '-2', '4', 'C', 'D', '9', '+', '+']
