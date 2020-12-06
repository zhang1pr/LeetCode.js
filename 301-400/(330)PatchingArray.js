/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let miss = 1;
  let patch = 0;
  let i = 0;

  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i];
      i++;
    } else {
      miss += miss;
      patch++;
    }
  }

  return patch;
};

// time:  O(n)
// space: O(1)

// [1, 3], 6
// [1, 2, 2], 5
// [1, 5, 10], 20
