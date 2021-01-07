/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 == null) {
    return t2;
  }

  const stack = [[t1, t2]];

  while (stack.length !== 0) {
    const [a, b] = stack.pop();
    if (a == null || b == null) {
      continue;
    }

    a.val += b.val;

    if (a.left == null) {
      a.left = b.left;
    } else {
      stack.push([a.left, b.left]);
    }

    if (a.right == null) {
      a.right = b.right;
    } else {
      stack.push([a.right, b.right]);
    }
  }

  return t1;
};

// time:  O(m+n)
// space: O(m+n)

// [], []
// [], [1]
// [1], [2]
// [1, 2], [1, null, 2]
// [1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]
