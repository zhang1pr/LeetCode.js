/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n == 0) {
    return [];
  }

  function generateTrees(start, end) {
    const res = [];
    if (start > end) {
      res.push(null);
      return res;
    }

    for (let i = start; i <= end; i++) {
      for (const leftTree of generateTrees(start, i - 1)) {
        for (const rightTree of generateTrees(i + 1, end)) {
          const tree = new TreeNode(i);
          tree.left = leftTree;
          tree.right = rightTree;
          res.push(tree);
        }
      }
    }

    return res;
  }

  return generateTrees(1, n);
};

// time:  O((2n)!/((n+1)!*n!))
// space: O((2n)!/((n+1)!*n!))

// 0
// 1
// 2
// 3
