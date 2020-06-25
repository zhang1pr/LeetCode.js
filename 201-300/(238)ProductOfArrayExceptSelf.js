/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const length = nums.length;
  const result = [1, ...nums.slice(1)];

  let i;
  for (i = 1; i < length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let temp = 1;
    
  for (i = length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= nums[i];
  }

  return result;
};

// time:  O(n)
// space: O(1)

// [0, 1]
// [1, 1]
// [1, -1]
// [1, 2]
// [1, 2, 3]
// [1, -2, 3, -4]
