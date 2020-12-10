/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }

  let queue = [root];

  let depth = 0;

  while (queue.length != 0) {
    const newQueue = [];

    for (const node of queue) {
      for (const child of node.children) {
        newQueue.push(child);
      }
    }

    queue = newQueue;
    depth++;
  }

  return depth;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, null, 3]
// [1, null, 3, 2, 4, null, 5, 6]
// [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
