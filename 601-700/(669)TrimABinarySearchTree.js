/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (root == null) {
    return root;
  }

  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  if (root.val < low) {
    return trimBST(root.right, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};

// time:  O(n)
// space: O(n)

// [1], 1, 2
// [1, 0, 2], 1, 2
// [1, null, 2], 1, 3
// [1, null, 2], 2, 4
// [3, 0, 4, null, 2, null, null, 1], 1, 3
