/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rows = grid.length;
  const columns = grid[0].length;

  let i;
  for (i = 1; i < rows; i++) {
    grid[i][0] += grid[i-1][0];
  }

  for (i = 1; i < columns; i++) {
    grid[0][i] += grid[0][i-1];
  }

  let j;
  for (i = 1; i < rows; i++) {
    for (j = 1; j < columns; j++) {
      grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
    }
  }

  return grid[rows-1][columns-1];
};

// time:  O(mn)
// space: O(1)

// test cases:
// [[0]]
// [[1, 2]]
// [[1], [2]]
// [[0, 0], [0, 0]]
// [[1, 1], [2, 2]]
// [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
