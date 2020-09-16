/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length-1;
  let j = num2.length-1;
  let a;
  let b;
  let c;
  let carry = 0;
  let sum = '';

  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      a = Number(num1[i]);
      i--;
    } else {
      a = 0;
    }

   if (j >= 0) {
      b = Number(num2[j]);
      j--;
    } else {
      b = 0;
    }

    c = a + b + carry;

    if (c > 9) {
      c -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    sum = c.toString() + sum;
  }

  if (carry > 0) {
    sum = '1' +sum;
  }

  return sum;
}

// time:  O(n)
// space: O(1)

// '0', '0'
// '0', '1'
// '2', '3'
// '12', '3'
// '12', '13'
// '999', '99'
