/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  let min = nums[0], max = nums[0];
  
  for (const x of nums) {
    min = Math.min(min, x);
    max = Math.max(max, x);
  }

  return Math.max(0, max - min - 2 * k);  
};

// time:  O(n)
// space: O(1)

// [1], 0
// [0, 10], 2
// [1, 3, 6], 3