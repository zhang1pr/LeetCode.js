/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = [];
  const stack = [];
  let cur = root;
  let last = null;
  let temp;

  while (cur != null || stack.length != 0) {
    if (cur != null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      temp = stack[stack.length - 1];

      if (temp.right != null && temp.right != last) {
        cur = temp.right;
      } else {
        res.push(temp.val);
        last = temp;
        stack.pop();
      }
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, 2, 3]
// [1, null, 2, 3]
