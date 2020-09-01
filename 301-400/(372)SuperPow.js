/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  let res = 1;

  for (const n of b) {
    let next = 1;

    for (let i = 0; i < 10; i++) {
      next *= res;
      next %= 1337;
    }

    for (let i = 0; i < n; i++) {
      next *= a;
      next %= 1337;
    }

    res = next;
  }

  return res;
};

// time:  O(b)
// space: O(1)

// 2, [3]
// 2, [1, 0]
