/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = 0;
  let max = 0;
  let num;

  for (let i = 1; i < prices.length; i++) {
    num = prices[i] - prices[i - 1];
    dp = Math.max(dp + num, num);
    max = Math.max(max, dp);
  }

  return max;
};

// time:  O(n)
// space: O(1)

// test cases:
// []
// [1]
// [1, 3, 1]
// [7, 6, 4, 3, 1]
// [7, 1, 5, 3, 6, 4]
