/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) {
    return true;
  }

  const leftTree = [root.left];
  const rightTree = [root.right];
  let leftNode;
  let rightNode;

  while (leftTree.length && rightTree.length) {
    const leftNode = leftTree.pop();
    const rightNode = rightTree.pop();

    if (leftNode == null && rightNode == null) {
      continue;
    }

    if (leftNode == null || rightNode == null) {
      return false;
    }

    if (leftNode.val != rightNode.val) {
      return false;
    }

    leftTree.push(leftNode.right)
    leftTree.push(leftNode.left)
    rightTree.push(rightNode.left)
    rightTree.push(rightNode.right)
  }

  return true;
};

// time:  O(n)
// space: O(1)

// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [1, 3, null, null, 2]
// [3, 1, 4, null, null, 2]
