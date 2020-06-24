/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const stack = [root];
  const parent = new Map().set(root, null);
  
  let cur;
  while (!parent.has(p) || !parent.has(q)) {
    cur = stack.pop();
    
    if (cur.left != null) {
      stack.push(cur.left);
      parent.set(cur.left, cur);
    }

    if (cur.right != null) {
      stack.push(cur.right);
      parent.set(cur.right, cur);
    }
  }

  const path = new Set();
  while (p != null) {
    path.add(p);
    p = parent.get(p);
  }

  while (q != null) {
  if (path.has(q)) {
      break;
    }
    q = parent.get(q);
  }

  return q;  
};

// time:  O(n)
// space: O(1)

// [1, 2, 3], 2, 3
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 6
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 7
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8
