/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let res = 0;
  let d = 2;

  while (n > 1) {
    while (n % d == 0) {
      res += d;
      n /= d;
    }

    d++;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 1
// 2
// 3
// 5
