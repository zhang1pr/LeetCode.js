/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  if (s1 == s2) {
    return true;
  }

  const arr = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    arr[s1[i].charCodeAt(0) - 97]++;
    arr[s2[i].charCodeAt(0) - 97]--;
  }

  for (const item of arr) {
    if (item) {
      return false;
    }
  }

  const len = s1.length;
  const dp = [...Array(len + 1)].map(() => [...Array(len)].map(() => Array(len).fill(false)));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      dp[1][i][j] = s1[i] == s2[j];
    }
  }


  for (let l = 1; l <= len; l ++) {
    for (let i = 0; i + l <= len; i++) {
      for (let j = 0; j + l <= len; j++) {
        for (let k = 1; k < l && !dp[l][i][j]; k++) {
          dp[l][i][j] = dp[k][i][j] && dp[l - k][i + k][j + k] || dp[k][i][j + l - k] && dp[l - k][i + k][j];
        }
      }
    }
  }

  return dp[len][0][0];
};

// time:  O(n^4)
// space: O(n^3)

// '', ''
// 'a', 'b'
// 'ab', 'ba'
// 'abc', 'abc'
// 'abcde', 'aebd'
// 'great', 'rgeat'
