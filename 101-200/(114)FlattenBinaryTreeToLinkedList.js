/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const nodeStack = [];
  let cur = root;
  let pre = null;

  while (cur != null || nodeStack.length != 0) {
    while (cur != null) {
      nodeStack.push(cur);
      cur = cur.right;
    }

    cur = nodeStack[nodeStack.length - 1];

    if (cur.left == null || cur.left == pre) {
      nodeStack.pop();

      cur.right = pre;
      cur.left = null;

      pre = cur;
      cur = null;
    } else {
      cur = cur.left;
    }
  }
};

// time:  O(n)
// space: O(n)

// test cases:
// [null]
// [1]
// [1, null, 2]
// [1, 2, null, null, 2]
// [3, 9, 20, null, null, 15, 7]
