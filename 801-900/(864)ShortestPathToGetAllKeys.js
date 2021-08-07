/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let x = -1;
  let y = -1;
  const m = grid.length;
  const n = grid[0].length;
  let max = -1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const c = grid[i][j];

      if (c == '@') {
        x = i;
        y = j;
      }

      if (c >= 'a' && c <= 'f') {
        max = Math.max(c.charCodeAt(0) - 97 + 1, max);
      }
    }
  }

  let queue = [[0, x, y]];
  const visited = new Set().add(0 + ',' + x + ',' + y);

  let step = 0;

  while (queue.length) {
    const newQueue = [];

    for (const [keys, i, j] of queue) {
      if (keys == (1 << max) - 1) {
        return step;
      }

      for (const [di, dj] of dir) {
        const ni = di + i;
        const nj = dj + j;
        let nkeys = keys;

        if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
          const c = grid[ni][nj];

          if (c == '#') {
            continue;
          }


          if (c >= 'a' && c <= 'f') {
            nkeys = nkeys | (1 << (c.charCodeAt(0) - 97));
          }

          if (c >= 'A' && c <= 'F' && !(keys >> (c.charCodeAt(0) - 65) & 1)) {
            continue;
          }

          const string = nkeys + ',' + ni + ',' + nj;
          if (!visited.has(string)) {
            visited.add(string);
            newQueue.push([nkeys, ni, nj]);
          }
        }
      }
    }

    queue = newQueue;
    step++;
  }

  return -1;
};

// time:  O(mn*keyLen)
// space: O(mn*keyLen)

// ['@Aa']
// ['@.a.#', '###.#', 'b.A.B']
// ['@..aA', '..B#.', '....b']
