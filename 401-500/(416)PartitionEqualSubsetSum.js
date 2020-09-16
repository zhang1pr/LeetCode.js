/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num;
  }

  if (totalSum % 2 != 0) {
    return false;
  }

  const subSetSum = totalSum / 2;
  const dp = Array(subSetSum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = subSetSum; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[subSetSum];
};

// time:  O(n*sum)
// space: O(sum)

// [1]
// [2]
// [1, 2]
// [2, 2]
// [3, 5, 7, 9]
// [1, 2, 3, 5]
// [1, 5, 11, 5]
