/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;

  if (n * m == 0) {
    return n + m;
  }

  const dp = [...new Array(n+1)].map(() => new Array(m+1).fill(0));

  let i;
  for (i = 0; i < n + 1; i++) {
    dp[i][0] = i;
  }

  let j;
  for (j = 0; j < m + 1; j++) {
    dp[0][j] = j;
  }

  let left;
  let down;
  let leftDown;
  for (i = 1; i < n + 1; i++) {
    for (j = 1; j < m + 1; j++) {
      left = dp[i-1][j] + 1;
      down = dp[i][j-1] + 1;
      leftDown = dp[i-1][j-1];

      if (word1[i-1] != word2[j-1]) {
        leftDown++;
      }

      dp[i][j] = Math.min(left, down, leftDown);
    }
  }

  return dp[n][m];
};
