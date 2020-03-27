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
var isValidBST = function(root) {
  if (root == null) {
    return true;
  }

  const stack = [[root, -Infinity, Infinity]]
  let lower;
  let upper;
  let val;

  while (stack.length != 0) {
    [root, lower, upper] = stack.pop();
    if (root != null) {
      val = root.val;
      if (val <= lower || val >= upper) {
        return false;
      }

      stack.push([root.right, val, upper]);
      stack.push([root.left, lower, val]);
    }
  }

  return true;
}

// time:  O(n)
// space: O(n)

// test cases:
// []
// [1]
// [1, 2, 3]
// [2, 1, 3]
// [5, 1, 4, null, null, 3, 6]
