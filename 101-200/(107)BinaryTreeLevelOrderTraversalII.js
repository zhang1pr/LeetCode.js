/**
 * DefinIndexition for a binIndexary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * es6
 * class TreeNode {
 *   constructor(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *   }
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var levelOrderBottom = function(root) {
  const array = [];

  function DFS(root, level) {
    if (root == null) {
      return;
    }

    if (!array[level]) {
      array[level] = [root.val];
    } else {
      array[level].push(root.val);
    }

    DFS(root.left, level+1);
    DFS(root.right, level+1);
  }

  DFS(root, 0);
  return array.reverse();
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
