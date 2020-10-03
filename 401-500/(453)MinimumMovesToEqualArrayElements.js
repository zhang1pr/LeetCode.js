/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let min = Infinity;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    min = Math.min(min, num);
  }

  return sum - min * nums.length;
};

// time:  O(n)
// space: O(1)

// [1]
// [2]
// [1, 1]
// [1, 2]
// [1, 2, 3]
