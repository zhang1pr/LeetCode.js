/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (root == null) {
    return 0;
  }

  let res = 0;
  const stack = [root];
  const map = new Map();

  while (stack.length != 0) {
    const node = stack[stack.length - 1];

    if (node.left && !map.has(node.left)) {
      stack.push(node.left);
    } else if (node.right && !map.has(node.right)) {
      stack.push(node.right);
    } else {
      stack.pop();
      const leftMax = map.get(node.left) || 0;
      const rightMax = map.get(node.right) || 0;
      const nodeMax = 1 + Math.max(leftMax, rightMax);
      map.set(node, nodeMax);

      res = Math.max(res, leftMax + rightMax);
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4, 5]
// [1, 2, null, 3, 4]
