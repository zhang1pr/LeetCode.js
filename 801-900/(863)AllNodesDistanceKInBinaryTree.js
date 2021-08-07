/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  function find(root, target) {
    if (root == null) {
      return -1;
    }

    if (root == target) {
      map.set(root, 0);
      return 0;
    }

    const left = find(root.left, target);
    if (left >= 0) {
      map.set(root, left + 1);
      return left + 1;
    }

    const right = find(root.right, target);
    if (right >= 0) {
      map.set(root, right + 1);
      return right + 1;
    }

    return -1;
  }

  function DFS(root, target, K, length, res) {
    if (root == null) {
      return;
    }

    if (map.has(root)) {
      length = map.get(root);
    }

    if (length == K) {
      res.push(root.val);
    }

    DFS(root.left, target, K, length + 1, res);
    DFS(root.right, target, K, length + 1, res);
  }

  const map = new Map();
  const res = [];

  find(root, target);
  DFS(root, target, K, map.get(root), res);
  return res;
};

// time:  O(n)
// space: O(n)

// [1], 1, 3
// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2
