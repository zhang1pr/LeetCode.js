/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = new Array(Math.floor(tokens.length/2) + 1).fill(0);
  let index = 0;

  for (const token of tokens) {
    switch (token) {
    case '+':
      index--;
      stack[index - 1] += stack[index];
      break;
    case '-':
      index--;
      stack[index - 1] -= stack[index];
      break;
    case '*':
      index--;
      stack[index - 1] *= stack[index];
      break;
    case '/':
      index--;
      stack[index - 1] /= stack[index];
      stack[index - 1] = Math.trunc(stack[index - 1]);
      break;
    default:
      stack[index] = parseInt(token);
      index++;
    }
  }

  return stack[0];
};

// time:  O(n)
// space: O(1)

// test cases:
// ['0']
// ['2', '1', '+', '3', '*']
// ['4', '13', '5', '/', '+']
// ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
