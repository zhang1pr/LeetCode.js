/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i - 1];

    if ((i % 2 === 1) === (temp > nums[i])) {
      nums[i - 1] = nums[i];
      nums[i] = temp;
    }
  }
}

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 2, 3]
// [3, 2, 1]
// [3, 1, 2]
// [1, 2, 3, 6, 5, 4]
// [3, 5, 2, 1, 6, 4]
