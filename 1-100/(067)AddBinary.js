/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  const length = Math.max(a.length, b.length);
  const res = Array(length).fill(0);

  let temp;
  for (let i = 0; i < length; i++) {
    num1 = Number(a[i] || 0);
    num2 = Number(b[i] || 0);
    temp = Number(res[i]) + num1 + num2;

    if (temp > 1) {
      res[i] = temp - 2;
      res[i + 1] = 1;
    } else {
      res[i] = temp;
    }
  }

  return res.reverse().join('');
};

// time:  O(n)
// space: O(1)

// '1', '0'
// '1', '1'
// '11', '1'
// '1010', '1011'
// '111100', '11'
