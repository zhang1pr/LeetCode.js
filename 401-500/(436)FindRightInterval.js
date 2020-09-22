/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const res = [];
  const end = intervals.length;
  const map = new Map();
  const arr = [];

  for (let i = 0; i < end; i++) {
    const interval = intervals[i];
    map.set(interval[0], index);
    arr.push(interval[0]);
  };

  arr.sort((a, b) => a - b);

  for (let i = 0; i < end; i++) {
    const value = binarySearch(arr, intervals[i][1]);

    if (value == null) {
      res.push(-1);
    } else {
      res.push(map.get(value));
    }
  }

  return res;
};

var binarySearch = function(arr, val) {
  let res;
  let mid;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = (start + end) >>> 1;

    if (arr[mid] == val) {
      res = arr[mid];
      break;
    } else if (arr[mid] > val) {
      res = arr[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
}

// time:  O(nlog(n))
// space: O(n)

// [[1, 2]]
// [[1, 2], [2, 3]]
// [[1, 2], [1, 2], [1, 2]]
// [[1, 2], [2, 3], [3, 4], [1, 3]]
