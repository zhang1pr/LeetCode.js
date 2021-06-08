/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  const res = Array(hits.length).fill(0);
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (const [r, c] of hits) {
    grid[r][c]--;
  }

  function dfs(i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != 1) {
      return 0;
    }

    grid[i][j] = 2;

    let res = 1;

    for (const [di, dj] of dir) {
      res += dfs(i + di, j + dj);
    }

    return res;
  }

  for (let i = 0; i < grid[0].length; i++) {
    dfs(0, i);
  }

  function isConnected(r, c) {
    if (r == 0) {
      return true;
    }

    for (const [dr, dc] of dir) {
      const nr = r + dr, nc = c + dc;

      if (0 <= nr && nr < grid.length && 0 <= nc && nc < grid[0].length && grid[nr][nc] == 2) {
        return true;
      }
    }

    return false;
  }

  for (let k = hits.length - 1; k >= 0; k--) {
    const [i, j] = hits[k];
    grid[i][j]++;

    if (grid[i][j] == 1 && isConnected(i, j)) {
      res[k] = dfs(i, j) - 1;
    }
  }

  return res;
};

// time:  O(mnh)
// space: O(mn)

// [[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]]
// [[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]]
