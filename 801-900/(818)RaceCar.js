/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
  const dp = Array(target + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= target; i++) {
    let m = 1;
    let j = 1;

    while (j < i) {
      for (let q = 0, p = 0; p < j; q++, p = (1 << q) - 1) {
        dp[i] = Math.min(dp[i], m + 1 + q + 1 + dp[i - j + p]);
      }

      m++;
      j = (1 << m) - 1;
    }

    dp[i] = Math.min(dp[i], m + (i == j ? 0 : 1 + dp[j - i]));
  }

  return dp[target];
};


// time:  O(n^2*log(n)^2)
// space: O(n)

// 1
// 2
// 3
// 6
// 10
