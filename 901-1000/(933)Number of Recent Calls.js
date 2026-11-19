var RecentCounter = function() {
  this.start = 0;
  this.end = 0;
  this.records = [];
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  while (this.start < this.end && (t - this.records[this.start] > 3000)) {
    this.start++;
  }

  this.records[this.end] = t;
  this.end++;

  return this.end - this.start;
};

// time:  O(n)
// space: O(1)

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// ['RecentCounter', 'ping', 'ping', 'ping', 'ping'], [[], [1], [100], [3001], [3002]]