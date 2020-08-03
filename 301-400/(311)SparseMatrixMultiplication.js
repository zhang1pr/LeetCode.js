/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  const result = [];

  const rowA = A.length;
  const colA = A[0].length;
  const colB = B[0].length

  for (let i = 0; i < rowA; i++) {
    result.push(new Array(colB).fill(0));
  }

  for (let i = 0; i < rowA; i++) {
    for (let k = 0; k < colA; k++) {
      if (A[i][k] !== 0) {
        for (let j = 0; j < colB; j++) {
          if (B[k][j] !== 0) {
            result[i][j] += A[i][k] * B[k][j];
          }
        }    
      }
    }
  }
  
  return result;
};

// time:  O(n^3)
// space: O(1)

// [[1, -5]], [[12], [-1]]
// [[0, 1], [0, 0], [0, 1]], [[1, 0], [1, 0]]
// [[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]]
