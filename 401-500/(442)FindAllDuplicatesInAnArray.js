/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const res = [];

  for (const num of nums) {
    const i = Math.abs(num) - 1;

    if (nums[i] > 0) {
      nums[i] = -nums[i];
    } else {
      res.push(i + 1);
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 2]
// [1, 2, 1]
// [1, 2, 1, 2, 3]
// [4, 3, 2, 7, 8, 2, 3, 1]
