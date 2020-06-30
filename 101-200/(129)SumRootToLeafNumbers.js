/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (root == null) {
    return 0;
  }

  let sum = 0;
  let node;
  let curSum;

  const stack = [root, 0];

  while (stack.length != 0) {
    val = stack.pop();
    node = stack.pop();

    curSum = val * 10 + node.val;

    if (node.left == null && node.right == null) {
      sum += curSum;
    } else {
      if (node.right != null) {
        stack.push(node.right);
        stack.push(curSum);
      }

      if (node.left != null) {
        stack.push(node.left);
        stack.push(curSum);
      }
    }
  }

  return sum;
}

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 3]
// [1, 9, 2, null, null, 5, 7]
