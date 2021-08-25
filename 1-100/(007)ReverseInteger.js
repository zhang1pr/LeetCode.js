/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const lowerBound = -2 ** 31;
  const upperBound = -lowerBound - 1;

  let xReverse = 0;
  let temp;
  while (x != 0) {
    const quotient = Math.trunc(x / 10);
    const mod = x - quotient * 10;
    x = quotient;

    temp = xReverse * 10 + mod;
    if (temp < lowerBound || temp > upperBound) {
      return 0;
    }

    xReverse = temp;
  }

  return xReverse;
};

// time:  O(log(n))
// space: O(1)

// 0
// -456
// 12300
// 1534236469
