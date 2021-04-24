/**
 * @param {number[][]} grid
 * @return {number}
 */
var containVirus = function(grid) {
  let seen;
  let regions;
  let frontiers;
  let perimeters;
  const R = grid.length;
  const C = grid[0].length;
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let res = 0;

  function DFS(r, c) {
    if (!seen.has(r * C + c)) {
      seen.add(r * C + c);
      const N = regions.length;
      regions[N - 1].add(r * C + c);

      for (const [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
          if (grid[nr][nc] == 1) {
            DFS(nr, nc);
          } else if (grid[nr][nc] == 0) {
            frontiers[N - 1].add(nr * C + nc);
            perimeters[N - 1]++;
          }
        }
      }
    }
  }

  while (true) {
    seen = new Set();
    regions = [];
    frontiers = [];
    perimeters = [];

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (grid[r][c] == 1 && !seen.has(r * C + c)) {
          regions.push(new Set());
          frontiers.push(new Set());
          perimeters.push(0);
          DFS(r, c);
        }
      }
    }

    if (!regions.length)  {
      break;
    }

    let triageIndex = 0;
    for (let i = 0; i < frontiers.length; i++) {
      if (frontiers[triageIndex].size < frontiers[i].size) {
        triageIndex = i;
      }
    }

    res += perimeters[triageIndex];

    for (let i = 0; i < regions.length; i++) {
      if (i == triageIndex) {
        for (const code of regions[i]) {
          grid[Math.floor(code / C)][code % C] = -1;
        }
      } else {
        for (const code of regions[i]) {
          const r = Math.floor(code / C);
          const c = code % C;

          for (const [dr, dc] of dir) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 0) {
              grid[nr][nc] = 1;
            }
          }
        }
      }
    }
  }

  return res;
};

// time:  O(mn*max(m,n))
// space: O(mn)

// [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// [[1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0]]
// [[0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0]]
