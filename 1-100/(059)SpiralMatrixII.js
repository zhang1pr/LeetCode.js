/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let num = 1;
  let total = n*n;
  let i;

  while (num <= total) {
    for (i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;

    for (i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;

    for (i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;

    for (i = bottom; i >= top; i--) {
      matrix[i][left] = num
      num++;
    }
    left++;
  }

  return matrix;
}

// time:  O(n)
// space: O(1)

// test cases:
// 0
// 1
// 2
// 3
