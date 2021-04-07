/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const res = [];

  function test(num) {
    return num.toString().split('').every((ch) => {
      if (ch == '0' || num % Number(ch) > 0) {
        return false;
      }

      return true;
    });
  }

  for (let i = left; i <= right; i++) {
    if (test(i)) {
      res.push(i);
    }
  }

  return res;
};

// time:  O(nlog(right))
// space: O(1)

// 1, 1
// 1, 2
// 1, 22
// 1, 128
