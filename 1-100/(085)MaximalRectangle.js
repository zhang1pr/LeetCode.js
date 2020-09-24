/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length == 0) {
    return 0;
  }

  let maxArea = 0;
  let cols = matrix[0].length;
  const leftMin = Array(cols).fill(-1);
  const rightMin = Array(cols).fill(cols);
  const heights = Array(cols).fill(0);

  let row;
  let col;
  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < cols; col++) {
      if (matrix[row][col] == '1') {
        heights[col] += 1;
      } else {
        heights[col] = 0;
      }
    }

    let boundary = -1;
    for (col = 0; col < cols; col++) {
      if (matrix[row][col] == '1') {
        leftMin[col] = Math.max(leftMin[col], boundary);
      } else {
        leftMin[col] = -1;
        boundary = col;
      }
    }

    boundary = cols;
    for (col = cols - 1; col >= 0; col--) {
      if (matrix[row][col] == '1') {
        rightMin[col] = Math.min(rightMin[col], boundary);
      } else {
        rightMin[col] = cols;
        boundary = col;
      }
    }

    for (let col = cols - 1; col >= 0; col--) {
      maxArea = Math.max(maxArea, (rightMin[col] - leftMin[col] - 1) * heights[col]);
    }
  }

  return maxArea;
};

// time:  O(mn)
// space: O(n)

// [[]]
// [['0']]
// [['1']]
// [['1', '1'], ['0', '0']]
// [['1', '0'], ['0', '1']]
// [['1', '0'], ['1', '0']]
// [['1', '1'], ['1', '1']]
// [['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]
