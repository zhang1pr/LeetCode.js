/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  if (p.right) {
    p = p.right;

    while (p.left) {
      p = p.left;
    }

    return p;
  }
  
  let succ = null;
  
  while (root !== p) {
    if (root.val > p.val) {
      succ = root;
      root = root.left;
    } else if (root.val < p.val && root.right) {
      root = root.right;
    } else {
      break;
    }
  }

  return succ;
};

// time:  O(n)
// space: O(1)

// [2, 1, 3], 1
// [5, 3, 6, 2, 4, null, null, 1], 6
