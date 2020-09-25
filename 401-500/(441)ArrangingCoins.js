/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};

// time:  O(√(n))
// space: O(1)

// 1
// 2
// 3
// 5
// 8
