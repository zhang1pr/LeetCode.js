/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  const N = grid.length;
  let ans = 0;

  for (let i = 0; i < N;  i++) {
    let bestRow = 0;
    let bestCol = 0;

    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) {
        ans++;
      }

      bestRow = Math.max(bestRow, grid[i][j]);
      bestCol = Math.max(bestCol, grid[j][i]);
    }

    ans = ans + bestRow + bestCol;
  }

  return ans;
};

// time:  O(mn)
// space: O(1)

// [[2]]
// [[1, 0], [0, 2]]
// [[1, 2], [3, 4]]
// [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
