/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
  if (N <= 0) return 0;

  const MOD = 10e9 + 7;
  let dp = [...Array(m)].map(() => Array(n).fill(0));
  dp[i][j] = 1;
  let res = 0;

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let i = 0; i < N; i++) {
    const temp = [...Array(m)].map(() => Array(n).fill(0));

    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        for (const [dr, dc] of dirs) {
          const nr = r + dr;
          const nc = c + dc;

          if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
            res = (res + dp[r][c]) % MOD;
          } else {
            temp[nr][nc] = (temp[nr][nc] + dp[r][c]) % MOD;
          }
        }
      }
    }

    dp = temp;
  }

  return res;
};

// time:  O(mn)
// space: O(mnN)

// 2, 2, 2, 0, 0
// 1, 3, 3, 0, 1
