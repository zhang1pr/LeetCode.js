/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i];

    while (target > 0 && target < nums.length + 1 && nums[target] != target) {
      temp = nums[target - 1];
      nums[target - 1] = target;
      target = temp;
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
