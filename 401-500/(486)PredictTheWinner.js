/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  const n = nums.length;

  if (n % 2 == 0) {
    return true;
  }

  const dp = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (i == j) {
        dp[i] = nums[i];
      } else {
        dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
      }
    }
  }

  return dp[n - 1] >= 0;
};

// time:  O(n^2)
// space: O(n)

// [1]
// [1, 5]
// [1, 5, 2]
// [1, 5, 233, 7]
// [1, 2, 3, 4, 5, 6, 7]
