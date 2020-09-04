/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];

  function traverse(root, res) {
    if (root != null) {
      if (root.left != null) {
        traverse(root.left, res);
      }

      res.push(root.val);

      if (root.right != null) {
        traverse(root.right, res);
      }
    }
  }

  traverse(root, res);
  return res;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, null, 2, 3]
