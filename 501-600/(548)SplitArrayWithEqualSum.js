/**
 * @param {number[]} nums
 * @return {boolean}
 */

var splitArray = function(nums) {
  if (nums.length < 7) {
    return false;
  }

  const len = nums.length;
  const sum = new Array(len).fill(0)
  sum[0] = nums[0];

  for (let i = 1; i < len; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  for (let j = 3; j < len - 3; j++) {
    const set = new Set();

    for (let i = 1; i < j - 1; i++) {
      if (sum[i - 1] == sum[j - 1] - sum[i]) {
        set.add(sum[i - 1]);
      }
    }

    for (let k = j + 2; k < len - 1; k++) {
      if (sum[len - 1] - sum[k] == sum[k - 1] - sum[j] && set.has(sum[k - 1] - sum[j])) {
        return true;
      }
    }
  }

  return false
};

// time:  O(n^2)
// space: O(n)

// [1, 1, 1, 1]
// [1, 1, 1, 1, 1, 2, 1]
// [1, 2, 1, 2, 1, 2, 1]
// [1, 2, 2, 2, 1, 2, 1]
