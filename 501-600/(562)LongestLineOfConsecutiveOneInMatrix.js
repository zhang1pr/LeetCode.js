/**
 * @param {number[][]} M
 * @return {number}
 */
var longestLine = function (M) {
  if (M == null || M.length == 0) {
    return 0;
  }

  const m = M.length;
  const n = M[0].length;

  const dp = [...Array(n + 2)].map(() => [0, 0, 0, 0]);
  let max = 0;

  for (let i = 0; i < m; i++) {
    let temp = dp[0][2];

    for (let j = 0; j < n; j++) {
      let pre = dp[j + 1][2];

      if (M[i][j] == 1) {
        dp[j + 1][0] = dp[j][0] + 1;
        dp[j + 1][1] = dp[j + 1][1] + 1;
        dp[j + 1][2] = temp + 1;
        dp[j + 1][3] = dp[j + 2][3] + 1;

        max = Math.max(max, ...[j + 1]);
      }

      temp = pre;
    }
  }

  return max;
}

// time:  O(mn)
// space: O(n)

// [[0]]
// [[1]]
// [[0, 1]]
// [[1, 1]]
// [[1], [1]]
// [[1, 1, 1]]
// [[1, 1], [1, 1]]
// [[0, 1], [1, 1], [1, 1]]
// [[0, 1, 1], [1, 1, 1]]
// [[0, 1, 1], [1, 1, 0], [1, 0, 0]]
// [[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 1]]
