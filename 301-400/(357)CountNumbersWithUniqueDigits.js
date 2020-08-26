/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n == 0) {
    return 1;
  }

  let res = 10;
  let base = 9;

  for (let i = 2; i <= n && i <= 10; i++) {
    base *= (9 - i + 2);
    res += base;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 0
// 1
// 2
// 3
// 5
