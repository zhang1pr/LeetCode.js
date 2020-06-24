/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];

  function traverse(root, result) {
    if (root != null) {
      if (root.left != null) {
        traverse(root.left, result);
      }

      result.push(root.val);

      if (root.right != null) {
        traverse(root.right, result);
      }
    }
  }

  traverse(root, result);
  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, null, 2, 3]
