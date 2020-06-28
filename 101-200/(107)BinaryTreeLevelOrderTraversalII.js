/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const array = [];

  function DFS(root, level) {
    if (root == null) {
      return;
    }

    if (!array[level]) {
      array[level] = [root.val];
    } else {
      array[level].push(root.val);
    }

    DFS(root.left, level+1);
    DFS(root.right, level+1);
  }

  DFS(root, 0);
  return array.reverse();
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
