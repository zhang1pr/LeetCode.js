/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  const m = grid.length;

  if (m == 0) {
    return 0;
  }

  const n = grid[0].length;

  let result = 0;
  let rows = 0;

  const cols = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j == 0 || grid[i][j - 1] == 'W') {
        rows = 0;

        for (let k = j; k < n && grid[i][k] != 'W'; k++) {
          rows += grid[i][k] == 'E' ? 1 : 0;
        }
      }

      if (i == 0 || grid[i - 1][j] == 'W') {
        cols[j] = 0;

        for (let k = i; k < m && grid[k][j] != 'W'; k++) {
          cols[j] += grid[k][j] == 'E' ? 1 : 0;
        }
      }

      if (grid[i][j] == '0') {
        result = Math.max(result, rows + cols[j]);
      }
    }
  }

  return result;
}

// time:  O(mn)
// space: O(n)

// [['0', 'E', '0', '0'], ['E', '0', 'W', 'E'], ['0', 'E', '0', '0']]
