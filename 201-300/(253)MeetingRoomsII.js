/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
  const start = [];
  const end = [];

  for (const interval of intervals) {
    start.push(interval[0]);
    start.push(interval[1]);
  }

  const compare = (a, b) => a - b;
  start.sort(compare);
  end.sort(compare);

  let i = 0; 
  let j = 0;
  let res = 0;
  let room = 0;

  while (i < n) {
    if (start[i] < end[j]) {
      room++;
      i++
    } else {
      room--;
      j++;
    }

    res = Math.max(res, room); 
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
