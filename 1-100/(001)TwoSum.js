/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (array.includes(nums[i])) {
      return [i, map.get(nums[i])];
    } else {
      map.set(target - nums[i], i);
    }
  }
};

// time:  O(n)
// space: O(n)

// test cases:
// [2, 7, 11, 15], 9
// [-3, 4, -6, 5], -1
