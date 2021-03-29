/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i = bits.length - 2;

  while (i >= 0 && bits[i] > 0) {
    i--;
  }

  return (bits.length - i) % 2 == 0;
};

// time:  O(n)
// space: O(1)

// [1, 0, 0]
// [1, 1, 1, 0]
