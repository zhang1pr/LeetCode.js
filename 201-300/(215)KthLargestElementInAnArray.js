/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (!nums.length) {
    return -1;
  }

  var quickSelect = function(start, end, k) {
    if (start == end) {
      return nums[start];
    }

    let left = start;
    let right = end;
    let pivot = nums[Math.floor((start + end) >>> 1)];

    while (left <= right) {
      while (left <= right && nums[left] > pivot) {
        left++;
      }

      while (left <= right && nums[right] < pivot) {
        right--;
      }

      if (left <= right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
      }
    }

    if (start + k - 1 <= right) {
      return quickSelect(start, right, k);
    }

    if (start + k - 1 >= left) {
      return quickSelect(left, end, k - left + start);
    }

    return nums[right + 1];
  }

  return quickSelect(0, nums.length - 1, k);
};

// time:  O(log(n))
// space: O(log(n))

// [1], 1
// [1, 2], 2
// [1, 3, 2], 2
// [1, 4, 2, 3, 2], 3
// [3, 2, 1, 5, 6, 4], 2
// [3, 2, 3, 1, 2, 4, 5, 5, 6], 4
