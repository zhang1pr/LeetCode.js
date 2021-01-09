/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.arr = [];
  this.size = 0;
  this.maxSize = k;
  this.front = 0;
  this.rear = -1;
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.size >= this.maxSize) {
    return false;
  };

  this.rear++;
  this.rear = (this.rear) % this.maxSize;
  this.arr[this.rear] = value;
  this.size++;

  return true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.size == 0) {
    return false;
  };

  this.front++;
  this.front = (this.front) % this.maxSize;
  this.size--;

  return true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.size == 0 ? -1 : this.arr[this.front];
};

// time:  O(1)
// space: O(1)

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.size == 0 ? -1 : this.arr[this.rear];
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.size == 0;
};

// time:  O(1)
// space: O(1)

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.size == this.maxSize;
};

// time:  O(1)
// space: O(1)

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// ['MyCircularQueue', 'enQueue', 'enQueue', 'enQueue', 'enQueue', 'Rear', 'isFull', 'deQueue', 'enQueue', 'Rear'], [[3], [1], [2], [3], [4], [], [], [], [4], []]
