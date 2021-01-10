/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d < 2) {
    const newRoot = new TreeNode(v);

    if (d == 0) {
      newRoot.right = root;
    } else {
      newRoot.left = root;
    }

    return newRoot;
  }

  if (root == null) {
    return null;
  }

  root.left = addOneRow(root.left, v, d == 2 ? 1 : d - 1);
  root.right = addOneRow(root.right, v, d == 2 ? 0 : d - 1);

  return root;
};

// time:  O(n)
// space: O(n)

// [1, 2, 3], 1, 1
// [4, 2, 6, 3, 1, 5], 1, 2
// [4, 2, null, 3, 1], 1, 3
