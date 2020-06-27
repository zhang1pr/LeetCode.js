/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let curr = root;
  const result = [];
  if (curr == null) {
    return result;
  }

  const stack1 = [root];
  const stack2 = [];

  let temp;
  while (stack1.length != 0 || stack2.length != 0) {
    temp = [];
    while (stack1.length != 0) {
      curr = stack1.pop();
      temp.push(curr.val);

      if (curr.left != null) {
        stack2.push(curr.left);
      }

      if (curr.right != null) {
        stack2.push(curr.right);
      }
    }
    result.push(temp);

    temp = [];
    while (stack2.length != 0) {
      curr = stack2.pop();
      temp.push(curr.val);

      if (curr.right != null) {
        stack1.push(curr.right);
      }

      if (curr.left != null) {
        stack1.push(curr.left);
      }
    }

    if (temp.length != 0) {
      result.push(temp);
    }
  }

  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
