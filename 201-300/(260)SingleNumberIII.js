/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return [...set.values()];
};

// time:  O(n)
// space: O(n)

// [1, 2]
// [0, 0, 1, 2]
// [1, 1, 1, 1, 2, 3]
// [1, 2, 1, 3, 2, 5]
