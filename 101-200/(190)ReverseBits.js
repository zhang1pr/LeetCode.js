/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  let count = 32;

  while (count) {
    count--;
    res *= 2;
    res += n & 1;
    n = n >> 1;
  }

  return res;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// 00000010100101000001111010011100
// 11111111111111111111111111111101
