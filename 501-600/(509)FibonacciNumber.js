/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const sqrt = Math.sqrt(5);
  const fib = ((1 + sqrt) / 2) ** N - ((1 - sqrt) / 2) ** N;

  return Math.floor(fib / sqrt);
};

// time:  O(log(n))
// space: O(1)

// 1
// 2
// 3
// 10
