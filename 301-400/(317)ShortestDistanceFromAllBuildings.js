/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  function BFS(begCol, begRow, dist, nums) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [[begRow, begCol]];
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const visited = [...Array(rows)].fill(() => Array(cols).fill(false));;

    let level = 0;
    while (queue.length !== 0) {
      level++;
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const coords = queue.shift();

        for (let j = 0; j < dirs.length; j++) {
          const x = coords[0] + dirs[j][0];
          const y = coords[1] + dirs[j][1];

          if (x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && grid[x][y] === 0) {
            visited[x][y] = true;

            dist[x][y] += level;
            nums[x][y]++;
            queue.push([x, y]);
          }
        }
      }
    }
  }

  const rows = grid.length;
  if (rows == 0) {
    return -1;
  }

  const cols = grid[0].length;
  const dist = [...Array(rows)].fill(() => Array(cols).fill(0));
  const nums = [...Array(rows)].fill(() => Array(cols).fill(0));

  let buildingNum = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        buildingNum++;
        BFS(grid, row, col, dist, nums);
      }
    }
  }

  let min = Infinity;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0 && dist[row][col] !== 0 && nums[row][col] === buildingNum) {
        min = Math.min(min, dist[row][col]);
      }
    }
  }

  if (min < Infinity) {
    return min;
  }

  return -1;
};

// time:  O(mn)
// space: O(mn)

// [[1, 0]]
// [[0], [1]]
// [[1, 0], [1, 0], [0, 1]]
// [[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]
