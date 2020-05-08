/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const missing = [];

  if (nums.length == 0) {
    return [getRange(lower, upper)];
  }
  
  let next = lower;
  for (const num of nums) {   
    if (num < next) {
      continue;
    } else if (num == next) {
      next++;
      continue;
    }

    missing.push(getRange(next, num - 1));
    next = num + 1;
  }
  
  if (next <= upper) {
    missing.push(getRange(next, upper));
  }
  
  return missing;
};

function getRange(lower, upper) {
  if (upper == lower) {
    return lower.toString();
  } else {
    return `${lower}->${upper}`;
  }
}

// time:  O(n)
// space: O(1)

// test cases:
// [], 0, 0
// [], 0, 3
// [1], 0, 1
// [1], 1, 1
// [1], 1, 2
// [0, 1], -2, 3
// [0, 1], 0, 1
// [0, 1, 3, 50, 75], 0, 99
// [0, 1, 3, 50, 75], -5, 76
