/**
 * Definition for a binary tree node.
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
var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
