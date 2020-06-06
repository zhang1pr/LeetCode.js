/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  function robHelper(nums, start, end) {
    const n = nums.length;
    if (n == 0) {
      return 0;
    }

    if (n == 1) {
      return nums[0];
    }

    let pre = 0;
    let cur = nums[start];
    let temp;
    for (let i = start + 2; i <= end; i++) {
      temp = cur;
      cur = Math.max(pre + nums[i - 1], cur);
      pre = temp;
    }

    return cur;
  }

  return Math.max(robHelper(nums, 0, nums.length - 1), robHelper(nums, 1, nums.length));
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [2, 5]
// [2, 1, 0]
// [2, 3, 2]
// [1, 2, 3, 1]
// [2, 7, 9, 3, 1]
// [9 ,1, 1, 3, 1]
