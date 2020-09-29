/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const arr = [];

  function DFS(root, level) {
    if (root == null) {
      return;
    }

    if (![level]) {
      arr[level] = [root.val];
    } else {
      arr[level].push(root.val);
    }

    DFS(root.left, level+1);
    DFS(root.right, level+1);
  }

  DFS(root, 0);
  return arr.reverse();
};

// time:  O(n)
// space: O(n)

// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
