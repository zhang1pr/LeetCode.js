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

  return z % GCD(x, y) == 0;
};

var GCD = function(a, b){
  while (b != 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

// time:  O(min(x,y))
// space: O(1)

// 3, 5, 4
// 2, 6, 5
// 4, 8, 6
