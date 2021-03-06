/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if (ratings.length <= 1) {
    return ratings.length;
  }

  let res = 0;
  let up = 0;
  let down = 0;
  let oldSlope = 0;
  let newSlope;

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      newSlope = 1;
    } else if (ratings[i] < ratings[i - 1]) {
      newSlope = -1
    } else {
      newSlope = 0
    }

    if (oldSlope > 0 && newSlope == 0 || oldSlope < 0 && newSlope >= 0) {
      res += cnt(up) + cnt(down) + Math.max(up, down);
      up = 0;
      down = 0;
    }

    if (newSlope > 0) {
      up++;
    }

    if (newSlope < 0) {
      down++;
    }

    if (newSlope == 0) {
      res++;
    }

    oldSlope = newSlope;
  }

  res += cnt(up) + cnt(down) + Math.max(up, down) + 1;

  return res;
};

var cnt = function(n) {
  return n * (n + 1) / 2;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 0, 2]
// [1, 2, 2]
// [1, 2, 3]
// [1, 0, 3, 0, 1]
