/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  const res = [];

  while (queue.length) {
    const newQueue = [];
    let sum = 0;

    for (const node of queue) {
      sum += node.val;

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }

    res.push(sum / queue.length);
    queue = newQueue;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [3, 9, 20, 15, 7]
