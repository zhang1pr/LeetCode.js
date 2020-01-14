/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = 0;

  for (const num of nums) {
    if (num > nums[length]) {
      length++;
      nums[length] = num;
    }
  }

  return length + 1;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1]
// [1, 2]
// [1, 1, 1]
// [1, 2, 3, 4], 2
// [-1, -1, 0, 1, 1, 1, 2, 2, 5]
