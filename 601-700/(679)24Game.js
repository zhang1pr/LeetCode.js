/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  if (nums.length == 0) {
    return false;
  }

  if (nums.length == 1) {
    return 24 - nums[0] < 1e-6;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        const nums2 = [];

        for (let k = 0; k < nums.length; k++) {
          if (k != i && k != j) {
            nums2.push(nums[k]);
          }
        }

        for (let k = 0; k < 4; k++) {
          if (k < 2 && j > i) {
            continue;
          }

          if (k == 0) {
            nums2.push(nums[i] + nums[j]);
          }

          if (k == 1) {
            nums2.push(nums[i] * nums[j]);
          }

          if (k == 2) {
            nums2.push(nums[i] - nums[j]);
          }

          if (k == 3) {
            if (nums[j] != 0) {
              nums2.push(nums[i] / nums[j]);
            } else {
              continue;
            }
          }

          if (judgePoint24(nums2)) {
            return true;
          }

          nums2.pop();
        }
      }
    }
  }

  return false;
};

// time:  O(1)
// space: O(1)

// [1, 1, 1, 1]
// [1, 2, 1, 2]
// [2, 2, 2, 2]
// [2, 2, 3, 3]
// [2, 3, 4, 5]
// [3, 3, 8, 8]
// [4, 1, 8, 7]
// [5, 5, 6, 6]
