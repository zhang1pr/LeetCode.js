/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let res = 1;
  let product = x;

  for (let i = n; i > 0; i /= 2) {
    if (i % 2 >= 1) {
      res = res * product;
    }

    product = product * product;
  }

  return res;
};

// time:  O(log(n))
// space: O(1)

// 0, 0
// 1, 0
// 1, 1
// 2.00000, -2
// 2.00000, 10
// 2.10000, 3
