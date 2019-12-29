/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  if (x == 0) {
    return true;
  }

  if (x % 10 == 0) {
    return false;
  }

  let xReverse = 0;
  while (x > xReverse) {
    xReverse = xReverse * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x == xReverse || x == Math.floor(xReverse / 10);
};

// time:  O(log(n))
// space: O(1)

// test cases:
// 11
// 121
// -45
// 0
// 10
