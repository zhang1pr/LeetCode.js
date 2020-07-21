/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  class QueueNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    peek() {
      if (!this.head) {
        return null;
      }
  
      return this.head.val;
    }
  
    enqueue(val) {
      const newNode = new QueueNode(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      return this;
    }
  
    dequeue() {
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
  
  if (!digits) {
    return [];
  }

  const queue = new Queue();
  queue.enqueue('');

  const array = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  for (let i = 0; i < digits.length; i++) {      
    while (queue.peek().length == i) {
      const cur = queue.dequeue();
      
      for (const char of array[digits[i]]) {
        queue.enqueue(cur + char);
      }
    }
  }

  const res = [];
  while (queue.peek()) {
    res.push(queue.dequeue());
  }

  return res;
};

// time:  O(4^n)
// space: O(4^n)

// test cases:
// ''
// '9'
// '23'
// '6789'
