/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len++;
    count *= 10;
    start *= 10;
  }

  start += (n - 1) / len;
  return Number(start.toString()[(n - 1) % len]);
};

// time:  O(log(n))
// space: O(n)

// [['a', 'b'], ['b', 'c']], [2.0,3.0], [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]
