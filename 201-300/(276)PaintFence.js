/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return k;
  }

  let diff = k * (k - 1);
  let same = k;

  for (let i = 2; i < n; i ++) {
    const temp = diff;
    diff = (diff + same) * (k - 1);
    same = temp;
  }

  return diff + same;
};

// time:  O(n)
// space: O(1)

// 0, 0
// 1, 0
// 0, 1
// 1, 1
// 2, 2
// 3, 2
