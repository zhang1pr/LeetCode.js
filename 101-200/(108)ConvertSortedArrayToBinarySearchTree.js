/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function buildTree(start, end) {
    if (start == end) {
      return null;
    }

    const mid = (start + end) >>> 1;
    const root = new TreeNode(nums[mid]);
    root.left = buildTree(start, mid);
    root.right = buildTree(mid + 1, end);

    return root;
  }

  return buildTree(0, nums.length);
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 2]
// [1, 2, 2]
// [-10, -3, 0, 5, 9]
