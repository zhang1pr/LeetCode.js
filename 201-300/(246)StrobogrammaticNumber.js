/**
 * @param {string[]} nums
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
    const char = num[i].toString() + num[j].toString();

    if (!['00', '11', '88', '69', '96'].includes(char)) {
      return false;
    }
  }

  return true;
};

// time:  O(n)
// space: O(1)

// '1'
// '2'
// '25'
// '69'
// '88'
// '962'
