/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
  const res = [];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.append(i + 1);

    if (s[i] == 'I') {
      while (stack.length) {
        res.push(stack.pop());
      }
    }
  }

  stack.push(s.length + 1);

  while (stack.length) {
    res.push(stack.pop());
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'I'
// 'D'
// 'DI'
// 'DDIIDI'
