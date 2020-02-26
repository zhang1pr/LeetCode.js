/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0;
  let curr = 0;
  let right = nums.length - 1;

  let tmp;
  while (curr <= right) {
    if (nums[curr] == 0) {
      tmp = nums[left];
      nums[left] = nums[curr];
      nums[curr] = tmp;

      left++;
      curr++
    } else if (nums[curr] == 2) {
      tmp = nums[curr];
      nums[curr] = nums[right];
      nums[right] = tmp;

      right--;
    } else {
      curr++;
    }
  }

  return nums;
};

// time:  O(n)
// space: O(1)

// []
// [0]
// [2]
// [1, 1]
// [2, 1, 0]
// [2, 0, 2, 1, 1, 0]
