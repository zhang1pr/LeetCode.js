/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i+1]) {
      increasing = false;
    }

    if (nums[i] < nums[i+1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
};

// time:  O(n)
// space: O(1)

// [1, 1, 1]
// [1, 3, 2]
// [1, 2, 2, 3]
// [1, 2, 4, 5]
// [6, 5, 4, 4]
