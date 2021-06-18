/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  if (root == null) {
    return null;
  }

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (root.val == 0 && root.left == null && root.right == null) {
    root = null;
  }

  return root;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, null, 0, 0, 1]
// [1, 0, 1, 0, 0, 0, 1]
// [1, 1, 0, 1, 1, 0, 1, 0]
