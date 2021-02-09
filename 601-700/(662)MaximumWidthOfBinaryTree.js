/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (root == null) {
    return 0;
  }

  const arr = [];
  let max = 0;

  function DFS(root, depth, i) {
    if (!arr[depth]) {
      arr[depth] = i;
    }

    max = Math.max(max, i - arr[depth] + 1);

    if (root.left) {
      DFS(root.left,  depth + 1, 2 * (i - arr[depth]) + 1);
    }

    if (root.right) {
      DFS(root.right, depth + 1, 2 * (i - arr[depth]) + 2);
    }

    return max;
  };

  return DFS(root, 0, 1);
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, 3, 2]
// [1, 3, 2, 5]
// [1, 3, null, 5, 3]
// [1, 3, 2, 5, 3, null, 9]
// [1, 3, 2, 5, null, null, 9, 6, null, null, 7]
