/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  let cnt = 0;

  const sum = Array(nums.length + 1);
  const temp = Array(nums.length + 1);
  sum[0] = 0;

  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }

  function mergeSort(start, end) {
    if (start >= end) {
      return;
    }

    const mid = (start + end) >>> 1;
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    let right = mid + 1;
    let index = start;
    let low = mid + 1;
    let high = mid + 1;

    for (left = start; left <= mid; left++) {
      while (low <= end && sum[low] - sum[left] < lower) {
        low++;
      }

      while (high <= end && sum[high] - sum[left] <= upper) {
        high++;
      }

      while (right <= end && sum[right] < sum[left]) {
        temp[index] = sum[right];
        index++;
        right++;
      }

      temp[index] = sum[left];
      index++;
      cnt += high - low;
    }

    while (right <= end) {
      temp[index] = sum[right];
      index++;
      right++;
    }

    for (i = start; i <= end; i++) {
      sum[i] = temp[i];
    }
  }

  mergeSort(0, sum.length - 1);
  return cnt;
};

// time:  O(nlog(n))
// space: O(n)

// [0], 0, 0
// [-1, 0, 1], -2, 2
// [-2, 5, -1], -2, 2
