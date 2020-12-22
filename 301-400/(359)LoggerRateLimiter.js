/**
 * Initialize your data structure here.
 */
var Logger = function() {
  this.map = new Map()
};

// time:  O(n^2)
// space: O(n)

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (!this.map.has(message)) {
    this.map.set(message, timestamp);
    return true;
  }

  if (timestamp - this.m.get(message) >= 10) {
    this.map.set(message, timestamp);
    return true;
  }

  return false;
};

// time:  O(n^2)
// space: O(n)

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

// ['Logger', 'shouldPrintMessage', 'shouldPrintMessage', 'shouldPrintMessage', 'shouldPrintMessage', 'shouldPrintMessage', 'shouldPrintMessage'], [[], [1, 'foo'], [2, 'bar'], [3, 'foo'], [8, 'bar'], [10, 'foo'], [11, 'foo']]
