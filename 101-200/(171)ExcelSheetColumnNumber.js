/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0;
  for (const char of s) {
    result = result * 26 + char.charCodeAt(0) - 64;
  }

  return result;
};

// time:  O(n)
// space: O(1)

// test cases:
// 'A'
// 'AA'
// 'AB'
// 'ZYX'
