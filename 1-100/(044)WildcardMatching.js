/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const store = [...new Array(s.length + 1)].map(() => new Array(p.length + 1).fill(false));
  store[0][0] = true;

  for (let j = 0; j < p.length; j++) {
    if (p[j] != '*') {
      break;
    }

    store[0][j+1] = true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (p[j] == s[i] || p[j] == '?') {
        store[i+1][j+1] = store[i][j];
      } else if (p[j] == '*') {
        store[i+1][j+1] = store[i][j+1] || store[i+1][j];
      }
    }
  }

  return store[s.length][p.length];
};

// time:  O(mn)
// space: O(mn)

// test cases:
// 'aa', 'a'
// 'aa', '*'
// 'cb', '?a'
// 'aab', 'c*a*b'
// 'adceb', '*a*b'
// 'acdcb', 'a*c?b'
