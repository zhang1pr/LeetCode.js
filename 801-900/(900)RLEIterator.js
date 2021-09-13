/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
  this.encoding = encoding;
  this.index = 0;
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
  while (this.index < this.encoding.length && n > this.encoding[this.index]) {
    n -= this.encoding[this.index];
    this.index += 2;
  }

  if (this.index >= this.encoding.length) {
    return -1;
  }

  this.encoding[this.index] -= n;
  return this.encoding[this.index + 1];
};

// time:  O(n)
// space: O(1)

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */

// ['RLEIterator', 'next', 'next', 'next', 'next'], [[[3, 8, 0, 9, 2, 5]], [2], [1], [1], [2]]
