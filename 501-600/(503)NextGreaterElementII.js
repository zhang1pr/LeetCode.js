/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length;
  const res = Array(n).fill(-1);

  const stack = [];

  for (let i = 0; i < n * 2; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      res[stack.pop()] = nums[i % n];
    }

    stack.push(i % n);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [0]
// [1]
// [1, 2]
// [2, 1]
// [0, 1, 2]
// [1, 2, 1]
// [3, 2, 1]
