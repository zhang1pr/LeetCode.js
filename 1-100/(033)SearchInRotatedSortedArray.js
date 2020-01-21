/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low == high && nums[low] == target ? low : -1;
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [], 0
// [1], 1
// [4,5,6,7,0,1,2], 0
// [4,5,6,7,0,1,2], 3
// [4,5,6,7], 4
// [4,5,6,7], 7
