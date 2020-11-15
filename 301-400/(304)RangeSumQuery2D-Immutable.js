/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.arr = [];

  const rows = matrix.length;
  if (rows === 0) {
    return;
  }

  const cols = matrix[0].length;

  for (let i = 0; i <= rows; i++) {
    const row = [];

    for (let j = 0; j <= cols; j++) {
      row.push(0);
    }

    this.arr.push(row);
  }

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      this.arr[i][j] = matrix[i-1][j-1] + this.arr[i - 1][j] + this.arr[i][j - 1] - this.arr[i - 1][j - 1];
    }
  }
};

// time:  O(mn)
// space: O(mn)

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.arr[row2 + 1][col2 + 1] - this.arr[row1][col2 + 1] - this.arr[row2 + 1][col1] + this.arr[row1][col1];
};

// time:  O(1)
// space: O(1)

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// ['NumMatrix', 'sumRegion', 'sumRegion', 'sumRegion'], [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
