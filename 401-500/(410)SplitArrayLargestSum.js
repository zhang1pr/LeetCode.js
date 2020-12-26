/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const L = nums.length;
  const S = Array(L + 1);
  S[0] = 0;

  for (let i = 0; i < L; i++) {
    S[i + 1] = S[i] + nums[i];
  }

  const dp = Array(L);
  for (let i = 0; i < L; i++) {
    dp[i] = S[L] - S[i];
  }

  for (let s = 1; s < m; s++) {
    for (let i = 0; i < L - s; i++) {
      dp[i] = Infinity;

      for (let j = i + 1; j <= L - s; j++) {
        const max = Math.max(dp[j], S[j] - S[i]);

        if (max > dp[i]) {
          break;
        }

        dp[i] = max;
      }
    }
  }

  return dp[0];
};

// time:  O(n^2*m)
// space: O(n)

// [1, 4, 4], 3
// [1, 2, 3, 4, 5], 2
// [7, 2, 5, 10, 8], 2
