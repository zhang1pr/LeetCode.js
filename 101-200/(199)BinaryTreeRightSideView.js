
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];

  function DFS(root, level) {
    if (root == null) {
      return;
    }

    if (level == res.length) {
      res.push(root.val);
    }

    DFS(root.right, level + 1, res);
    DFS(root.left, level + 1, res);
  }

  DFS(root, 0, res);
  return res;
};

// time:  O(n)
// space: O(n)

// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [1, 2, 3, null, 5, null, 4]
// [3, 9, 20, null, null, 15, 7]
