/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length == 0) {
    return 0
  }

  let max = 1;
  let min = 1;
  let result = -Infinity;
  let temp;

  for (const num of nums) {
    temp = max;
    max = Math.max(min * num, max * num, num);
    min = Math.min(min * num, temp * num, num);
    result = Math.max(result, max);
  }

  return result;
};

// time:  O(n)
// space: O(n)

// test cases:
// []
// [0]
// [3]
// [-3]
// [2, 3, -2, 4]
// [-2, 0, -1]
