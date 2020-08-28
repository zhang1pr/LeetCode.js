/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  if (m == 0) {
    return false;
  }
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;
  let pivot;
  let item;
  let row;
  while (left <= right) {
    pivot = (left + right) >>> 1;
    row = Math.floor(pivot / n);
    item = matrix[row][pivot - row * n];
    if (target == item) {
      return true;
    } else if (target < item) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return false;
};

// time:  O(log(mn))
// space: O(1)

// [[]], 0
// [[1]], 0
// [[1]], 1
// [[1, 3, 5, 7]], 3
// [[1, 3, 5, 7]], 4
// [[1], [3], [5], [7]], 3
// [[1], [3], [5], [7]], 4
// [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3
// [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13
