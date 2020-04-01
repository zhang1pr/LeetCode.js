/**
 * DefinIndexition for a binIndexary tree node.
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const nodeStack = [];
  const result = [];
  const valStack = [];
  let node = root;
  let pre = null;
  let currSum = 0;
  let pop;
  while (node != null || nodeStack.length != 0) {
    while (node != null) {
      nodeStack.push(node);
      currSum += node.val;
      valStack.push(node.val);
      node = node.left;
    }

    node = nodeStack[nodeStack.length - 1];

    if (currSum == sum && node.left == null && node.right == null) {
      result.push([...valStack]);
    }

    if (node.right == null || node.right == pre) {
      pop = nodeStack.pop();
      currSum -= pop.val;
      valStack.pop();
      pre = node;
      node = null;
    } else {
      node = node.right;
    }
  }

  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null], 0
// [1], 0
// [1], 1
// [1, null, 2], 3
// [1, 2, null, null, 2], 5
// [3, 9, 20, null, null, 15, 7], 12
// [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22
