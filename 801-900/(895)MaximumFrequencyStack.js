var FreqStack = function() {
  this.freq = new Map();
  this.group = new Map();
  this.maxfreq = 0;
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  const f = (this.freq.get(val) || 0) + 1;
  this.freq.set(val, f);

  if (f > this.maxfreq) {
    this.maxfreq = f;
  }

  if (!this.group.has(f)) {
    this.group.set(f, []);
  };

  this.group.get(f).push(val);
};

// time:  O(1)
// space: O(1)

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const val = this.group.get(this.maxfreq).pop();

  this.freq.set(val, this.freq.get(val) - 1);

  if (this.group.get(this.maxfreq).length == 0) {
    this.maxfreq--;
  }

  return val;
};

// time:  O(1)
// space: O(1)

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

// ['FreqStack', 'push', 'push', 'push', 'push', 'push', 'push', 'pop', 'pop', 'pop', 'pop'], [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
