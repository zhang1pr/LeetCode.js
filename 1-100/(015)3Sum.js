/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  for (const [index, number] of nums.entries()) {
    if (number > 0) {
      return result;
    }

    if (number == nums[index-1]) {
      continue;
    }

    left = index + 1;
    right = nums.length - 1;
    let temp;
    while (left < right) {
      temp = number + nums[left] + nums[right];

      if (temp == 0) {
        result.push([number, nums[left], nums[right]])
        left++;
        right--;

        while (left < right && nums[left] == nums[left-1]) {
          left++;
        }

        while (left < right && nums[right] == nums[right+1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

// time:  O(n^2)
// space: O(n)

// test cases:
// []
// [1, -1]
// [0, 0, 0, 0]
// [-1, 0, 1, 2, -1, -4]
