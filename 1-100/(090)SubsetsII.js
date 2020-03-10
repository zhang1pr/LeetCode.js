/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = []
  nums.sort((a, b) => a - b);

  function generateSubsets(nums, start, stack) {
    result.push(stack.slice());
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
  return result;
};

// time:  O(2^n)
// space: O(n)

// test cases:
// []
// [0]
// [0, 0]
// [0, 1, 2]
// [1, 1, 2]
