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
var preorderTraversal = function(root) {
  const result = [];
  let cur = root;

  let pre;
  while (cur != null) {
    if (cur.left == null) {
      result.push(cur.val);
      cur = cur.right;
    } else {
      pre = cur.left;

      while (pre.right != null && pre.right != cur) {
        pre = pre.right;
      }

      if (pre.right == null) {
        result.push(cur.val);
        pre.right = cur;
        cur = cur.left;
      }

      if (pre.right == cur) {
        pre.right = null;
        cur = cur.right;
      }
    }
  }

  return result;
};

// time:  O(n)
// space: O(1)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, null, 2, 3]
