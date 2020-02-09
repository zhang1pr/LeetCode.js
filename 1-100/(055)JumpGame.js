/**
 * @param {number[]} nums
 * @return {number}
 */
var canJump = function(nums) {
  let target = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }

  return target == 0;
};

// time:  O(n)
// space: O(1)

// test cases:
// [0]
// [1, 0]
// [1, 0, 2]
// [2, 3, 1, 1, 4]
// [3, 2, 1, 0, 4]
