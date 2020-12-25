/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  const dp = [...Array(n + 1)].map(() => Array(n + 1));

  for (let j = 2; j <= n; j++) {
    for (let i = j - 1; i > 0; i--) {
      if (i + 1 == j) {
        dp[i][j] = i;
      } else {
        let min = Infinity;

        for (let k = i + 1; k < j; k++) {
          min = Math.min(min, k + Math.max(dp[i][k - 1], dp[k + 1][j]));
        }

        dp[i][j] = min;
      }
    }
  }

  return dp[1][n];
};

// time:  O(n^3)
// space: O(n^2)

// 1
// 2
// 3
// 4
// 5
// 10
