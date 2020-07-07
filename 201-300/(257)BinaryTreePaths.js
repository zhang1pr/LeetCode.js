/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = [];
  
  if (root == null) {
    return result;
  }

  function DFS(root, temp) {
    if (root.left == null && root.right == null) {
      result.push(temp + root.val.toString());
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
  
  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, 3, null, 5]
// [3, 9, 20, null, null, 15, 7]
// [1, 2, 2, 3, 3, null, null, 4, 4]:
