/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let cur = 1
  k--;

  while (k > 0) {
    let steps = calSteps(n, cur, cur + 1);

    if (steps <= k) {
      cur++;
      k -= steps;
    } else {
      cur *= 10;
      k--;
    }
  }

  return cur;
};

var calSteps = function(n, n1, n2) {
  let steps = 0;

  while (n1 <= n) {
    steps += Math.min(n + 1, n2) - n1;
    n1 *= 10;
    n2 *= 10;
  }

  return steps;
};

// time:  O(log(n)^2)
// space: O(1)

// 1, 1
// 2, 1
// 2, 2
// 13, 2
// 13, 13
