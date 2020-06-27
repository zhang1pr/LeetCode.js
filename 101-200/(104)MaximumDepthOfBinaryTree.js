/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
