/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let cur = root;
  let pre = null;
  let preVal = null;

  while (cur != null) {
    if (cur.left == null) {

      if (preVal != null && preVal >= cur.val) {
        return false;
      }


      preVal = cur.val;
      cur = cur.right;
    } else {
      pre = cur.left;
      while (pre.right != null && pre.right != cur) {
        pre = pre.right;
      }

      if (pre.right == cur) {
        pre.right = null;

        if (preVal != null && preVal >= cur.val) {
          return false;
        }

        preVal = cur.val;
        cur = cur.right;
      } else {
        pre.right = cur;
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
