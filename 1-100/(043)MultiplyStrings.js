/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == '0' || num2 =='0') {
    return '0';
  }

  function add(num1, num2) {
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

  let sum = '0';
  let index = 0;

  for (let i = num1.length - 1; i >= 0; i--) {
    let carry = 0;
    let curSum = '';

    for (let j = num2.length - 1; j >= 0; j--) {
      const a = Number(num1[i]);
      const b = Number(num2[j]);
      const c = a * b + carry;
      carry = Math.floor(c / 10);
      curSum = (c - carry * 10).toString() + curSum;
    }

    if (carry > 0) {
      curSum = carry.toString() + curSum;
    }

    curSum += '0'.repeat(index);
    index++;

    sum = add(sum, curSum);
  }

  return sum;
};

// time:  O(n)
// space: O(1)

// '0', '0'
// '0', '1'
// '2', '3'
// '12', '3'
// '12', '13'
// '999', '99'
