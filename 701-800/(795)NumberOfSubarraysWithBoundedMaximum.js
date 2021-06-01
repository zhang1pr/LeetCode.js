/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
  let res = 0;
  let l = -1;
  let r = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      l = i;
    }

    if (nums[i] >= left) {
      r = i;
    }

    res = res + r - l;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1], 1, 1
// [1, 2], 3, 4
// [1, 2, 3], 1, 3
// [2, 1, 4, 3], 2, 3
