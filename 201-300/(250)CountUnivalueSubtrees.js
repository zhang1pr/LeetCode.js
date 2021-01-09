/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
  let res = 0;

  function DFS(node) {
    if (node == null) {
      return true;
    }

    const left = DFS(node.left);
    const right = DFS(node.right);

    if (left && right) {
      if (node.left !== null && node.val !== node.left.val) {
        return false;
      }

      if (node.right !== null && node.val !== node.right.val) {
        return false;
      }

      res++;
      return true;
    }

    return false;
  }

  DFS(root);

  return res;
};

// time:  O(n)
// space: O(n)

// []
// [5, 1, 5, 5, 5, null, 5]
// [5, 5, 5, 5, 5, null, 5]
