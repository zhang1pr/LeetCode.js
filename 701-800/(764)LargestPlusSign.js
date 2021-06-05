/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
  const mineSet = new Set();
  const dp = [...Array(N)].map(() => Array(N).fill(0));

  for (const [r, c] of mines) {
    mineSet.add(r * N + c);
  }

  let res = 0
  let cnt;

  for (let r = 0; r < N; r++) {
    cnt = 0;
    for (let c = 0; c < N; ++c) {
      cnt = mineSet.has(r * N + c) ? 0 : cnt + 1;
      dp[r][c] = cnt;
    }

    cnt = 0;
    for (let c = N - 1; c >= 0; c--) {
      cnt = mineSet.has(r * N + c) ? 0 : cnt + 1;
      dp[r][c] = Math.min(dp[r][c], cnt);
    }
  }

  for (let c = 0; c < N; ++c) {
    cnt = 0;
    for (let r = 0; r < N; r++) {
      cnt = mineSet.has(r * N + c) ? 0 : cnt + 1;
      dp[r][c] = Math.min(dp[r][c], cnt);
    }

    cnt = 0;
    for (let r = N - 1; r >= 0; r--) {
      cnt = mineSet.has(r * N + c) ? 0 : cnt + 1;
      dp[r][c] = Math.min(dp[r][c], cnt);
      res = Math.max(res, dp[r][c]);
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(n^2)

// 2, []
// 1, [[0, 0]]
// 5, [[4, 2]]
