/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const arr = Array(n+1).fill(0);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[j - 1] * arr[i - j];
    }
  }

  return arr[n];
};

// time:  O(n^2)
// space: O(n)

// 0
// 1
// 2
// 3
