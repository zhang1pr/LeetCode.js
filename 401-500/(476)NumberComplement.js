/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let mask = -1;

  while (num & mask) {
    mask <<= 1;
  }

  return ~mask ^ num;
};

// time:  O(log(n))
// space: O(1)

// 1
// 2
// 3
// 4
// 5
