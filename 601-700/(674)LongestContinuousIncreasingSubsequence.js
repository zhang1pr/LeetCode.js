/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let res = 0;
  let anchor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] >= nums[i]) {
      anchor = i;
    }

    res = Math.max(res, i - anchor + 1);
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 0]
// [1, 1]
// [1, 2]
// [1, 3, 5, 4, 7]
// [2, 2, 2, 2, 2]
