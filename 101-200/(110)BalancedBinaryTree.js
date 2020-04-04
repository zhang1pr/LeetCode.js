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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function getTreeDepth(root) {
    if (root == null) {
      return 0;
    }

    const leftDepth = getTreeDepth(root.left);
    if (leftDepth == -1) {
      return -1;
    }

    const rightDepth = getTreeDepth(root.right);
    if (rightDepth == -1) {
      return -1;
    }

    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    }

    return Math.max(leftDepth, rightDepth) + 1;
  }

  return getTreeDepth(root) != -1;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
// [1, 2, 2, 3, 3, null, null, 4, 4]:
