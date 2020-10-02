/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  let cur = root;
  let pre = null;

  while (cur != null && cur.val != key) {
    pre = cur;

    if (key < cur.val) {
      cur = cur.left;
    } else if (key > cur.val) {
      cur = cur.right;
    }
  }

  if (pre == null) {
    return deleteRootNode(cur);
  }

  if (pre.left == cur) {
    pre.left = deleteRootNode(cur);
  } else {
    pre.right = deleteRootNode(cur);
  }

  return root;
};

var deleteRootNode = function(root) {
  if (root == null) {
    return null;
  }

  if (root.left == null) {
    return root.right;
  }

  if (root.right == null) {
    return root.left;
  }

  let next = root.right;
  let pre = null;

  while (next.left != null) {
    pre = next;
    next = next.left;
  }

  next.left = root.left;

  if (root.right != next) {
    pre.left = next.right;
    next.right = root.right;
  }

  return next;
}

// time:  O(n)
// space: O(1)

// [], 0
// [5, 3, 6, 2, 4, null, 7], 3
// [5, 3, 6, 2, 4, null, 7], 0
