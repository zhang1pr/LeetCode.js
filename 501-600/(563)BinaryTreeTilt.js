/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  if (root == null) {
    return 0;
  }

  let res = 0;
  const stack = [root];
  const map = new Map();

  while (stack.length != 0) {
    const node = stack[stack.length - 1];

    if ((node.left == null || map.has(node.left)) && (node.right == null || map.has(node.right))) {
      stack.pop();
      const left = map.get(node.left) || 0;
      const right = map.get(node.right) || 0;

      res += Math.abs(left - right);
      map.set(node, left + right + node.val);
    } else {
      if (node.left != null && !map.has(node.left)) {
        stack.push(node.left);
      }

      if (node.right != null && !map.has(node.right)) {
        stack.push(node.right);
      }
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 1]
// [1, 1, 1]
// [1, 2, 3]
// [4, 2, 9, 3, 5, null, 7]
// [21, 7, 14, 1, 1, 2, 2, 3, 3]
