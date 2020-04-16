 /**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 *
 * es6
 * class Node {
 *   constructor(val = 0, neighbors = []) {
 *     this.val = val;
 *     this.neighbors = neighbors;
 *   }
 * }
 */


/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (node == null) {
    return node;
  }

  const map = new Map();

  function DFS(node) {
    if (map.has(node.val)) {
      return map.get(node.val);
    }

    const n = new Node(node.val, []);
    map.set(node.val, n);

    for (const neighbor of node.neighbors) {
      n.neighbors.push(DFS(neighbor));
    }

    return n;
  }

  return DFS(node);
};

// time:  O(n)
// space: O(n)

// test cases:
// []
// [[]]
// [[2], [1]]
// [[2, 4], [1, 3], [2, 4], [1, 3]]
