/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let curr = root;
  const res = [];
  if (curr == null) {
    return res;
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
    res.push(temp);

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
      res.push(temp);
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
