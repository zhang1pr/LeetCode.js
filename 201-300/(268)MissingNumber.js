/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i] ^ i;
  }

  return res;
};

// time:  O((n/2)!)
// space: O(n)

// []
// [0]
// [1]
// [3, 0, 1]
// [9, 6, 4, 2, 3, 5, 7, 0, 1]
