/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (matrix.length == 0) {
    return 0;
  }

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const rows = matrix.length;
  const cols = matrix[0].length;

  const indegree = [...new Array(rows)].map(() => new Array(cols).fill(0));
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
          if (matrix[nx][ny] > matrix[x][y]) {
            indegree[nx][ny]++;
          }
        }
      } 
    }
  }

  const queue = [];
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (indegree[x][y] == 0) {
        queue.push([x, y]);
      }
    }
  }

  let length = 0; 
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {          
          if (matrix[nx][ny] > matrix[x][y]) {
            indegree[nx][ny]--;

            if (indegree[nx][ny] == 0) {
              queue.push([nx, ny]);
            }
          }
        }
      }
    }

    length++;
  }

  return length;  
}; 

// time:  O(mn)
// space: O(mn)

// []
// [1]
// [[1, 2]]
// [[1, 2], [3, 4]]
// [[1, 2], [4, 3]]
// [[6, 8], [7, 2]]
// [[3, 4, 5], [3, 2, 6], [2, 2, 1]] 
// [[9, 9, 4], [6, 6, 8], [2, 1, 1]] 
