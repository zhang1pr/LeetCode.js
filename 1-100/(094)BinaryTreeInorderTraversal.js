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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];

  function traverse(root, result) {
    if (root != null) {
      if (root.left != null) {
        traverse(root.left, result);
      }

      result.push(root.val);

      if (root.right != null) {
        traverse(root.right, result);
      }
    }
  }

  traverse(root, result);
  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, null, 2, 3]
