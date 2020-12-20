/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s == null) {
    return false;
  }

  if (isSame(s, t)) {
    return true;
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var isSame = function(s, t) {
  if (s == null && t == null) {
    return true;
  }

  if (s == null || t == null) {
    return false;
  }

  if (s.val != t.val) {
    return false;
  }

  return isSame(s.left, t.left) && isSame(s.right, t.right);
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
