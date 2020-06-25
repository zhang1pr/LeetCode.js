/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p == null && q == null) {
    return true;
  }

  if (q == null || p == null) {
    return false;
  }

  if (p.val != q.val) {
    return false;
  }

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

// time:  O(n)
// space: O(n)

// test cases:
// [null], [null]
// [1], [1]
// [1, 2], [1, null, 2]
// [1, 2, null], [1, null, 2]
// [1, 1, 1, 1], [1, 1, 1, 1, 1]

