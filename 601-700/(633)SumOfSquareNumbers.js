/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a);

    if (b == parseInt(b)) {
      return true;
    }
  }

  return false;
};

// time:  O(√n*log(log(n)))
// space: O(1)

// [[10], [11]]
// [[10, 10], [11, 11]]
// [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
// [[1], [2], [3], [4], [5], [6], [7]]
// [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]
