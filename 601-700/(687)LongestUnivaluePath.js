/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let res = 0;

  function DFS(node) {
    if (node == null) {
      return 0;
    }

    const left = DFS(node.left);
    const right = DFS(node.right);

    let arrowLeft = 0;
    let arrowRight = 0;

    if (node.left != null && node.left.val == node.val) {
      arrowLeft = arrowLeft + left + 1;
    }

    if (node.right != null && node.right.val == node.val) {
      arrowRight = arrowRight + right + 1;
    }

    res = Math.max(res, arrowLeft + arrowRight);

    return Math.max(arrowLeft, arrowRight);
  }

  DFS(root);
  return res;
};

// time:  O(n)
// space: O(n)

// [1, 4, 5, 4, 4, 5]
// [5, 4, 5, 1, 1, 5]
