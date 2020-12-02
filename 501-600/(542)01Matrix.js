/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        queue.push([i, j])
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }

  while (queue.length != 0) {
    let newQueue = [];

    for (const [x, y] of queue) {
      for (const [dx, dy] of dir) {
        const r = x + dx;
        const c = y + dy;

        if (r < 0 || r >= m || c < 0 || c >= n || matrix[r][c] <= matrix[x][y] + 1) {
          continue;
        }

        newQueue.push([r, c]);
        matrix[r][c] = matrix[x][y] + 1;
      }
    }

    queue = newQueue;
  }

  return matrix;
};

// time:  O(mn)
// space: O(mn)

// [[0]]
// [[0, 2]]
// [[0], [2]]
// [[0, 2], [2, 2]]
// [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
