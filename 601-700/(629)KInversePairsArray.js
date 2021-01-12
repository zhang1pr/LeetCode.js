/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const MOD = 1e9 + 7;
  let dp = Array(k + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const temp = Array(k + 1).fill(0);
    temp[0] = 1;

    for (let j = 1; j <= k ; j++) {
      let val = dp[j] + MOD;

      if (j >= i) {
        val -= dp[j - i];
      }

      temp[j] = (temp[j - 1] + val) % MOD;
    }

    dp = temp;
  }

  let res = dp[k] + MOD;

  if (k > 0) {
    res -= dp[k - 1];
  }


  return res % MOD;
};

// time:  O(kn)
// space: O(k)

// 1, 0
// 1, 1
// 2, 0
// 2, 1
// 2, 2
// 3, 0
// 3, 1
// 3, 2
