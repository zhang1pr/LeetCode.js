/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function(root) {
  function DFS(node) {
    if (!node) {
      return [0, 0, Infinity, -Infinity];
    }

    const [N1, n1, min1, max1] = DFS(node.left);
    const [N2, n2, min2, max2] = DFS(node.right);
    const n = max1 < node.val && min2 > node.val ? n1 + 1 + n2 : -Infinity;

    return [Math.max(N1, N2, n), n, Math.min(min1, node.val), Math.max(max2, node.val)];
  }

  return DFS(root)[0]
}

// time:  O(n)
// space: O(n)

// [1]
// [2, 1, 3]
// [10, 5, 15, 1, 8, null, 7]
