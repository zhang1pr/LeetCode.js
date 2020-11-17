/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (num.length === 0) {
    return true;
  }

  for (let i = 1; i <= num.length / 2; i++) {
    if (num[0] === '0' && i > 1) {
      return false;
    }

    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === '0' && j - i > 1 || j - i > num.length / 2) {
        break;
      }

      let num1 = Number(num.slice(0, i));
      let num2 = Number(num.slice(i, j));
      let temp = num.slice(j);

      while (temp.startsWith(num1 + num2)) {
        let n = num1;
        num1 = num2;
        num2 = num1 + n;
        temp = temp.slice(num2.toString().length);

        if (!temp.length) {
          return true;
        }
      }
    }
  }

  return false;
};

// time:  O(n*n!)
// space: O(1)

// '112358'
// '199100199'
