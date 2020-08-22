/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  const bucket = [];
  const result = [];
  
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  for (const [num, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
    
    if (result.length === k) {
      break;
    }
  }

  return result;
};

// time:  O(n)
// space: O(n)

// [1], 1
// [1, 1] 1
// [1, 2] 2
// [1, 1, 1, 2, 2, 3], 2
