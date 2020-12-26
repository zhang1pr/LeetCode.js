/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  if (num == 0) {
    return '0';
  }

  let res = '';
  while (num != 0) {
    res += arr[num & 15];
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
