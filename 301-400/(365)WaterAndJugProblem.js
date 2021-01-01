/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x + y < z) {
    return false;
  }

  if (x == z || y == z || x + y == z) {
    return true;
  }

  return z % gcd(x, y) == 0;
};

var gcd = function(a, b) {
  let temp;
  while (b != 0) {
    temp = a % b;
    a = b;
    b = temp;
  }

  return a;
};

// time:  O(min(x,y))
// space: O(1)

// 3, 5, 4
// 2, 6, 5
// 4, 8, 6
