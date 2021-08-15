/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  function DFS(s) {
    while (true) {
      const node = s.pop();
      if (node.right != null) {
        s.push(node.right);
      }

      if (node.left != null) {
        s.push(node.left);
      }

      if (node.left == null && node.right == null) {
        return node.val;
      }
    }
  }

  const s1 = [root1];
  const s2 = [root2];

  while (s1.length && s2.length) {
    if (DFS(s1) != DFS(s2)) {
      return false;
    }
  }

  return !s1.length && !s2.length;
};

// time:  O(n)
// space: O(n)

// [1], [1]
// [1], [2]
// [1, 2], [2, 2]
// [1, 2, 3], [1, 3, 2]
// [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4], [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
