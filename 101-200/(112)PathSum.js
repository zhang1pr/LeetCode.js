/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root == null) {
    return false;
  }

  const nodeStack = [root];
  const sumStack = [sum - root.val];

  let node;
  let curSum;
  while (nodeStack.length != 0) {
    node = nodeStack.pop();
    curSum = sumStack.pop();

    if (node.right == null && node.left == null && curSum == 0) {
      return true;
    }

    if (node.right != null) {
      nodeStack.push(node.right);
      sumStack.push(curSum - node.right.val);
    }

    if (node.left != null) {
      nodeStack.push(node.left);
      sumStack.push(curSum - node.left.val);
    }
  }

  return false;
};

// time:  O(n)
// space: O(n)

// [null], 0
// [1], 0
// [1], 1
// [1, null, 2], 3
// [1, 2, null, null, 2], 5
// [3, 9, 20, null, null, 15, 7], 12
// [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22
