/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  let count = 32;

  while (count) {
    count--;
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
    
  return result;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// 00000010100101000001111010011100
// 11111111111111111111111111111101
