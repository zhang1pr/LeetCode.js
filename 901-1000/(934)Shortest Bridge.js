var shortestBridge = function(grid) {
  const n = grid.length;
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  function paint(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] != 1) return;
    grid[i][j] = 2;
    q.push([i, j]);

    for (const [di, dj] of dirs) {
      paint(i + di, j + dj);
    }
  }

  let found = false;
  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] === 1) {
        paint(i, j);
        found = true;
      }
    }
  }

  let q = [];

  while (q.length) {
    const nq = [];
    
    for (const [i, j] of q) {
      for (const [di, dj] of dirs) {
        const x = i + di;
        const y = j + dj;

        if (x >= 0 && x < n && y >= 0 && y < n) {
          if (grid[x][y] === 1) {
            return grid[i][j] - 2;
          }

          if (grid[x][y] === 0) {
            grid[x][y] = grid[i][j] + 1;
            nq.push([x, y]);
          }
        }
      }
    }

    q = nq;
  }
};

// time:  O(n^2)
// space: O(n)

// [[0, 1], [1, 0]]
// [[0, 1, 0], [0, 0, 0], [0, 0, 1]]
// [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]