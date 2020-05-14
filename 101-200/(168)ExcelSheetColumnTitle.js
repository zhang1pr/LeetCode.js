/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let digit;
  let temp;
  let result = '';

  while (n > 0) {
    temp = Math.floor(n/26);
    digit = n - temp * 26;
    n = temp;

    if (digit == 0) {
      digit = 26;
      n -= 1;
    }
     
    result = String.fromCharCode(64 + digit) + result;
  }

  return result;
};

// time:  O(n)
// space: O(1)

// test cases:
// 0
// 1
// 26
// 27
// 28
// 701
