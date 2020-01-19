/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let j = nums.length - 1;
  let i = j - 1;

  while (nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i + 1 > 0) {
    while (nums[j] <= nums[i]) {
      j--;
    }

    swap(nums, i, j);
  }

  for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
    swap(nums, k, nums.length - k + i);
  }
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 2]
// [2, 1]
// [2, 1, 3]
// [3, 2, 1]
// [1, 1, 5]
