/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (maxIndex != i && nums[maxIndex] < 2 * nums[i]) {
      return -1;
    }
  }

  return maxIndex;
};

// time:  O(n)
// space: O(1)

// [3, 6, 1, 0]
// [1, 2, 3, 4]
