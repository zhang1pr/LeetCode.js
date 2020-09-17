/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return [];
  }

  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const res = [];

  const n = matrix.length;
  const m = matrix[0].length;

  const pacific = [...Array(n)].map(() => Array(m).fill(false));
  const atlantic = [...Array(n)].map(() => Array(m).fill(false));

  function DFS(visited, height, x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m || visited[x][y] || matrix[x][y] < height) {
      return;
    }

    visited[x][y] = true;

    for (const [dx, dy] of dir) {
      DFS(visited, matrix[x][y], x + dx, y + dy);
    }
  }

  for (let i = 0; i < n; i++) {
    DFS(pacific, 0, i, 0);
    DFS(atlantic, 0, i, m - 1);
  }

  for (let i = 0; i < m; i++) {
    DFS(pacific, 0, 0, i);
    DFS(atlantic, 0, n - 1, i);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

// time:  O(mn)
// space: O(mn)

// [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
