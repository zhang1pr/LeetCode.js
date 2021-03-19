/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left < right) {
    mid = left + right >>> 1;

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left] == target ? left : -1;
};

// time:  O(log(n))
// space: O(1)

// [-1, 0, 3, 5, 9, 12], 2
// [-1, 0, 3, 5, 9, 12], 9
