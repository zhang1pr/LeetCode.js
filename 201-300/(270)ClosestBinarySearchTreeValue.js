/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = function(root, target) {
  let res = root.val;

  while (root) {
    if (Math.abs(root.val - target) < Math.abs(res - target)) {
      res = root.val;
    }

    root = root.val > target ? root.left : root.right;
  }

  return res;
};

// time:  O(log(n))
// space: O(1)

// [4, 2, 5, 1, 3], 3.714286
