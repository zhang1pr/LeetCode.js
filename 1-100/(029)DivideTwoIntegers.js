/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const negativeFlag = dividend < 0 != divisor < 0;
  const power = Math.pow(2, 31);
  const max = power - 1;
  const min = -power;

  dividend = Math.abs(dividend);
  divisor  = Math.abs(divisor);

  let diff = divisor;
  let quotient = 1;
  let result = 0;

  while (dividend >= divisor) {
    dividend -= diff;
    result += quotient;
    quotient += quotient;
    diff += diff;

    if (dividend < diff) {
      diff = divisor;
      quotient = 1;
    }
  }

  if (negativeFlag) {
    return Math.max(-result, min);
  } else {
    return Math.min(result, max);
  }
};

// time:  O(log(m/n))
// space: O(1)

// 0, 1
// 10, 3
// 7, -3
// -7, -3
// 2147483648, 3
// -2147483649, 0.2
