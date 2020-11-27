/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Infinity;
  const stack = [];
  let cur = root;
  let pre = null;

  while (cur != null || stack.length) {
    if (cur != null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      if (pre != null) {
        min = Math.min(min, cur.val - pre.val);
      }

      pre = cur;
      cur = cur.right;
    }
  }

  return min;
};

// time:  O(n)
// space: O(n)

// [1, 2]
// [2, 1, 4]
// [1, null, 3, 2]
// [1, null, 3, 4]
// [1, null, 3, null, 4]
