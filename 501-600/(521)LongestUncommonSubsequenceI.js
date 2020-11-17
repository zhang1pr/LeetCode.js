/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) {
    return -1;
  } else {
    return Math.max(a.length, b.length);
  }
};

// time:  O(n)
// space: O(1)

// 'a', 'a'
// 'a', 'aa'
// 'a', 'aaa'
// 'aaa', 'aaa'
// 'aaa', 'bbb'
// 'aba', 'cdc'
