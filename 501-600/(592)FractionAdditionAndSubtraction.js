/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  let str = expression[0];

  for (let i = 1; i < expression.length; i++) {
    const char = expression[i];

    if (char == '-' || char == '+') {
      str += ' ';
    }

    str += char;
  }

  let A = 0;
  let B = 1;

  for (const nums of str.split(' ')) {
    const [a, b] = nums.split('/').map(num => Number(num));
    A = A * b + B * a;
    B *= b;

    const divisor = gcd(Math.abs(A), Math.abs(B));
    A = Math.floor(A / divisor);
    B = Math.floor(B / divisor);
  }

  return A.toString() + '/' + B.toString();
};

var gcd = function(a, b) {
  let temp;
  while (b != 0) {
    temp = a % b;
    a = b;
    b = temp;
  }

  return a;
};

// time:  O(nlog(n))
// space: O(n)

// '1/3-1/2'
// '5/3+1/3'
// '-1/2+1/2'
// '-1/2+1/2+1/3'
