/**
 * @param {TreeNode} root
 * @return {number}
 */
const countUnivalSubtrees = function(root) {
  let res = 0;

  function DFS(node, obj) {
    if (node == null) {
      return true;
    }

    const left = DFS(node.left, obj);
    const right = DFS(node.right, obj);

    if (left && right) {
      if (node.left !== null && node.val !== node.left.val) {
        return false;
      }

      if (node.right !== null && node.val !== node.right.val) {
        return false;
      }

      obj.num++
      return true;
    }

    return false;
  }

  DFS(root);

  return res;
};

// time:  O(n)
// space: O(n)

// [5, 1, 5, 5, 5, null, 5]
