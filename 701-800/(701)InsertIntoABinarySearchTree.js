/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (root == null) {
    return new TreeNode(val);
  }

  let cur = root;

  while(true) {
    if (cur.val <= val) {
      if (cur.right != null) {
        cur = cur.right;
      } else {
        cur.right = new TreeNode(val);
        break;
      }
    } else {
      if (cur.left != null) {
        cur = cur.left;
      } else {
        cur.left = new TreeNode(val);
        break;
      }
    }
  }

  return root;
};

// time:  O(n)
// space: O(1)

// [4, 2, 7, 1, 3], 2
// [4, 2, 7, 1, 3], 5
// [40, 20, 60, 10, 30, 50, 70], 25
// [4, 2, 7, 1, 3, null, null, null, null, null, null], 5
