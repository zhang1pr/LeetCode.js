/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
  intervals.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : b[1] - a[1]);

  const todo = Array(intervals.length).fill(2);
  let res = 0;
  let t = intervals.length - 1;

  while (t >= 0) {
    const s = intervals[t][0];
    const e = intervals[t][1];
    const m = todo[t];

    for (let p = s; p < s + m; p++) {
      for (let i = 0; i <= t; i++) {
        if (todo[i] > 0 && p <= intervals[i][1]) {
          todo[i]--;
        }
      }

      res++;
    }

    t--;
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [[1, 3], [1, 4], [2, 5], [3, 5]]
// [[1, 2], [2, 3], [2, 4], [4, 5]]
