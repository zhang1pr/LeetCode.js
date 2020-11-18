/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const map = new Map().set(0, -1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k != 0) {
      sum %= k;
    }

    const prev = map.get(sum);
    if (prev != null) {
      if (i - prev > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
}

// time:  O(n)
// space: O(n)

// [0], 0
// [1], 2
// [1, 2], 2
// [1, 2], 3
// [1, 2, 3], 3
// [23, 2, 4, 6, 7], 6
// [23, 2, 6, 4, 7], 6
