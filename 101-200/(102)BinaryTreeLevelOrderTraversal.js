/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];

  function traverse(root, level) {
    if (root == null) {
      return;
    }

    if (level >= res.length) {
      res[level] = [];
    }

    res[level].push(root.val);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  }

  traverse(root, 0);

  return res;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
