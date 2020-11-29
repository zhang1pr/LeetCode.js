/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const p1 = [];
  const p2 = [];

  p1[0] = a.split('+')[0];
  p1[1] = a.split('+')[1].split('i')[0];
  p2[0] = b.split('+')[0];
  p2[1] = b.split('+')[1].split('i')[0];

  return (p1[0] * p2[0] - p1[1] * p2[1]).toString() + '+' + (p1[0] * p2[1] + p1[1] * p2[0]).toString() + 'i';
};

// time:  O(1)
// space: O(1)

// '1+1i', '1+1i'
// '1+-1i', '1+-1i'
