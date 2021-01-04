/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
  this.string = compressedString;
  this.i = 0;
  this.count = 0;
};

// time:  O(1)
// space: O(1)

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
  if (this.count == 0) {
    if (this.i >= this.string.length) {
      return ' ';
    }

    this.cur = this.string[this.i];
    this.i++;

    while (this.i < this.string.length && this.string[this.i] >= '0' && this.string[this.i] <= '9') {
      this.count = 10 * this.count + Number(this.string[this.i]);
      this.i++;
    }
  }

  this.count--;
  return this.cur;
};

// time:  O(n)
// space: O(1)

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  return this.i < this.string.length || this.count != 0;
};

// time:  O(1)
// space: O(1)

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_2 = obj.hasNext()
 */

// ['StringIterator', 'next', 'next', 'next', 'next', 'next', 'next', 'hasNext', 'next', 'hasNext'], [['L1e2t1C1o1d1e1'], [], [], [], [], [], [], [], [], []]
