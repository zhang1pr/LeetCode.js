/**
 * @param {nums[i][]} nums
 * @param {nums[i]} target
 * @return {nums[i][][]}
 */
var fourSum = function(nums, target) {
  const res = [];
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }

      left = j + 1;
      right = nums.length - 1;
      let temp;
      while (left < right) {
        temp = nums[i] + nums[j] + nums[left] + nums[right];

        if (temp == target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          left++;
          right--;

          while (left < right && nums[left] == nums[left - 1]) {
            left++;
          }

          while (left < right && nums[right] == nums[right + 1]) {
            right--;
          }
        } else if (temp > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return res;
};

// time:  O(n^3)
// space: O(log(n))

// [], 0
// [1, 0, -1], 0
// [0, 0, 0, 0], 0
// [-1, 0, 1, 2, -1, -4], 2
// [1, -2, -5, -4, -3, 3, 3, 5], -11
