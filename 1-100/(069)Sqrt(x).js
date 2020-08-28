/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = x;
  let pivot;
  let num;

  while (left <= right) {
    pivot = (left + right) >>> 1;
    num = pivot * pivot;
    if (num > x) {
      right = pivot - 1;
    } else if (num < x) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }

  return right;
};

// time:  O(log(n))
// space: O(1)

// 0
// 1
// 4
// 8
// 2147483647
