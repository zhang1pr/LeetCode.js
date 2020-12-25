/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
  const res = [];

  while(root) {
    const leaves = [];
    root = DFS(root, leaves);
    res.push(leaves);
  }

  return res;
};

var DFS = function(node, leaves) {
  if (!node) {
    return null;
  }

  if (!node.left && !node.right) {
    leaves.push(node.val);
    return null;
  }

  node.left = DFS(node.left, leaves);
  node.right = DFS(node.right, leaves);

  return node;
};

// time:  O(n^2)
// space: O(n)

// [1]
// [1, 2]
// [1, 2, 3, 4, 5]
