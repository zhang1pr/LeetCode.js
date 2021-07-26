/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let lo = 0;
  let hi = A.length - 1;

  while (lo < hi) {
    const mi = lo + Math.floor((hi - lo) / 2);

    if (A[mi] < A[mi + 1]) {
      lo = mi + 1;
    } else {
      hi = mi;
    }
  }

  return lo;
};

// time:  O(log(n))
// space: O(1)

// [0, 1, 0]
// [0, 2, 1, 0]
// [3, 4, 5, 1]
// [0, 10, 5, 2]
// [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]
