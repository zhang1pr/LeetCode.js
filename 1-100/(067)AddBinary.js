/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  const length = Math.max(a.length, b.length);
  const result = new Array(length).fill(0);

  let temp;
  for (let i = 0; i < length; i++) {
    num1 = new Number(a[i] || 0);
    num2 = new Number(b[i] || 0);
    temp = new Number(result[i]) + num1 + num2;

    if (temp > 1) {
      result[i] = temp - 2;
      result[i+1] = 1;
    } else {
      result[i] = temp;
    }
  }

  return result.reverse().join('');
};

// time:  O(n)
// space: O(1)

// test cases:
// '1', '0'
// '1', '1'
// '11', '1'
// '1010', '1011'
// '111100', '11'
