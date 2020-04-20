/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const length = s.length;
  const dp = new Array(length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = dp[j] && set.has(s.substring(j, i));

      if (dp[i]) {
        break;
      }
    }
  }

  return dp[length];
};
