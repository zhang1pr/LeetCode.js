/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  return Math.ceil(Math.log(buckets) / Math.log(minutesToTest / minutesToDie + 1));
};

// time:  O(1)
// space: O(1)

// 1000, 15, 60
