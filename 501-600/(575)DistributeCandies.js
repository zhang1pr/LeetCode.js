/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  return Math.min(new Set(candyType).size, candyType.length / 2);
};

// time:  O(n)
// space: O(n)

// [1, 1]
// [1, 1, 2, 3]
// [6, 6, 6, 6]
// [1, 1, 2, 2, 3, 3]
