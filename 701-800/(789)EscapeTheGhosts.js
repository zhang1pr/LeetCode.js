/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  const d = Math.abs(target[0]) + Math.abs(target[1]);

  for (const [x, y] of ghosts) {
    if (d >= Math.abs(target[0] - x) + Math.abs(target[1] - y)) {
      return false;
    }
  }

  return true;
};

// time:  O(n)
// space: O(1)

// [[1, 0]], [2, 0]
// [[2, 0]], [1, 0]
// [[1, 0], [0, 3]], [0, 1]
// [[-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0]], [0, 0]
// [[5, 0], [-10, -2], [0, -5], [-2, -2], [-7, 1]], [7, 7]
