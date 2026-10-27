/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  const N = nums.length;
  nums.sort((a, b) => a - b);
  let ans = nums[N - 1] - nums[0];

  for (let i = 0; i < N - 1; i++) {
    let a = nums[i], b = nums[i + 1];
    let high = Math.max(nums[N - 1] - k, a + k);
    let low = Math.min(nums[0] + k, b - k);
    ans = Math.min(ans, high - low);
  }

  return ans;  
};

// time:  O(nlog(n))
// space: O(n)

// [1], 0
// [0, 10], 2
// [1, 3, 6], 3