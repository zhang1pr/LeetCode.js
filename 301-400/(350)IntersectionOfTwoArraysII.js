/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map();
  const res = []; 
    
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);  
  }  
    
  for (const num of nums2) {
    if (map.has(num)) {
      const get = map.get(num); 
      res.push(num);  
        
      if (get == 1) {
        map.delete(num);          
      } else {
        map.set(num, get - 1); 
      }  
    }  
  } 
    
  return res;  
};

// time:  O(n)
// space: O(n)

// [1], [1]
// [1], [2]
// [1, 2], [1, 1, 2]
// [1, 2, 2, 1], [2, 2]
// [4, 9, 5], [9, 4, 9, 8, 4]
