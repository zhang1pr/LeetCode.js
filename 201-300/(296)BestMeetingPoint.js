/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function (grid) {
  let X = [], Y = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        X.push(i);
      }
    }
  }

  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j] == 1) {
        Y.push(j);
      }
    }
  }

  const N = X.length;
  const x = X[Math.floor(N / 2)];
  const y = Y[Math.floor(N / 2)];

  return X.reduce((sum, curx) => sum + Math.abs(curx - x), 0) + Y.reduce((sum, cury) => sum + Math.abs(cury - y), 0)
};

// time:  O(mn)
// space: O(mn)

// [[1, 1]]
// [[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]