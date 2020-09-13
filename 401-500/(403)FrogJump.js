/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const len = stones.length;
  const dp = [...new Array(len)].map(() => new Array(len + 1).fill(false));
  dp[0][1] = true;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const diff = stones[i] - stones[j];

      if (diff < 0 || diff > len || !dp[j][diff]) {
        continue;
      }

      dp[i][diff] = true;

      if (diff - 1 >= 0) {
        dp[i][diff - 1] = true;
      }

      if (diff + 1 <= len) {
        dp[i][diff + 1] = true;
      }

      if (i == len - 1) {
        return true;
      }
    }
  }

  return false;
};

// time:  O(n^2)
// space: O(n^2)

// [0, 1, 2, 3, 4, 8, 9, 11]
// [0, 1, 3, 5, 6, 8, 12, 17]
