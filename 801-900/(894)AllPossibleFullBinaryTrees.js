/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n == 0 || n % 2 == 0) {
    return [];
  }

  const res = [];
  if (n == 1) {
    res.push(new TreeNode(0));
    return res;
  }

  for (let i = 1; i < n; i += 2) {
    const leftSubTrees = allPossibleFBT(i);
    const rightSubTrees = allPossibleFBT(n - i - 1);

    for (const l of leftSubTrees) {
      for (const r of rightSubTrees) {
        const root = new TreeNode(0);

        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }

  return res;
};

// time:  O(2^n)
// space: O(2^n)

// 1
// 2
// 3
// 7
