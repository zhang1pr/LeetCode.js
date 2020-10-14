/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let digit;
  let temp;
  let res = '';

  while (n > 0) {
    temp = Math.floor(n / 26);
    digit = n - temp * 26;
    n = temp;

    if (digit == 0) {
      digit = 26;
      n--;
    }

    res = String.fromCharCode(64 + digit) + res;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 0
// 1
// 26
// 27
// 28
// 701
