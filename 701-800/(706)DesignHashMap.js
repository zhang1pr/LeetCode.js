class LinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.size = 1000;
  this.store = [];
};

// time:  O(1)
// space: O(1)

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const hash = key % this.size;

  if (!this.store[hash]) {
    this.store[hash] = new LinkedListNode(key, value);
  }

  let prev;
  let node = this.store[hash];
  while (node) {
    if (node.key == key) {
      node.value = value;
      return;
    }

    prev = node;
    node = node.next;
  }

  prev.next = new LinkedListNode(key, value);
};

// time:  O(n)
// space: O(1)

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const hash = key % this.size;

  if (!this.store[hash]) {
    return -1;
  }

  let node = this.store[hash];
  while (node) {
    if (node.key == key) {
      return node.value;
    }

    node = node.next;
  }

  return -1;
};

// time:  O(n)
// space: O(1)

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const hash = key % this.size;

  if (!this.store[hash]) {
    return;
  }

  let node = this.store[hash];
  if (node.key == key) {
    this.store[hash] = node.next;
    return;
  }

  let prev = node;
  node = node.next;
  while (node) {
    if (node.key == key) {
      prev.next = node.next;
      return;
    }

    prev = node;
    node = node.next;
  }
};

// time:  O(n)
// space: O(1)

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'], [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
