/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root == null) {
    return true;
  }

  const stack = [];
  let pre = null;

  while (stack.length != 0 || root != null) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (pre != null && root.val <= pre.val) {
      return false;
    }

    pre = root;
    root = root.right;
  }

  return true;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 2, 3]
// [2, 1, 3]
// [5, 1, 4, null, null, 3, 6]
