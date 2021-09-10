/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  const ans = new TreeNode(0);
  let cur = ans;

  function DFS(node) {
    if (node == null) {
      return;
    }

    DFS(node.left);
    node.left = null;
    cur.right = node;
    cur = node;
    DFS(node.right);
  }

  DFS(root);


  return ans.right;
};

// time:  O(n)
// space: O(n)

// [5, 1, 7]
// [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]
