/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  const arr = [...Array(query_row)].map(() => Array(query_row).fill(0));
  arr[0][0] = poured;

  for (let r = 0; r <= query_row; r++) {
    for (let c = 0; c <= r; c++) {
      const q = (arr[r][c] - 1) / 2;

      if (q > 0) {
        arr[r + 1][c] += q;
        arr[r + 1][c + 1] += q;
      }
    }
  }

  return Math.min(1, arr[query_row][query_glass]);
};

// time:  O(n^2)
// space: O(n^2)

// 1, 1, 1
// 2, 1, 1
// 100000009, 33, 17
