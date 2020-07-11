/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = nums.length;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i] ^ i;
  }

  return result;
};

// time:  O((n/2)!)
// space: O(n)

// []
// [0]
// [1]
// [3, 0, 1]
// [9, 6, 4, 2, 3, 5, 7, 0, 1]
