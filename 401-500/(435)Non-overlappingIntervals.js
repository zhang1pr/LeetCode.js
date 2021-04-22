/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length <= 1) {
    return 0;
  }

  intervals.sort((a, b) => a.end - b.end);
  let end = intervals[0].end;
  let cnt = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start >= end) {
      end = intervals[i].end;
      cnt++;
    }
  }

  return intervals.length - cnt;
};

// time:  O(nlog(n))
// space: O(n)

// [[1, 2]]
// [[1, 2], [2, 3]]
// [[1, 2], [1, 2], [1, 2]]
// [[1, 2], [2, 3], [3, 4], [1, 3]]
