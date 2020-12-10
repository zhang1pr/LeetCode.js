/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
  const len = x.length;
  if (len <= 3) {
    return false;
  }

  for (let i = 3; i < len; i++) {
    if (x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]) {
      return true;
    }

    if (i >= 4) {
      if (x[i - 1] == x[i - 3] && x[i] + x[i - 4] >= x[i - 2]) {
        return true;
      }
    }

    if (i >= 5) {
      if (x[i - 2] - x[i - 4] >= 0 && x[i] >= x[i - 2] - x[i - 4] && x[i - 1] >= x[i - 3] - x[i - 5] && x[i - 1] <= x[i - 3]) {
        return true;
      }
    }
  }

  return false;
};

// time:  O(n)
// space: O(1)

// [1, 1, 1, 1]
// [1, 2, 3, 4]
// [2, 1, 1, 2]
