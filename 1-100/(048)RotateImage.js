/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  let temp;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = i; j < len - i - 1; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1];
      matrix[j][len - i - 1] = temp;
    }
  }
};

// time:  O(n^2)
// space: O(1)

// [[1]]
// [[1, 2], [3, 4]]
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
