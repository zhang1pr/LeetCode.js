/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left <= right) {
    const mid = (left + right) >>> 1;

    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr.slice(left, left + k);
};

// time:  O(log(n-k)+k)
// space: O(1)

// [1, 2, 3, 4], 4, 0
// [1, 2, 3, 4, 5], 4, 0
// [1, 2, 3, 4, 5], 4, 1
// [1, 2, 3, 4, 5], 4, 3
// [1, 2, 3, 4, 5], 4, -1
