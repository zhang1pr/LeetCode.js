/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let x = null;
  let y = null;
  let pred = null;
  let prev = null;

  while (root != null) {
    if (root.left == null) {
      if (prev != null && root.val < prev.val) {
        y = root;

        if (x == null) {
          x = prev;
        }
      }

      prev = root;
      root = root.right;
    } else {
      pred = root.left;
      while (pred.right != null && pred.right != root) {
        pred = pred.right;
      }

      if (pred.right == null) {
        pred.right = root;
        root = root.left;
      } else {
        if (prev != null && root.val < prev.val) {
          y = root;

          if (x == null) {
            x = prev;
          }
        }

        prev = root;
        pred.right = null
        root = root.right;
      }
    }
  }

  prev = x.val;
  x.val = y.val;
  y.val = prev;
};

// time:  O(n)
// space: O(1)

// [3, 2, 1]
// [1, 3, 2]
// [1, 3, null, null, 2]
// [3, 1, 4, null, null, 2]
