/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i];

    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      const targetIdx = nums[i] - 1;
      [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [0, 1]
// [1, 2, 0]
// [0, 0, 1, 1]
// [3, 4, -1, 1]
// [2, 1, 48, 3, 4]
// [7, 8, 9, 11, 12]
// [-7, -4, -2, -1, 0]
