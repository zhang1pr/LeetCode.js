/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length == 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const res = Array(m * n);
  let row = 0;
  let col = 0;
  let d = 1;

  for (let i = 0; i < m * n; i++) {
    res[i] = matrix[row][col];
    row -= d;
    col += d;

    if (row >= m) {
      row = m - 1;
      col += 2;
      d = -d;
    }

    if (col >= n) {
      col = n - 1;
      row += 2;
      d = -d;
    }

    if (row < 0) {
      row = 0;
      d = -d;
    }

    if (col < 0) {
      col = 0;
      d = -d;
    }
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// []
// [[1]]
// [[1, 2]]
// [[1], [2]]
// [[1, 2], [3, 4]]
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
