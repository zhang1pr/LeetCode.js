/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  function DFS(root) {
    if (!root) {
      return [0, NULL];
    }

    const [d1, r1] = DFS(root.left);
    const [d2, r2] = DFS(root.right);

    if (d1 > d2) {
      return [d1 + 1, r1];
    } else if (d1 < d2) {
      return [d2 + 1, r2];
    } else {
      return [d1 + 1, root];
    }
  }

  return DFS(root)[1];
};

// time:  O(n)
// space: O(n)

// [1]
// [0, 1, 3, null, 2]
// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
