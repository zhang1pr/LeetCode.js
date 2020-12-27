/**
 * @param {number[][]} points
 * @return {number[][]}
 */
var outerTrees = function(points) {
  points.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

  const stack = [];
  for (let i = 0; i < points.length; i++) {
    while (stack.length >= 2 && comparator(stack[stack.length - 2], stack[stack.length - 1], points[i]) > 0) {
      stack.pop();
    }

    stack.push(points[i])
  }

  stack.pop();

  for (let i = points.length - 1; i >= 0; i--) {
    while (stack.length >= 2 && comparator(stack[stack.length - 2], stack[stack.length - 1], points[i]) > 0) {
      stack.pop();
    }

    stack.push(points[i])
  }

  return [...new Set(stack)];
};

var comparator = function(p1, p2, p3) {
  return (p2[1] - p1[1]) * (p3[0] - p2[0]) - (p2[0] - p1[0]) * (p3[1] - p2[1]);
};

// time:  O(nlog(n))
// space: O(n)

// [[1, 2], [2, 2], [4, 2]]
// [[1, 1], [2, 2], [2, 0], [2, 4], [3, 3], [4, 2]]
