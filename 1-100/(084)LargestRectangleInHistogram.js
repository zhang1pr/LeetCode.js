/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = [-1];
  heights.push(0);

  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];

    while (heights[stack[stack.length - 1]] > h) {
      const cur = stack.pop();
      const right = i;
      const left = stack[stack.length - 1];
      max = Math.max((right - left - 1) * heights[cur], max);
    }

    stack.push(i);
  }

  return max;
};

// time:  O(n)
// space: O(n)

// []
// [1]
// [1, 2]
// [1, 0, 2]
// [2, 1, 5, 6, 2, 3]
