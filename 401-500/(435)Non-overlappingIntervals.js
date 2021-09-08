/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  let remove = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      remove++;
    } else {
      prev = intervals[i];
    }
  }

  return remove;
};

// time:  O(nlog(n))
// space: O(n)

// [[1, 2]]
// [[1, 2], [2, 3]]
// [[1, 2], [1, 2], [1, 2]]
// [[1, 2], [2, 3], [3, 4], [1, 3]]
