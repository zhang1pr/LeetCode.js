/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const R = grid.length;
  const C = grid[0].length;

  const seen = [...Array(R)].map(() => Array(C).fill(0));
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let res = 0;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] == 1 && !seen[i][j]) {
        let shape = 0;

        const stack = [[i, j]];
        seen[i][j] = true;

        while (stack.length) {
          const [r, c] = stack.pop();

          shape++;
          for (const [dr, dc] of dir) {
            const nr = r + dr;
            const nc = c + dc;

            if (0 <= nr && nr < R && 0 <= nc && nc < C && grid[nr][nc] == 1 && !seen[nr][nc]) {
              stack.push([nr, nc]);
              seen[nr][nc] = true;
            }
          }
        }

        res = Math.max(res, shape);
      }
    }
  }

  return res;
};

// time:  O(mn)
// space: O(mn)

// [[0]]
// [[1]]
// [[0, 1]]
// [[0, 1], [1, 1]]
// [[0, 0, 0, 0, 0, 0, 0, 0]]
// [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
