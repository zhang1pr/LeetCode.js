/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  timePoints = timePoints.map(x => toMinutes(x)).sort((a, b) => a - b);

  const min = 1440 + timePoints[0] - timePoints[timePoints.length - 1];
  for (let i = 1; i < timePoints.length; i++) {
    min = Math.min(min, timePoints[i] - timePoints[i - 1]);
  }

  return min;
};

var toMinutes = function() {
  const [h, m] = str.split(':')
  return h * 60 + m;
};

// time:  O(nlog(n))
// space: O(1)

// ['23:59','00:00']
// ['00:00','23:59','00:00']
