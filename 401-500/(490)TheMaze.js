/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const visited = [...Array(m)].map(() => new Array(n).fill(false));
  const dir = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  let pos = [start];

  while (pos.length) {
    let newPos = [];

    for (let [x, y] of pos) {
      if (x == destination[0] && y == destination[1]) {
        return true;
      }

      if (visited[x][y]) {
        continue;
      }

      visited[x][y] = true;

      for (let [dx, dy] of dir) {
        let xNew = x;
        let yNew = y;

        while (xNew >= 0 && xNew < m && yNew >= 0 && yNew < n && maze[xNew][yNew] === 0) {
          xNew += dx;
          yNew += dy;
        }

        xNew -= dx;
        yNew -= dy;
        newPos.push([xNew, yNew])
      }
    }

    pos = newPos;
  }

  return false;
};

// time:  O(mn)
// space: O(mn)

// [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [4, 4]
// [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [3, 2]
