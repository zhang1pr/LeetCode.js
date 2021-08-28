/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const res = [...Array(rows * cols)].map(() => [0, 0]);

  let dx = 0;
  let dy = 1;
  let n = 0;
  let tmp;

  for (let j = 0; j < rows * cols; n++) {
    for (let i = 0; i < Math.floor(n / 2) + 1; i++) {
      if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < cols) {
        res[j] = [rStart, cStart];
        j++;
      }

      rStart += dx;
      cStart += dy;
    }

    tmp = dx;
    dx = dy;
    dy = -tmp;
  }

  return res;
};

// time:  O(max(m,n)^2)
// space: O(mn)

// 1, 4, 0, 0
// 5, 6, 1, 4
