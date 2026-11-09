/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let res = nums.slice();
  let even = 0, odd = 1;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res[even] = nums[i];
      even += 2;
    } else {
      res[odd] = nums[i];
      odd += 2;
    }
  }
  
  return res;
};

// time:  O(n)
// space: O(n)

// [2, 3]
// [4, 2, 5, 7]
