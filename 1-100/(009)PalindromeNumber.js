/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  
  const digit = Math.floor(Math.log(x) / Math.log(10)) + 1;
  let revert = 0;
  let pop = 0;

  for (let i = 0; i < Math.floor(digit / 2); i++) { 
    pop = x % 10;
    revert = revert * 10 + pop;
    x = (x - pop) / 10;
  }

  if (digit % 2 == 0 && x == revert) {
    return true;
  }

  if (digit % 2 != 0 && Math.floor(x / 10) == revert) { 
    return true;
  }

  return false;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// 0
// 10
// 11
// -45
// 121
// 10021
