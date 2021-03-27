/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) {
    return 0;
  }

  let prod = 1;
  let res = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left];
      left++;
    }

    res += right - left + 1;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1, 2 ,3], 0
// [10, 5, 2, 6], 100

