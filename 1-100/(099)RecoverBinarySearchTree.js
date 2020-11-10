/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let x = null;
  let y = null;
  let pre = null;
  let preValNode = null;

  while (root != null) {
    if (root.left == null) {
      if (preValNode != null && root.val < preValNode.val) {
        y = root;

        if (x == null) {
          x = preValNode;
        }
      }

      preValNode = root;
      root = root.right;
    } else {
      pre = root.left;
      while (pre.right != null && pre.right != root) {
        pre = pre.right;
      }

      if (pre.right == null) {
        pre.right = root;
        root = root.left;
      } else {
        if (preValNode != null && root.val < preValNode.val) {
          y = root;

          if (x == null) {
            x = preValNode;
          }
        }

        preValNode = root;
        pre.right = null
        root = root.right;
      }
    }
  }

  pre = x.val;
  x.val = y.val;
  y.val = pre;
};

// time:  O(n)
// space: O(1)

// [3, 2, 1]
// [1, 3, 2]
// [1, 3, null, null, 2]
// [3, 1, 4, null, null, 2]
