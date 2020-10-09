/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const rows = obstacleGrid.length;
  const columns = obstacleGrid[0].length;

  if (obstacleGrid[0][0] == 1) {
    return 0;
  }
  obstacleGrid[0][0] = 1;

  let i;
  for (i = 1; i < rows; i++) {
    if (obstacleGrid[i][0] == 0) {
      obstacleGrid[i][0] = obstacleGrid[i-1][0];
    } else {
      obstacleGrid[i][0] = 0;
    }
  }

  for (i = 1; i < columns; i++) {
    if (obstacleGrid[0][i] == 0) {
      obstacleGrid[0][i] = obstacleGrid[0][i-1];
    } else {
      obstacleGrid[0][i] = 0;
    }
  }

  let j;
  for (i = 1; i < rows; i++) {
    for (j = 1; j < columns; j++) {
      if (obstacleGrid[i][j] == 0) {
        obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  }

  return obstacleGrid[rows-1][columns-1];
};

// time:  O(mn)
// space: O(1)

// [[0]]
// [[1]]
// [[0, 1]]
// [[0], [1]]
// [[0, 0], [0, 0]]
// [[0, 0], [0, 1]]
// [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
// [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// [[0, 1, 1], [0, 0, 1], [0, 0, 0]]
