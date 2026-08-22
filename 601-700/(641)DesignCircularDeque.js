/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.arr = Array(k).fill(0);
  this.front = 0;
  this.back = -1;

  this.getIndex = function(i) {
    const len = this.arr.length;
    return (i + len) % len;
  };
};

// time:  O(n)
// space: O(n)

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false;
  }

  this.arr[this.getIndex(this.front)] = value;
  this.front++;
  return true;
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
    return false;
  }

  this.arr[this.getIndex(this.back)] = value;
  this.back--;
  return true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) {
    return false;
  }

  this.front--;
  return true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
    return false;
  }

  this.back++;
  return true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr[this.getIndex(this.front - 1)];
};

// time:  O(1)
// space: O(1)

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
    return -1;
  }

  return this.arr[this.getIndex(this.back + 1)];
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.front == this.back + 1;
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.front - this.back == this.arr.length + 1;
};

// time:  O(1)
// space: O(1)

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

// ['MyCircularDeque', 'insertLast', 'insertLast', 'insertFront', 'insertFront', 'getRear', 'isFull', 'deleteLast', 'insertFront', 'getFront'], [[3], [1], [2], [3], [4], [], [], [], [4], []]
