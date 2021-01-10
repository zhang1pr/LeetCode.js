/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const start = [];
  const end = [];

  for (const interval of intervals) {
    start.push(interval[0]);
    end.push(interval[1]);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let res = 0;

  while (i < intervals.length) {
    if (start[i] >= end[j]) {
      res--;
      j++;
    }

    res++;
    i++;
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
