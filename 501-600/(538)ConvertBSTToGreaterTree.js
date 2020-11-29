/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let node = root;
  const stack = [];

  let sum = 0;
  while (node != null || stack.length) {
    if (node != null) {
      stack.push(node);
      node = node.right;
    } else {
      node = stack.pop();
      sum += node.val;
      node.val = sum;

      node = node.left;
    }
  }

  return root;
}

// time:  O(n)
// space: O(n)

// [1]
// [1, 0, 2]
// [0, null, 1]
// [3, 2, 4, 1]
// [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]
