/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let cnt = 0;
  let multiple = 5;

  while (n >= multiple) {
    cnt += Math.floor(n / multiple);
    multiple *= 5;
  }

  return cnt;
};

// time:  O(log(n))
// space: O(1)

// 0
// 1
// 3
// 5
// 10
