/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] % 2 == 0) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
    }
  }

  return nums;  
};

// time:  O(n)
// space: O(1)

// [0]
// [3, 1, 2, 4]