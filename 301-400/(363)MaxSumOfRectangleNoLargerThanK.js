/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxSum = -Infinity;

  for (let l = 0; l < rols; l++) {
    const dp = Array(cols).fill(0);

    for (let r = l; r < rows; r++) {
      let sum = 0, max = -Infinity;

      for (let c = 0; c < cols; c++) {
        dp[c] += matrix[r][c];

        if (sum < 0) {
          sum = 0;
        }

        sum += dp[c];
        max = Math.max(max, sum);
      }

      if (max <= k) {
        maxSum = Math.max(max, maxSum);
      } else {
        max = -Infinity;

        for (let c = 0; c < cols; c++) {
          sum = 0;

          for (let d = c; d < cols; d++) {
            sum += dp[d];

            if(sum <= k) {
              max = Math.max(sum, max);
            }
          }
        }

        maxSum = Math.max(max, maxSum);
      }

      if (maxSum == k) {
        return k;
      }
    }
  }

  return maxSum;
};

// time:  O(mn)
// space: O(n)

// [[0]], 1
// [[0, 1]], 1
// [[0], [1]], 1
// [[1, 0, 1], [0, -2, 3]], 2
