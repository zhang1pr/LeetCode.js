/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let notFlippedState = 0;
  let flippedState = 0;
  let max = 0;

  for (const num of nums) {
    if (num == 0) {
      flippedState = notFlippedState + 1;
      notFlippedState = 0;
    } else {
      notFlippedState++;
      flippedState++;
    }

    max = Math.max(flippedState, max);
  }

  return max;
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [1, 1]
// [0, 0]
// [1, 0, 1]
// [1, 0, 0, 1]
// [1, 0, 1, 1, 0]
