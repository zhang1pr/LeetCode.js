/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return /^10*$/.test(n.toString(3));
};

// time:  O(1)
// space: O(1)

// 0
// 9
// 27
// 45
