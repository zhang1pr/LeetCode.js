/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = (left + right) >>> 1;

    if (target == nums[mid]) {
      return true;
    }

    if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] == nums[mid]) {
      left++;
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};

// time:  O(n)
// space: O(1)

// [0], 0
// [0], 1
// [2, 1], 1
// [3, 1, 2], 1
// [3, 1, 2], 4
// [2, 5, 6, 0, 0, 1, 2], 0
// [2, 5, 6, 0, 0, 1, 2], 3
