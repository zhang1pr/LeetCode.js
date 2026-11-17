/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let start = 0;
  let prefixZeros = 0;
  let curSum = 0;
  let total = 0;

  for (let end = 0; end < nums.length; end++) {
    curSum += nums[end];
    
    while (start < end && (nums[start] === 0 || curSum > goal)) {
      if (nums[start] === 1) {
        prefixZeros = 0;
      } else {
        prefixZeros++;
      }
      
      curSum -= nums[start];
      start++;
    }
    
    if (curSum === goal) {
      total += 1 + prefixZeros;
    }
  }
  
  return total;  
};

// time:  O(n)
// space: O(1)

// [1, 0, 1, 0, 1], 2
// [0, 0, 0, 0, 0], 0