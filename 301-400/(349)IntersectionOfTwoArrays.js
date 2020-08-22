/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set(nums1);
  const res = new Set();
  for (const num of nums2) {
    if (set.has(num)) {
      res.add(num);        
    }  
  }
   
  return [...res];  
};

// time:  O(n)
// space: O(n)

// [1], [1]
// [1], [2]
// [1, 2, 2, 1], [2, 2]
// [4, 9, 5], [9, 4, 9, 8, 4]
