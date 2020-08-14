/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  
  function DFS(index) {
    if (index == nums.length - 1) {
      res.push(nums.slice()); 
      return;  
    }  
    
    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] =  [nums[index], nums[i]];
      DFS(index + 1);
      [nums[i], nums[index]] =  [nums[index], nums[i]];
    }  
  }  
  
  DFS(0);
  
  return res;  
};

// time:  O(n!)
// space: O(n^2)

// test cases:
// []
// [1]
// [1, 2]
// [1, 2, 3]
