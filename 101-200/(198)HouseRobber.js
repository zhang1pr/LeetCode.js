/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let lastPicked = 0;
  let lastNotPicked = 0;
  let temp;

  for (const num of nums) {
    temp = lastPicked;
    lastPicked = Math.max(lastNotPicked + num, lastPicked);
    lastNotPicked = temp;
  }

  return lastPicked;
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [2, 5]
// [2, 1, 0]
// [1, 2, 3, 1]
// [2, 7, 9, 3, 1]
