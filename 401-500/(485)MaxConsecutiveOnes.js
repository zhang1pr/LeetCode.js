/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let cur = 0;
  let max = 0;

  for (const num of nums) {
    if (num == 0) {
      cur = 0;
    } else {
      cur++;
    }

    max = Math.max(max, cur);
  }

  return max;
};

// time:  O(n)
// space: O(1)

// [1]
// [0, 1]
// [1, 1]
// [1, 0, 1, 1, 0, 1]
// [1, 1, 0, 1, 1, 1]
