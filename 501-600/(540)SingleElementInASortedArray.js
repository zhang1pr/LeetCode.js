/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let low = 0;
  let high = nums.length / 2 - 1;

  while (low <= high) {
    const mid = (low + high) >>> 1;

    if (nums[2 * mid] != nums[2 * mid + 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return nums[2 * low];
};

// time:  O(log(n))
// space: O(1)

// [1]
// [3, 3, 7, 7, 10, 11, 11]
// [1, 1, 2, 3, 3, 4, 4, 8, 8]
