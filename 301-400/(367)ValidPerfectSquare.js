/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = (left + right) >>> 1;

    if (mid * mid == num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

// time:  O(log(n))
// space: O(1)

// 1
// 2
// 4
// 14
// 16
