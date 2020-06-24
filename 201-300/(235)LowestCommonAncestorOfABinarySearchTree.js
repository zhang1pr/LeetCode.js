/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let pVal = p.val;
  let qVal = q.val;
  if (pVal == root.val || qVal == root.val) {
    return root;
  }

  if (pVal > qVal) {
    let temp = pVal;
    pVal = qVal;
    qVal = temp;
  }

  while (true) {
    if (qVal < root.val) {
      root = root.left;
    } else if (pVal > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
};

// time:  O(n)
// space: O(1)

// [1, 2, 3], 2, 3
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 6
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 7
// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8
