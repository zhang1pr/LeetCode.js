/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const sum = nums.reduce((a, b) => a + b);
  const target = sum / k;
  if (sum % k > 0 || nums[N - 1] > target) return false;


  const dp = Array(1 << N).fill(false);
  const total = Array(1 << N).fill(0);

  dp[0] = true;

  for (let state = 0; state < (1 << N); state++) {
    if (!dp[state]) {
      continue;
    }

    for (let i = 0; i < N; i++) {
      let future = state | (1 << i);

      if (state != future && !dp[future]) {
        if (nums[i] <= target - (total[state] % target)) {
          dp[future] = true;
          total[future] = total[state] + nums[i];
        } else {
          break;
        }
      }
    }
  }

  return dp[(1 << N) - 1];
};

// time:  O(n*2^n)
// space: O(2^n)

// [1], 1
// [1, 3], 2
// [2, 2], 2
// [1, 1, 1], 1
// [1, 1, 1], 2
// [1, 2, 3], 1
// [1, 2, 3, 2], 2
// [4, 3, 2, 3, 5, 2, 1], 4
