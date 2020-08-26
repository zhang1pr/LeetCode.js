/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const dp = [['']];

  for (let i = 1; i <= n; i++) {
    dp[i] = [];

    for (let j = 1; j <= i; j++) {
      for (const left of dp[j - 1]) {
        for (const right of dp[i - j]) {
          dp[i].push('(' + left + ')' + right);
        }
      }
    }
  }

  return dp[n];
};

// time:  O(4^n/n^(-1/2))
// space: O(4^n/n^(-1/2))

// test cases:
// 0
// 1
// 3
// 4
// 5
