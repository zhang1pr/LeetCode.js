/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums.unshift(1);
  nums.push(1);

  const dp = [...Array(nums.length)].map(() => Array(nums.length).fill(0));

  for (let i = nums.length - 3; i >= 0; i--) {
    for (let j = i + 2; j < nums.length; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]);
      }
    }
  }

  return dp[0][nums.length-1];
};

// time:  O(n^3)
// space: O(n^2)

// [1]
// [2, 1]
// [3, 4, 5]
// [3, 1, 5, 8]
