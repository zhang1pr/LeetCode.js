/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        result = result + leftMax - height[left];
      }

      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        result = result + rightMax - height[right];
      }

      right--;
    }
  }

  return result;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1]
// [0, 1]
// [1, 0]
// [0, 1, 1]
// [1, 0, 1]
// [1, 1, 0]
// [1, 1, 1]
// [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
