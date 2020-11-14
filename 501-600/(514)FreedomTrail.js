/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  const n = ring.length;
  const m = key.length;
  const dp = [...Array(m + 1)].map(() => Array(n).fill(0));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Infinity;

      for (let k = 0; k < n; k++) {
        if (ring[k] == key[i]) {
          const diff = Math.abs(j - k);
          const step = Math.min(diff, n - diff);
          dp[i][j] = Math.min(dp[i][j], step + dp[i + 1][k]);
        }
      }
    }
  }

  return dp[0][0] + m;
};

// time:  O(mn^2)
// space: O(mn^2)

// 'gd', 'gd'
// 'gdg', 'gdg'
// 'gdc', 'gdg'
// 'godding', 'gd'
