/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (root == null) {
    return 0;
  }

  let res = 0;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node.left != null) {
      if (node.left.left == null && node.left.right == null) {
        res += node.left.val;
      } else {
        stack.push(node.left);
      }
    }

    if (node.right != null) {
      if (node.right.left != null || node.right.right != null) {
        stack.push(node.right);
      }
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [1, 2, 3, null, 5, null, 4]
// [3, 9, 20, null, null, 15, 7]
