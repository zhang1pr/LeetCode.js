/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length == 1) {
    return `${nums[0]}`;
  }

  if (nums.length == 2) {
    return `${nums[0]}/${nums[1]}`;
  }

  return `${nums[0]}/(${nums.slice(1).join('/')})`
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 1]
// [1000, 100, 10]
// [1000, 100, 10, 2]
