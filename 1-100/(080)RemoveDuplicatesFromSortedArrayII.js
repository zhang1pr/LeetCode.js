/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 1;
  let fast = 2;

  while (fast < nums.length) {
    if (nums[fast] != nums[slow - 1]) {
      slow++;
      nums[slow] = nums[fast];
    }

    fast++;
  }

  return slow + 1;
};

// time:  O(n)
// space: O(1)

// [0]
// [0, 0]
// [0, 1, 1]
// [0, 1, 2]
// [1, 1, 1, 2, 2, 3]
// [0, 0, 1, 1, 1, 1, 2, 3, 3]
