/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
  this.times = [];
  this.hits = [];
};

// time:  O(1)
// space: O(1)

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  const idx = timestamp % 300;

  if (this.times[idx] != timestamp) {
    this.times[idx] = timestamp;
    this.hits[idx] = 1;
  } else {
    this.hits[idx]++;
  }
};

// time:  O(1)
// space: O(1)

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  let total = 0;

  for (let i = 0; i < 300; i++) {
    if (timestamp - this.times[i] < 300) {
      total += this.hits[i];
    }
  }

  return total;
};

// time:  O(n)
// space: O(1)

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

// ['HitCounter', 'hit', 'hit', 'hit', 'getHits', 'hits', 'getHits', 'getHits'], [[], [1], [2], [3], [4], [300], [300], [301]]
