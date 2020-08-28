/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let N = n + m - 2;
  let k = m - 1;
  let res = 1;

  for (let i = 1; i <= k; i++) {
    res *= (N - i + 1) / i;
  }

  return res;
};

// time:  O(1)
// space: O(1)

// test cases:
// 1, 1
// 1, 3
// 3, 1
// 7, 3
