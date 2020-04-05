/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

// time:  O(n^2)
// space: O(1)

// test cases:
// [[0]]
// [[0], [1, -1]]
// [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
