/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const sum = nums.reduce((a, b) => a + b);

  if (S > sum || S < -sum) {
    return 0;
  }

  let dp = Array(2 * sum + 1).fill(0);
  dp[0 + sum] = 1;
  for (let i = 0; i < nums.length; i++) {
    const next = Array(2 * sum + 1).fill(0);

    for (let k = 0; k < 2 * sum + 1; k++) {
      if (dp[k] != 0) {
        next[k + nums[i]] += dp[k];
        next[k - nums[i]] += dp[k];
      }
    }

    dp = next;
  }

  return dp[sum + S];
};

// time:  O(n*sum)
// space: O(n)

// [0], 0
// [1, 1], 2
// [1, 0, 1, 0], 0
// [1, 1, 1, 1, 1], 3
