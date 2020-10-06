/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let once = 0;
  let twice = 0;

  for (const num of nums) {
    once = ~twice & (once ^ num);
    twice = ~once & (twice ^ num);
  }

  return once;
};

// time:  O(n)
// space: O(1)

// [1]
// [2, 2, 3, 2]
// [0, 1, 0, 1, 0, 1, 99]
