/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  if (nums.length < 3) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let res = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];

      if (sum < target) {
        res += end - start;
      }

      if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(log(n))

// [0], 1
// [1, 1], 0
// [0, 0, 1], 0
// [1, 2, 3], 6
// [3, 1, 0, 2], 4
// [-2, 0, 1, 3], 2
// [1, 1, 1, 1, 1], 4
