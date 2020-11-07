/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  const res = [];

  let node = root;
  const stack = [];

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();

      if (res.length === k) {
        if (Math.abs(res[0] - target) <= Math.abs(node.val - target)) {
          return res;
        }

        res.shift();
      }

      res.push(node.val);
      node = node.right;
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [4, 2, 5, 1, 3], 3.714286, 2
