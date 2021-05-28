/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function(order, str) {
  const arr = Array(26).fill(0);

  for (const c of str) {
    arr[c.charCodeAt(0) - 97]++;
  }

  let res = '';
  for (const c of order) {
    if (arr[c.charCodeAt(0) - 97] > 0) {
      res += c.repeat(arr[c.charCodeAt(0) - 97]);
      arr[c.charCodeAt(0) - 97] = 0;
    }
  }

  for (let c = 0; c < 26; c++) {
    res += String.fromCharCode(c + 97).repeat(arr[c]);
  }

  return res;
};

// time:  O(orderLen + strLen)
// space: O(1)

// 'a', 'a'
// 'a', 'b'
// 'a', 'ab'
// 'ab', 'ab'
// 'ba', 'ab'
// 'cba', 'abc'
// 'cba', 'abcd'
