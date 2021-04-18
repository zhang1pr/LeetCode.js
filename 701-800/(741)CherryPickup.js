/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  const N = grid.length;
  const dp = [...Array(N)].map(() => Array(N).fill(-Infinity));
  dp[0][0] = grid[0][0];

  for (let t = 1; t <= 2 * N - 2; t++) {
    const dp2 = [...Array(N)].map(() => Array(N).fill(-Infinity));

    for (let i = Math.max(0, t - N + 1); i <= Math.min(N - 1, t); i++) {
      for (let j = Math.max(0, t - N + 1); j <= Math.min(N - 1, t); j++) {
        if (grid[i][t - i] == -1 || grid[j][t - j] == -1) {
          continue;
        }

        let val = grid[i][t - i];
        if (i != j) {
          val += grid[j][t - j];
        }

        for (let pi = i - 1; pi <= i; pi++) {
          for (let pj = j - 1; pj <= j; pj++) {
            if (pi >= 0 && pj >= 0) {
              dp2[i][j] = Math.max(dp2[i][j], dp[pi][pj] + val);
            }
          }
        }

      }
    }

    dp = dp2;
  }

  return Math.max(0, dp[N - 1][N - 1]);
};

// time:  O(n^3)
// space: O(n^2)

// [[0, 1, -1], [1, 0, -1], [1, 1, 1]]
// [[1, 1, -1], [1, -1, 1], [-1, 1, 1]]
