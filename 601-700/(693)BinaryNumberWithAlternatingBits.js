/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  const bits = n.toString(2)

  for (let i = 0; i < bits.length - 1; i++) {
    if (bits[i] == bits[i + 1]) {
      return false;
    }
  }

  return true;
};

// time:  O(logn)
// space: O(logn)

// 1
// 2
// 3
// 5
// 7
// 10
// 11
