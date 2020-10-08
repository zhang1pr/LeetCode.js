/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [[0, -1], [0, 1], [1, 0], [-1, 0]]

  let res = 0;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      if (grid[row][col] == 1) {
        res += 4;

        for (const [dx, dy] of dir) {
          const x = row + dx;
          const y = col + dy;

          if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] == 1) {
            res--;
          }
        }
      }
    }
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// [[0]]
// [[1]]
// [[1, 1]]
// [[1], [1]]
// [[1, 1], [0, 1], [1, 1]]
// [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
// [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
