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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const stack = [root];
    
  while (stack.length != 0) {
    const curr = stack.pop();
      
    if (curr) {
      [curr.left, curr.right] = [curr.right, curr.left];
      stack.push(curr.left, curr.right);
    }
  }

  return root;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 2]
// [1, 2, 3]
// [4, 2, 7, 1, 3, 6, 9]
