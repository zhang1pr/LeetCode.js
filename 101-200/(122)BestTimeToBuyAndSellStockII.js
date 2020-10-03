/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;

  for (let i=1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }

  return max;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 3, 1]
// [7, 6, 4, 3, 1]
// [7, 1, 5, 3, 6, 4]
