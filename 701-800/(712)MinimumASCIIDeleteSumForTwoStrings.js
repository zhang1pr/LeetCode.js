/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const dp = [...Array(s1.length + 1)].map(() => Array(s2.length + 1).fill(0));

  for (let i = s1.length - 1; i >= 0; i--) {
    dp[i][s2.length] = dp[i + 1][s2.length] + s1.charCodeAt(i);
  }

  for (let j = s2.length - 1; j >= 0; j--) {
    dp[s1.length][j] = dp[s1.length][j + 1] + s2.charCodeAt(j);
  }

  for (let i = s1.length - 1; i >= 0; i--) {
    for (let j = s2.length - 1; j >= 0; j--) {
      if (s1[i] == s2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j] + s1.charCodeAt(i), dp[i][j + 1] + s2.charCodeAt(j));
      }
    }
  }

  return dp[0][0];
};

// time:  O(mn)
// space: O(mn)

// 'a', 'a'
// 'a', 'b'
// 'ab', 'a'
// 'ab', 'ba'
// 'sea', 'eat'
// 'delete', 'leet'
