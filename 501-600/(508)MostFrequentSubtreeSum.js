/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const map = new Map();
  let max = 0;

  function DFS(root) {
    if (root == null) {
      return 0;
    }

    const sum = DFS(root.left) + DFS(root.right) + root.val;

    let cnt = 1;

    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      cnt = map.get(sum) + 1;
      map.set(sum, cnt);
    }

    max = Math.max(max, cnt);
    return sum;
  }

  DFS(root);
  const res = [];

  for (const [key, val] of map) {
    if (val == max) {
      res.push(key);
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [0]
// [1]
// [1, 0]
// [1, 2, 3]
// [1, -1, 1]
// [5, 2, -3]
