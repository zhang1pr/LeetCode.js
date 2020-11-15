/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const n = nums.length;
  if (n == 0) {
    return 0;
  }

  const dp = Array(n);
  let len = 0;
  let start;
  let end;
  let mid;

  for (let i = 0; i < n; i++) {
    start = 0;
    end = len;

    while (start < end) {
      mid = (start + end) >>> 1;

      if (dp[mid] < nums[i]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    dp[start] = nums[i];
    if (start == len) {
      len++;
    }
  }

  return len;
};

// time:  O(nlog(n))
// space: O(n)

// [0]
// [1, 0]
// [1, 0, 2, 3]
// [8, 9, 1, 2, 3]
// [10, 9, 2, 5, 3, 7, 101, 18]
