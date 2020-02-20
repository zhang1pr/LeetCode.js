/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 1) {
    return 1;
  }

  let first = 1;
  let second = 2;
  let third;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return second;
};

// time:  O(n)
// space: O(1)

// 1
// 2
// 3
// 10
