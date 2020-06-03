/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let min = Infinity;
  let left = 0;
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      min = Math.min(min, i + 1 - left);
      sum -= nums[left];
      left++;
    }
  }

  return min != Infinity ? min : 0;
};

// time:  O(n)
// space: O(1)

// 1, [0]
// 1, [1]
// 1, [2]
// 3, [0, 1, 2, 3, 4]
// 7, [2, 3, 1, 2, 4, 3]
