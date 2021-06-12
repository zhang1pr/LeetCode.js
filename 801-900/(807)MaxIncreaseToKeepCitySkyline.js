/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const N = grid.length;
  const row  = Array(N).fill(0);
  const col = Array(N).fill(0);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      row[r] = Math.max(row[r], grid[r][c]);
      col[c] = Math.max(col[c], grid[r][c]);
    }
  }

  let ans = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      ans += Math.min(row[r], col[c]) - grid[r][c];
    }
  }

  return ans;
};

// time:  O(n^2)
// space: O(n)

// [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
// [[3, 0, 8, 4],[2, 4, 5, 7],[9, 2, 6, 3],[0, 3, 1, 0]]
