/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points.length) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);

  let cur = points[0][1];
  let res = 1;

  for (let i = 1; i < points.length; i++) {
    if (cur >= points[i][0]) {
      continue;
    }

    res++;
    cur = points[i][1];
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// []
// [[0, 1]]
// [[2, 3], [0, 2]]
// [[7, 10], [2, 4]]
// [[0, 30], [5, 10], [15, 20]]
// [[10, 16], [2, 8], [1, 6], [7, 12]]
