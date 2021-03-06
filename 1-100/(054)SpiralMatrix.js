/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = [];

  if (!matrix.length) {
    return res;
  }

  let r1 = 0;
  let c1 = 0;
  let r2 = matrix.length - 1;
  let c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) {
      res.push(matrix[r1][c]);
    }

    for (let r = r1 + 1; r <= r2; r++) {
      res.push(matrix[r][c2]);
    }

    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) {
        res.push(matrix[r2][c]);
      }

      for (let r = r2; r > r1; r--) {
        res.push(matrix[r][c1]);
      }
    }

    r1++;
    r2--;
    c1++;
    c2--;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// []
// [[1]]
// [[1], [2], [3]]
// [[1, 2, 3]]
// [[1, 2, 3, 4], [5, 6, 7, 8], [9,10,11,12]]
