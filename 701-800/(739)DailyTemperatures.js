/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const res = Array(T.length).fill(0);

  const stack = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 1]
// [2, 1]
// [1, 2, 3]
// [2, 1, 1]
// [2, 1, 3]
// [2, 3, 3]
// [73, 74, 75, 71, 69, 72, 76, 73]
