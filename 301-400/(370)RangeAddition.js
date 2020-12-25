/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
  const res = Array(length).fill(0);

  for (const [start, end, value] of updates) {
    res[start] += value;

    if (end < length - 1) {
      res[end + 1] -= value;
    }
  }

  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += res[i];
    res[i] = sum;
  }

  return res;
};

// time:  O(m+n)
// space: O(1)

// 5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]
