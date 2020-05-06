/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (s.length > t.length) {
    [s, t] = [t, s];
  }

  if (t.length - s.length > 1) {
    return false;
  }

  let found = false;
  
  for (let i = 0, j = 0; i < s.length; i++, j++) {
    if (s[i] != t[j]) {
      if (found) {
        return false;
      }

      found = true;

      if (s.length < t.length) {
        i--;
      }
    }
  }

  return found || s.length < t.length;
};

// time:  O(n)
// space: O(1)

// test cases:
// '', ''
// '', 'a'
// 'a', 'A'
// 'a', 'aA'
// 'a', 'AA'
// 'ab', 'acb'
// 'cab', 'ad'
// '1203', '1213'
// 'null', 'undefined'
