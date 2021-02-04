/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const set = new Set();

  function DFS(root) {
    if (root == null) {
      return false;
    }

    if (set.has(k - root.val)) {
      return true;
    }

    set.add(root.val);

    return DFS(root.left) || DFS(root.right);
  }

  return DFS(root);
};

// time:  O(n)
// space: O(n)

// [2, 1, 3], 0
// [2, 1, 3], 1
// [2, 1, 3], 3
// [2, 1, 3], 4
// [5, 3, 6, 2, 4, null, 7], 9
// [5, 3, 6, 2, 4, null, 7], 28
