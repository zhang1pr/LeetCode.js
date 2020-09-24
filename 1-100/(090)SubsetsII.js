/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = []
  nums.sort((a, b) => a - b);

  function generateSubsets(nums, start, stack) {
    res.push(stack.slice());
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }
      stack.push(nums[i]);
      generateSubsets(nums, i + 1, stack);
      stack.pop();
    }
  }

  generateSubsets(nums, 0, []);
  return res;
};

// time:  O(2^n)
// space: O(n)

// []
// [0]
// [0, 0]
// [0, 1, 2]
// [1, 1, 2]
