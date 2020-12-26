/**
 * Initialize your data structure here.
 */
class ListNode {
  constructor(num) {
    this.num = num;
    this.vals = new Set();
    this.prev = this.next = null;
  }
}

var AllOne = function() {
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.hash = {};
};

// time:  O(1)
// space: O(1)

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (!key || this.hash[key] == null) {
    const nextNode = this.head.next;
    if (nextNode.num == 1) {
      nextNode.vals.add(key);
      this.hash[key] = nextNode;
    } else {
      const node = new ListNode(1);
      node.vals.add(key);
      this.hash[key] = node;

      node.next = nextNode;
      nextNode.prev = node;
      this.head.next = node;
      node.prev = this.head;
    }
  } else {
    const currNode = this.hash[key];
    currNode.vals.delete(key);
    const nextNum = currNode.num + 1;
    const nextNode = currNode.next;
    if (nextNode.num != nextNum) {
      const node = new ListNode(nextNum);
      node.next = nextNode;
      nextNode.prev = node;
      currNode.next = node;
      node.prev = currNode;
    }

    this.hash[key] = currNode.next;
    currNode.next.vals.add(key);

    if (!currNode.vals.size) {
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
    }
  }
};

// time:  O(1)
// space: O(1)

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (!key || this.hash[key] == null) {
    return;
  } else {
    const currNode = this.hash[key];
    currNode.vals.delete(key);
    const prevNum = currNode.num - 1;
    const prevNode = currNode.prev;
    if (prevNum && prevNode.num != prevNum) {
    const node = new ListNode(prevNum);
    prevNode.next = node;
    node.prev = prevNode;
    node.next = currNode;
    currNode.prev = node;;
    }

    if (prevNum) {
      currNode.prev.vals.add(key);
    }

    this.hash[key] = currNode.prev;
    if (!prevNum) {
      delete(this.hash[key]);
    }

    if (!currNode.vals.size) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
    }
  }
};

// time:  O(1)
// space: O(1)

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  const node = this.tail.prev;
  if (node == this.head) {
    return '';
  }

  for (const v of node.vals) {
    return v;
  }

  return '';
};

// time:  O(1)
// space: O(1)

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  const node = this.head.next;
  if (node == this.tail) {
    return '';
  }

  for (const v of node.vals) {
    return v;
  }

  return '';
};

// time:  O(1)
// space: O(1)

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

// ['AllOne', 'getMaxKey', 'getMinKey'], [[], [], []]
