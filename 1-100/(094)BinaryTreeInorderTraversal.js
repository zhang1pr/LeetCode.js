/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];
  let cur = root;
  
  while (cur != null) {
    if (cur.left == null) {
      res.push(cur.val);
      cur = cur.right;
    } else {
      let pre = cur.left;

      while (pre.right != null && pre.right != cur) {
        pre = pre.right;
      }

      if (pre.right == null) {
        pre.right = cur;
        cur = cur.left;
      } else {
        pre.right = null;
        res.push(cur.val);
        cur = cur.right;
      }
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 2, 3]
// [1, null, 2, 3]
