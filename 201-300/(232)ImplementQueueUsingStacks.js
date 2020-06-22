/**
 * Initialize your data structure here.
 */
class StackNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
  
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  empty() {
    return !this.head;
  }

  peek() {
    if (!this.head) {
    return null;
    }

    return this.head.val;
  }

  push(val) {
    const newNode = new StackNode(val, this.head);

    if (!this.tail) {
    this.tail = newNode;
    this.head = newNode;
    } else {
    this.head = newNode;
    }

    return this;
  }

  pop() {
    if (!this.head) {
    return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
    this.head = this.head.next;
    } else {
    this.head = null;
    this.tail = null;
    }

    return deletedHead.val;
  }
}

var MyQueue = function() {
  this.input = new Stack();
  this.output = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.peek();
  return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.output.empty())
  while (!this.input.empty()) {
    this.output.push(this.input.pop());
  }

  return this.output.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.input.empty() && this.output.empty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// ['MyQueue', 'push', 'push', 'pop', 'peek']
// [[], [1], [2], [], []]
// ['MyQueue', 'push', 'push', 'peek', 'pop', 'empty']
// [[], [1], [2], [], [], []]
