/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const dp = Array(nums.length).fill(1);
  const prev = Array(nums.length).fill(-1);

  nums.sort((a, b) => a - b);

  let max = 0;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] == 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }

    if (dp[i] > max) {
      max = dp[i];
      index = i;
    }
  }

  const res = [];

  while (index != -1) {
    res.push(nums[index]);
    index = prev[index];
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [1]
// [1, 2, 3]
// [1, 2, 4, 8]
