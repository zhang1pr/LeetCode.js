/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const states = Math.floor(minutesToTest/minutesToDie) + 1;
  return Math.ceil(Math.log2(buckets) / Math.log2(states));
};

// time:  O(1)
// space: O(1)

// 125, 1, 4
// 1000, 15, 60