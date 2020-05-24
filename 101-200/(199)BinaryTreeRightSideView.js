/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * es6
 * class TreeNode {
 *   constructor(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *   }
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result = [];

  function DFS(root, level) {
    if (root == null) {
      return;
    }

    if (level == result.length) {
      result.push(root.val);
    }

    DFS(root.right, level + 1, result);
    DFS(root.left, level + 1, result);
  }

  DFS(root, 0, result);
  return result;
};

// time:  O(n)
// space: O(n)

// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [1, 2, 3, null, 5, null, 4]
// [3, 9, 20, null, null, 15, 7] 
