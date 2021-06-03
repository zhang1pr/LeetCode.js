/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let cur = root;
  const res = [];
  if (cur == null) {
    return res;
  }

  const stack1 = [root];
  const stack2 = [];

  let temp;
  while (stack1.length != 0 || stack2.length != 0) {
    temp = [];
    while (stack1.length != 0) {
      cur = stack1.pop();
      temp.push(cur.val);

      if (cur.left != null) {
        stack2.push(cur.left);
      }

      if (cur.right != null) {
        stack2.push(cur.right);
      }
    }
    res.push(temp);

    temp = [];
    while (stack2.length != 0) {
      cur = stack2.pop();
      temp.push(cur.val);

      if (cur.right != null) {
        stack1.push(cur.right);
      }

      if (cur.left != null) {
        stack1.push(cur.left);
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
