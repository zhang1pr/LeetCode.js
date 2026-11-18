/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const R = matrix.length, C = matrix[0].length;

  for (let i = 1; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const start = Math.max(j - 1, 0);
      const end = Math.min(j + 2, R);
      matrix[i][j] += Math.min(...matrix[i - 1].slice(start, end));
    }
  }

  return Math.min(...matrix[R - 1]);  
};

// time:  O(mn)
// space: O(1)

// [[-19, 57], [-40, -5]]
// [[2, 1, 3], [6, 5, 4], [7, 8, 9]]