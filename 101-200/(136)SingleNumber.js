/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b);
};

// time:  O(n)
// space: O(1)

// [1]
// [2, 2, 1]
// [4, 1, 2, 1, 2]
