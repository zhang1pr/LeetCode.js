/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const stack = [];

  for (const num of nums) {
    const cur = new TreeNode(num);

    while (stack.length != 0 && stack[stack.length - 1].val < num) {
      cur.left = stack[stack.length - 1];
      stack.pop();
    }

    if (stack.length != 0) {
      stack[stack.length - 1].right = cur;
    }

    stack.push(cur);
  }

  return stack[0];
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [3, 2, 1]
// [3, null, 2, 1]
// [3, 2, null, 1]
// [3, 2, 1, 6, 0, 5]
