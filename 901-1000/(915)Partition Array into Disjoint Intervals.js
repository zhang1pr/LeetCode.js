/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  let max = nums[0];
  let allMax = nums[0];
  let res = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < max) {
      res = i + 1;
      max = allMax;
    } else {
      allMax = Math.max(allMax, nums[i]);
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [5, 0, 3, 8, 6]
// [1, 1, 1, 0, 6, 12]