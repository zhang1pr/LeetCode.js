/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const stack = [];
  let three = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < three) {
      return true;
    }

    while (stack[stack.length - 1] < nums[i]) {
      three = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, 1, 1]
// [1, 2, 1]
// [1, 3, 2]
// [1, 2, 3, 4]
// [3, 1, 4, 2]
// [-1, 3, 2, 0]
