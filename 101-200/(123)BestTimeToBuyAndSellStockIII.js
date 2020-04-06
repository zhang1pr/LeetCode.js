/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) {
    return 0;
  }

  let max1 = 0;
  let max2 = 0;
  let min1 = prices[0];
  let min2 = prices[0];

  for (let i = 1; i < prices.length; i++) {
    min1 = Math.min(prices[i] - 0, min1);
    max1 = Math.max(max1, prices[i] - min1);

    min2 = Math.min(prices[i] - max1, min2);
    max2 = Math.max(max2, prices[i] - min2);
  }

  return max2;
};

// time:  O(n)
// space: O(1)

// test cases:
// []
// [1]
// [1, 3, 1]
// [1, 2, 3, 4, 5]
// [7, 6, 4, 3, 1]
// [7, 1, 5, 3, 6, 4]
// [3, 3, 5, 0, 0, 3, 1, 4]
