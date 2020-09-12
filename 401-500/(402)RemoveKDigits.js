/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const len = num.length;

  if (k == len) {
    return '0';
  }

  const stack = [];
  let i = 0;
  while (i < len) {
    while (k > 0 && stack.length && stack[stack.length - 1] > Number(num[i])) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
    i++;
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  i = 0;
  while (i < stack.length && stack[i] == '0') {
    i++;
  }

  let res = '';
  while (i < stack.length) {
    res += stack[i];
    i++;
  }

  return res ? res : '0';
};

// '10', 2
// '10200', 1
// '1432219', 3
