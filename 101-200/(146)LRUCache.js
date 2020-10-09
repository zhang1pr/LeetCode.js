/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  const v = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, v);

  return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.cache.delete(key);
  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// time:  O(1)
// space: O(1)

// ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get']
// [[1], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]
// ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get']
// [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]
// ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get']
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get']
// [[4], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
