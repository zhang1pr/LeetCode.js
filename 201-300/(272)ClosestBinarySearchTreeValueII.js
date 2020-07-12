/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
const closestKValues = function(root, target, k) {
  const result = [];

  let node = root;
  const stack = [];

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();

      if (result.length === k) {
        if (Math.abs(result[0] - target) <= Math.abs(node.val - target)) {
          return result;
        }

        result.shift();
      }

      result.push(node.val);
      node = node.right;
    }
  }

  return result;
}

// time:  O(n)
// space: O(n)

// [4, 2, 5, 1, 3], 3.714286, 2
