/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num == 0) {
    return '0';
  }

  const sign = num < 0 ? '-' : '+';
  num = Math.abs(num);

  let res = '';

  while (num) {
    const remainder = num % 7;

    res = remainder.toString() + res;
    num = (num - remainder) / 7;
  }

  return sign == '+' ? res : '-' + res;
};

// time:  O(n)
// space: O(n)

// 0
// 1
// 7
// 8
// -1
// -7
// -8
// 100
// -100
