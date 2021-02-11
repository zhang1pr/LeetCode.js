/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;

  for (let i = 1; i < nums.length && count <= 1; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;

      if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return count <= 1;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 1]
// [1, 2, 3]
// [4, 2, 1]
// [4, 2, 3]
