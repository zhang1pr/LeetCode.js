/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]) - 1;

    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1]
// [1]
// [1, 2]
// [2, 2]
// [1, 1, 1, 1]
// [4, 3, 2, 7, 8, 2, 3, 1]
