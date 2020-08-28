/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0;
  let right = nums.length-1;

  for (let i=0; i <= right ;i++) {
    if (nums[i] == 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }

    if (nums[i] == 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      i--;
    }
  }
};


// time:  O(n)
// space: O(1)

// []
// [0]
// [2]
// [1, 1]
// [2, 1, 0]
// [2, 0, 2, 1, 1, 0]
