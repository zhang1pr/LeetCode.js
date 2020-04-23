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
var postorderTraversal = function(root) {
  const result = [];
  const stack = [];
  let cur = root;
  let last = null;
  let temp;

  while (cur != null || stack.length != 0) {
    if (cur != null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      temp = stack[stack.length - 1];

      if (temp.right != null && temp.right != last) {
        cur = temp.right;
      } else {
        result.push(temp.val);
        last = temp;
        stack.pop();
      }
    }
  }

  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, null, 2, 3]
