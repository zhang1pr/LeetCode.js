/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) {
    return false;
  }

  while (num % 2 == 0) {
    num /= 2;
  }

  while (num % 3 == 0) {
    num /= 3;
  }

  while (num % 5 == 0) {
    num /= 5;
  }

  return num == 1;
};

// time:  O(log(n))
// space: O(1)

// 6
// 8
// 14
