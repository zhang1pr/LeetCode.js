/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  let num = numerator;
  let den = denominator;
  let sign = '';

  if (num > 0 && den < 0 || num < 0 && den > 0) {
    sign = '-';
  }

  num = Math.abs(num);
  den = Math.abs(den);
  const integer = Math.floor(num / den);
  num = num - integer * den;

  const map = new Map();

  let index = 0;
  let decimal = '';
  let repeatIndex = -1;

  while (num != 0) {
    num *= 10;

    if (map.has(num)) {
      repeatIndex = map.get(num);
      break;
    }

    map.set(num, index);
    let decimalPlace = Math.floor(num / den);
    decimal = decimal + decimalPlace;
    num = num - decimalPlace * den;
    index++;
  }

  if (repeatIndex != -1) {
    return sign + integer + '.' + decimal.substring(0, repeatIndex) + '(' + decimal.substring(repeatIndex) + ')';
  } else if (decimal == '') {
    return sign + integer;
  } else {
    return sign + integer + '.' + decimal;
  }
};

// time:  O(n)
// space: O(n)

// 1, 1
// 1, 2
// 2, 1
// 2, 3
// 4, 6
// 1, 23
// 1, 999983
