/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length == 0) {
    return 0;
  }

  let max = 0;
  let cols = matrix[0].length;
  const leftMin = Array(cols).fill(-1);
  const rightMin = Array(cols).fill(cols);
  const heights = Array(cols).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    let boundary = -1;

    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == '1') {
        heights[j]++;
      } else {
        heights[j] = 0;
      }

      if (matrix[i][j] == '1') {
        leftMin[j] = Math.max(leftMin[j], boundary);
      } else {
        leftMin[j] = -1;
        boundary = j;
      }
    }

    boundary = cols;
    for (j = cols - 1; j >= 0; j--) {
      if (matrix[i][j] == '1') {
        rightMin[j] = Math.min(rightMin[j], boundary);
      } else {
        rightMin[j] = cols;
        boundary = j;
      }

      max = Math.max(max, (rightMin[j] - leftMin[j] - 1) * heights[j]);
    }
  }

  return max;
};
