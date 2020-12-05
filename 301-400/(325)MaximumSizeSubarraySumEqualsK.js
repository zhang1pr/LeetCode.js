/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  let max = 0;
  let sum = 0;
  const map = new Map().set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (!map.has(sum)) {
      map.set(sum, i);
    }

    if (map.has(sum - k)) {
      max = Math.max(max, i - map.get(sum - k));
    }
  }

  return max;
};

// time:  O(n)
// space: O(n)

// [0], 0
// [1], 0
// [-1, 1, 0], 0
// [-2, -1, 2, 1], 1
// [1, -1, 5, -2, 3], 3
