/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return (num - 1) % 9 + 1; 
};

// time:  O(1)
// space: O(1)

// 0
// 1
// 3
// 10
// 38
// 99
