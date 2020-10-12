/**
 * @param {diffber} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n == 0) {
    return [];
  }

  const dp = [[null]];

  function copyTree(node, diff) {
    if (!node) {
      return null;
    }

    const newNode = new TreeNode(node.val + diff);

    newNode.left = copyTree(node.left, diff);
    newNode.right = copyTree(node.right, diff);

    return newNode;
  }

  for (let len = 1; len <= n; len++) {
    const arr = [];

    for (let root = 1; root <= len; root++) {
      const left = root - 1;
      const right = len - root;

      for (const leftTree of dp[left]) {
        for (const rightTree of dp[right]) {
          const node = new TreeNode(root);
          node.left = leftTree;
          node.right = copyTree(rightTree, root);

          arr.push(node);
        }
      }
    }

    dp.push(arr);
  }

  return dp[n];
};

// time:  O((2n)!/((n+1)!*n!))
// space: O((2n)!/((n+1)!*n!))

// 0
// 1
// 2
// 3
