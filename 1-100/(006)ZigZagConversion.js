/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) {
    return s;
  }

  const array = new Array(numRows).fill('');
  let downhill = true;
  let step = 0;

  for (let i = 0; i < s.length; i++) {
    array[step] += s[i];

    if (downhill) {
      step++;

      if (step == numRows - 1) {
        downhill = false;
      }
    } else {
      step--;

      if (step == 0) {
        downhill = true;
      }
    }
  }

  return array.reduce((prev, curr) => prev + curr);
};

// time:  O(n)
// space: O(n)

// test cases:
// 'ZIGZAG', 8
// 'NUMBERSIX', 2
// 'CONVERSION', 1
