/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const n = nums.length;
  if (n == 0) {
    return [];
  }

  let start = nums[0];
  let end = nums[0];
  const result = [];
  
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] + 1 != nums[i + 1]) {
      end = nums[i];
      
      if (start != end) {
        result.push(start.toString() + '->' + end.toString());
      } else {
        result.push(start.toString());
      }

      start = nums[i + 1];
    }
  }

  end = nums[n - 1];

  if (start != end) {
    result.push(start.toString() + '->' + end.toString());
  } else {
    result.push(start.toString());
  }
  
  return result;
};

// time:  O(n)
// space: O(n)

// [0]
// [0, 1]
// [0, 2]
// [0, 1, 2, 4, 5, 7]
// [0, 2, 3, 4, 6, 8, 9]
