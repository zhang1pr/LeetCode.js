/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let i = 0;
  let j = 0;
  let match = 0;
  let startIndex;

  while (i < s.length) {
    if ((p[j] == '?' || s[i] == p[j])) {
      i++;
      j++;
    } else if (p[j] == '*') {
      startIndex = j;
      match = i;
      j++;
    } else if (startIndex != null) {
      j = startIndex + 1;
      match++;
      i = match;
    } else {
      return false;
    }
  }

  while (p[j] == '*') {
    j++;
  }

  return j == p.length;
};

// time:  O(mn)
// space: O(1)

// test cases:
// 'aa', 'a'
// 'aa', '*'
// 'cb', '?a'
// 'aab', 'c*a*b'
// 'adceb', '*a*b'
// 'acdcb', 'a*c?b'
