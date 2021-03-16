/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  while (root) {
    if (root.val == val) {
      return root;
    }

    root = root.val > val ? root.left : root.right;
  }

  return null;
};

// time:  O(n)
// space: O(1)

// [4, 2, 7, 1, 3], 2
// [4, 2, 7, 1, 3], 5
