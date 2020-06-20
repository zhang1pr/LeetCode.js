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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let cur = root;
  let num = 0;
  let result = -1;

  while (cur != null) {
    if (cur.left == null) {
      num++;
      if (num == k) {
        result = cur.val;
        break;
      }

      cur = cur.right;
    } else {
      let pre = cur.left;
      while (pre.right != null && pre.right != cur) {
        pre = pre.right;
      }

      if (pre.right == null) {
        pre.right = cur;
        cur = cur.left;
      }

      if (pre.right == cur) {
        pre.right = null;
        num++;
        if (num == k) {
          result = cur.val;
          break;
        }

        cur = cur.right;
      }
    }
  }

  return result;
};

// time:  O(n)
// space: O(1)

// [1], 1
// [1, 3, 2], 2
// [3, 1, 4, null, 2], 1
// [5, 3, 6, 2, 4, null, null, 1], 3
