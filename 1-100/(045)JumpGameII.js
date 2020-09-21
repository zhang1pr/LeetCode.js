/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let jump = 0;
  let maxPosition = 0;
  let targetPosition = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    targetPosition = Math.max(targetPosition, i + nums[i]);

    if (i == maxPosition) {
      jump++;
      maxPosition = targetPosition;
    }
  }

  return jump;
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [3, 3]
// [3, 2, 1]
// [2, 3, 1, 1, 4]
