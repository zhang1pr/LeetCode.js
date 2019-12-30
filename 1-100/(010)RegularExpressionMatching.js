/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const store = [...new Array(s.length + 1)].map(() => new Array(p.length + 1).fill(false));
  store[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const thisMatch = i < s.length && (p[j] == s[i] || p[j] == '.');

      if (p[j+1] == '*') {
        store[i][j] = store[i][j+2] || thisMatch && store[i+1][j];
      } else {
        store[i][j] = thisMatch && store[i+1][j+1];
      }
    }
  }

  return store[0][0];
};

// time:  O(mn)
// space: O(mn)

// test cases:
// 'aa', 'a'
// 'aa', 'a*'
// 'ab', '.*'
// 'aab', 'c*a*b'
