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
var recoverTree = function(root) {
  let x = null;
  let y = null;
  let predecessor = null;
  let pred = null;

  while (root != null) {
    if (root.left != null) {
      predecessor = root.left;
      while (predecessor.right != null && predecessor.right != root) {
        predecessor = predecessor.right;
      }

      if (predecessor.right == null) {
        predecessor.right = root;
        root = root.left;
      } else {
        if (pred != null && root.val < pred.val) {
          y = root;
          if (x == null) {
            x = pred;
          }
        }

        pred = root;
        predecessor.right = null
        root = root.right;
      }
    } else {
      if (pred != null && root.val < pred.val) {
        y = root;
        if (x == null) {
          x = pred;
        }
      }

      pred = root;
      root = root.right;
    }
  }

  pred = x.val;
  x.val = y.val;
  y.val = pred;
};

// time:  O(n)
// space: O(1)

// test cases:
// [3, 2, 1]
// [1, 3, 2]
// [1, 3, null, null, 2]
// [3, 1, 4, null, null, 2]
