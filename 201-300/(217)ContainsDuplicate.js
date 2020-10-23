/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }

    set.add(num);
  }

  return false;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 1]
// [1, 3]
// [1, 2, 3, 1]
// [1, 2, 3, 4]
// [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
