/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let cur = root;
  let prev = null;
  let pred = null;

  while (cur != null) {
    if (cur.left == null) {
      if (prev != null) {
        if (cur.val <= prev.val) {
          return false;
        }
      }

      prev = cur;
      cur = cur.right;
    } else {
      pred = cur.left;
      while (pred.right != null && pred.right != cur) {
        pred = pred.right;
      }

      if (pred.right == cur) {
        pred.right = null;
        if (prev != null) {
          if (cur.val <= prev.val) {
            return false;
          }
        }

        prev = cur;
        cur = cur.right;
      } else {
        pred.right = cur;
        cur = cur.left;
      }
    }
  }

  return true;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 2, 3]
// [2, 1, 3]
// [5, 1, 4, null, null, 3, 6]
