/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0;
  for (const char of s) {
    res = res * 26 + char.charCodeAt(0) - 64;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// test cases:
// 'A'
// 'AA'
// 'AB'
// 'ZYX'
