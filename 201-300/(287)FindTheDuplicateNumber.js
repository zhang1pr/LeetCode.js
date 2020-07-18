/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }

  return -1;
};

// time:  O(n)
// space: O(n)

// [1, 1]
// [1, 2, 1]
// [2, 1, 2]
// [1, 3, 4, 2, 2]
// [3, 1, 3, 4, 2]
