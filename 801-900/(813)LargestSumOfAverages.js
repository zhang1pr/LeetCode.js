/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  const N = nums.length;
  const arr = Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    arr[i + 1] = arr[i] + nums[i];
  }

  const dp = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    dp[i] = (arr[N] - arr[i]) / (N - i);
  }

  for (let m = 0; m < k - 1; m++) {
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        dp[i] = Math.max(dp[i], (arr[j] - arr[i]) / (j - i) + dp[j]);
      }
    }
  }

  return dp[0];
};

// time:  O(kn^2)
// space: O(n)

// [9, 1, 2, 3, 9]
