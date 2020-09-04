/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let count = 0;
  let flag = false;

  while (i >= 0) {
    if (s[i] == ' ') {
      if (flag) {
          return count;
      }
    } else {
      count++;
      flag = true;
    }

    i--;
  }

  return count;
};

// time:  O(n)
// space: O(1)

// test cases:
// ' '
// '  '
// 'a'
// 'a '
// ' a'
// 'aaa'
// 'hello world'
