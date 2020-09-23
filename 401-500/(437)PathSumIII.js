/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  const map = new Map().set(0, 1);

  function DFS(root, curSum, target) {
    if (root == null) {
      return 0;
    }

    curSum += root.val;
    let res = map.get(curSum - target) || 0;
    map.set(curSum, (map.get(curSum) || 0) + 1);

    res += DFS(root.left, curSum, target) + DFS(root.right, curSum, target);
    map.set(curSum, map.get(curSum) - 1);

    return res;
  }


  return DFS(root, 0, sum);
};

// time:  O(n)
// space: O(n)

// [0], 0
// [1], 0
// [1], 1
// [0, 0], 0
// [1, -2, -3], -1
// [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8
