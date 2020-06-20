/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 ? !(n & n - 1) : false;
};

// time:  O(1)
// space: O(1)

// -4
// -1
// 0
// 1
// 16
// 218
