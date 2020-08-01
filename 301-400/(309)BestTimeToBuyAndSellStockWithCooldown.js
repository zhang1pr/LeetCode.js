/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let hold = -Infinity;
  let sold = 0;
  let rest = 0;

  for (let i = 0; i < prices.length; i++) {
    let nextHold = Math.max(hold, rest - prices[i]);
    let nextSold = hold + prices[i];
    let nextRest = Math.max(rest, sold);
    
    hold = nextHold;
    sold = nextSold;
    rest = nextRest;
  }

  return Math.max(sold, rest);
};

// time:  O(n)
// space: O(1)

// test cases:
// [1] 
// [1, 0] 
// [1, 1] 
// [1, 2]
// [2, 4, 1]
// [1, 2, 3, 0, 2]
// [2, 1, 2, 0, 1]
// [3, 2, 6, 5, 0, 3]
// [7, 1, 5, 3, 6, 4, 8, 2, 9, 10]
