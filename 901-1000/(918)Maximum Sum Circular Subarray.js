/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let total = 0, maxSum = nums[0], curMax = 0, minSum = nums[0], curMin = 0;

  for (const item of nums) {
    curMax = Math.max(curMax + item, item);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + item, item);
    minSum = Math.min(minSum, curMin);
    total += item;
  }
  
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;  
};

// time:  O(n)
// space: O(1)

// [5, -3, 5]
// [-3, -2, -3]
// [1, -2, 3, -2]