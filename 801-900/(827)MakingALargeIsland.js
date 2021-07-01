/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const N = grid.length;

  function neighbors(r, c) {
    const ans = [];
    for (const [dr, dc] of dir) {
      const nr = r + dr;
      const nc = c + dc;

      if (0 <= nr && nr < N && 0 <= nc && nc < N) {
        ans.push([nr, nc]);
      }
    }

    return ans;
  }

  function DFS(r, c, index) {
    let ans = 1;
    grid[r][c] = index;

    for (const [nr, nc] of neighbors(r, c)) {
      if (grid[nr][nc] == 1) {
        grid[nr][nc] = index;
        ans += DFS(nr, nc, index);
      }
    }

    return ans;
  }

  let index = 2;
  const area = Array(N * N + 2);
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] == 1) {
        area[index] = DFS(r, c, index);
        index++;
      }
    }
  }

  let ans = Math.max(0, ...area);
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] == 0) {
        const seen = new Set();

        for (const [nr, nc] of neighbors(r, c)) {
          if (grid[nr][nc] > 1) {
            seen.add(grid[nr][nc]);
          }
        }

        let cur = 1;
        for (const i of seen) {
          cur += area[i];
        }

        ans = Math.max(ans, cur);
      }
    }
  }

  return ans;
};

// time:  O(n^2)
// space: O(n^2)

// [[1, 0], [0, 1]]
// [[1, 1], [1, 0]]
// [[1, 1], [1, 1]]
