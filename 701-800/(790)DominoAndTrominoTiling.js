/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  const MOD = 10e9 + 7;

  const g = Array(n).fill(0);
  const u = Array(n).fill(0);

  g[0] = 0;
  g[1] = 1;
  g[2] = 2;
  u[0] = 0;
  u[1] = 1;
  u[2] = 2;

  for (let i = 3; i <= N; i++) {
    u[i] = (u[i - 1] + g[i - 1]) % MOD;
    g[i] = (g[i - 1] + g[i - 2] + 2 * u[i - 2]) % MOD;
  }

  return g[N] % MOD;
};

// time:  O(n)
// space: O(n)

// 1
// 2
// 3
// 4
// 5
// 10
