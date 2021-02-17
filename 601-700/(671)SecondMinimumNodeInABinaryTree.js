/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let min = root.val;
  let res = Infinity;

  function DFS(root) {
    if (root != null) {
      if (min < root.val && root.val < res) {
        res = root.val;
      } else if (min == root.val) {
        DFS(root.left);
        DFS(root.right);
      }
    }
  }

  DFS(root);

  return res < Infinity ? res : -1;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 1]
// [1, 2]
// [2, 2]
// [2, 2, 2]
// [2, 2, 5, null, null, 5, 7]
