/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
  this.map = new Map();
};

/**
* Add the number to an internal data structure.
* @param {number} number
* @returns {void}
*/
TwoSum.prototype.add = function(number) {
  if (this.map.has(number)) {
    this.map.set(number, this.map.get(number) + 1);
  } else {
    this.map.set(number, 1);
  }
};

/**
* Find if there exists any pair of numbers which sum is equal to the value.
* @param {number} value
* @returns {boolean}
*/
TwoSum.prototype.find = function(value) {
  for (const key of this.map.keys()) {
    const diff = value - key;
    const count = this.map.get(diff);

    if (diff == key) {
      if (count > 1) {
        return true;
      }
    } else {
      if (count > 0) {
        return true;
      }
    }
  }

  return false;
};

/**
* Your TwoSum object will be instantiated and called as such:
* var twoSum = new TwoSum();
* twoSum.add(number);
* twoSum.find(value);
*/

// time:  O(n)
// space: O(n)

// test cases:
// ['TwoSum', 'add, 'add', 'add', 'find', 'find'], [[], [0], [0], [1], [0], [1]]
// ['TwoSum', 'add, 'add', 'add', 'find', 'find'], [[], [1], [3], [5], [4], [7]]
// ['TwoSum', 'add, 'add', 'add', 'find', 'find'], [[], [3], [1], [2], [3], [6]]
