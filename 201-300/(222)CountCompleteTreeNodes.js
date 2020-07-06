
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (root == null) {
    return 0;
  }

  const height = getHeight(root);
  const rightHeight = getHeight(root.right);

  if (rightHeight == height - 1) {
    return (1 << rightHeight) + countNodes(root.right);
  } else {
    return countNodes(root.left) + (1 << rightHeight);
  }
};

var getHeight = function(root) {
  if (root == null) {
    return 0;
  } else {
    return getHeight(root.left) + 1;
  }
}

// time:  O(log(n)^2)
// space: O(m)

// test cases:
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4, 5, 6]
