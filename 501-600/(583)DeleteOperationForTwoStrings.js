/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array(n + 1);

  for (let i = 0; i <= m; i++) {
    let prev = 0;

    for (let j = 0; j <= n; j++) {
      let temp = dp[j];
      if (i == 0 || j == 0) {
        dp[j] = i + j;
      } else if (word1[i - 1] == word2[j - 1]) {
        dp[j] = prev;
      } else {
        dp[j] = 1 + Math.min(dp[j], dp[j - 1]);
      }

      prev = temp;
    }
  }

  return dp[n];
};

// time:  O(mn)
// space: O(n)

// 'a', 'a'
// 'a', 'ba'
// 'ab', 'ba'
// 'abc', 'acb'
// 'sea', 'eat'
