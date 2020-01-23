/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [], 0
// [1], 0
// [1], 1
// [1], 2
// [1, 2, 3, 5], 0
// [1, 2, 3, 5], 3
// [1, 2, 3, 5], 4
// [1, 2, 3, 5], 5
// [1, 2, 3, 5], 6
