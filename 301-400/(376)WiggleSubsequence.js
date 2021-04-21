/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length < 2) {
    return nums.length;
  }

  let prev = 0;
  let cnt = 1;

  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i] - nums[i - 1];

    if (cur > 0 && prev <= 0 || cur < 0 && prev >= 0) {
      cnt++;
      prev = cur;
    }
  }

  return cnt;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 1]
// [1, 2]
// [2, 1,]
// [1, 7, 4, 9, 2, 5]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
