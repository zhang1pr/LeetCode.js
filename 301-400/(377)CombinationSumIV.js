/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};

// time:  O(mn)
// space: O(t)

// [1], 1
// [1], 2
// [1, 2], 4
// [1, 2, 3], 4
