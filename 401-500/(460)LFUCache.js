class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.freq = 0;
  }
}

class DoublyLinkedList {
  constructor(freq) {
    this.freq = freq;
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  isEmpty() {
    return this.head.next == this.tail;
  }

  append(node) {
    const temp = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = temp;
    temp.prev = node;
  }

  delete(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.tail.prev;
    this.delete(node);

    return node;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.minFreq = 0;
  this.keyMap = new Map();

  this.freqMap = new Map();
  this.freqMap.set(0, new DoublyLinkedList(0));

  this.update = function(node) {
    const freq = node.freq;
    this.freqMap.get(freq).delete(node);
    node.freq++;

    if (!this.freqMap.has(node.freq)) {
      this.freqMap.set(node.freq, new DoublyLinkedList(node.freq));
    }

    this.freqMap.get(node.freq).append(node);

    while (this.freqMap.get(this.minFreq).isEmpty()) {
      this.minFreq++;
    }

    return node.val;
  }
};

// time:  O(1)
// space: O(1)

/**
* @param {number} key
* @return {number}
*/
LFUCache.prototype.get = function(key) {
  if (!this.keyMap.has(key)) {
    return -1;
  }

  return this.update(this.keyMap.get(key));
};

// time:  O(1)
// space: O(1)

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LFUCache.prototype.put = function(key, value) {
  if (this.capacity == 0) {
    return;
  }

  if (this.keyMap.has(key)) {
    const node = this.keyMap.get(key);
    node.val = value;
    this.update(node);
    return;
  }

  if (this.size >= this.capacity) {
    const old = this.freqMap.get(this.minFreq).pop();
    this.keyMap.delete(old.key);
    this.size--;
  }

  const node = new ListNode(key, value);
  this.freqMap.get(0).append(node);
  this.keyMap.set(key, node);
  this.minFreq = 0;
  this.size++;
};

// time:  O(1)
// space: O(1)

/**
* Your LFUCache object will be instantiated and called as such:
* var obj = new LFUCache(capacity)
* var param_1 = obj.get(key)
* obj.set(key,value)
*/

// ['LFUCache', 'put', 'put', 'get', 'put', 'get', 'get', 'put', 'get', 'get', 'get'], [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
