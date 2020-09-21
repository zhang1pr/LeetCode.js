/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let current = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }

  return max;
};

// time:  O(n)
// space: O(1)

// [1]
// [-1]
// [-2, -1]
// [6, 4, 2, 1]
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
