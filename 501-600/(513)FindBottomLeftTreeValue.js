/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let queue = [];

  while (queue.length) {
    const newQueue = [];

    for (const item of queue) {
      root = item;
      if (root.right != null) {
        newQueue.push(root.right);
      }

      if (root.left != null) {
        newQueue.push(root.left);
      }
    }

    queue = newQueue;
  }

  return root.val;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [2, 1, 3]
// [1, 2, 3, 4, null, 5, 6, null, null, 7]
