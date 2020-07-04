/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
  if (root == null || root.left == null && root.right == null) {
    return root;
  }

  const newRoot = upsideDownBinaryTree(root.left);

  root.left.left = root.right;
  root.left.right = root;

  root.left = null;
  root.right = null;

  return newRoot;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5, null, null, 6, 7]
