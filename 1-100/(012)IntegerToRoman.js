/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D','M'];
  const values = [1, 5, 10, 50, 100, 500, 1000];
  let res = '';

  for (let i = values.length - 1; i >= 0; i--) {
    const value = values[i];
    const symbol = symbols[i];
    const times = Math.floor(num / value);
    res += symbol.repeat(times);
    num -= times * value;

    const quotient = num / value;

    if (['X', 'C', 'M'].includes(symbol)) {
      if (quotient < 0.5 && quotient >= 0.4) {
        res += symbols[i-2] + symbols[i-1];
        num -= value * 0.4;
      } else if (quotient >= 0.9) {
        res += symbols[i-2] + symbols[i];
        num -= value * 0.9;
        i--;
      }
    }
  }

  return res;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// 2
// 3
// 4
// 9
// 58
// 1994
// 3999
