/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = [];

  if (root == null) {
    return res;
  }

  function DFS(root, temp) {
    if (root.left == null && root.right == null) {
      res.push(temp + root.val.toString());
      return;
    }

    if (root.left != null) {
      binaryTreePaths(root.left, temp + root.val.toString() + '->');
    }

    if (root.right != null) {
      binaryTreePaths(root.right, temp + root.val.toString() + '->');
    }
  }

  DFS(root, '');

  return res;
};

// time:  O(n)
// space: O(n)


// [null]
// [1]
// [1, null, 2]
// [1, 2, 3, null, 5]
// [3, 9, 20, null, null, 15, 7]
// [1, 2, 2, 3, 3, null, null, 4, 4]:
