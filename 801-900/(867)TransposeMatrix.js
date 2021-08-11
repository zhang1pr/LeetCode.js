/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;
  const ans = [...Array(C)].map(() => Array(R));

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      ans[c][r] = matrix[r][c];
    }
  }

  return ans;
};

// time:  O(mn)
// space: O(mn)

// [[1]]
// [[1, 2]]
// [[1], [2]]
// [[1, 2, 3], [4, 5, 6]]
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
