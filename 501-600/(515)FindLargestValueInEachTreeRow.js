/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return [];
  }

  const res = [];

  let queue = [root];

  while (queue.length > 0) {
    let newQueue = [];

    let max = -Infinity;
    for (const node of queue) {
      if (node.val >= max) {
        max = node.val;
      }

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }

    queue = newQueue;
    res.push(max);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 3, 2, 5, 3, null, 9]
