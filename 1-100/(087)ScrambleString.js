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

  const letters = Array(26).fill(0);
  let i;
  for (i = 0; i < s1.length; i++) {
    letters[s1[i] - 'a']++;
    letters[s2[i] - 'a']--;
  }

  for (i = 0; i < 26; i++) {
    if (letters[i] != 0) {
      return false;
    }
  }

  const length = s1.length;
  const dp = Array(length + 1).fill(0).map(() => Array(length).fill(0).map(() => Array(length).fill(0)));

  for (let len = 1; len <= length; len++) {
    for (let i = 0; i + len <= length; i++) {
      for (let j = 0; j + len <= length; j++) {
        if (len == 1) {
          dp[len][i][j] = s1[i] == s2[j];
        } else {
          for (let k = 1; k < len; k++) {
            dp[len][i][j] = dp[k][i][j] && dp[len - k][i + k][j + k]
                || dp[k][i][j + len - k] && dp[len - k][i + k][j];
            if (dp[len][i][j]) {
              break;
            }
          }
        }
      }
    }
  }

  return dp[length][0][0];
};

// time:  O(n^4)
// space: O(n^3)

// '', ''
// 'a', 'b'
// 'ab', 'ba'
// 'abc', 'abc'
// 'abcde', 'aebd'
// 'great', 'rgeat'
