/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  if (n == 0) {
    return nums;
  }

  const leftMax = new Array(n);

  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (i % k == 0) {
      max = -Infinity;
    }
  
    if (max < nums[i]) {   
      max = nums[i];
    }
    
    leftMax[i] = Math.max(nums[i], max);
  }

  const rightMax = new Array(n);

  max = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (max < nums[i]) {
      max = nums[i];
    }

    rightMax[i] = Math.max(nums[i], max);
    
    if (i % k == 0) {
      max = -Infinity;
    }
  }

  const result = new Array(n - k + 1);
  
  for (let i = 0; i < n - k + 1; i++) {
    result[i] = Math.max(rightMax[i], leftMax[i + k - 1]);
  }
  
  return result;
}

// time:  O(n)
// space: O(n)

// [1], 1
// [0, 1, 3], 1
// [1, 1, 1, 1, 1], 2
// [0, 3, -3, 0, 3, -3], 3
// [1, 3, -1, -3, 5, 3, 6, 7], 3
