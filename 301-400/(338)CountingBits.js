/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  if (num == 0) {
    return [0];
  }

  const dp = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    if (i % 2 == 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[(i - 1) / 2] + 1;
    }
  }

  return dp;
};

// time:  O(n)
// space: O(1)

// 0
// 1
// 2
// 5
