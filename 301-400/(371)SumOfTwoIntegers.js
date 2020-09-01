/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let carry;

  while(b) {
    carry = a & b;
    a ^= b;
    b = carry << 1;
  }

  return a;
};

// time:  O(1)
// space: O(1)

// 0, 1
// 1, 0
// 1, 2
// -1, 1
// -2, 3
