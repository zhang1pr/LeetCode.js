/**
 * Initialize your data structure here.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    this.length++;
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    this.length--;
    let newNode;

    if (this.head !== null) {
      newNode = this.head;
      this.head = this.head.next;
    }

    return newNode;
  }

  peek() {
    return this.head;
  }

  size() {
    return this.length;
  }
}

var MyStack = function() {
  this.queue = new Queue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.enqueue(x);

  let size = this.queue.size();
  while (size > 1) {
    this.queue.enqueue(this.queue.dequeue().val);
    size--;
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue.dequeue().val;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.peek().val;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.size() == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// time:  O(n)
// space: O(1)

// ['MyStack', 'push', 'push', 'top', 'pop', 'empty']
// [[], [1], [2], [], [], []]
// ['MyStack', 'push', 'push', 'pop', 'top']
// [[], [1], [2], [], []]
