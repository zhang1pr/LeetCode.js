/**
 * @param {number} a
 * @return {number}
 */
var smallestFactorization = function(a) {
  if (a < 2) {
    return a;
  }

  let res = 0, mul = 1;
  for (let i = 9; i >= 2; i--) {
    while (a % i == 0) {
      a /= i;
      res = mul * i + res;
      mul *= 10;
    }
  }

  return a < 2 && res < 2 ** 31 ? res : 0;
};

// time:  O(log(n))
// space: O(1)

// 15
// 48
