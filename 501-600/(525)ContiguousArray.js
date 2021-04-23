/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = new Map().set(0, -1);
  let cnt = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      cnt--;
    } else {
      cnt++;
    }

    if (map.has(cnt)) {
      max = Math.max(max, i - map.get(cnt));
    } else {
      map.set(cnt, i);
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
