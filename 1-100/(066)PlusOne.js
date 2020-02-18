/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);

  return digits;
};

// time:  O(n)
// space: O(1)

// test cases:
// [0]
// [1, 2, 3]
// [1, 9, 9]
// [9, 9, 9]
