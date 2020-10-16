/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = [...Array(m + 1)].map(() => Array(n + 1).fill(0));

  for (const str of strs) {
    let zeros = 0;
    let ones = 0;

    for (const char of str) {
      if (char == '0') {
        zeros++;
      } else {
        ones++;
      }
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }

  return dp[m][n];
};

// time:  O(kmn)
// space: O(mn)

// ['10', '0', '1'], 1, 1
// ['10', '0001', '111001', '1', '0'], 5, 3
