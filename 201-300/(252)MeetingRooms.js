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

// time:  O(log(n))
// space: O(1)

// [[0, 1]]
// [[2, 3], [0, 2]]
// [[0, 30],[5, 10],[15, 20]]
