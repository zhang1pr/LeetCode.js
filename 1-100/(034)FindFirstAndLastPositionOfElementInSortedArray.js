/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low < high) {
    mid = (low + high) >>> 1;

    if (nums[mid] == target) {
      break;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  mid = (low + high) >>> 1;
  if (nums[mid] != target) {
    return [-1, -1];
  }

  let leftTarget = mid;
  let rightTarget = mid;

  while (low <= mid) {
    leftTarget = low + Math.floor((mid - low) / 2);

    if (nums[leftTarget] == target && (leftTarget == 0 || nums[leftTarget-1] < target)) {
      break;
    } else if (nums[leftTarget] < target) {
      low = leftTarget + 1;
    } else {
      mid = leftTarget;
    }
  }

  while (mid <= high) {
    rightTarget = mid + Math.floor((high - mid) / 2);

    if (nums[rightTarget] == target && (rightTarget == nums.length - 1 || nums[rightTarget+1] > target)) {
      break;
    } else if (nums[rightTarget] > target) {
      high = rightTarget;
    } else {
      mid = rightTarget + 1;
    }
  }

  return [leftTarget, rightTarget];
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [], 0
// [1], 1
// [1], 0
// [2, 2], 0
// [2, 2], 2
// [1, 4], 1
// [1, 4], 4
// [1, 2, 3], 1
// [1, 2, 3], 2
// [1, 2, 3], 3
// [5, 7, 7, 8, 8, 10], 6
// [5, 7, 7, 8, 8, 10], 8
