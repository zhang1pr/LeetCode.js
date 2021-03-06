/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];

  function BFS(node, depth) {
    if (!node) {
      return;
    }

    if (depth === res.length) {
      res.push([]);
    }

    res[depth].push(node.val);

    for (child of node.children) {
      BFS(child, depth + 1);
    }
  }

  BFS(root, 0);
  return res;
};

// time:  O(n)
// space: O(n)

// [1, null, 3, 2, 4, null, 5, 6]
// [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
