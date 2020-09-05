/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.nums = [];
  this.map = new Map();
};

// time:  O(1)
// space: O(1)

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) {
    return false;
  }

  this.map.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

// time:  O(1)
// space: O(1)

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false;
  }

  const index = this.map.get(val);
  if (index < this.nums.length - 1) {
    const last = this.nums[this.nums.length - 1];
    this.nums[index] = last;
    this.map.set(last, index);
  }

  this.map.delete(val);
  this.nums.pop();
  return true;
};

// time:  O(1)
// space: O(1)

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

// time:  O(1)
// space: O(1)

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// ['RandomizedSet', 'insert', 'remove', 'insert', 'getRandom', 'remove', 'insert', 'getRandom'], [[], [1], [2], [2], [], [1], [2], []]
