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
  function helper(grid, x, y, len) {
    if (len == 1) {
      return new Node(grid[x][y] != 0, true, null, null, null, null);
    }

    const result = new Node();
    const topLeft = helper(grid, x, y, len / 2);
    const topRight = helper(grid, x, y + len / 2, len / 2);
    const bottomLeft = helper(grid, x + len / 2, y, len / 2);
    const bottomRight = helper(grid, x + len / 2, y + len / 2, len / 2);

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

  return helper(grid, 0, 0, grid.length);
};

// time:  O(n^2)
// space: O(log(n))

// [[0]]
// [[1]]
// [[0, 1], [1, 0]]
// [[1, 1], [1, 1]]
// [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]
// [[1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]]
