/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let value = x ^ y;
  let res = 0;

  while (value) {
    if (value & 1) {
      res++;
    }

    value >>= 1;
  }

  return res;
};

// time:  O(log(m)+log(n))
// space: O(1)

// 0, 0
// 0, 1
// 1, 1
// 1, 2
// 1, 4
// 10, 8
