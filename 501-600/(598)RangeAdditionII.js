/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (const op of ops) {
    minRow = Math.min(minRow, op[0]);
    minCol = Math.min(minCol, op[1]);
  }

  return minRow * minCol;
};

// time:  O(n)
// space: O(1)

// 3, 3, []
// 3, 3, [[2, 2],[3, 3]]
// 3, 3, [[2, 2],[3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3]]
