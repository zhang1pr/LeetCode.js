/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const res = [];

  let i = 0;
  while (i < intervals.length && newInterval[0] > intervals[i][0]) {
    res.push(intervals[i]);
    i++;
  }

  let lastMerged = res[res.length-1];
  if (!lastMerged || lastMerged[1] < newInterval[0]) {
    lastMerged = newInterval;
  } else {
    lastMerged = res.pop();
    lastMerged[1] = Math.max(lastMerged[1], newInterval[1]);
  }
  res.push(lastMerged);

  while (i < intervals.length) {
    if (lastMerged[1] < intervals[i][0]) {
      lastMerged = intervals[i];
    } else {
      lastMerged = res.pop();
      lastMerged[1] = Math.max(lastMerged[1], intervals[i][1]);
    }
    res.push(lastMerged);
    i++;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [[3, 3]], [3, 3]
// [[3, 3]], [1, 2]
// [[3, 3]], [4, 5]
// [[1, 5]], [3, 4]
// [[1, 3], [6, 9]], [2, 5]
// [[1, 5], [2, 3], [3, 4]], [1, 5]
// [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]
