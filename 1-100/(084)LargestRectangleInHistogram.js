/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (heights.length == 0) {
    return 0;
  }

  heights.push(0);

  const stack = [-1];
  let max = 0;
  let top;
  let temp;

  for (let i = 0; i < heights.length; i++) {
    top = stack[stack.length - 1];

    while (top != -1 && heights[top] >= heights[i]) {
      temp = stack.pop();
      top = stack[stack.length - 1];
      max = Math.max(max, (i - top - 1) * heights[temp]);
    }

    stack.push(i);
  }

  return max;
};

// time:  O(n)
// space: O(n)

// test cases:
// []
// [1]
// [1, 2]
// [1, 0, 2]
// [2, 1, 5, 6, 2, 3]
