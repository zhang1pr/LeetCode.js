/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0;
  let right = nums.length - 1;
  let temp;

  while (left < right) {
    while (left < right && nums[left] != val) {
      left++;
    }

    while (left < right && nums[right] == val) {
      right--;
    }

    temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }

  return nums[right] == val ? right : nums.length;
};

// time:  O(n)
// space: O(1)

// test cases:
// [], 0
// [1, 2], 3
// [2, 2, 1, 3], 2
// [1, -1, 0, 1, 1, 1, 2, 2, 1], 1
