/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let lastMerged;

  for (const interval of intervals) {
    if (!lastMerged || lastMerged[1] < interval[0]) {
      lastMerged = interval;
    } else {
      lastMerged = result.pop();
      lastMerged[1] = Math.max(lastMerged[1], interval[1]);
    }

    result.push(lastMerged);
  }

  return result;
};

// time:  O(nlog(n))
// space: O(1)

// test cases:
// [[3, 3]]
// [[1, 3], [1, 3]]
// [[1, 3], [5, 7]]
// [[1, 5], [2, 3], [3, 4]]
// [[1, 3], [2, 6], [8, 10]]
// [[7, 9], [5, 7], [1, 3], [3, 5]]
