/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const array = new Array(num1.length + num2.length).fill(0);

  let index;
  let sum;

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      index = i + j;
      sum = parseInt(num1[i]) * parseInt(num2[j]) + array[index+1];

      array[index] += Math.floor(sum / 10);
      array[index+1] = sum % 10;
    }
  }

  return array.join('').replace(/^0+(?!$)/, '');
};

// time:  O(n)
// space: O(1)

// test cases:
// '0', '0'
// '0', '1'
// '2', '3'
// '12', '3'
// '12', '13'
// '999', '99'
