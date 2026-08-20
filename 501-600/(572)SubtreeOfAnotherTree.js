/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root == null) {
    return false;
  }

  if (isSame(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSame = function(root, subRoot) {
  if (root == null && subRoot == null) {
    return true;
  }

  if (root == null || subRoot == null) {
    return false;
  }

  if (root.val != subRoot.val) {
    return false;
  }

  return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
}

// time:  O(mn)
// space: O(n)

// [1], [1]
// [1], [2]
// [1], [1, 2]
// [1], [2, 1]
// [1, 2], [2, 1]
// [3, 1, 2], [1, 2]
// [3, 1, null, 2], [1, 2]
// [3, 4, 5, 1, 2], [4, 1, 2]
// [3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]
