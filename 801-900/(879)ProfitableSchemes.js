/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
  const MOD = 1e9 + 7;
  const len = group.length;
  let cur = [...Array(minProfit + 1)].map(() => Array(n + 1).fill(0));
  cur[0][0] = 1;

  for (let i = 0; i < len; i++) {
    const p0 = profit[i];
    const g0 = group[i];

    const cur2 = [...Array(minProfit + 1)].map((_, i) => cur[i].slice());

    for (let p1 = 0; p1 <= minProfit; p1++) {
      const p2 = Math.min(p1 + p0, minProfit);

      for (let g1 = 0; g1 <= n - g0; g1++) {
        const g2 = g1 + g0;
        cur2[p2][g2] += cur[p1][g1];
        cur2[p2][g2] %= MOD;
      }
    }

    cur = cur2;
  }

  return cur[minProfit].reduce((a, b) => a + b) % MOD;
};

// time:  O(n*minProfit*profitLen)
// space: O(n*minProfit)

// 5, 3, [2, 2], [2, 3]
// 10, 5, [2, 3, 5], [6, 7, 8]
