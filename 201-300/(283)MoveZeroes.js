/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};

// time:  O(n)
// space: O(1)

// []
// [0]
// [1]
// [1, 0, 1]
// [0, 2, 1, 1]
// [0, 1, 0, 3, 12]
