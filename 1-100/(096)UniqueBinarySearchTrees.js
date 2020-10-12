/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let res = 1;
  let i;
  for (i = 1; i <= n; i++) {
    res = res * (i + n) / i;
  }

  return res / i;
};

// time:  O(n)
// space: O(1)

// 1
// 2
// 3
// 19
