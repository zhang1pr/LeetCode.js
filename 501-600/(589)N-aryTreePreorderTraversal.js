/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = [];
  if (root == null) {
    return res;
  }

  const stack = [root];

  while (stack.length) {
    root = stack.pop();
    res.push(root.val);

    for (let i = root.children.length - 1; i >= 0; i--) {
      stack.push(root.children[i]);
    }
  }

  return res;
}

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, null, 3, 2, 4, null, 5, 6]
// [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
