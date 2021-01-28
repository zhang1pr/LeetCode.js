/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  const delta = 1e-5;

  while (max - min > delta) {
    const mid = (max + min) >>> 1;

    if (check(nums, k, mid)) {
      min = mid;
    } else {
      max = mid;
    }
  }

  return max;
};

var check = function(nums, k, target) {
  let sum = 0;
  const len = nums.length;

  for (let i = 0; i < k; i++) {
    sum += nums[i] - target;
  }

  let extraSum = 0;
  for (let i = k; i < len; i++) {
    if (sum >= 0) {
      return true;
    }

    sum += nums[i] - target;
    extraSum += nums[i - k] - target;

    if (extraSum < 0) {
      sum -= extraSum;
      extraSum = 0;
    }
  }

  return sum >= 0;
};

// time:  O(nlog(max-min))
// space: O(1)

// [5], 1
// [1, 4, 2, 3, 2]
// [1, 12, -5, -6, 50, 3], 4
