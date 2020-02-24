/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstColumn = false;
  const row = matrix.length;
  const column = matrix[0].length;

  let i;
  let j;
  for (i = 0; i < row; i++) {
    if (matrix[i][0] == 0) {
      firstColumn = true;
    }

    for (j = 1; j < column; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (i = 1; i < row; i++) {
    for (j = 1; j < column; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (j = 0; j < column; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColumn) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
};

// time:  O(mn)
// space: O(1)

// [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
