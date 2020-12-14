/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return /^1(00)*$/.test(num.toString(2));
};

// time:  O(1)
// space: O(1)

// 0
// 1
// 4
// 5
// 16
// 40
