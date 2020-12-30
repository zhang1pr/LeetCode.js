/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map ();
  let res = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.has(num + 1)) {
      res = Math.max(res, map.get(num) + map.get(num + 1));
    }

    if (map.has(num - 1)) {
      res = Math.max(res, map.get(num) + map.get(num - 1));
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1, 1, 1, 1]
// [1, 2, 3, 4]
// [1, 3, 2, 2, 5, 2, 3, 7]
