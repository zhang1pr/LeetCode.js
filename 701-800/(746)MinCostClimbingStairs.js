/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let a = 0;
  let b = 0;

  for (let i = cost.length - 1; i >= 0; i--) {
    const cur = cost[i] + Math.min(a, b);
    b = a;
    a = cur;
  }

  return Math.min(a, b);
};

// time:  O(n)
// space: O(1)

// [15, 10]
// [10, 15, 20]
// [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
