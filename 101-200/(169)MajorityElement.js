/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  const half = nums.length / 2;
  const map = new Map();
  let count;

  for (const num of nums) {
    if (map.has(num)) {
      count = map.get(num) + 1;

      if (count >= half) {
        return num;
      } else {
        map.set(num, count);
      }
    } else {
      map.set(num, 1);
    }
  }
};

// time:  O(n)
// space: O(1)

// [1]
// [3, 2, 3]
// [2, 2, 1, 1, 1, 2, 2]
