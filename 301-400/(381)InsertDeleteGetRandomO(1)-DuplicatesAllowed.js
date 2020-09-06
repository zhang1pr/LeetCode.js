/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.nums = [];
  this.map = new Map();
};

// time:  O(1)
// space: O(1)

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  const has = this.map.has(val);

  if (!has) {
    this.map.set(val, new Set());
  }

  this.map.get(val).add(this.nums.length);
  this.nums.push(val);
  return !has;
};

// time:  O(1)
// space: O(1)

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false;
  }

  const index = this.map.get(val).values().next().value;
  this.map.get(val).delete(index);

  if (index < this.nums.length - 1) {
    const last = this.nums[this.nums.length - 1];
    this.nums[index] = last;
    this.map.get(last).delete(this.nums.length - 1);
    this.map.get(last).add(index);
  }

  this.nums.pop();

  if (this.map.get(val).size == 0) {
    this.map.delete(val);
  }

  return true;
};

// time:  O(1)
// space: O(1)

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

// time:  O(1)
// space: O(1)

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// ['RandomizedCollection', 'insert', 'insert', 'insert', 'getRandom', 'remove', 'getRandom'], [[], [1], [1], [2], [], [1], []]
