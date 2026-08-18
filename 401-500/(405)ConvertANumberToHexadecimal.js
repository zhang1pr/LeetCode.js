/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  const hex = '0123456789abcdef'
  if (num == 0) {
    return '0';
  }

  let res = '';
  while (num != 0) {
    res = hex[num & 15] + res;
    num >>>= 4;
  }

  return res;
};

// time:  O(log(n))
// space: O(1)

// 0
// -1
// 15
// 16
// 17
// 26
