/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.map = new Map();
};

// time:  O(1)
// space: O(1)

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  if (this.map.has(number)) {
    this.map.set(number, this.map.get(number) + 1);
  } else {
    this.map.set(number, 1);
  }
};

// time:  O(1)
// space: O(1)

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (const key of this.map.keys()) {
    const diff = value - key;
    const cnt = this.map.get(diff);

    if (diff == key) {
      if (cnt > 1) {
        return true;
      }
    } else {
      if (cnt > 0) {
        return true;
      }
    }
  }

  return false;
};

// time:  O(n)
// space: O(n)

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

// ['TwoSum', 'add, 'add', 'add', 'find', 'find'], [[], [0], [0], [1], [0], [1]]
// ['TwoSum', 'add, 'add', 'add', 'find', 'find'], [[], [1], [3], [5], [4], [7]]
// ['TwoSum', 'add, 'add', 'add', 'find', 'find'], [[], [3], [1], [2], [3], [6]]
