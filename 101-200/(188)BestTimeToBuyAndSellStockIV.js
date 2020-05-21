/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length == 0) {
    return 0;
  }

  if (k >= Math.floor(prices.length / 2)) {
    let result = 0;
    
    for (let i = 1; i < prices.length; i++) {
      let sub = prices[i] - prices[i - 1];
      
      if (sub > 0) {
        result += sub;
      }
    }

    return result;
  }

  const dp = new Array(k + 1).fill(0);
  const min = new Array(k + 1).fill(0);

  let i;
  for (i = 1; i <= k; i++) {
    min[i] = prices[0];
  }

  for (i = 1; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      min[j] = Math.min(prices[i] - dp[j - 1], min[j]);
      dp[j] = Math.max(dp[j], prices[i] - min[j]);
    }
  }
    
  return dp[k];
};

// time:  O(nk)
// space: O(k)

// test cases:
// 0, [1] 
// 1, [1] 
// 2, [1]
// 0, [1, 0] 
// 1, [1, 1] 
// 2, [1, 2]
// 2, [2, 4, 1]
// 2, [2, 1, 2, 0, 1]
// 2, [3, 2, 6, 5, 0, 3]
// 4, [7, 1, 5, 3, 6, 4, 8, 2, 9, 10]
