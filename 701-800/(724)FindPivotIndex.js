/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0;
  let lsum = 0;
  for (const num of nums) {
    sum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (lsum == sum - lsum - nums[i]) {
      return i;
    }

    lsum += nums[i];
  }

  return -1;
};

// time:  O(n)
// space: O(1)

// [1, 2, 3]
// [2, 1, -1]
// [1, 7, 3, 6, 5, 6]
