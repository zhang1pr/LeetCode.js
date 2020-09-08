/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;
  let multiple = 5;

  while (n >= multiple) {
    count += Math.floor(n / multiple);
    multiple *= 5;
  }

  return count;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// 0
// 1
// 3
// 5
// 10
