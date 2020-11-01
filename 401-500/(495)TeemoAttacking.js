/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length == 0) {
    return 0;
  }

  let res = 0;
  let start = timeSeries[0];
  let end = timeSeries[0] + duration;

  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] > end) {
      res += end - start;
      start = timeSeries[i];
    }

    end = timeSeries[i] + duration;
  }

  res = res + end - start;

  return res;
};

// time:  O(n)
// space: O(1)

// [], 1
// [1], 0
// [1], 2
// [1, 2], 2
// [1, 4], 2
