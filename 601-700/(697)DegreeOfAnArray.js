/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const left = new Map();
  const right = new Map();
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!left.has(num)) {
      left.set(num, i);
    }

    right.set(num, i);
    map.set(num, (map.get(num) || 0) + 1);
  }

  let res = nums.length;
  const max = Math.max(...map.values());

  for (const [key, val] of map) {
    if (val == max) {
      res = Math.min(res, right.get(key) - left.get(key) + 1);
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, 2, 1]
// [1, 2, 1, 2]
// [1, 2, 2, 1]
// [1, 2, 2, 3, 1]
// [1, 2, 2, 3, 1, 4, 2]
