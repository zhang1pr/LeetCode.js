/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid; 
  while (start < end) {
    mid = start + ((end - start) >>> 1);
    
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [0, -1]
// [1, 2, 0]
// [1, 2, 3]
// [3, 4, 5, 1, 2]
// [4, 5, 6, 7, 0, 1, 2]
