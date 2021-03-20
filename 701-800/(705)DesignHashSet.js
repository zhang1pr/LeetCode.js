class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.buckets = [];
  this.bucketsLen = 1000;
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const hashCode = key % this.bucketsLen;
  if (this.buckets[hashCode]) {
    let head = this.buckets[hashCode];
    let point = head;
    head = head.next;

    while (head != null) {
      if (head.val == key) {
        return;
      }

      point = head;
      head = head.next;
    }

    point.next = new LinkedListNode(key);
  } else {
    this.buckets[hashCode] = new LinkedListNode(0);
    const head = this.buckets[hashCode];
    head.next = new LinkedListNode(key);
  }
};

// time:  O(n)
// space: O(1)

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const hashCode = key % this.bucketsLen;
  const head = this.buckets[hashCode];

  if (head) {
    let point = head;
    let cur = head.next;

    while (cur != null) {
      if (cur.val == key) {
        point.next = cur.next;
        return;
      }

      point = cur;
      cur = cur.next;
    }
  }
};

// time:  O(n)
// space: O(1)

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const hashCode = key % this.bucketsLen;
  let head = this.buckets[hashCode];

  if (head) {
    head = head.next;

    while (head != null) {
      if (head.val == key) {
        return true;
      }

      head = head.next;
    }
  }

  return false;
};

// time:  O(n)
// space: O(1)

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// ['MyHashSet', 'add', 'add', 'contains', 'contains', 'add', 'contains', 'remove', 'contains'], [[], [1], [2], [1], [3], [2], [2], [2], [2]]
