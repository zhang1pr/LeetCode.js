/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const missing = [];

  if (nums.length == 0) {
    return [[lower, upper]];
  }

  let next = lower;
  for (const num of nums) {
    if (num < next) {
      continue;
    } else if (num == next) {
      next++;
      continue;
    }

    missing.push([next, num - 1]);
    next = num + 1;
  }

  if (next <= upper) {
    missing.push([next, upper]);
  }

  return missing;
};

// time:  O(n)
// space: O(1)

// [], 0, 0
// [], 0, 3
// [], -3, -1
// [1], -1, -1
// [1], -2, -1
// [1], 0, 1
// [1], 1, 1
// [1], 1, 2
// [0, 1], -2, 3
// [0, 1], 0, 1
// [0, 1, 3, 50, 75], 0, 99
// [0, 1, 3, 50, 75], -5, 76