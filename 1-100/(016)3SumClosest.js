/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumClosest = function(nums, target) {
  let result;
  let closest = Infinity;
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  for (const [index, number] of nums.entries()) {
    if (number == nums[index-1]) {
      continue;
    }

    left = index + 1;
    right = nums.length - 1;

    let sum;
    let diff;
    let temp;
    while (left < right) {
      sum = number + nums[left] + nums[right];
      diff = sum - target;
      temp = Math.abs(diff);

      if (temp < closest) {
        if (diff == 0) {
          return sum;
        }

        closest = temp;
        result = sum;
      }

      if (diff > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

// time:  O(n*log(n))
// space: O(n)

// test cases:
// [], 0
// [1, -1], 0
// [1, 1, 1, 1], -1
// [0, 2, 1, -3], 1
// [1, 1, -1, -1, 3], -1
