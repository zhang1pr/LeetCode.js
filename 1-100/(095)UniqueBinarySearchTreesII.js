/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n == 0) {
    return [];
  }

  function generateTrees(start, end) {
    const result = [];
    if (start > end) {
      result.push(null);
      return result;
    }

    for (let i = start; i <= end; i++) {
      for (const leftTree of generateTrees(start, i - 1)) {
        for (const rightTree of generateTrees(i + 1, end)) {
          const tree = new TreeNode(i);
          tree.left = leftTree;
          tree.right = rightTree;
          result.push(tree);
        }
      }
    }

    return result;
  }

  return generateTrees(1, n);
};

// time:  O((2n)!/((n+1)!*n!))
// space: O((2n)!/((n+1)!*n!))

// test cases:
// 0
// 1
// 2
// 3
