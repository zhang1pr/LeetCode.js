/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {
  let x = 0;

  for (const num of nums) {
    x ^= num;
  }

  return x == 0 || nums.length % 2 == 0;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 2]
// [1, 1, 2]
