/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];  
};

// time:  O(mn)
// space: O(m)

// [1], 1
// [1], 3
// [2], 3
// [1, 2, 5], 11
