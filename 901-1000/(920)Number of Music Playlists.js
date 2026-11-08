/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
  const MOD = 1e9 + 7;
  const DP = [...Array(goal + 1)].map(_ => Array(n + 1).fill(0))
  DP[0][0] = 1;

  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= Math.min(i, n); j++) {
      DP[i][j] += DP[i - 1][j - 1] * (n - j + 1)
      DP[i][j] += DP[i - 1][j] * Math.max(j - k, 0)
      DP[i][j] = DP[i][j] % MOD
    }
  }

  return DP[goal][n];
};

// time:  O(mn)
// space: O(mn)

// 3, 3, 1
// 2, 3, 0
// 2, 3, 1