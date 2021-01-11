/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of nums) {
    if (num > max1) {
      [max1, max2, max3] = [num, max1, max2];
    } else if (num > max2) {
      [max2, max3] = [num, max2];
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      [min2, min1] = [min1, num];
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

// time:  O(n)
// space: O(n)

// [1, 2, 3]
// [-1, -2, -3]
// [1, 2, 3, 4]
