/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const sqrt = Math.sqrt(5);
  const fib = ((1 + sqrt) / 2) ** (n + 1) - ((1 - sqrt) / 2) ** (n + 1);

  return Math.floor(fib / sqrt);
};

// time:  O(log(n))
// space: O(1)

// 1
// 2
// 3
// 10
