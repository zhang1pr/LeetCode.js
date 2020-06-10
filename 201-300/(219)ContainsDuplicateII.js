/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
    
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
      
    if (map.has(num)) {
      const index = map.get(num);
        
      if (i - index > k) {
        map.set(num, i);
      } else {
        return true;
      }
    } else {
      map.set(num, i);  
    }
  }
    
  return false;
};

// time:  O(n)
// space: O(n)

// test cases:
// [], 0
// [1], 0
// [1, 1], 0
// [1, 1], 1
// [1, 3], 0
// [1, 0, 1, 1], 1
// [1, 2, 3, 1], 3
// [1, 2, 3, 1, 2, 3], 2
