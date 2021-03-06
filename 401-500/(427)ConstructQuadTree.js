/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  function DFS(grid, x, y, len) {
    if (len == 1) {
      return new Node(grid[x][y] != 0, true, null, null, null, null);
    }

    const result = new Node();
    const topLeft = DFS(grid, x, y, Math.floor(len / 2));
    const topRight = DFS(grid, x, y + Math.floor(len / 2), Math.floor(len / 2));
    const bottomLeft = DFS(grid, x + Math.floor(len / 2), y, Math.floor(len / 2));
    const bottomRight = DFS(grid, x + Math.floor(len / 2), y + Math.floor(len / 2), Math.floor(len / 2));

    if (
      topLeft.isLeaf
      && topRight.isLeaf
      && bottomLeft.isLeaf
      && bottomRight.isLeaf
      && topLeft.val == topRight.val
      && topRight.val == bottomLeft.val
      && bottomLeft.val == bottomRight.val
    ) {
      result.isLeaf = true;
      result.val = topLeft.val;
    } else {
      result.topLeft = topLeft;
      result.topRight = topRight;
      result.bottomLeft = bottomLeft;
      result.bottomRight = bottomRight;
    }

    return result;
  }

  return DFS(grid, 0, 0, grid.length);
};

// time:  O(n^2)
// space: O(log(n))

// [[0]]
// [[1]]
// [[0, 1], [1, 0]]
// [[1, 1], [1, 1]]
// [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]
// [[1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]]
