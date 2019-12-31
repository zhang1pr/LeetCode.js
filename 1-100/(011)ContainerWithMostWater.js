/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    if (leftHeight > rightHeight) {
      max = Math.max(max, rightHeight * (right - left));
      right--;
    } else {
      max = Math.max(max, leftHeight * (right - left));
      left++;
    }
  }

  return max;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// [1, 1]
// [3, 2, 1, 6, 6, 6]

