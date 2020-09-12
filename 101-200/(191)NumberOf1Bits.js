/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0;

  while (n != 0) {
    sum++;
    n &= (n - 1);
  }

  return sum;
};

// time:  O(1)
// space: O(1)

// test cases:
// 00000000000000000000000000001011
// 00000000000000000000000010000000
// 11111111111111111111111111111101
