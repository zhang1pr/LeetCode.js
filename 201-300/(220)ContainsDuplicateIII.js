/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (t < 0) {
    return false;
  }

  const map = new Map();
  const n = nums.length;
  const w = t + 1;
  let id;

  for (let i = 0; i < n; i++) {
    id = Math.floor(nums[i] / w);

    if (map.has(id)) {
      return true;
    }

    if (map.has(id - 1) && Math.abs(nums[i] - map.get(id - 1)) < w) {
      return true;
    }

    if (map.has(id + 1) && Math.abs(nums[i] - map.get(id + 1)) < w) {
      return true;
    }

    map.set(id, nums[i]);

    if (i >= k) {
      map.delete(Math.floor(nums[i - k] / w));
    }
  }

  return false;
};

// time:  O(min(n,k))
// space: O(k)

// [1], 0, 0
// [1, 1], 1, 0
// [2, 1], 1, 1
// [1, 2, 3, 1], 3, 0
// [1, 0, 1, 1], 1, 2
// [1, 5, 9, 1, 5, 9], 2, 3
