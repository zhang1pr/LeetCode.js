/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
  if (k == 0 || n >= k + maxPts) {
    return 1;
  }

  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  let wsum = 1;
  let res = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = wsum / maxPts;

    if (i < k) {
      wsum += dp[i];
    } else {
      res += dp[i];
    }

    if (i - maxPts >= 0) {
      wsum -= dp[i - maxPts];
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 6, 1, 10
// 10, 1, 10
// 21, 17, 10
