/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target);

  let k = 0;
  while (target > 0) {
    k++;
    target -= k;
  }

  return target % 2 == 0 ? k : k + 1 + k % 2;
};

// time:  O(√n)
// space: O(1)

// 1
// 2
// 3
// -1
// -2
// -3
