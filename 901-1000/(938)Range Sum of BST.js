/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let sum = 0;

  if (root == null) {
    return sum;
  }

  if (root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }

  if (root.val <= high && root.val >= low) {
    sum += root.val;
  }

  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }

  return sum;
};

// time:  O(n)
// space: O(n)

// [10, 5, 15, 3, 7, null, 18], 7, 15
// [10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10