/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {    
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = (start + end) >>> 1;
    if (target == nums[mid]) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [], 0
// [1], 1
// [4, 5, 6, 7], 4
// [4, 5, 6, 7], 7
// [5, 1, 2, 3, 4], 1
// [4, 5, 6, 7, 0, 1, 2], 0
// [4, 5, 6, 7, 0, 1, 2], 3
