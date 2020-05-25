/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let zeros = 0;
  while (n > m) {
    zeros++;
    m >>>= 1;
    n >>>= 1;
  }

  return m << zeros;
};

// time:  O(log(n-m))
// space: O(1)

// [5, 7]
// [0, 1]
