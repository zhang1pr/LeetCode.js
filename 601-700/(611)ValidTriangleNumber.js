/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = 2; i < nums.length; i++) {
    let j = 0;
    let k = i - 1;

    while (j < k) {
      if (nums[j] + nums[k] > nums[i]) {
        count += k - j;
        k--;
      } else {
        j++;
      }
    }
  }

  return count;
};

// time:  O(n^2)
// space: O(n^2)

// [1, 1, 2]
// [2, 2, 3]
// [2, 2, 3, 4]
// [1, 2, 3, 4, 5, 6]
