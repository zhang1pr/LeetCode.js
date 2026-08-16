class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyQueue {
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
  this.MyQueue = new MyQueue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.MyQueue.enqueue(x);

  let size = this.MyQueue.size();
  while (size > 1) {
    this.MyQueue.enqueue(this.MyQueue.dequeue().val);
    size--;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.MyQueue.dequeue().val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.MyQueue.peek().val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.MyQueue.size() == 0;
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
