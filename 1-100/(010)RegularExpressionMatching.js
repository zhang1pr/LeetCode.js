/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = [...Array(2)].map(() => Array(p.length + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j < p.length; j++) {
    dp[0][j + 1] = dp[0][j - 1] && p[j] == '*';
  }

  for (let i = 0; i < s.length; i++) {
    dp[(i + 1) % 2][0] = false;
  }

  for (let j = 0; j < p.length; j++) {
    if (p[j] == '*') {
      dp[(i + 1) % 2][j + 1] = dp[(i + 1) % 2][j - 1] || dp[i % 2][j + 1] && (s[i] == p[j - 1] || p[j - 1] == '.');
    } else {
      dp[(i + 1) % 2][j + 1] = dp[i % 2][j] && (s[i] == p[j] || p[j] == '.');
    }
  }

  return dp[s.length % 2][p.length];
};

// time:  O(mn)
// space: O(m)

// '', ''
// 'a', ''
// '', 'a'
// '', '.*'
// '', 'a*'
// 'a', 'a'
// 'aa', 'a'
// 'ab', 'ba'
// 'aa', 'a*'
// 'ab', '.*'
// 'a', '.*..a*'
// 'aa', '.*..a*'
// 'aab', 'c*a*b'
