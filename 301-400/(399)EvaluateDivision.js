/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
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
      this.size = 0;
    }

    isEmpty() {
      return this.size == 0;
    }

    enqueue(val) {
      this.size++;

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
      this.size--;

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

  const graph = new Map();

  function addEdge(f, t, value) {
    if (graph.has(f)) {
      graph.get(f).push([t, value]);
    } else {
      graph.set(f, [[t, value]]);
    }
  }

  for (let i = 0; i < equations.length; i++) {
    const [f, t] = equations[i];
    const value = values[i];

    addEdge(f, t, value);
    addEdge(t, f, 1 / value);
  }


  function findPath(query) {
    const [b, e] = query;

    if (!graph.has(b) || !graph.has(e)) {
      return -1;
    }

    const queue = new Queue().enqueue([b, 1]);
    const visited = new Set();

    while (queue) {
      const [front, product] = queue.dequeue();
      if (front == e) {
        return product;
      }

      visited.add(front);

      for (const [neighbor, value] of graph.get(front)) {
        if (!visited.has(neighbor)) {
          queue.enqueue([neighbor, product * value]);
        }
      }
    }

    return -1;
  }

  return queries.map(q => findPath(q));
};

// time:  O(qn)
// space: O(n)

// [['a', 'b'], ['b', 'c']], [2.0,3.0], [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]
