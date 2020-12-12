/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0;
  let res = 0;
  const map = new Map().set(0, 1);

  for (const num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      res += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1], 0
// [1], 1
// [1, 1, 1], 1
// [1, 1, 1], 2
// [1, 2, 3], 3
