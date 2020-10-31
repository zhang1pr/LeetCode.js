/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a,b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1].end > intervals[i].start) {
      return false;
    }
  }

  return true;
};

// time:  O(nlog(n))
// space: O(n)

// [[0, 1]]
// [[2, 3], [0, 2]]
// [[7, 10], [2, 4]]
// [[0, 30], [5, 10], [15, 20]]
