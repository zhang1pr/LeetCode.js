/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
  let cnt = 1;

  for (let k = 2; k < Math.sqrt(2 * n); k++) {
    if ((n - k * ( k - 1 ) / 2) % k == 0) {
      cnt++;
    }
  }

  return cnt;
};

// time:  O(n^1/2)
// space: O(n)

// 1
// 2
// 3
// 5
// 9
// 15
