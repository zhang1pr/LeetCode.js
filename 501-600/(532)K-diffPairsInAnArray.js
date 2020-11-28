/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  const map = new Map();
  let res = 0;
  for (const num of nums) {
    if (map.has(num)) {
      const get = map.get(num);
      if (k == 0 && get == 1) {
        res++;
      }

      map.set(num, get + 1);
    } else {
      if (map.has(num - k)) {
        res++;
      }

      if (map.has(num + k)) {
        res++;
      }

      map.set(num, 1);
    }
  }

  return res;
};

// [0], 0
// [1], 1
// [1, 1], 0
// [1, 2], 1
// [1, 2, 3], 1
// [1, 2, 3], 2
// [-1, -2, -3], 1
// [3, 1, 4, 1, 5], 2
// [1, 2, 3, 4, 5], 1
// [1, 3, 1, 5, 4], 0
// [1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3
