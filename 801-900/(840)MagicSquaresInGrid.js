/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  function isMagic(grid, row, col) {
    const arr = Array(10).fill(0);
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        if (grid[i][j] < 1 || grid[i][j] > 9 || arr[grid[i][j]] > 0) {
          return false;
        }

        arr[grid[i][j]] = 1;
      }
    }

    const sum1 = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2];
    const sum2 = grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col];
    if (sum1 != sum2) {
      return false;
    }

    for (let i = 0; i < 3; i++) {
      if (grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2] != sum1) {
        return false;
      }

      if (grid[row][col + i] + grid[row + 1][col + i] + grid[row + 2][col + i] != sum1) {
        return false;
      }
    }

    return true;
  }

  const m = grid.length;
  const n = grid[0].length;

  let res = 0;
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      if (isMagic(grid, i, j)) {
        res++;
      }
    }
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// [[8]]
// [[4, 4],[3, 3]]
// [[4, 7, 8],[9, 5, 1],[2, 3, 6]]
// [[5, 5, 5],[5, 5, 5],[5, 5, 5]]
