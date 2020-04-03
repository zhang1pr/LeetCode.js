/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const sLen = s.length;
  const tLen = t.length;

  const dp = new Array(sLen + 1).fill(0);
  let i;
  let j;
  let pre;
  let temp;

  for (i = 0; i <= sLen; i++) {
    dp[i] = 1;
  }

  for (i = 1; i <= tLen; i++) {
    pre = dp[0];
    dp[0] = 0;
    for (j = 1; j <= sLen; j++) {
      temp = dp[j];
      if (t[i - 1] == s[j - 1]) {
        dp[j] = dp[j - 1] + pre;
      } else {
        dp[j] = dp[j - 1];
      }

      pre = temp;
    }
  }

  return dp[sLen];
};

// time:  O(mn)
// space: O(n)

// test cases:
// '', ''
// 'a', ''
// 'a', 'a'
// 'ab', 'b'
// 'ababab', 'ab'
// 'rabbbit', 'rabbit'
// 'babgbag', 'bag'
