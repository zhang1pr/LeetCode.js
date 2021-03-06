/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root == null) {
    return 0;
  }

  if (root.left != null && root.right != null) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  } else {
    return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
  }
};

// time:  O(n)
// space: O(n)

// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
