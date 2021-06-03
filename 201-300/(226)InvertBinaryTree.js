
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const stack = [root];

  while (stack.length != 0) {
    const cur = stack.pop();

    if (cur) {
      [cur.left, cur.right] = [cur.right, cur.left];
      stack.push(cur.left, cur.right);
    }
  }

  return root;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 2]
// [1, 2, 3]
// [4, 2, 7, 1, 3, 6, 9]
