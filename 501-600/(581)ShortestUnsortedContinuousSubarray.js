/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  let end = -1;
  let start = 0;
  let min = Infinity;
  let max = -Infinity;

  while(r >= 0) {
    if (nums[l] >= max) {
      max = nums[l];
    } else {
      end = l;
    }

    if (nums[r] <= min) {
      min = nums[r];
    } else {
      start = r;
    }

    l++;
    r--;
  }

  return end - start + 1;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 1]
// [2, 1]
// [1, 2, 3, 4]
// [2, 6, 4, 8, 10, 9, 15]
