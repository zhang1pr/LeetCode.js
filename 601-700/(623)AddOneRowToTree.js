/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth < 2) {
    const newRoot = new TreeNode(val);

    if (depth == 0) {
      newRoot.right = root;
    } else {
      newRoot.left = root;
    }

    return newRoot;
  }

  if (root == null) {
    return null;
  }

  root.left = addOneRow(root.left, val, depth == 2 ? 1 : depth - 1);
  root.right = addOneRow(root.right, val, depth == 2 ? 0 : depth - 1);

  return root;
};

// time:  O(n)
// space: O(n)

// [1, 2, 3], 1, 1
// [4, 2, 6, 3, 1, 5], 1, 2
// [4, 2, null, 3, 1], 1, 3
