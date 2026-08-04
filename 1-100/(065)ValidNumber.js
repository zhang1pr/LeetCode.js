/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let seenDigit = false, seenExponent = false, seenDot = false;
  
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (!isNaN(curr)) {
      seenDigit = true;
    } else if (curr == "+" || curr == "-") {
      if (i > 0 && s[i - 1] != "e" && s[i - 1] != "E") {
        return false;
      }
    } else if (curr == "e" || curr == "E") {
      if (seenExponent || !seenDigit) {
        return false;
      }

      seenExponent = true;
      seenDigit = false;
    } else if (curr == ".") {
      if (seenDot || seenExponent) {
        return false;
      }
      
      seenDot = true;
    } else {
      return false;
    }
  }

  return seenDigit;
};

// time:  O(n)
// space: O(1)

// ''
// '.'
// '0'
// '0.'
// '-0'
// '00'
// '.1'
// '-10'
// '123'
// '1a3'
// '2e0'
// '+.8'
// '00.5'
// '0123'
// ' 123 '
// '12 3'
// '     '
// '-1E+3'
// '123e1'
// '123.5'
// '0.5e04'
// '1.23e10'
// '0.5e-10'
// '0.00000'
// '1.0e4.5'
// '-500.777'
// '0.0000001'
// '123.000000'
// ' 005047e+6'