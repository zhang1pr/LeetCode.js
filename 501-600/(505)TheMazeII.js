/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]

  if (maze == null || maze.length == 0 || maze[0].length == 0) {
    return -1;
  }

  const m = maze.length
  const n = maze[0].length
  const d = [...Array(m)].map(() => new Array(n).fill(Infinity));
  let q = [[start[0], start[1], 0]]

  while (q.length) {
    const nq = [];

    for (let [x, y] of dirs) {
      let [nextX, nextY, len] = cur;

      while (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && maze[nextX][nextY] == 0) {
        nextX += x;
        nextY += y;
        len++;
      }

      nextX -= x;
      nextY -= y;
      len--;

      if (len > d[destination[0]][destination[1]]) {
        continue;
      }

      if (len < d[nextX][nextY]) {
        d[nextX][nextY] = len;
        nq.push([nextX, nextY, len])
      }
    }

    q = nq;
  }

  return d[destination[0]][destination[1]] === Infinity ? -1 : d[destination[0]][destination[1]];
};

// time:  O(mn)
// space: O(mn)

// [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [4, 4]
// [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [3, 2]
