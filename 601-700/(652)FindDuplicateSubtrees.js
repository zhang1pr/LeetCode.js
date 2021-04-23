/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let t = 1;
  const tree = new Map();
  const cnt = new Map();
  const res = [];

  function DFS(node) {
    if (node == null) {
      return '0';
    }

    const string = node.val.toString() + ',' + DFS(node.left) + ',' + DFS(node.right);

    if (!tree.has(string)) {
      tree.set(string, t);
      t++;
    }

    const id = tree.get(string);
    cnt.set(id, (cnt.get(id) || 0) + 1);

    if (cnt.get(id) == 2) {
      res.push(node);
    }

    return id;
  }

  DFS(root);

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// [1]
// [1, 1]
// [1, 2, 1]
// [2, 1, 1]
// [2, 2, 2, 3, null, 3, null]
// [1, 2, 3, 4, null, 2, 4, null, null, 4]
