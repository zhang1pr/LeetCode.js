/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = new Map().set(0, -1);
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count--;
    } else {
      count++;
    }

    if (map.has(count)) {
      max = Math.max(max, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return max;
};

// time:  O(n)
// space: O(n)

// [0]
// [1]
// [0, 1]
// [1, 0]
// [0, 1, 0]
// [0, 1, 1, 0]
// [1, 1, 1, 0]
