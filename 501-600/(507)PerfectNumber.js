/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num == 0) {
    return false;
  }

  const divisors = [];
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }

  for (const divisor of divisors) {
    sum += divisor;
  }

  return sum == num;
};

// time:  O(n)
// space: O(1)

// 0
// 1
// 2
// 3
// 6
// 28
// 496
// 8128
