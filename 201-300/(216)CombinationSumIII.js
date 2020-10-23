/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = [];

  function generateCombinationSum(stack, k, n, start) {
    if (stack.length == k) {
      if (n == 0) {
        res.push(stack.slice());
      }

      return;
    }

    for (let i = start; i < 10; i++) {
      stack.push(i);
      generateCombinationSum(stack, k, n - i, i + 1);
      stack.pop();
    }
  }

  generateCombinationSum([], k, n, 1);

  return res;
};

// time:  O(1)
// space: O(1)

// 0, 1
// 1, 0
// 1, 1
// 2, 1
// 2, 4
// 3, 5
// 3, 7
// 3, 9
