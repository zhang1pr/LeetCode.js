/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestConsecutive = function(root) {
  const res = { max: 0 };

  function DFS(node, p, cur, res) {
    if (!node) {
      return;
    }

    let s = 0
    if (!p) {
      s = 1;
    } else if (node.val - p.val == 1) {
      s = cur + 1;
    } else {
      s = 1;
    }

    if (s > res.max) {
      res.max = s;
    }

    DFS(node.left, node, s, res);
    DFS(node.right, node, s, res);
  }

  DFS(root, null, 0, res);

  return res.max;
};

// time:  O(n)
// space: O(n)

// [1, null, 3, 2, 4, null, null, null, 5]
// [2, null, 3, 2, null, 1, null]
