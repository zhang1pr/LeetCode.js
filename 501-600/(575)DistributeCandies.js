/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
};

// time:  O(n)
// space: O(n)

// [1, 1]
// [1, 1, 2, 3]
// [6, 6, 6, 6]
// [1, 1, 2, 2, 3, 3]
