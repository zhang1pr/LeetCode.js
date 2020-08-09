/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >>> 1;

    if (mid != nums.length - 1 && nums[mid] <= nums[mid + 1]) {
      left = mid + 1;
    } else if (mid != 0 && nums[mid] <= nums[mid - 1]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [0]
// [1, 0, 1]
// [1, 3, 1]
// [1, 2, 3]
// [3, 2, 1]
// [1, 2, 3, 1]
// [1, 2, 1, 3, 5, 6, 4]
