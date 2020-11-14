/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const t = s.split('').reverse().join('');
  const len = s.length;
  const dp = [...Array(len + 1)].map(() => Array(len + 1).fill(0));

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      if (s[i - 1] == t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[len][len];
};

// time:  O(n)
// space: O(n)

// 'a'
// 'ab'
// 'aa'
// 'cbbd'
// 'bbbab'
