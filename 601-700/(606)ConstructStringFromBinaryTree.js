/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (t == null) {
    return '';
  }

  let str = '';
  const stack = [t];

  while (stack.length) {
    const node = stack.pop();
    if (node == '#') {
      str += ')';
      continue;
    }

    str += '(' + node.val;
    stack.push('#');
    if (node.left == null && node.right != null) {
      str += '()';
    }

    if (node.right != null) {
      stack.push(node.right);
    }

    if (node.left != null) {
      stack.push(node.left);
    }
  }

  return str.slice(1, str.length - 1);
};

// time:  O(n)
// space: O(n)

// [1, 2, 3, 4]
// [1, 2, 3, null, 4]
