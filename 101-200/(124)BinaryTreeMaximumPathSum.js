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
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = -Infinity;

  function traverse(root) {
    if (root == null) {
      return 0;
    }

    const left = Math.max(traverse(root.left), 0);
    const right = Math.max(traverse(root.right), 0);

    max = Math.max(max, root.val + left + right);

    return root.val + Math.max(left, right);
  }

  traverse(root);

  return max;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [-10, 9, 20, null, null, 15, 7]
