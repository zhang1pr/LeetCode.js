/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let cnt = 0;
  let flag = false;

  while (i >= 0) {
    if (s[i] == ' ') {
      if (flag) {
          return cnt;
      }
    } else {
      cnt++;
      flag = true;
    }

    i--;
  }

  return cnt;
};

// time:  O(n)
// space: O(1)

// ' '
// '  '
// 'a'
// 'a '
// ' a'
// 'aaa'
// 'hello world'
