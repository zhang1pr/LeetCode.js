/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

  peek() {
    if (!this.head) {
      return null;
    }

    return this.head.val;
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

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let string = '';

  function DFS(root) {
    if (root == null) {
      return;
    }

    if (!string) {
      string += root.val.toString();
    } else {
      string += ',' + root.val.toString();
    }

    DFS(root.left, string);
    DFS(root.right, string);
  };

  DFS(root, string);
  return string;
};

// time:  O(n)
// space: O(n)

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) {
    return null;
  }

  const queue = new Queue();
  for (const val of data.split(',')) {
    queue.enqueue(Number(val));
  }

  function DFS(lower, upper) {
    if (queue.isEmpty()) {
      return null;
    }

    const val = queue.peek();
    if (val < lower || val > upper) {
      return null;
    }

    queue.dequeue();

    const root = new TreeNode(val);
    root.left = DFS(lower, val);
    root.right = DFS(val, upper);
    return root;
  };

  return DFS(-Infinity, Infinity);
};

// time:  O(n)
// space: O(n)

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// [0]
// [1]
// [2, 1]
// [2, 1, 3]
