/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = [...new Array(word2.length + 1)].map((i, idx) => idx);

  for (let i = 1; i < word1.length + 1; i++) {
    let pre = dp[0];
    dp[0]++;

    for (let j = 1; j < word2.length + 1; j++) {
      let temp = dp[j];

      if (word1[i - 1] == word2[j - 1]) {
        dp[j] = pre;
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j], pre) + 1;
      }

      pre = temp;
    }
  }

  return dp[word2.length];
};

// time:  O(mn)
// space: O(n)

// 'this', ''
// 'this', 'this'
// 'horse', 'ros'
// 'intention', 'execution'
